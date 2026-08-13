# EVO LAUNCH — Formulario de calificación

Formulario de calificación de una sola página que aparece inmediatamente después del video de venta.
Filtra prospectos con cinco preguntas y recoge cuatro datos de contacto, una pregunta por pantalla.

Todo vive en un único archivo: **`index.html`**. Sin frameworks, sin build, sin dependencias
externas salvo las fuentes de Google Fonts. Se abre haciendo doble clic y funciona.

---

## Uso

**En local:** doble clic sobre `index.html`.

**Publicado:** cualquier hosting estático. Para GitHub Pages basta con que `index.html`
esté en la raíz de la rama publicada.

---

## Panel interno

Añadiendo `?admin=1` a la URL, después del envío aparece un bloque "Uso interno" con el
semáforo asignado, el motivo exacto que lo determinó, la ruta sugerida, la tabla completa
de respuestas y un botón para copiar el resumen en texto plano.

```
https://tu-dominio.com/?admin=1
```

Sin ese parámetro el bloque no se renderiza y el prospecto no ve nada de esto.

La ruta es **sugerida**: el formulario recomienda sobre datos autorreportados, y quien
toma la llamada decide y puede sobrescribirla.

---

## Lógica del semáforo

Se evalúa en orden y se detiene en la primera coincidencia.

**ROJO** — no califica. Cualquiera de estas condiciones:

| Pregunta | Respuesta |
|---|---|
| 1 · Precio de la oferta | Menos de $900 USD |
| 2 · Ventas del último mes | Ninguna todavía |
| 3 · Presupuesto de publicidad | Menos de $1,000 USD |
| 4 · Capacidad de entrega | No |

**AMARILLO** — califica con reservas. Cualquiera de estas condiciones:

| Pregunta | Respuesta |
|---|---|
| 1 · Precio de la oferta | $900 – $1,499 USD |
| 3 · Presupuesto de publicidad | $1,000 – $1,499 USD |
| 4 · Capacidad de entrega | Necesitaría unos 30 días |
| 5 · Decisor | Compartido con socio o pareja / Decide otra persona |

**VERDE** — todo lo demás.

El prospecto nunca ve las palabras "calificado", "verde", "amarillo" ni "rechazado".
**VERDE y AMARILLO muestran exactamente la misma pantalla**; la diferencia solo existe
en el panel interno. ROJO muestra un diagnóstico específico según el motivo que lo activó.

---

## Conectar un webhook

No hay backend. Al enviar, el formulario arma un objeto con todas las respuestas, el
semáforo, el motivo y una marca de tiempo ISO, y lo imprime en la consola.

Para enviarlo a un CRM, Zapier, Make o n8n, completa la constante que está al inicio
del bloque `<script>` en `index.html`:

```js
const WEBHOOK_URL = 'https://tu-endpoint.com/evo-launch';
```

Con la constante completada se hace `POST` con el objeto en JSON
(`Content-Type: application/json`). Si se deja vacía, el envío de red se omite sin
lanzar error y el formulario sigue funcionando igual.

Forma del objeto enviado:

```json
{
  "precio": "$3,000 USD o más",
  "ventas": "Más de 15",
  "presupuesto": "Más de $5,000 USD",
  "capacidad": "Sí, sin problema",
  "decisor": "Solo yo",
  "nombre": "Nombre Apellido",
  "whatsapp": "+52 55 1234 5678",
  "instagram": "@tumarca",
  "email": "nombre@empresa.com",
  "semaforo": "VERDE",
  "motivo": "Sin condiciones de bloqueo ni reservas.",
  "ruta_sugerida": "Ruta sugerida: Tier 2 con Módulo de Cierre. Prioridad alta.",
  "timestamp": "2026-08-13T06:58:42.009Z"
}
```

---

## Notas de implementación

- **Sin almacenamiento.** No se usa `localStorage` ni `sessionStorage`. Todo el estado
  vive en variables de JavaScript en memoria y se pierde al recargar.
- **Teclado completo.** Las teclas `1`–`5` seleccionan opción, `Enter` avanza,
  `Shift`+`Enter` retrocede, las flechas recorren las opciones. El formulario se completa
  de principio a fin sin tocar el ratón.
- **Avance automático** de 350 ms en las preguntas de selección, para alcanzar a ver el
  estado seleccionado. Los campos de texto nunca avanzan solos.
- **Retroceder conserva las respuestas** ya dadas.
- **Accesibilidad:** `role="radiogroup"` con `aria-checked`, `aria-live="polite"` en la
  región que cambia, foco visible siempre y área táctil de 52 px en móvil.
- Se respeta `prefers-reduced-motion: reduce`.
