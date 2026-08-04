const evoData = {
  documento: {
    version: "1.0 — Documento vivo",
    fecha: "Agosto 2026",
    director: "Alvaro Maza",
    direccionComercial: "Ayrton Giambartolomei",
    destinatarios: "Dirección · Equipo de cierre · Setters",
    estado: "Aprobado para salir a mercado y testear",
    reglaCero: "El precio de este documento no se negocia en la llamada. Si el prospecto no puede con el precio, no se baja el precio: se le ofrece un tier menor o se descalifica. Un precio que cambia por conversación destruye la posibilidad de saber qué funciona."
  },
  seccion0: {
    titulo: "0 Cómo usar este documento",
    audiencias: [
      { rol: "Dirección (Alvaro)", leeSiOSi: "Todo. Este documento es la única fuente de verdad sobre precio y alcance.", puedeSaltar: "Nada." },
      { rol: "Dirección comercial (Ayrton)", leeSiOSi: "Todo. Sos quien traduce este documento a la llamada y quien entrena al equipo con él.", puedeSaltar: "Nada." },
      { rol: "Closer", leeSiOSi: "Secciones 1 a 8, 12 y 13. Con eso vendés.", puedeSaltar: "9, 10 y 11 (las opera la dirección)." },
      { rol: "Setter", leeSiOSi: "Secciones 2, 3 y 10 (formulario de cualificación).", puedeSaltar: "El resto." }
    ],
    reglas: [
      "1. El precio es fijo. No hay descuento por simpatía, urgencia ni pena. Las únicas cuatro palancas permitidas están en la Sección 9.",
      "2. Solo se muestra prueba real. Capturas reales de Ads Manager, dashboards reales de clientes reales. Cero material fabricado, cero cuentas de ejemplo presentadas como clientes. Esto no es una preferencia estética: es la diferencia entre un negocio y un problema legal.",
      "3. Se descalifica sin culpa. Un cliente que no cumple los filtros de la Sección 2 no es un cliente difícil: es una pérdida futura de tiempo, dinero y reputación. Descalificar rápido es parte del trabajo."
    ],
    cambios: [
      { punto: "Rango de facturación del ICP", decision: "Deja de ser el filtro principal. El filtro es el ticket y el presupuesto de pauta (Sección 2). La facturación de $5K–$10K/mes es contexto, no requisito." },
      { punto: "¿El cierre está dentro del alcance?", decision: "Sí. Queda derogada la Hard Rule #6 del Master Briefing (\"EVO LAUNCH termina en el Schedule\"). El cierre es un módulo disponible sobre cualquier tier." },
      { punto: "¿Vendemos software o servicio?", decision: "Servicio. El equipo de agentes de IA es cómo lo ejecutamos, no lo que vendemos. En la llamada nunca se lidera con IA." }
    ]
  },
  seccion1: {
    titulo: "1 Qué vendemos",
    frase: "\"Instalamos y operamos la máquina de adquisición completa de expertos que ya venden high ticket: construimos el embudo, compramos el tráfico frío, contactamos al lead en menos de 60 segundos y cerramos la venta. Tu única métrica pasa a ser cuántos clientes nuevos entran a tu programa cada semana.\"",
    reglasDiscurso: [
      { regla: "No lideramos con IA", porque: "El cliente no compra tecnología, compra clientes nuevos. La IA es cómo entregamos velocidad y consistencia; se menciona cuando explica un beneficio concreto (contacto en 60 segundos, análisis de cada llamada), nunca como titular.", noDecir: "\"Tenemos un equipo de agentes de IA que...\"" },
      { regla: "Hablamos de dinero, no de servicios", porque: "Todo entregable se traduce a la aritmética de la Sección 4. Un embudo no vale nada; dos ventas más al mes sí.", noDecir: "\"Te entregamos landing, creativos y gestión de pauta.\"" },
      { regla: "Somos socios operativos, no proveedores", porque: "El fee fijo más porcentaje existe precisamente para que el cliente entienda que ganamos cuando él gana. Es el argumento más fuerte contra la agencia que le falló antes.", noDecir: "\"Nosotros nos encargamos y te mandamos reporte.\"" },
      { regla: "Somos honestos sobre el plazo", porque: "3 meses mínimo para tener data limpia. Prometer resultados en 30 días es cómo se generan los conflictos que ya conocemos.", noDecir: "\"En dos semanas estás facturando el doble.\"" }
    ],
    diferenciador: {
      texto: "No es la IA. Es que somos la única opción del mercado que cubre la cadena completa y responde por el resultado del final de la cadena. Ese es el hueco donde vive el dolor del prospecto:",
      tabla: [
        { eslabon: "Embudo y creativos", agencia: "Sí", mentoria: "Te enseña", freelancer: "A veces", evo: "Sí" },
        { eslabon: "Compra de tráfico frío", agencia: "Sí", mentoria: "No", freelancer: "Sí", evo: "Sí" },
        { eslabon: "Contacto al lead en menos de 60 seg", agencia: "No", mentoria: "No", freelancer: "No", evo: "Sí" },
        { eslabon: "Cierre de la venta", agencia: "No", mentoria: "No", freelancer: "No", evo: "Sí (módulo)" },
        { eslabon: "Dirección y entrenamiento del equipo de ventas", agencia: "No", mentoria: "Parcial", freelancer: "No", evo: "Sí" },
        { eslabon: "Responde por ventas, no por leads", agencia: "No", mentoria: "No", freelancer: "No", evo: "Sí" }
      ]
    },
    argumentoCierre: "Toda agencia que le falló al prospecto le falló en el mismo punto: entregó leads y se lavó las manos del cierre. El prospecto pagó por leads, recibió leads, y no vendió. Nuestra respuesta no es \"nosotros traemos mejores leads\" — eso es lo que le dijeron la vez anterior. Nuestra respuesta es: cobramos sobre la venta, no sobre el lead. Si el lead no se convierte, nosotros tampoco ganamos."
  },
  seccion2: {
    titulo: "2 El cliente ideal (ICP)",
    variablesDuras: [
      { variable: "Ticket de la oferta principal", umbral: "$1,500 USD o más (Tier 1 y Tier 2)", porque: "Es lo que hace que la aritmética de tráfico frío cierre. Ver Sección 4. Entre $900 y $1,499 el cliente entra por Tier 3. Por debajo de $900, no es cliente." },
      { variable: "Presupuesto de pauta mensual", umbral: "El valor de un ticket del cliente, con piso de $1,500 USD/mes", porque: "Regla autoescalable: si su ticket es $3,000, su presupuesto mínimo es $3,000/mes. Debe estar disponible ahora, separado de nuestro fee, y comprometido por 3 meses. No sirve \"lo saco de lo que vaya vendiendo\"." },
      { variable: "Capacidad de entrega", umbral: "Puede atender 3× su volumen actual sin romperse", porque: "Si le metemos diez clientes y él atiende tres, cancela por saturación en el mes dos y encima queda insatisfecho. La pregunta literal: \"si mañana entran diez clientes nuevos, ¿podés atenderlos?\"" }
    ],
    tipos: {
      tipoA: {
        titulo: "TIPO A — EL ORGÁNICO CON TECHO",
        objetivo: "Nuestro objetivo. El 80% del esfuerzo de prospección va acá.",
        caracteristicas: [
          "Vende high ticket ($1,500–$3,000) por contenido, DMs y referidos",
          "Hace 3 a 6 ventas al mes",
          "No paga publicidad, o la paga mal",
          "Cierra él mismo las llamadas y está agotado de vender",
          "Atrapado grabando contenido todos los días para no perder flujo"
        ],
        porqueEsOro: "Por qué es oro: cero trabajo de construcción de oferta, la oferta ya convierte, la prueba social ya existe. El tráfico pagado es 100% incremental. Resultado visible en 30 a 45 días."
      },
      tipoB: {
        titulo: "TIPO B — EL VOLUMEN LOW TICKET",
        objetivo: "No entra en los primeros 5 clientes. Sin excepciones.",
        caracteristicas: [
          "Factura $5K–$10K vendiendo productos de $47 a $297",
          "Ya paga publicidad y sabe que el margen no le da",
          "No tiene oferta high ticket, o tiene una sin validar",
          "Suele tener audiencia y lista de correos grandes"
        ],
        porqueEsPeligroso: "Por qué es peligroso ahora: hay que construirle el high ticket desde cero, reposicionar la marca y generar testimonios nuevos. Son 90 días antes de la primera venta. Cuando lo tomemos, es setup de $5,000+ y otra promesa, no esta. Hoy: se agradece y se archiva para el trimestre siguiente."
      }
    },
    encontrarTipoA: [
      { fuente: "Meta Ad Library", buscar: "Filtrar por país + palabras del nicho (mentoría, programa, consultoría, formación). Revisar anuncios activos.", senal: "Anuncios activos hace menos de 30 días con poca variación creativa, o directamente cero anuncios pese a tener marca activa." },
      { fuente: "Instagram / YouTube", buscar: "Cuentas con posteo constante, testimonios en destacados, y link en bio que lleva a \"agenda tu llamada\" o formulario de aplicación.", senal: "Link a agendamiento + ausencia de anuncios = vende high ticket solo con orgánico. Es exactamente el perfil." },
      { fuente: "Red y referidos", buscar: "Contactos previos, gente del entorno de formaciones de closing, alumnos de programas donde ya estamos.", senal: "Cualquiera que ya venda y se queje del tiempo que le consume vender. Prioridad máxima: convierte mucho mejor que el frío." }
    ],
    ordenProspeccion: "Primero la red caliente, después el frío. Un contacto que ya te conoce convierte varias veces mejor que un DM desde una cuenta desconocida. La lista de contactos de la dirección comercial y los alumnos de la formación de closing son el primer lote. El tráfico frío se enciende cuando ya haya un caso propio que mostrar."
  },
  seccion3: {
    titulo: "3 A quién NO le vendemos",
    descalificadores: [
      { descalificador: "Ticket menor a $900 USD", quePasa: "La aritmética no cierra a ningún precio. Le cobramos, no vende, y el problema no era el servicio: era la matemática.", queSeHace: "Se descalifica. Se puede sugerir que suba su oferta y vuelva." },
      { descalificador: "No tiene oferta validada (cero ventas propias)", quePasa: "Nos convertimos en su departamento de producto. Es otro negocio, con otro precio y otro plazo.", queSeHace: "Se descalifica. No hay tier para esto." },
      { descalificador: "Presupuesto de pauta por debajo del piso, o \"lo saco de lo que venda\"", quePasa: "No hay volumen para aprender. Se quema el mes 1 sin data, y la garantía nos la comemos nosotros.", queSeHace: "Se descalifica. Este es el filtro que más deals mata y no se flexibiliza." },
      { descalificador: "No es quien toma la decisión y no puede traer a quien la toma", quePasa: "Dos llamadas perdidas y un \"lo consulto\" que nunca vuelve.", queSeHace: "Se reagenda con el decisor presente. Si no puede traerlo, se cierra el proceso." },
      { descalificador: "Negocio local físico, o e-commerce de producto físico puro", quePasa: "Otro stack publicitario, otro ciclo de venta, otra lógica de creativos y atribución. No tenemos ventaja ahí.", queSeHace: "Se descalifica y, si aplica, se refiere." },
      { descalificador: "No puede atender más volumen", quePasa: "Le llenamos el calendario, no da abasto, la experiencia de sus clientes cae y nos cancela culpándonos a nosotros.", queSeHace: "Se pospone hasta que resuelva entrega. Se agenda seguimiento a 60 días." },
      { descalificador: "Quiere \"probar un mes\"", quePasa: "Un mes no alcanza ni para salir de la fase de aprendizaje del algoritmo. Cancela justo antes de que empiece a funcionar.", queSeHace: "Se explica el mínimo de 3 meses. Si insiste, se descalifica." },
      { descalificador: "Viene de una agencia con la que terminó en conflicto abierto y no reconoce ninguna responsabilidad propia", quePasa: "Es el mismo conflicto esperando a repetirse con nosotros.", queSeHace: "Se explora con cuidado. Si el relato es 100% culpa ajena, se descalifica." }
    ],
    comoDescalificar: {
      texto: "\"Por lo que me contás, hoy no somos la opción correcta para vos, y prefiero decírtelo ahora que cobrarte y que no funcione. Lo que necesitás primero es [X]. Cuando eso esté resuelto, escribime y lo retomamos.\"",
      nota: "Un prospecto bien descalificado te refiere. Un prospecto mal vendido te destruye la reputación en un nicho donde todos se conocen."
    }
  },
  seccion4: {
    titulo: "4 La aritmética",
    supuestos: {
      a: {
        titulo: "A · La cadena del tráfico frío",
        descripcion: "Referencias reales de tráfico frío en Meta, mercado hispano, oferta high ticket. Se ajustan por vertical, pero sirven como base en cualquier llamada.",
        tabla: [
          { paso: "Costo por agenda (lead que reserva llamada)", ref: 40, rango: "$25 – $70" },
          { paso: "Tasa de asistencia (show rate)", ref: 0.55, rango: "50% – 65%" },
          { paso: "Cierre sobre llamadas efectivas", ref: 0.20, rango: "15% – 25%" },
          { paso: "Costo por venta cerrada", ref: 364, rango: "$190 – $930" }
        ]
      },
      b: {
        titulo: "B · Por qué el ticket lo decide todo",
        tabla: [
          { ticket: 497, costoVenta: 364, roas: 1.4, margen: 133, veredicto: "Inviable. No se toma.", status: "rojo" },
          { ticket: 997, costoVenta: 364, roas: 2.7, margen: 633, veredicto: "Límite. Solo Tier 3.", status: "amarillo" },
          { ticket: 1500, costoVenta: 364, roas: 4.1, margen: 1136, veredicto: "Sano. Piso de Tier 1 y 2.", status: "verde" },
          { ticket: 2000, costoVenta: 364, roas: 5.5, margen: 1636, veredicto: "Muy bueno.", status: "verde" },
          { ticket: 3000, costoVenta: 364, roas: 8.2, margen: 2636, veredicto: "Excelente. Objetivo de prospección.", status: "verde" }
        ]
      },
      c: {
        titulo: "C · Escenario real de mes 3 — Tier 2 con módulo de cierre",
        filas: [
          { concepto: "Presupuesto de pauta al mes", t1500: 1500, t2000: 2000, t3000: 3000, esMenos: false },
          { concepto: "Agendas generadas", t1500: 37, t2000: 50, t3000: 75, esMenos: false },
          { concepto: "Llamadas efectivas (55%)", t1500: 20, t2000: 27, t3000: 41, esMenos: false },
          { concepto: "Ventas cerradas (20%)", t1500: 4, t2000: 5, t3000: 8, esMenos: false },
          { concepto: "Facturación generada", t1500: 6000, t2000: 10000, t3000: 24000, esMenos: false, negrita: true },
          { concepto: "Menos: pauta", t1500: 1500, t2000: 2000, t3000: 3000, esMenos: true },
          { concepto: "Menos: fee EVO LAUNCH", t1500: 2000, t2000: 2000, t3000: 2000, esMenos: true },
          { concepto: "Menos: 20% sobre ventas", t1500: 1200, t2000: 2000, t3000: 4800, esMenos: true },
          { concepto: "Neto para el cliente", t1500: 1300, t2000: 4000, t3000: 14200, esMenos: false, negrita: true },
          { concepto: "Retorno sobre inversión total", t1500: 1.28, t2000: 1.67, t3000: 2.45, esMultiplicador: true },
          { concepto: "Lo que facturamos nosotros", t1500: 3200, t2000: 4000, t3000: 6800, esNuestro: true }
        ],
        notas: [
          "El ticket de $1,500 es el piso, no el objetivo. A ese nivel el cliente gana, pero con poco margen de error: si el costo por agenda sube o el cierre baja, se queda plano. A $3,000 el modelo respira.",
          "Consecuencia directa para la prospección: entre dos prospectos igual de accesibles, siempre se prioriza al de ticket más alto. No es preferencia — es la diferencia entre facturar $3,200 y $6,800 con el mismo trabajo."
        ]
      },
      d: {
        titulo: "D · Cuántas ventas paga el setup",
        tabla: [
          { ticket: 1500, tier1: 2, tier2: 2, frase: "\"Esto se paga con dos clientes tuyos. ¿Cuántos cerraste el mes pasado?\"" },
          { ticket: 2000, tier1: 2, tier2: 2, frase: "\"Dos ventas y ya estás en cero. El resto del año es tuyo.\"" },
          { ticket: 3000, tier1: 1, tier2: 1, frase: "\"Una sola venta cubre la instalación completa.\"" }
        ]
      },
      e: {
        titulo: "E · Qué pasa si el costo por agenda sale peor de lo previsto",
        tabla: [
          { costoAgenda: "$25 (escenario bueno)", costoVenta: 227, roas1500: 6.6, roas3000: 13.2, lectura: "Se escala presupuesto de inmediato." },
          { costoAgenda: "$40 (referencia)", costoVenta: 364, roas1500: 4.1, roas3000: 8.2, lectura: "Escenario base del plan." },
          { costoAgenda: "$55 (nicho competido)", costoVenta: 500, roas1500: 3.0, roas3000: 6.0, lectura: "Sigue siendo rentable. Se optimiza creativo y oferta." },
          { costoAgenda: "$70 (escenario malo)", costoVenta: 636, roas1500: 2.4, roas3000: 4.7, lectura: "Ticket $1,500 queda ajustado; ticket $3,000 aguanta sin problema." }
        ]
      }
    }
  },
  seccion5: {
    titulo: "5 Arquitectura de oferta",
    tiers: [
      {
        nombre: "TIER 1",
        subtitulo: "MOTOR DE AGENDAMIENTO",
        descripcion: "Para el experto que ya cierra bien y solo le falta volumen.",
        precioSetup: 2500,
        precioMensual: 1200,
        porcentaje: 0,
        permanencia: 3,
        instalacion: [
          "Diagnóstico de oferta y definición de ángulos de mercado",
          "Embudo de conversión completo: landing + VSL o funnel de agendamiento",
          "Formulario de cualificación con fricción estratégica",
          "Instalación y auditoría de píxel de Meta, evento Schedule y API de Conversiones",
          "Primer lote de creativos: mínimo 6 piezas sobre 3 ángulos distintos",
          "Estructura de campañas y arranque de pauta"
        ],
        operacion: [
          "Gestión completa de pauta en Meta: creación, optimización y escalado",
          "Producción continua de creativos y copy: mínimo 8 piezas nuevas al mes",
          "Iteración de embudo y landing según la data, no según opinión",
          "Dashboard de atribución en vivo, con acceso permanente del cliente",
          "Reporte semanal con lectura y decisión — no capturas de pantalla"
        ],
        nota: "En el Schedule: la llamada agendada. El cierre lo hace el cliente o su equipo. Por eso no hay porcentaje — no cobramos sobre un resultado que no controlamos. Si el cliente quiere que también cerremos, existe el Módulo de Cierre (página siguiente) o el Tier 2."
      },
      {
        nombre: "TIER 2 · FLAGSHIP",
        subtitulo: "CÉLULA DE ADQUISICIÓN COMPLETA",
        descripcion: "Para el experto agotado de vender que quiere delegar la máquina entera.",
        precioSetup: 3000,
        precioMensual: 1500,
        porcentaje: 15,
        permanencia: 3,
        entregablesExtra: [
          "Setter IA: contacto telefónico automático al lead en menos de 60 segundos desde que se registra. Cualifica, confirma y traspasa al closer con el contexto completo de lo hablado.",
          "CRM de ventas con análisis por IA: de cada llamada extrae objeción raíz, score de probabilidad de cierre, motivo real de la no-venta y grabación enlazada.",
          "Dirección comercial: dos sesiones semanales de capacitación al equipo de ventas, con roleplay sobre las objeciones reales de esa semana.",
          "Base de datos viva de objeciones del nicho, y guiones que se reescriben a partir de ella.",
          "Ajuste de oferta y promesa según lo que dicen las llamadas reales, no según lo que suponemos.",
          "Secuencia de recuperación de no-shows y de seguimientos fríos.",
          "Políticas de venta escritas para el equipo del cliente: qué se promete, qué no, y cómo se maneja cada objeción."
        ],
        definicionVentas: "Ventas que provienen de leads generados por nuestra pauta o cerradas por closers dirigidos por nosotros, netas de reembolsos y contracargos. No incluye ventas orgánicas previas del cliente ni referidos ajenos al sistema.",
        condicionInnegociable: "acceso de solo lectura al procesador de pagos del cliente (Stripe, Hotmart, GHL Payments o el que use). Sin ese acceso no hay porcentaje: pasa a fee fijo. Un porcentaje sobre cifras auto-reportadas se convierte en conflicto en el mes cuatro, siempre."
      }
    ],
    moduloCierre: {
      titulo: "Módulo de Cierre — Equipo de closers EVO LAUNCH",
      descripcion: "Se monta sobre cualquier tier. Es el diferenciador que ninguna agencia de pauta puede copiar, y la razón por la que podemos cobrar sobre la venta.",
      tabla: [
        { sobre: "Tier 1", precio: "+ $500 / mes + 12% sobre ventas cerradas por nuestro equipo", total: "$1,700 / mes + 12%", cuando: "Cuando el cliente quiere volumen pero no tiene con quién cerrar, y no está listo para el Tier 2 completo." },
        { sobre: "Tier 2", precio: "+ $500 / mes + 5% adicional", total: "$2,000 / mes + 20% total", cuando: "Por defecto. Es la configuración que ofrecemos primero en toda llamada de Tier 2." },
        { sobre: "Tier 3", precio: "+ $500 / mes + 12% sobre ventas cerradas", total: "$1,400 / mes + 12%", cuando: "Solo si el cliente ya tiene tráfico funcionando por su cuenta y el cuello de botella es exclusivamente el cierre." }
      ],
      incluye: [
        "Closers asignados, entrenados y certificados internamente: nota mínima 7/10 en cualificación, presentación de servicio, transición y cierre antes de tocar un lead del cliente.",
        "Reemplazo de closer sin costo si el rendimiento no cumple en 30 días.",
        "Dirección del equipo a cargo de la dirección comercial de EVO LAUNCH.",
        "El cliente no recluta, no entrena, no dirige y no paga fijos de vendedores."
      ],
      argumento: "\"Un equipo de closers armado por fuera te cuesta entre 10% y 15% de cada venta, más el tiempo tuyo reclutando, entrenando y dirigiendo, que es donde de verdad se te va la vida. Dentro del paquete completo son cinco puntos y quinientos dólares al mes, y el equipo te llega ya entrenado y dirigido. El equipo se paga solo con las ventas que cierra.\""
    },
    tier3: {
      titulo: "TIER 3",
      subtitulo: "MÓDULOS SUELTOS",
      descripcion: "Puerta de entrada y red de seguridad. Nunca se promociona.",
      precioRango: "$900 – $1,200 USD / mes",
      setupRango: "+ setup de $500 a $800",
      modulos: [
        { nombre: "Trafficker", incluye: "Pauta en Meta, creativos y copy. Sin embudo ni cierre.", setup: 800, mensual: "1,200" },
        { nombre: "Setter IA + CRM", incluye: "Contacto al lead en menos de 60 seg, cualificación y CRM con análisis de llamadas por IA.", setup: 500, mensual: "900" },
        { nombre: "Embudo / VSL", incluye: "Construcción de landing + VSL + formulario. Entrega única, sin operación.", setup: 1200, mensual: "—" },
        { nombre: "Equipo de closers dirigido", incluye: "Closers certificados + dirección comercial. Requiere que el cliente ya tenga tráfico.", setup: 500, mensual: "500 + 12%" }
      ],
      usos: [
        "1. Cliente con ticket entre $900 y $1,499. No califica para Tier 1 ni 2, pero sí podemos ayudarlo con una pieza. Se entrega bien, se genera resultado, y en el mes 3 o 4 se convierte en el upsell natural a Tier 1 o 2.",
        "2. Downsell dentro de la llamada. El prospecto califica pero no puede con la inversión del Tier 2. En vez de bajar el precio del Tier 2 (prohibido), se le baja el alcance.",
        "3. Puerta de entrada de bajo riesgo para el prospecto que viene quemado de una agencia anterior y necesita ver algo funcionando antes de comprometerse a lo grande."
      ],
      regla: "el Tier 3 no aparece en anuncios, ni en la landing, ni en el VSL. Solo existe dentro de la llamada. Si se promociona, canibaliza el Tier 2 y destruye el posicionamiento."
    }
  },
  seccion6: {
    titulo: "6 Hoja de precios",
    tabla: [
      { caracteristica: "Setup (pago único)", t3: "$500 – $1,200", t1: "$2,500", t2: "$3,000" },
      { caracteristica: "Fee mensual", t3: "$900 – $1,200", t1: "$1,200", t2: "$1,500" },
      { caracteristica: "% sobre ventas atribuibles", t3: "No", t1: "No", t2: "15% (desde mes 2)" },
      { caracteristica: "Con Módulo de Cierre", t3: "+$500 + 12%", t1: "+$500 + 12%", t2: "+$500 + 5% = $2,000/mes + 20%" },
      { caracteristica: "Ticket mínimo del cliente", t3: "$900", t1: "$1,500", t2: "$1,500" },
      { caracteristica: "Presupuesto de pauta mínimo", t3: "$1,000 / mes", t1: "1 ticket, piso $1,500 / mes", t2: "1 ticket, piso $1,500 / mes" },
      { caracteristica: "Permanencia mínima", t3: "2 meses", t1: "3 meses", t2: "3 meses" },
      { caracteristica: "Embudo y VSL", t3: "Según módulo", t1: "Sí", t2: "Sí" },
      { caracteristica: "Pauta, creativos y copy", t3: "Según módulo", t1: "Sí", t2: "Sí" },
      { caracteristica: "Setter IA (contacto en 60 seg)", t3: "Módulo", t1: "No", t2: "Sí" },
      { caracteristica: "CRM con análisis de llamadas por IA", t3: "Módulo", t1: "No", t2: "Sí" },
      { caracteristica: "Dirección comercial 2×/semana", t3: "No", t1: "No", t2: "Sí" },
      { caracteristica: "Ajuste de oferta y guiones", t3: "No", t1: "No", t2: "Sí" },
      { caracteristica: "Garantía de agendas (Sección 8)", t3: "No", t1: "Sí", t2: "Sí" },
      { caracteristica: "Facturación nuestra mes 1", t3: "$1,400 – $2,000", t1: "$3,700", t2: "$5,000" },
      { caracteristica: "Facturación nuestra mes 3+ (ticket $2,000)", t3: "$900 – $1,200", t1: "$1,200", t2: "$4,000" }
    ],
    reglas: [
      "El orden de presentación en llamada es: Tier 2 con Módulo de Cierre primero. Siempre. Se baja de ahí solo si el prospecto no puede. Nunca se sube desde abajo.",
      "El setup se cobra por adelantado, completo, antes del día 1 de instalación. Sin excepciones. El setup es lo que separa a un cliente de un curioso.",
      "El porcentaje arranca en el mes 2. El mes 1 es instalación. Cobrar porcentaje sobre ventas que el cliente ya venía haciendo orgánicamente es exactamente donde nacen los conflictos.",
      "Cap operativo: 10 clientes simultáneos. Al llegar a 10 se cierra la entrada y se sube el precio del siguiente lote. La escasez es real, no un truco de llamada."
    ]
  },
  seccion7: {
    titulo: "7 Bonos",
    tabla: [
      { bono: "Setter IA — contacto en menos de 60 segundos", tier: "Tier 2", demostracion: "Se registra un lead de prueba en vivo y suena el teléfono del prospecto mientras siguen hablando.", porque: "Es el momento más impactante de toda la llamada. Speed-to-lead es una métrica que el experto entiende sin explicación. Considerarlo entregable titular, no bono secundario." },
      { bono: "CRM con análisis de llamadas por IA", tier: "Tier 2", demostracion: "Se abre una llamada real y se muestra la objeción raíz detectada, el score de cierre y el motivo de la no-venta.", porque: "Ninguna agencia de pauta entrega esto. Convierte una conversación sobre publicidad en una conversación sobre su departamento de ventas." },
      { bono: "Auditoría de píxel y eventos", tier: "Todos los tiers", demostracion: "Se revisa su píxel en pantalla durante la primera llamada y se le muestran los eventos rotos.", porque: "15 minutos de trabajo nuestro. El 80% lo tiene mal configurado. Es la prueba de competencia técnica más rápida que existe y se entrega antes de que pague." },
      { bono: "Biblioteca de creativos ganadores de su vertical", tier: "Tier 1 y 2", demostracion: "Se le muestran 3 o 4 anuncios activos de su nicho y qué los hace funcionar.", porque: "Costo cero. Refuerza el argumento de que cada cliente nuevo se beneficia del aprendizaje de todos los anteriores." },
      { bono: "Dashboard de atribución en vivo", tier: "Tier 1 y 2", demostracion: "Se abre el dashboard de un cliente real (con datos financieros ocultos) y se muestra la vista que él tendría.", porque: "Es el antídoto directo contra el trauma de la agencia opaca anterior. \"Vas a ver lo mismo que veo yo, cuando quieras.\"" },
      { bono: "Políticas de venta escritas para su equipo", tier: "Tier 2", demostracion: "Se muestra el documento de políticas: qué se promete, qué no, cómo se maneja cada objeción.", porque: "El experto que ya tuvo vendedores sabe lo que cuesta que cada uno venda a su manera. Esto le habla directo." }
    ],
    nuncaBono: "Nada que consuma horas humanas recurrentes nuestras. Ni consultorías mensuales, ni \"sesiones estratégicas ilimitadas\", ni soporte 24/7, ni revisiones sin límite. Con diez clientes simultáneos, un solo bono de ese tipo destruye la operación completa y nos obliga a bajar la calidad de todos. Si un bono no se puede entregar diez veces al mismo tiempo sin costo adicional, no es un bono: es una deuda."
  },
  seccion8: {
    titulo: "8 La garantía",
    textoGarantia: "\"En 60 días generamos [N] llamadas agendadas cualificadas. Si no llegamos a ese número, seguimos trabajando sin cobrar fee mensual hasta llegar.\"",
    notaGarantia: "En Tier 2 con Módulo de Cierre, donde nuestros closers cierran, la garantía puede formularse sobre ventas cerradas en lugar de agendas — porque ahí sí controlamos toda la cadena. Esa versión la autoriza únicamente la dirección, caso por caso.",
    formula: {
      texto: "Agendas garantizadas (60 días) = ( Presupuesto de pauta a 60 días ÷ CPA de garantía ) × 0.65",
      cpaGarantia: "CPA de garantía = CPA de referencia del vertical × 1.4 (colchón de seguridad)"
    },
    tablaReferencia: [
      { vertical: "Negocios, marketing y ventas", cpaRef: 45, cpaGar: 63, ag1500: 30, ag3000: 61 },
      { vertical: "Finanzas e inversión", cpaRef: 52, cpaGar: 73, ag1500: 26, ag3000: 53 },
      { vertical: "Desarrollo personal y mindset", cpaRef: 40, cpaGar: 56, ag1500: 34, ag3000: 69 },
      { vertical: "Salud, fitness y nutrición", cpaRef: 37, cpaGar: 52, ag1500: 37, ag3000: 75 },
      { vertical: "Inmobiliaria", cpaRef: 60, cpaGar: 84, ag1500: 23, ag3000: 46 },
      { vertical: "B2B y consultoría de empresa", cpaRef: 72, cpaGar: 101, ag1500: 19, ag3000: 38 }
    ],
    invalidacion: [
      { condicion: "El cliente no mantiene el presupuesto de pauta comprometido durante los 60 días", motivo: "Sin la inversión sobre la que se calculó el número, el número no existe." },
      { condicion: "El cliente rechaza, retrasa o modifica creativos, embudo u oferta por criterio propio contra nuestra recomendación", motivo: "Si toma el control de las variables, toma también el resultado." },
      { condicion: "La cuenta publicitaria del cliente es restringida o bloqueada por causas ajenas a nosotros", motivo: "Fuera de nuestro control operativo. Se pausa el conteo hasta restablecer." },
      { condicion: "El cliente cambia su oferta, su precio o su promesa durante el período", motivo: "Invalida toda la data acumulada y reinicia la fase de aprendizaje." },
      { condicion: "Demoras del cliente en entregar accesos, material o aprobaciones", motivo: "El plazo de 60 días se cuenta desde que están todos los accesos, no desde la firma." }
    ]
  },
  seccion9: {
    titulo: "9 Política de precio y descuentos",
    regla: "No se descuenta el precio. Nunca. Si cerramos el primer deal a $1,800, ese pasa a ser nuestro precio real para siempre: el cliente lo comenta, el closer lo interioriza, y el ancla queda destruida antes de existir. Descontar con cero clientes en cartera es el error más caro y más difícil de revertir de toda la operación. Cuando el prospecto no puede con el precio, no se baja el precio: se baja el alcance. Para eso existe el Tier 3.",
    palancas: [
      { nombre: "1. Prepago trimestral", funciona: "Setup completo + 3 meses adelantados = 1 mes bonificado. En Tier 2: $3,000 + $4,500 y el mes 4 va sin fee.", cuando: "Cuando el prospecto tiene el capital pero busca sentir que ganó algo.", protege: "El precio de lista queda intacto y nosotros nos llevamos caja por adelantado para operar la pauta." },
      { nombre: "2. Incentivo por decisión en 48 horas", funciona: "Un entregable adicional, no dólares menos: un segundo ángulo de embudo completo, o el CRM incluido en un Tier 1.", cuando: "Al cierre de la segunda llamada, cuando hay interés real pero falta empuje.", protege: "Crea urgencia sin señalar que el precio era negociable." },
      { nombre: "3. Setup reducido a cambio de mayor porcentaje", funciona: "$1,500 de setup + 25% sobre ventas, en lugar de $3,000 + 20%. Solo Tier 2 con Módulo de Cierre.", cuando: "Con el prospecto de ticket alto y presupuesto ajustado que cree de verdad en su oferta.", protege: "Filtra al que no cree en su propio producto y alinea incentivos al máximo. A mediano plazo facturamos más." },
      { nombre: "4. Precio de fundador explícito", funciona: "\"Los primeros 5 clientes entran a $3,000 de setup. Del sexto en adelante son $4,500.\"", cuando: "Desde la primera llamada, como marco. No como cierre de emergencia.", protege: "Es verdad, es verificable, y crea urgencia real sin inventar escasez. Cuando lleguemos a 5, el precio sube de verdad." }
    ],
    empujePrecio: "\"El precio es el precio, y te explico por qué: si te lo bajo a vos, le estoy cobrando de más al que entró la semana pasada. Lo que sí puedo hacer es ajustar el alcance a tu presupuesto de hoy y subirte cuando el sistema esté generando. ¿Querés que veamos esa opción?\"\nEsto convierte la negociación de precio en una conversación de alcance — que es una conversación que ganamos."
  },
  seccion10: {
    titulo: "10 Ruta del prospecto y cualificación",
    ruta: [
      { etapa: "1. Contacto", quePasa: "Red caliente y referidos primero; tráfico frío o prospección en Meta Ad Library después. El ángulo usado se registra (Sección 11).", quien: "Dirección comercial / setter", criterio: "Responde y acepta responder el formulario." },
      { etapa: "2. Formulario de cualificación", quePasa: "Fricción estratégica deliberada. Filtra curiosos sin presupuesto antes de gastar una hora de llamada.", quien: "Automático", criterio: "Semáforo verde o amarillo (ver abajo)." },
      { etapa: "3. Llamada 1 — Diagnóstico", quePasa: "45–60 min. Se captan los dolores, se hace la aritmética en pantalla con SUS números, se muestra quiénes somos y qué hacemos. No se pitchea precio. Se cierra fijando la llamada 2 como \"la llamada de decisión\".", quien: "Closer", criterio: "El prospecto reconoce el número que está dejando en la mesa y acepta la llamada 2 con el decisor presente." },
      { etapa: "4. Propuesta", quePasa: "Documento con diagnóstico, plan, garantía calculada y precio. Se envía una hora antes de la llamada 2, nunca dos días antes.", quien: "Closer", criterio: "Enviada y confirmada la recepción." },
      { etapa: "5. Llamada 2 — Decisión", quePasa: "30–45 min. Se revisa la propuesta, se manejan objeciones (Sección 12) y se cierra. Sí o no, no \"lo pienso\".", quien: "Closer", criterio: "Firma y cobro del setup." },
      { etapa: "6. Onboarding", quePasa: "Accesos, kickoff, calendario de instalación de 14 días. El reloj de la garantía arranca cuando están todos los accesos.", quien: "Dirección", criterio: "—" }
    ],
    formulario: [
      { num: 1, pregunta: "¿Cuál es el precio de tu oferta principal?", opciones: ["menos de $500", "$500–899", "$900–1,499", "$1,500–2,999", "$3,000 o más"], regla: "Menos de $900: rojo. $900–1,499: amarillo, ruta Tier 3. $1,500+: verde.", descalifica: true },
      { num: 2, pregunta: "¿Cuánto facturaste el último mes?", opciones: ["menos de $3K", "$3–5K", "$5–10K", "$10–30K", "más de $30K"], regla: "Contexto, no descalifica. Más de $30K con ticket alto: prioridad máxima." },
      { num: 3, pregunta: "¿Cuántas ventas de tu oferta principal cerraste el último mes?", opciones: ["0", "1–2", "3–6", "7–15", "más de 15"], regla: "0 ventas: rojo. Oferta sin validar, no es nuestro cliente.", descalifica: true },
      { num: 4, pregunta: "¿Quién cierra las ventas hoy?", opciones: ["Yo mismo", "Un closer propio", "Un equipo", "Nadie, se vende por checkout"], regla: "\"Yo mismo\" = Tipo A, el perfil ideal. \"Checkout\" = revisar si realmente es high ticket." },
      { num: 5, pregunta: "¿Cuánto invertiste en publicidad pagada el último mes?", opciones: ["$0", "menos de $500", "$500–1,500", "$1,500–3,000", "más de $3,000"], regla: "$0 con ventas orgánicas sólidas = Tipo A puro. Máxima prioridad." },
      { num: 6, pregunta: "¿Qué presupuesto mensual tenés disponible para publicidad los próximos 3 meses, sin contar el costo del servicio?", opciones: ["menos de $1,000", "$1,000–1,499", "$1,500–2,999", "$3,000–5,000", "más de $5,000"], regla: "Menos de $1,000: rojo. $1,000–1,499: amarillo, solo Tier 3. $1,500+: verde.", descalifica: true },
      { num: 7, pregunta: "Si mañana entraran 10 clientes nuevos, ¿podrías atenderlos con la calidad de hoy?", opciones: ["Sí", "Necesitaría unos 30 días", "No"], regla: "\"No\": rojo, se pospone 60 días. \"30 días\": amarillo, se ajusta el ritmo de escalado.", descalifica: true },
      { num: 8, pregunta: "¿Sos vos quien toma la decisión de inversión?", opciones: ["Sí, solo yo", "La comparto con socio o pareja", "Decide otra persona"], regla: "Si es compartida, la llamada 2 se agenda con el decisor presente. No se pitchea sin él." },
      { num: 9, pregunta: "¿Hace cuánto estás en tu nivel de facturación actual?", opciones: ["menos de 3 meses", "3–6", "6–12", "más de 12"], regla: "Más de 6 meses estancado = dolor maduro. Mejor prospecto que el que recién empieza a notarlo." },
      { num: 10, pregunta: "¿Trabajaste antes con una agencia o freelancer de publicidad? ¿Qué pasó?", opciones: ["Respuesta abierta"], regla: "Si el relato es 100% culpa ajena sin ninguna responsabilidad propia: señal de alerta (Sección 3)." }
    ],
    semaforo: [
      { color: "VERDE", condicion: "Ticket $1,500+ · presupuesto $1,500+/mes · 3 o más ventas el último mes · puede atender más volumen", accion: "Se agenda llamada 1 de inmediato, prioridad alta. Ruta Tier 2 con Módulo de Cierre." },
      { color: "AMARILLO", condicion: "Ticket $900–1,499 · o presupuesto $1,000–1,499 · o decisión compartida · o necesita 30 días de capacidad", accion: "Se agenda llamada 1, pero se prepara ruta Tier 3 y se pide la presencia del decisor." },
      { color: "ROJO", condicion: "Cualquier descalificador de la Sección 3, o cualquier ◆ en rojo", accion: "No se agenda. Respuesta honesta con el motivo y seguimiento a 60 o 90 días." }
    ]
  },
  seccion11: {
    titulo: "11 Qué testeamos al salir al mercado",
    angulos: [
      { nombre: "A · Liberación del fundador", promesa: "Dejá de ser el cuello de botella de tu propio negocio.", gancho: "\"Si mañana dejás de grabar contenido, ¿cuántas ventas hacés la semana que viene?\"", quien: "Tipo A agotado, con audiencia, que vive del orgánico.", hipotesis: "Alta resonancia emocional, pero el prospecto puede no conectarlo con contratar pauta." },
      { nombre: "B · La aritmética implacable", promesa: "Tu ticket aguanta pagar $400 por cada cliente nuevo. Hoy pagás $0 porque no pautás. Ese es el dinero que dejás en la mesa.", gancho: "\"Con un ticket de $2,000 podés pagar hasta $500 por venta y seguir ganando. ¿Sabés cuánto estás pagando hoy?\"", quien: "El experto analítico, el que viene de un negocio o de finanzas.", hipotesis: "Muy fuerte para diferenciar y para justificar el precio, pero requiere que el prospecto piense en números." },
      { nombre: "C · Delegación total del cierre", promesa: "Nosotros traemos los leads Y los cerramos. Tu única métrica pasa a ser cuántos clientes entran por semana.", gancho: "\"¿Cuántas horas por semana se te van en llamadas de venta que no cierran?\"", quien: "Tipo A que cierra él mismo y odia vender.", hipotesis: "Nuestra apuesta. El dolor real de este ICP no es la pauta: es tener que vender. Además es lo único que ninguna agencia ofrece." }
    ],
    metricas: ["Tasa de respuesta sobre contactos iniciados", "Tasa de agenda sobre conversación iniciada — la métrica principal", "Tasa de asistencia a la llamada 1", "Objeción dominante — cuál aparece primero y con más frecuencia", "Tasa de avance de llamada 1 a llamada 2", "Cierres"],
    reglasTest: ["Mínimo 20 conversaciones por ángulo antes de concluir nada. Por debajo de eso es intuición disfrazada de data.", "Un ángulo por lote de prospección. No se mezclan en el mismo mensaje.", "Cada conversación se registra con el ángulo usado. Sin registro, el test no existe.", "La revisión es semanal, entre dirección y dirección comercial, con los números a la vista.", "El ángulo ganador pasa al VSL y a los anuncios. Los otros dos quedan como variantes de prueba."]
  },
  seccion12: {
    titulo: "12 Manejo de objeciones",
    principio: "Una objeción rota antes de aparecer vale diez veces más que una respondida bien. Las objeciones de decisor compartido, de plazo y de \"lo pienso\" se desactivan en los primeros cinco minutos de la llamada 1, encuadrando el proceso: \"en esta primera llamada vemos si tiene sentido trabajar juntos; en la segunda tomás la decisión, sí o no. Para eso necesito que estén las personas que deciden, y necesito una respuesta ese día — porque si no, estoy invirtiendo tiempo que le corresponde a otro cliente.\"",
    objeciones: [
      { objecion: "\"Es caro\"", detras: "No hizo la cuenta. Casi nunca es falta de dinero: es falta de referencia.", respuesta: "Se responde con la Sección 4, en pantalla: \"Con tu ticket de $2,000, la instalación se paga con dos clientes. ¿Cuántos cerraste el mes pasado? Bien, entonces esto se paga con el 40% de un mes tuyo normal, y a partir de ahí todo lo demás es incremental.\"" },
      { objecion: "\"Ya trabajé con una agencia y no funcionó\"", detras: "La objeción más común y la mejor noticia de la llamada: significa que tiene presupuesto y ya intentó.", respuesta: "\"Te entiendo, y te voy a decir exactamente dónde te fallaron: te entregaron leads y ahí terminó su responsabilidad. Cobraron igual vendieras o no. Nosotros cobramos sobre la venta. Si el lead no se convierte, nosotros tampoco ganamos.\" Se sigue mostrando el dashboard en vivo como respuesta a la opacidad." },
      { objecion: "\"¿Por qué el porcentaje? Prefiero pagar solo fijo\"", detras: "Miedo a pagar de más si funciona muy bien.", respuesta: "\"Podés pagar solo fijo, existe esa opción. Pero fijate lo que pasa: si me pagás solo fijo, mi trabajo termina cuando te entrego la llamada agendada. Con el porcentaje, mi trabajo termina cuando vos cobrás. El porcentaje no es un costo: es la garantía de que estoy mirando tu número, no el mío.\"" },
      { objecion: "\"Lo tengo que consultar con mi socio / mi pareja\"", detras: "Objeción de decisor. Si aparece en la llamada 2, se falló en la llamada 1.", respuesta: "Se rompe antes: en el minuto uno de la llamada 1 se pregunta quién participa de la decisión y se pide que esté presente en la segunda. Si igual aparece: \"Perfecto, es lo lógico. Agendemos ahora mismo veinte minutos con los dos, así responde las dudas directamente y no queda en un teléfono roto.\"" },
      { objecion: "\"Necesito pensarlo\"", detras: "Casi siempre hay una objeción real sin decir.", respuesta: "\"Claro. Solo para no dejarte con la duda: si tuvieras que decirme hoy qué es lo que más te frena, ¿qué sería? ¿El monto, el plazo, o si esto funciona para tu nicho en particular?\" La respuesta trae la objeción verdadera, que sí se puede trabajar." },
      { objecion: "\"¿Puedo probar un mes?\"", detras: "Quiere reducir riesgo. Es legítimo, pero destruye el resultado.", respuesta: "\"No, y te explico por qué te conviene que diga que no: el primer mes es fase de aprendizaje del algoritmo y de recolección de data. Si cortamos ahí, cortás justo antes de que empiece a funcionar y te quedás con la peor foto posible. Por eso el mínimo son tres meses, y por eso existe la garantía.\"" },
      { objecion: "\"¿Y si no funciona?\"", detras: "Pregunta honesta. Merece respuesta honesta, no una promesa.", respuesta: "Se responde con la Sección 8, con el número ya calculado: \"En 60 días te generamos [N] llamadas agendadas cualificadas. Si no llegamos a ese número, seguimos trabajando sin cobrar fee mensual hasta llegar. Lo que no te puedo garantizar es tu tasa de cierre, porque esa depende de la conversación — salvo que también cerremos nosotros, y entonces sí te lo garantizo sobre ventas.\"" }
    ]
  },
  seccion13: {
    titulo: "13 Reglas internas no negociables",
    reglas: [
      { num: 1, regla: "El precio de la Sección 6 es fijo. Solo las cuatro palancas de la Sección 9 modifican la propuesta económica, y solo dentro de sus condiciones.", previene: "Que el primer cliente fije un ancla de precio baja para los siguientes cincuenta." },
      { num: 2, regla: "Solo se muestra prueba real. Capturas reales de Ads Manager, dashboards de clientes reales, resultados verificables. Cero paneles de demostración presentados como clientes, cero perfiles de respaldo, cero cifras inventadas.", previene: "Exposición legal, y la repetición exacta del problema que ya conocemos de otro proyecto. Un caso real modesto cierra mejor que uno grande fabricado, porque aguanta ser interrogado." },
      { num: 3, regla: "La cuenta publicitaria vive siempre en el Business Manager del cliente. Nosotros entramos como socio con permisos. Nunca al revés.", previene: "Perder el historial y la data del cliente si nos restringen una cuenta — algo que ya pasó con una cuenta de $37,000 de gasto." },
      { num: 4, regla: "Acceso de solo lectura al procesador de pagos como condición de cualquier porcentaje. Sin acceso, no hay porcentaje: pasa a fee fijo.", previene: "Que en el mes cuatro, cuando la cifra sea grande, el número reportado empiece a bajar. Pasa siempre." },
      { num: 5, regla: "El porcentaje arranca en el mes 2. El mes 1 es instalación.", previene: "Cobrar sobre ventas orgánicas preexistentes, que es donde nace el primer conflicto." },
      { num: 6, regla: "No se firma sin presupuesto de pauta comprometido y verificado.", previene: "Comernos la garantía por una inversión que nunca llegó a existir." },
      { num: 7, regla: "El setup se cobra al 100% antes del día 1 de instalación.", previene: "Trabajar catorce días para alguien que todavía no decidió." },
      { num: 8, regla: "Cap operativo de 10 clientes simultáneos. Al llegar, se cierra la entrada y sube el precio del siguiente lote.", previene: "Que la calidad de entrega caiga y perdamos los casos de éxito que necesitamos para vender los siguientes." },
      { num: 9, regla: "Nada se promete en llamada que no esté escrito en este documento. Toda promesa fuera de aquí requiere aprobación escrita de dirección antes de la llamada, nunca durante.", previene: "La brecha entre lo que vendió el closer y lo que puede entregar la operación." },
      { num: 10, regla: "Este documento se actualiza cuando cambia una decisión. Si algo cambió y no está acá, no ocurrió.", previene: "Que el equipo venda tres versiones distintas de la misma oferta." }
    ]
  },
  seccion14: {
    titulo: "14 Checklist antes de firmar cualquier cliente",
    items: [
      "Ticket del cliente confirmado en $1,500 o más (Tier 1 y 2) o entre $900 y $1,499 (Tier 3)",
      "Presupuesto de pauta comprometido, verificado y disponible: mínimo un ticket, piso $1,500/mes",
      "Al menos 3 ventas de su oferta principal el último mes (oferta validada)",
      "Decisor identificado y presente en la llamada de cierre",
      "Capacidad de entrega confirmada para al menos 3× su volumen actual",
      "Número de la garantía calculado con la fórmula de la Sección 8 y escrito en la propuesta",
      "Setup cobrado al 100%",
      "Acceso de solo lectura al procesador de pagos concedido (si hay porcentaje)",
      "Acceso al Business Manager del cliente concedido, con la cuenta publicitaria a su nombre",
      "Alcance firmado corresponde exactamente a un tier de la Sección 6, sin agregados verbales"
    ]
  }
};
