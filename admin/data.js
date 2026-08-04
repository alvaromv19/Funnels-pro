/* =============================================================================
   EVO LAUNCH · MANUAL DE OFERTA Y VENTA · v1.0
   data.js — Única fuente de verdad del contenido. TODO lo que se renderiza en
   index.html sale de este objeto. Documento vivo: cambiar un precio = editar
   UNA línea acá, nunca el HTML.

   -----------------------------------------------------------------------------
   MAPA RÁPIDO DE PRECIOS  (qué línea tocar para cambiar cada número)
   -----------------------------------------------------------------------------
   Todos los precios canónicos viven en el bloque PRECIOS de abajo. Buscá la
   clave y editás el valor. La hoja de precios (Sección 6), la arquitectura de
   oferta (Sección 5), la aritmética (Sección 4) y las calculadoras leen de acá.

     PRECIOS.tier1.setup .............. Setup Tier 1
     PRECIOS.tier1.feeMensual ......... Fee mensual Tier 1
     PRECIOS.tier2.setup .............. Setup Tier 2 (flagship)
     PRECIOS.tier2.feeMensual ......... Fee mensual Tier 2
     PRECIOS.tier2.pctVentas .......... % sobre ventas atribuibles Tier 2
     PRECIOS.tier3.setupMin/Max ....... Rango de setup Tier 3
     PRECIOS.tier3.feeMin/Max ......... Rango de fee mensual Tier 3
     PRECIOS.moduloCierre.feeExtra .... +Fee mensual del Módulo de Cierre
     PRECIOS.moduloCierre.pctTier1/3 .. % del módulo sobre Tier 1 / Tier 3
     PRECIOS.moduloCierre.pctExtraT2 .. % adicional del módulo sobre Tier 2
     PRECIOS.umbrales.ticketMinTier12 . Ticket mínimo Tier 1 y 2
     PRECIOS.umbrales.ticketMinTier3 .. Ticket mínimo Tier 3
     PRECIOS.umbrales.pisoPauta ....... Piso de presupuesto de pauta Tier 1/2
     PRECIOS.umbrales.pisoPautaTier3 .. Piso de presupuesto de pauta Tier 3
     PRECIOS.aritmetica.* ............. Defaults y rangos de la calculadora
     PRECIOS.modulosSueltos[n].* ...... Precios de los módulos sueltos (Tier 3)

   Los textos largos (objeciones, reglas, etc.) están en sus secciones.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   PRECIOS — números canónicos, editables en un solo lugar
   --------------------------------------------------------------------------- */
const PRECIOS = {
  tier1: {
    setup: 2500,          // Setup Tier 1 (pago único)
    feeMensual: 1200,     // Fee mensual Tier 1
    pctVentas: 0          // Tier 1 no lleva porcentaje
  },
  tier2: {
    setup: 3000,          // Setup Tier 2 flagship (pago único)
    feeMensual: 1500,     // Fee mensual Tier 2
    pctVentas: 15         // % sobre ventas atribuibles (desde mes 2)
  },
  tier3: {
    setupMin: 500,        // Setup Tier 3 mínimo
    setupMax: 1200,       // Setup Tier 3 máximo (según hoja de precios, Sección 6)
    feeMin: 900,          // Fee mensual Tier 3 mínimo
    feeMax: 1200,         // Fee mensual Tier 3 máximo
    pctVentas: 0          // Tier 3 no lleva porcentaje salvo módulo de cierre
  },
  moduloCierre: {
    feeExtra: 500,        // +$500/mes en cualquier tier
    pctTier1: 12,         // Tier 1 + módulo = 12% sobre ventas cerradas
    pctExtraT2: 5,        // Tier 2 + módulo = 5% adicional (15% -> 20% total)
    pctTier3: 12          // Tier 3 + módulo = 12% sobre ventas cerradas
  },
  umbrales: {
    ticketMinTier12: 1500,   // Ticket mínimo del cliente para Tier 1 y 2
    ticketMinTier3: 900,     // Ticket mínimo del cliente para Tier 3
    ticketPisoDeal: 900,     // Por debajo de esto no es cliente a ningún precio
    pisoPauta: 1500,         // Piso de presupuesto de pauta Tier 1/2 (o 1 ticket)
    pisoPautaTier3: 1000     // Piso de presupuesto de pauta Tier 3
  },
  // Defaults y rangos de la CALCULADORA DE ARITMÉTICA (Sección 4)
  aritmetica: {
    ticketDefault: 2000,
    presupuestoDefault: 2000,
    costoPorAgendaDefault: 40,
    costoPorAgendaMin: 25,
    costoPorAgendaMax: 70,
    showRateDefault: 0.55,   // 55%
    cierreDefault: 0.20,     // 20% sobre llamadas efectivas
    // Cortes del semáforo de viabilidad = ROAS sobre pauta (ticket / costo por venta).
    // Mismos veredictos que la Tabla B de la Sección 4.
    semaforoRoas: [
      { min: 0,   max: 2.0, clave: 'inviable',  etiqueta: 'Inviable',  detalle: 'No se toma.' },
      { min: 2.0, max: 3.5, clave: 'limite',    etiqueta: 'Límite',    detalle: 'Solo Tier 3.' },
      { min: 3.5, max: 5.0, clave: 'sano',      etiqueta: 'Sano',      detalle: 'Piso de Tier 1 y 2.' },
      { min: 5.0, max: 7.0, clave: 'muybueno',  etiqueta: 'Muy bueno', detalle: '' },
      { min: 7.0, max: Infinity, clave: 'excelente', etiqueta: 'Excelente', detalle: 'Objetivo de prospección.' }
    ]
  },
  // Módulos sueltos del Tier 3 (Sección 5)
  modulosSueltos: [
    { modulo: 'Trafficker', incluye: 'Pauta en Meta, creativos y copy. Sin embudo ni cierre.', setup: 800, mensual: 1200, mensualTexto: '$1,200' },
    { modulo: 'Setter IA + CRM', incluye: 'Contacto al lead en menos de 60 seg, cualificación y CRM con análisis de llamadas por IA.', setup: 500, mensual: 900, mensualTexto: '$900' },
    { modulo: 'Embudo / VSL', incluye: 'Construcción de landing + VSL + formulario. Entrega única, sin operación.', setup: 1200, mensual: null, mensualTexto: '—' },
    { modulo: 'Equipo de closers dirigido', incluye: 'Closers certificados + dirección comercial. Requiere que el cliente ya tenga tráfico.', setup: 500, mensual: 500, mensualTexto: '$500 + 12%' }
  ]
};

/* ---------------------------------------------------------------------------
   DATA — contenido estructurado del manual
   --------------------------------------------------------------------------- */
const DATA = {

  meta: {
    marca: 'EVO LAUNCH',
    titulo: 'Manual de Oferta y Venta',
    subtitulo: 'Quién nos compra · Qué le entregamos · Cuánto cuesta · Cómo se vende',
    version: 'Versión 1.0 — Documento vivo',
    fecha: 'Agosto 2026',
    director: 'Alvaro Maza',
    direccionComercial: 'Ayrton Giambartolomei',
    destinatarios: 'Dirección · Equipo de cierre · Setters',
    estado: 'Aprobado para salir a mercado y testear',
    piePagina: 'Uso interno — Alvaro Maza · Dirección comercial · Equipo de cierre'
  },

  reglaCero: {
    titulo: 'REGLA CERO',
    texto: 'El precio de este documento no se negocia en la llamada. Si el prospecto no puede con el precio, no se baja el precio: se le ofrece un tier menor o se descalifica. Un precio que cambia por conversación destruye la posibilidad de saber qué funciona.'
  },

  // Índice de navegación — 14 secciones (0 a 13)
  nav: [
    { id: 'sec0',  num: '0',  titulo: 'Cómo usar este documento' },
    { id: 'sec1',  num: '1',  titulo: 'Qué vendemos' },
    { id: 'sec2',  num: '2',  titulo: 'El cliente ideal (ICP)' },
    { id: 'sec3',  num: '3',  titulo: 'A quién NO le vendemos' },
    { id: 'sec4',  num: '4',  titulo: 'La aritmética' },
    { id: 'sec5',  num: '5',  titulo: 'Arquitectura de oferta' },
    { id: 'sec6',  num: '6',  titulo: 'Hoja de precios' },
    { id: 'sec7',  num: '7',  titulo: 'Bonos' },
    { id: 'sec8',  num: '8',  titulo: 'La garantía' },
    { id: 'sec9',  num: '9',  titulo: 'Política de precio y descuentos' },
    { id: 'sec10', num: '10', titulo: 'Ruta del prospecto y cualificación' },
    { id: 'sec11', num: '11', titulo: 'Qué testeamos al salir al mercado' },
    { id: 'sec12', num: '12', titulo: 'Manejo de objeciones' },
    { id: 'sec13', num: '13', titulo: 'Reglas internas + Checklist' }
  ],

  /* ===== SECCIÓN 0 — CÓMO USAR ===== */
  sec0: {
    num: '0',
    titulo: 'Cómo usar este documento',
    bajada: 'Léelo entero una vez. Después usa la tabla de abajo para ir directo a lo que necesitas.',
    tablaPerfiles: {
      headers: ['Si eres...', 'Lee sí o sí', 'Puedes saltar'],
      filas: [
        ['Dirección (Alvaro)', 'Todo. Este documento es la única fuente de verdad sobre precio y alcance.', 'Nada.'],
        ['Dirección comercial (Ayrton)', 'Todo. Sos quien traduce este documento a la llamada y quien entrena al equipo con él.', 'Nada.'],
        ['Closer', 'Secciones 1 a 8, 12 y 13. Con eso vendés.', '9, 10 y 11 (las opera la dirección).'],
        ['Setter', 'Secciones 2, 3 y 10 (formulario de cualificación).', 'El resto.']
      ]
    },
    tresReglas: {
      titulo: 'Las tres reglas que hacen que este documento sirva de algo',
      items: [
        'El precio es fijo. No hay descuento por simpatía, urgencia ni pena. Las únicas cuatro palancas permitidas están en la Sección 9.',
        'Solo se muestra prueba real. Capturas reales de Ads Manager, dashboards reales de clientes reales. Cero material fabricado, cero cuentas de ejemplo presentadas como clientes. Esto no es una preferencia estética: es la diferencia entre un negocio y un problema legal.',
        'Se descalifica sin culpa. Un cliente que no cumple los filtros de la Sección 2 no es un cliente difícil: es una pérdida futura de tiempo, dinero y reputación. Descalificar rápido es parte del trabajo.'
      ]
    },
    queCambio: {
      titulo: 'Qué cambió respecto a los documentos anteriores',
      intro: 'El Master Briefing v1.0 y el Sistema EvoLaunch se contradecían en tres puntos: el rango de facturación del cliente, si el cierre estaba dentro o fuera del alcance, y si lo que vendemos es un software o un servicio. Este manual resuelve las tres:',
      headers: ['Punto en conflicto', 'Decisión definitiva'],
      filas: [
        ['Rango de facturación del ICP', 'Deja de ser el filtro principal. El filtro es el ticket y el presupuesto de pauta (Sección 2). La facturación de $5K–$10K/mes es contexto, no requisito.'],
        ['¿El cierre está dentro del alcance?', 'Sí. Queda derogada la Hard Rule #6 del Master Briefing ("EVO LAUNCH termina en el Schedule"). El cierre es un módulo disponible sobre cualquier tier.'],
        ['¿Vendemos software o servicio?', 'Servicio. El equipo de agentes de IA es cómo lo ejecutamos, no lo que vendemos. En la llamada nunca se lidera con IA.']
      ]
    }
  },

  /* ===== SECCIÓN 1 — QUÉ VENDEMOS ===== */
  sec1: {
    num: '1',
    titulo: 'Qué vendemos',
    bajada: 'Si un closer no puede decir esto en 15 segundos sin leer, no está listo para vender.',
    frase: {
      titulo: 'La frase',
      texto: '"Instalamos y operamos la máquina de adquisición completa de expertos que ya venden high ticket: construimos el embudo, compramos el tráfico frío, contactamos al lead en menos de 60 segundos y cerramos la venta. Tu única métrica pasa a ser cuántos clientes nuevos entran a tu programa cada semana."'
    },
    reglasDiscurso: {
      titulo: 'Las cuatro reglas de discurso',
      headers: ['Regla', 'Por qué', 'Qué NO decir'],
      filas: [
        ['No lideramos con IA', 'El cliente no compra tecnología, compra clientes nuevos. La IA es cómo entregamos velocidad y consistencia; se menciona cuando explica un beneficio concreto (contacto en 60 segundos, análisis de cada llamada), nunca como titular.', '"Tenemos un equipo de agentes de IA que..."'],
        ['Hablamos de dinero, no de servicios', 'Todo entregable se traduce a la aritmética de la Sección 4. Un embudo no vale nada; dos ventas más al mes sí.', '"Te entregamos landing, creativos y gestión de pauta."'],
        ['Somos socios operativos, no proveedores', 'El fee fijo más porcentaje existe precisamente para que el cliente entienda que ganamos cuando él gana. Es el argumento más fuerte contra la agencia que le falló antes.', '"Nosotros nos encargamos y te mandamos reporte."'],
        ['Somos honestos sobre el plazo', '3 meses mínimo para tener data limpia. Prometer resultados en 30 días es cómo se generan los conflictos que ya conocemos.', '"En dos semanas estás facturando el doble."']
      ]
    },
    diferenciador: {
      titulo: 'Nuestro diferenciador real',
      texto: 'No es la IA. Es que somos la única opción del mercado que cubre la cadena completa y responde por el resultado del final de la cadena. Ese es el hueco donde vive el dolor del prospecto:',
      tabla: {
        headers: ['Eslabón', 'Agencia de pauta', 'Mentoría / curso', 'Freelancer', 'EVO LAUNCH'],
        filas: [
          ['Embudo y creativos', 'Sí', 'Te enseña', 'A veces', 'Sí'],
          ['Compra de tráfico frío', 'Sí', 'No', 'Sí', 'Sí'],
          ['Contacto al lead en menos de 60 seg', 'No', 'No', 'No', 'Sí'],
          ['Cierre de la venta', 'No', 'No', 'No', 'Sí (módulo)'],
          ['Dirección y entrenamiento del equipo de ventas', 'No', 'Parcial', 'No', 'Sí'],
          ['Responde por ventas, no por leads', 'No', 'No', 'No', 'Sí']
        ]
      }
    },
    argumentoCierra: {
      titulo: 'El argumento que cierra',
      texto: 'Toda agencia que le falló al prospecto le falló en el mismo punto: entregó leads y se lavó las manos del cierre. El prospecto pagó por leads, recibió leads, y no vendió. Nuestra respuesta no es "nosotros traemos mejores leads" — eso es lo que le dijeron la vez anterior. Nuestra respuesta es: cobramos sobre la venta, no sobre el lead. Si el lead no se convierte, nosotros tampoco ganamos.'
    }
  },

  /* ===== SECCIÓN 2 — ICP ===== */
  sec2: {
    num: '2',
    titulo: 'El cliente ideal (ICP)',
    bajada: 'Tres variables duras. Si falla una, no hay deal — sin importar lo simpático que sea el prospecto.',
    intro: 'La facturación mensual no califica a nadie. Dos negocios de $8,000/mes pueden ser opuestos: uno con ticket de $2,000 y tres ventas, otro con ticket de $97 y ochenta ventas. Al primero le construimos un negocio; al segundo lo hundimos. Lo que decide es esto:',
    variablesDuras: {
      headers: ['#', 'Variable dura', 'Umbral', 'Por qué es el umbral'],
      filas: [
        ['1', 'Ticket de la oferta principal', '$1,500 USD o más (Tier 1 y Tier 2)', 'Es lo que hace que la aritmética de tráfico frío cierre. Ver Sección 4. Entre $900 y $1,499 el cliente entra por Tier 3. Por debajo de $900, no es cliente.'],
        ['2', 'Presupuesto de pauta mensual', 'El valor de un ticket del cliente, con piso de $1,500 USD/mes', 'Regla autoescalable: si su ticket es $3,000, su presupuesto mínimo es $3,000/mes. Debe estar disponible ahora, separado de nuestro fee, y comprometido por 3 meses. No sirve "lo saco de lo que vaya vendiendo".'],
        ['3', 'Capacidad de entrega', 'Puede atender 3× su volumen actual sin romperse', 'Si le metemos diez clientes y él atiende tres, cancela por saturación en el mes dos y encima queda insatisfecho. La pregunta literal: "si mañana entran diez clientes nuevos, ¿podés atenderlos?"']
      ]
    },
    dosTipos: {
      titulo: 'Los dos tipos de prospecto que vas a encontrar',
      intro: 'Dentro del rango de $5K–$10K/mes hay dos animales distintos. Uno es oro; el otro es un proyecto de seis meses disfrazado de cliente. Saber cuál tenés enfrente cambia el precio, el plazo y la promesa.',
      tipoA: {
        titulo: 'TIPO A — EL ORGÁNICO CON TECHO',
        etiqueta: 'Nuestro objetivo. El 80% del esfuerzo de prospección va acá.',
        rasgos: [
          'Vende high ticket ($1,500–$3,000) por contenido, DMs y referidos',
          'Hace 3 a 6 ventas al mes',
          'No paga publicidad, o la paga mal',
          'Cierra él mismo las llamadas y está agotado de vender',
          'Atrapado grabando contenido todos los días para no perder flujo'
        ],
        porQue: 'Por qué es oro: cero trabajo de construcción de oferta, la oferta ya convierte, la prueba social ya existe. El tráfico pagado es 100% incremental. Resultado visible en 30 a 45 días.'
      },
      tipoB: {
        titulo: 'TIPO B — EL VOLUMEN LOW TICKET',
        etiqueta: 'No entra en los primeros 5 clientes. Sin excepciones.',
        rasgos: [
          'Factura $5K–$10K vendiendo productos de $47 a $297',
          'Ya paga publicidad y sabe que el margen no le da',
          'No tiene oferta high ticket, o tiene una sin validar',
          'Suele tener audiencia y lista de correos grandes'
        ],
        porQue: 'Por qué es peligroso ahora: hay que construirle el high ticket desde cero, reposicionar la marca y generar testimonios nuevos. Son 90 días antes de la primera venta. Cuando lo tomemos, es setup de $5,000+ y otra promesa, no esta. Hoy: se agradece y se archiva para el trimestre siguiente.'
      }
    },
    dondeEncontrar: {
      titulo: 'Dónde encontrar al Tipo A (accionable hoy)',
      headers: ['Fuente', 'Qué buscar exactamente', 'Señal de que es Tipo A'],
      filas: [
        ['Meta Ad Library', 'Filtrar por país + palabras del nicho (mentoría, programa, consultoría, formación). Revisar anuncios activos.', 'Anuncios activos hace menos de 30 días con poca variación creativa, o directamente cero anuncios pese a tener marca activa.'],
        ['Instagram / YouTube', 'Cuentas con posteo constante, testimonios en destacados, y link en bio que lleva a "agenda tu llamada" o formulario de aplicación.', 'Link a agendamiento + ausencia de anuncios = vende high ticket solo con orgánico. Es exactamente el perfil.'],
        ['Red y referidos', 'Contactos previos, gente del entorno de formaciones de closing, alumnos de programas donde ya estamos.', 'Cualquiera que ya venda y se queje del tiempo que le consume vender. Prioridad máxima: convierte mucho mejor que el frío.']
      ]
    },
    ordenProspeccion: {
      titulo: 'Orden de prospección',
      texto: 'Primero la red caliente, después el frío. Un contacto que ya te conoce convierte varias veces mejor que un DM desde una cuenta desconocida. La lista de contactos de la dirección comercial y los alumnos de la formación de closing son el primer lote. El tráfico frío se enciende cuando ya haya un caso propio que mostrar.'
    }
  },

  /* ===== SECCIÓN 3 — A QUIÉN NO ===== */
  sec3: {
    num: '3',
    titulo: 'A quién NO le vendemos',
    bajada: 'Cada línea de esta lista se pagó con tiempo, dinero o reputación en algún proyecto anterior.',
    descalificadores: {
      headers: ['Descalificador', 'Qué pasa si lo ignoramos', 'Qué se hace'],
      filas: [
        ['Ticket menor a $900 USD', 'La aritmética no cierra a ningún precio. Le cobramos, no vende, y el problema no era el servicio: era la matemática.', 'Se descalifica. Se puede sugerir que suba su oferta y vuelva.'],
        ['No tiene oferta validada (cero ventas propias)', 'Nos convertimos en su departamento de producto. Es otro negocio, con otro precio y otro plazo.', 'Se descalifica. No hay tier para esto.'],
        ['Presupuesto de pauta por debajo del piso, o "lo saco de lo que venda"', 'No hay volumen para aprender. Se quema el mes 1 sin data, y la garantía nos la comemos nosotros.', 'Se descalifica. Este es el filtro que más deals mata y no se flexibiliza.'],
        ['No es quien toma la decisión y no puede traer a quien la toma', 'Dos llamadas perdidas y un "lo consulto" que nunca vuelve.', 'Se reagenda con el decisor presente. Si no puede traerlo, se cierra el proceso.'],
        ['Negocio local físico, o e-commerce de producto físico puro', 'Otro stack publicitario, otro ciclo de venta, otra lógica de creativos y atribución. No tenemos ventaja ahí.', 'Se descalifica y, si aplica, se refiere.'],
        ['No puede atender más volumen', 'Le llenamos el calendario, no da abasto, la experiencia de sus clientes cae y nos cancela culpándonos a nosotros.', 'Se pospone hasta que resuelva entrega. Se agenda seguimiento a 60 días.'],
        ['Quiere "probar un mes"', 'Un mes no alcanza ni para salir de la fase de aprendizaje del algoritmo. Cancela justo antes de que empiece a funcionar.', 'Se explica el mínimo de 3 meses. Si insiste, se descalifica.'],
        ['Viene de una agencia con la que terminó en conflicto abierto y no reconoce ninguna responsabilidad propia', 'Es el mismo conflicto esperando a repetirse con nosotros.', 'Se explora con cuidado. Si el relato es 100% culpa ajena, se descalifica.']
      ]
    },
    descalificacionAmable: {
      titulo: 'Cómo se descalifica sin quemar el contacto',
      texto: '"Por lo que me contás, hoy no somos la opción correcta para vos, y prefiero decírtelo ahora que cobrarte y que no funcione. Lo que necesitás primero es [X]. Cuando eso esté resuelto, escribime y lo retomamos."',
      cierre: 'Un prospecto bien descalificado te refiere. Un prospecto mal vendido te destruye la reputación en un nicho donde todos se conocen.'
    }
  },

  /* ===== SECCIÓN 4 — LA ARITMÉTICA ===== */
  sec4: {
    num: '4',
    titulo: 'La aritmética',
    bajada: 'La herramienta de venta más potente que tenemos. Se hace en pantalla compartida, con los números del prospecto.',
    intro: 'Todo prospecto que vende high ticket cree que su problema es de marketing. Casi siempre es de matemática: nunca calculó cuánto puede pagar por una venta. Cuando le mostrás este cálculo con sus números, dejás de ser un vendedor y pasás a ser el primero que le explicó su propio negocio. Esa es la llamada que cierra.',
    // A · La cadena del tráfico frío
    cadena: {
      titulo: 'A · La cadena del tráfico frío',
      nota: 'Referencias reales de tráfico frío en Meta, mercado hispano, oferta high ticket. Se ajustan por vertical, pero sirven como base en cualquier llamada.',
      headers: ['Paso de la cadena', 'Referencia de trabajo', 'Rango real observado'],
      filas: [
        ['Costo por agenda (lead que reserva llamada)', '$40 USD', '$25 – $70'],
        ['Tasa de asistencia (show rate)', '55%', '50% – 65%'],
        ['Cierre sobre llamadas efectivas', '20%', '15% – 25%'],
        ['Costo por venta cerrada', '$364 USD', '$190 – $930']
      ]
    },
    // B · Por qué el ticket lo decide todo
    ticketDecide: {
      titulo: 'B · Por qué el ticket lo decide todo',
      nota: 'Con el mismo costo por venta de $364, el ticket del cliente es lo único que separa un negocio rentable de uno que quema dinero. Esta tabla es la justificación entera de nuestro filtro de la Sección 2.',
      headers: ['Ticket del cliente', 'Costo por venta', 'ROAS sobre pauta', 'Margen bruto por venta', 'Veredicto'],
      filas: [
        ['$497',   '$364', '1.4×', '$133',   'Inviable. No se toma.'],
        ['$997',   '$364', '2.7×', '$633',   'Límite. Solo Tier 3.'],
        ['$1,500', '$364', '4.1×', '$1,136', 'Sano. Piso de Tier 1 y 2.'],
        ['$2,000', '$364', '5.5×', '$1,636', 'Muy bueno.'],
        ['$3,000', '$364', '8.2×', '$2,636', 'Excelente. Objetivo de prospección.']
      ]
    },
    // C · Escenario real de mes 3 — Tier 2 con módulo de cierre
    escenarioMes3: {
      titulo: 'C · Escenario real de mes 3 — Tier 2 con módulo de cierre',
      nota: 'Después de la fase de aprendizaje. Números conservadores: no incluye recurrencias, cuotas, upsells ni valor de vida del cliente. El prospecto ve esta tabla en pantalla y hace la cuenta solo.',
      headers: ['Concepto', 'Ticket $1,500', 'Ticket $2,000', 'Ticket $3,000'],
      filas: [
        ['Presupuesto de pauta al mes', '$1,500', '$2,000', '$3,000'],
        ['Agendas generadas', '37', '50', '75'],
        ['Llamadas efectivas (55%)', '20', '27', '41'],
        ['Ventas cerradas (20%)', '4', '5', '8'],
        ['Facturación generada', '$6,000', '$10,000', '$24,000'],
        ['Menos: pauta', '($1,500)', '($2,000)', '($3,000)'],
        ['Menos: fee EVO LAUNCH', '($2,000)', '($2,000)', '($2,000)'],
        ['Menos: 20% sobre ventas', '($1,200)', '($2,000)', '($4,800)'],
        ['Neto para el cliente', '$1,300', '$4,000', '$14,200'],
        ['Retorno sobre inversión total', '1.28×', '1.67×', '2.45×'],
        ['Lo que facturamos nosotros', '$3,200', '$4,000', '$6,800']
      ],
      filasNuestras: ['Lo que facturamos nosotros'], // filas a ocultar en modo presentación
      lectura: {
        titulo: 'Lo que esta tabla nos dice a nosotros',
        texto: 'El ticket de $1,500 es el piso, no el objetivo. A ese nivel el cliente gana, pero con poco margen de error: si el costo por agenda sube o el cierre baja, se queda plano. A $3,000 el modelo respira. Consecuencia directa para la prospección: entre dos prospectos igual de accesibles, siempre se prioriza al de ticket más alto. No es preferencia — es la diferencia entre facturar $3,200 y $6,800 con el mismo trabajo.'
      }
    },
    // D · Cuántas ventas paga el setup
    ventasSetup: {
      titulo: 'D · Cuántas ventas paga el setup',
      nota: 'La respuesta a "es caro". No se argumenta con valor percibido: se argumenta con esta división.',
      headers: ['Ticket del cliente', 'Setup Tier 1 ($2,500)', 'Setup Tier 2 ($3,000)', 'Frase para la llamada'],
      filas: [
        ['$1,500', '2 ventas', '2 ventas', '"Esto se paga con dos clientes tuyos. ¿Cuántos cerraste el mes pasado?"'],
        ['$2,000', '2 ventas', '2 ventas', '"Dos ventas y ya estás en cero. El resto del año es tuyo."'],
        ['$3,000', '1 venta', '1 venta', '"Una sola venta cubre la instalación completa."']
      ]
    },
    // E · Sensibilidad al costo por agenda
    sensibilidad: {
      titulo: 'E · Qué pasa si el costo por agenda sale peor de lo previsto',
      nota: 'Sensibilidad. Sirve para responder con honestidad cuando el prospecto pregunta "¿y si no funciona tan bien?" en vez de esquivar la pregunta.',
      headers: ['Costo por agenda', 'Costo por venta', 'ROAS con ticket $1,500', 'ROAS con ticket $3,000', 'Lectura'],
      filas: [
        ['$25 (escenario bueno)', '$227', '6.6×', '13.2×', 'Se escala presupuesto de inmediato.'],
        ['$40 (referencia)', '$364', '4.1×', '8.2×', 'Escenario base del plan.'],
        ['$55 (nicho competido)', '$500', '3.0×', '6.0×', 'Sigue siendo rentable. Se optimiza creativo y oferta.'],
        ['$70 (escenario malo)', '$636', '2.4×', '4.7×', 'Ticket $1,500 queda ajustado; ticket $3,000 aguanta sin problema.']
      ]
    }
  },

  /* ===== SECCIÓN 5 — ARQUITECTURA DE OFERTA ===== */
  sec5: {
    num: '5',
    titulo: 'Arquitectura de oferta',
    bajada: 'Tres tiers y un módulo. Cada uno con precio fijo, alcance cerrado y un motivo claro de existir.',
    tier1: {
      etiqueta: 'TIER 1',
      nombre: 'MOTOR DE AGENDAMIENTO',
      precio: '$2,500 setup + $1,200 USD / mes',
      condiciones: 'Sin porcentaje · Permanencia mínima 3 meses',
      para: 'Para el experto que ya cierra bien y solo le falta volumen.',
      instalacion: {
        titulo: 'INSTALACIÓN — DÍAS 1 A 14',
        items: [
          'Diagnóstico de oferta y definición de ángulos de mercado',
          'Embudo de conversión completo: landing + VSL o funnel de agendamiento',
          'Formulario de cualificación con fricción estratégica',
          'Instalación y auditoría de píxel de Meta, evento Schedule y API de Conversiones',
          'Primer lote de creativos: mínimo 6 piezas sobre 3 ángulos distintos',
          'Estructura de campañas y arranque de pauta'
        ]
      },
      operacion: {
        titulo: 'OPERACIÓN — MENSUAL',
        items: [
          'Gestión completa de pauta en Meta: creación, optimización y escalado',
          'Producción continua de creativos y copy: mínimo 8 piezas nuevas al mes',
          'Iteración de embudo y landing según la data, no según opinión',
          'Dashboard de atribución en vivo, con acceso permanente del cliente',
          'Reporte semanal con lectura y decisión — no capturas de pantalla'
        ]
      },
      dondeTermina: {
        titulo: 'Dónde termina el Tier 1',
        texto: 'En el Schedule: la llamada agendada. El cierre lo hace el cliente o su equipo. Por eso no hay porcentaje — no cobramos sobre un resultado que no controlamos. Si el cliente quiere que también cerremos, existe el Módulo de Cierre (página siguiente) o el Tier 2.'
      }
    },
    tier2: {
      etiqueta: 'TIER 2 · FLAGSHIP',
      nombre: 'CÉLULA DE ADQUISICIÓN COMPLETA',
      precio: '$3,000 setup + $1,500 USD / mes + 15% sobre ventas atribuibles',
      condiciones: 'El porcentaje arranca en el mes 2 · Permanencia mínima 3 meses',
      para: 'Para el experto agotado de vender que quiere delegar la máquina entera.',
      incluye: {
        titulo: 'Todo lo del Tier 1, más:',
        items: [
          'Setter IA: contacto telefónico automático al lead en menos de 60 segundos desde que se registra. Cualifica, confirma y se traspasa al closer con el contexto completo de lo hablado.',
          'CRM de ventas con análisis por IA: de cada llamada extrae objeción raíz, score de probabilidad de cierre, motivo real de la no-venta y grabación enlazada.',
          'Dirección comercial: dos sesiones semanales de capacitación al equipo de ventas, con roleplay sobre las objeciones reales de esa semana.',
          'Base de datos viva de objeciones del nicho, y guiones que se reescriben a partir de ella.',
          'Ajuste de oferta y promesa según lo que dicen las llamadas reales, no según lo que suponemos.',
          'Secuencia de recuperación de no-shows y de seguimientos fríos.',
          'Políticas de venta escritas para el equipo del cliente: qué se promete, qué no, y cómo se maneja cada objeción.'
        ]
      },
      ventasAtribuibles: {
        titulo: 'Definición de "ventas atribuibles" — se lee tal cual en la llamada y va en el contrato',
        texto: 'Ventas que provienen de leads generados por nuestra pauta o cerradas por closers dirigidos por nosotros, netas de reembolsos y contracargos. No incluye ventas orgánicas previas del cliente ni referidos ajenos al sistema.',
        condicion: 'Condición innegociable: acceso de solo lectura al procesador de pagos del cliente (Stripe, Hotmart, GHL Payments o el que use). Sin ese acceso no hay porcentaje: pasa a fee fijo. Un porcentaje sobre cifras auto-reportadas se convierte en conflicto en el mes cuatro, siempre.'
      }
    },
    moduloCierre: {
      titulo: 'Módulo de Cierre — Equipo de closers EVO LAUNCH',
      bajada: 'Se monta sobre cualquier tier. Es el diferenciador que ninguna agencia de pauta puede copiar, y la razón por la que podemos cobrar sobre la venta.',
      tabla: {
        headers: ['Se monta sobre', 'Precio del módulo', 'Total que paga el cliente', 'Cuándo se ofrece'],
        filas: [
          ['Tier 1', '+ $500 / mes + 12% sobre ventas cerradas por nuestro equipo', '$1,700 / mes + 12%', 'Cuando el cliente quiere volumen pero no tiene con quién cerrar, y no está listo para el Tier 2 completo.'],
          ['Tier 2', '+ $500 / mes + 5% adicional', '$2,000 / mes + 20% total', 'Por defecto. Es la configuración que ofrecemos primero en toda llamada de Tier 2.'],
          ['Tier 3', '+ $500 / mes + 12% sobre ventas cerradas', '$1,400 / mes + 12%', 'Solo si el cliente ya tiene tráfico funcionando por su cuenta y el cuello de botella es exclusivamente el cierre.']
        ]
      },
      queIncluye: {
        titulo: 'QUÉ INCLUYE',
        items: [
          'Closers asignados, entrenados y certificados internamente: nota mínima 7/10 en cualificación, presentación de servicio, transición y cierre antes de tocar un lead del cliente.',
          'Reemplazo de closer sin costo si el rendimiento no cumple en 30 días.',
          'Dirección del equipo a cargo de la dirección comercial de EVO LAUNCH.',
          'El cliente no recluta, no entrena, no dirige y no paga fijos de vendedores.'
        ]
      },
      argumento: {
        titulo: 'EL ARGUMENTO — SE DICE ASÍ EN LA LLAMADA',
        texto: '"Un equipo de closers armado por fuera te cuesta entre 10% y 15% de cada venta, más el tiempo tuyo reclutando, entrenando y dirigiendo, que es donde de verdad se te va la vida. Dentro del paquete completo son cinco puntos y quinientos dólares al mes, y el equipo te llega ya entrenado y dirigido. El equipo se paga solo con las ventas que cierra."',
        cierre: 'Este es el único punto de la oferta donde el prospecto compara contra un precio de mercado conocido y sale ganando de forma obvia. Se usa siempre.'
      }
    },
    tier3: {
      etiqueta: 'TIER 3',
      nombre: 'MÓDULOS SUELTOS',
      precio: '$900 – $1,200 USD / mes + setup de $500 a $800',
      condiciones: 'Sin porcentaje (salvo módulo de cierre)',
      para: 'Puerta de entrada y red de seguridad. Nunca se promociona.',
      tablaModulos: {
        headers: ['Módulo', 'Qué incluye', 'Setup', 'Mensual'],
        filas: [
          ['Trafficker', 'Pauta en Meta, creativos y copy. Sin embudo ni cierre.', '$800', '$1,200'],
          ['Setter IA + CRM', 'Contacto al lead en menos de 60 seg, cualificación y CRM con análisis de llamadas por IA.', '$500', '$900'],
          ['Embudo / VSL', 'Construcción de landing + VSL + formulario. Entrega única, sin operación.', '$1,200', '—'],
          ['Equipo de closers dirigido', 'Closers certificados + dirección comercial. Requiere que el cliente ya tenga tráfico.', '$500', '$500 + 12%']
        ]
      },
      tresUsos: {
        titulo: 'Los tres usos del Tier 3 — en este orden',
        items: [
          'Cliente con ticket entre $900 y $1,499. No califica para Tier 1 ni 2, pero sí podemos ayudarlo con una pieza. Se entrega bien, se genera resultado, y en el mes 3 o 4 se convierte en el upsell natural a Tier 1 o 2.',
          'Downsell dentro de la llamada. El prospecto califica pero no puede con la inversión del Tier 2. En vez de bajar el precio del Tier 2 (prohibido), se le baja el alcance.',
          'Puerta de entrada de bajo riesgo para el prospecto que viene quemado de una agencia anterior y necesita ver algo funcionando antes de comprometerse a lo grande.'
        ]
      },
      regla: 'Regla: el Tier 3 no aparece en anuncios, ni en la landing, ni en el VSL. Solo existe dentro de la llamada. Si se promociona, canibaliza el Tier 2 y destruye el posicionamiento.'
    }
  },

  /* ===== SECCIÓN 6 — HOJA DE PRECIOS ===== */
  sec6: {
    num: '6',
    titulo: 'Hoja de precios',
    bajada: 'Esta tabla es la única fuente de verdad sobre precio. Se imprime y se tiene a la vista en cada llamada.',
    tabla: {
      headers: ['', 'TIER 3', 'TIER 1', 'TIER 2 (flagship)'],
      filas: [
        ['Setup (pago único)', '$500 – $1,200', '$2,500', '$3,000'],
        ['Fee mensual', '$900 – $1,200', '$1,200', '$1,500'],
        ['% sobre ventas atribuibles', 'No', 'No', '15% (desde mes 2)'],
        ['Con Módulo de Cierre', '+$500 + 12%', '+$500 + 12%', '+$500 + 5% = $2,000/mes + 20%'],
        ['Ticket mínimo del cliente', '$900', '$1,500', '$1,500'],
        ['Presupuesto de pauta mínimo', '$1,000 / mes', '1 ticket, piso $1,500 / mes', '1 ticket, piso $1,500 / mes'],
        ['Permanencia mínima', '2 meses', '3 meses', '3 meses'],
        ['Embudo y VSL', 'Según módulo', 'Sí', 'Sí'],
        ['Pauta, creativos y copy', 'Según módulo', 'Sí', 'Sí'],
        ['Setter IA (contacto en 60 seg)', 'Módulo', 'No', 'Sí'],
        ['CRM con análisis de llamadas por IA', 'Módulo', 'No', 'Sí'],
        ['Dirección comercial 2×/semana', 'No', 'No', 'Sí'],
        ['Ajuste de oferta y guiones', 'No', 'No', 'Sí'],
        ['Garantía de agendas (Sección 8)', 'No', 'Sí', 'Sí'],
        ['Facturación nuestra mes 1', '$1,400 – $2,000', '$3,700', '$5,000'],
        ['Facturación nuestra mes 3+ (ticket $2,000)', '$900 – $1,200', '$1,200', '$4,000']
      ]
    },
    reglas: {
      titulo: 'Reglas de la hoja de precios',
      items: [
        'El orden de presentación en llamada es: Tier 2 con Módulo de Cierre primero. Siempre. Se baja de ahí solo si el prospecto no puede. Nunca se sube desde abajo.',
        'El setup se cobra por adelantado, completo, antes del día 1 de instalación. Sin excepciones. El setup es lo que separa a un cliente de un curioso.',
        'El porcentaje arranca en el mes 2. El mes 1 es instalación. Cobrar porcentaje sobre ventas que el cliente ya venía haciendo orgánicamente es exactamente donde nacen los conflictos.',
        'Cap operativo: 10 clientes simultáneos. Al llegar a 10 se cierra la entrada y se sube el precio del siguiente lote. La escasez es real, no un truco de llamada.'
      ]
    }
  },

  /* ===== SECCIÓN 7 — BONOS ===== */
  sec7: {
    num: '7',
    titulo: 'Bonos',
    bajada: 'Costo marginal cercano a cero para nosotros, valor alto y verificable en pantalla para el prospecto.',
    intro: 'Un bono solo sirve si se puede mostrar en vivo durante la llamada. Un bono que se describe pero no se ve es una promesa más, y el prospecto ya escuchó demasiadas. Todos los de esta lista se abren en pantalla compartida.',
    tabla: {
      headers: ['Bono', 'Incluido en', 'Cómo se demuestra en llamada', 'Por qué funciona'],
      filas: [
        ['Setter IA — contacto en menos de 60 segundos', 'Tier 2', 'Se registra un lead de prueba en vivo y suena el teléfono del prospecto mientras siguen hablando.', 'Es el momento más impactante de toda la llamada. Speed-to-lead es una métrica que el experto entiende sin explicación. Considerarlo entregable titular, no bono secundario.'],
        ['CRM con análisis de llamadas por IA', 'Tier 2', 'Se abre una llamada real y se muestra la objeción raíz detectada, el score de cierre y el motivo de la no-venta.', 'Ninguna agencia de pauta entrega esto. Convierte una conversación sobre publicidad en una conversación sobre su departamento de ventas.'],
        ['Auditoría de píxel y eventos', 'Todos los tiers', 'Se revisa su píxel en pantalla durante la primera llamada y se le muestran los eventos rotos.', '15 minutos de trabajo nuestro. El 80% lo tiene mal configurado. Es la prueba de competencia técnica más rápida que existe y se entrega antes de que pague.'],
        ['Biblioteca de creativos ganadores de su vertical', 'Tier 1 y 2', 'Se le muestran 3 o 4 anuncios activos de su nicho y qué los hace funcionar.', 'Costo cero. Refuerza el argumento de que cada cliente nuevo se beneficia del aprendizaje de todos los anteriores.'],
        ['Dashboard de atribución en vivo', 'Tier 1 y 2', 'Se abre el dashboard de un cliente real (con datos financieros ocultos) y se muestra la vista que él tendría.', 'Es el antídoto directo contra el trauma de la agencia opaca anterior. "Vas a ver lo mismo que veo yo, cuando quieras."'],
        ['Políticas de venta escritas para su equipo', 'Tier 2', 'Se muestra el documento de políticas: qué se promete, qué no, cómo se maneja cada objeción.', 'El experto que ya tuvo vendedores sabe lo que cuesta que cada uno venda a su manera. Esto le habla directo.']
      ]
    },
    nuncaBono: {
      titulo: 'Lo que NUNCA puede ser un bono',
      texto: 'Nada que consuma horas humanas recurrentes nuestras. Ni consultorías mensuales, ni "sesiones estratégicas ilimitadas", ni soporte 24/7, ni revisiones sin límite. Con diez clientes simultáneos, un solo bono de ese tipo destruye la operación completa y nos obliga a bajar la calidad de todos.',
      cierre: 'Si un bono no se puede entregar diez veces al mismo tiempo sin costo adicional, no es un bono: es una deuda.'
    }
  },

  /* ===== SECCIÓN 8 — LA GARANTÍA ===== */
  sec8: {
    num: '8',
    titulo: 'La garantía',
    bajada: 'Todavía no tenemos un caso propio de EVO LAUNCH. Ese hueco no lo tapa un descuento: lo tapa una garantía.',
    intro: 'La garantía es el mecanismo estándar para vender sin prueba propia acumulada. Pero solo funciona si garantizamos la variable que controlamos. Garantizar ventas cuando el cliente cierra sus propias llamadas es firmar un problema. Garantizar agendas cualificadas es firmar algo que depende de nuestro trabajo.',
    textoGarantia: {
      titulo: 'El texto de la garantía — se dice así, y va escrito en el contrato',
      // {N} se reemplaza por el número calculado
      plantilla: 'En 60 días generamos [N] llamadas agendadas cualificadas. Si no llegamos a ese número, seguimos trabajando sin cobrar fee mensual hasta llegar.',
      nota: 'En Tier 2 con Módulo de Cierre, donde nuestros closers cierran, la garantía puede formularse sobre ventas cerradas en lugar de agendas — porque ahí sí controlamos toda la cadena. Esa versión la autoriza únicamente la dirección, caso por caso.'
    },
    formula: {
      titulo: 'Cómo se calcula [N] — la fórmula',
      intro: 'El número nunca se improvisa en la llamada. Se calcula con esta fórmula antes de la segunda reunión y se presenta ya escrito dentro de la propuesta.',
      expresion: 'Agendas garantizadas (60 días) = ( Presupuesto de pauta a 60 días ÷ CPA de garantía ) × 0.65',
      donde: 'donde: CPA de garantía = CPA de referencia del vertical × 1.4 (colchón de seguridad)',
      // Constantes de la fórmula (editables)
      factorSeguridad: 0.65,
      colchonCPA: 1.4,
      diasPeriodo: 60
    },
    tablaVerticales: {
      nota: 'El factor 0.65 y el multiplicador 1.4 no son arbitrarios: existen para que la garantía se cumpla incluso en un mes malo. Prometer justo lo que esperamos lograr es cómo se pierde una garantía.',
      headers: ['Vertical del cliente', 'CPA agenda de referencia', 'CPA de garantía', 'Agendas garantizadas con $1,500/mes', 'Agendas garantizadas con $3,000/mes'],
      // cpaRef es el dato canónico; cpaGarantia y las agendas se muestran tal cual el PDF
      verticales: [
        { nombre: 'Negocios, marketing y ventas',   cpaRef: 45, cpaGarantia: 63,  garantia1500: 30, garantia3000: 61 },
        { nombre: 'Finanzas e inversión',           cpaRef: 52, cpaGarantia: 73,  garantia1500: 26, garantia3000: 53 },
        { nombre: 'Desarrollo personal y mindset',  cpaRef: 40, cpaGarantia: 56,  garantia1500: 34, garantia3000: 69 },
        { nombre: 'Salud, fitness y nutrición',     cpaRef: 37, cpaGarantia: 52,  garantia1500: 37, garantia3000: 75 },
        { nombre: 'Inmobiliaria',                   cpaRef: 60, cpaGarantia: 84,  garantia1500: 23, garantia3000: 46 },
        { nombre: 'B2B y consultoría de empresa',   cpaRef: 72, cpaGarantia: 101, garantia1500: 19, garantia3000: 38 }
      ]
    },
    siguientePaso: {
      titulo: 'Siguiente paso: calculadora de garantía',
      texto: 'Estos números salen de referencias de mercado, no de nuestra data. En cuanto tengamos 60 días de pauta corriendo en tres clientes, el CPA de referencia de cada vertical se reemplaza por el CPA real observado y la tabla pasa a ser una calculadora que toma presupuesto, vertical y ticket, y devuelve el número de la garantía personalizado por lead. Hasta entonces, esta tabla es el estándar y no se improvisan números en llamada.'
    },
    invalidaGarantia: {
      titulo: 'Qué invalida la garantía — se explicita en el contrato',
      headers: ['Condición', 'Motivo'],
      filas: [
        ['El cliente no mantiene el presupuesto de pauta comprometido durante los 60 días', 'Sin la inversión sobre la que se calculó el número, el número no existe.'],
        ['El cliente rechaza, retrasa o modifica creativos, embudo u oferta por criterio propio contra nuestra recomendación', 'Si toma el control de las variables, toma también el resultado.'],
        ['La cuenta publicitaria del cliente es restringida o bloqueada por causas ajenas a nosotros', 'Fuera de nuestro control operativo. Se pausa el conteo hasta restablecer.'],
        ['El cliente cambia su oferta, su precio o su promesa durante el período', 'Invalida toda la data acumulada y reinicia la fase de aprendizaje.'],
        ['Demoras del cliente en entregar accesos, material o aprobaciones', 'El plazo de 60 días se cuenta desde que están todos los accesos, no desde la firma.']
      ]
    }
  },

  /* ===== SECCIÓN 9 — POLÍTICA DE PRECIO Y DESCUENTOS ===== */
  sec9: {
    num: '9',
    titulo: 'Política de precio y descuentos',
    bajada: 'Los primeros cinco clientes fijan el precio de los próximos cincuenta.',
    laRegla: {
      titulo: 'La regla',
      texto: 'No se descuenta el precio. Nunca. Si cerramos el primer deal a $1,800, ese pasa a ser nuestro precio real para siempre: el cliente lo comenta, el closer lo interioriza, y el ancla queda destruida antes de existir. Descontar con cero clientes en cartera es el error más caro y más difícil de revertir de toda la operación.',
      cierre: 'Cuando el prospecto no puede con el precio, no se baja el precio: se baja el alcance. Para eso existe el Tier 3.'
    },
    palancas: {
      titulo: 'Las cuatro palancas permitidas',
      intro: 'Producen el mismo efecto psicológico que un descuento sin tocar el precio. Cualquier cosa fuera de estas cuatro requiere autorización escrita de dirección antes de la llamada, no durante.',
      headers: ['Palanca', 'Cómo funciona', 'Cuándo se usa', 'Qué protege'],
      filas: [
        ['1. Prepago trimestral', 'Setup completo + 3 meses adelantados = 1 mes bonificado. En Tier 2: $3,000 + $4,500 y el mes 4 va sin fee.', 'Cuando el prospecto tiene el capital pero busca sentir que ganó algo.', 'El precio de lista queda intacto y nosotros nos llevamos caja por adelantado para operar la pauta.'],
        ['2. Incentivo por decisión en 48 horas', 'Un entregable adicional, no dólares menos: un segundo ángulo de embudo completo, o el CRM incluido en un Tier 1.', 'Al cierre de la segunda llamada, cuando hay interés real pero falta empuje.', 'Crea urgencia sin señalar que el precio era negociable.'],
        ['3. Setup reducido a cambio de mayor porcentaje', '$1,500 de setup + 25% sobre ventas, en lugar de $3,000 + 20%. Solo Tier 2 con Módulo de Cierre.', 'Con el prospecto de ticket alto y presupuesto ajustado que cree de verdad en su oferta.', 'Filtra al que no cree en su propio producto y alinea incentivos al máximo. A mediano plazo facturamos más.'],
        ['4. Precio de fundador explícito', '"Los primeros 5 clientes entran a $3,000 de setup. Del sexto en adelante son $4,500."', 'Desde la primera llamada, como marco. No como cierre de emergencia.', 'Es verdad, es verificable, y crea urgencia real sin inventar escasez. Cuando lleguemos a 5, el precio sube de verdad.']
      ]
    },
    empujaPrecio: {
      titulo: 'Qué hacer cuando el prospecto igual empuja el precio',
      texto: '"El precio es el precio, y te explico por qué: si te lo bajo a vos, le estoy cobrando de más al que entró la semana pasada. Lo que sí puedo hacer es ajustar el alcance a tu presupuesto de hoy y subirte cuando el sistema esté generando. ¿Querés que veamos esa opción?"',
      cierre: 'Esto convierte la negociación de precio en una conversación de alcance — que es una conversación que ganamos.'
    }
  },

  /* ===== SECCIÓN 10 — RUTA DEL PROSPECTO Y CUALIFICACIÓN ===== */
  sec10: {
    num: '10',
    titulo: 'Ruta del prospecto y cualificación',
    bajada: 'Del primer contacto a la firma. Dos llamadas, nunca tres.',
    ruta: {
      headers: ['Etapa', 'Qué pasa', 'Quién', 'Criterio para avanzar'],
      filas: [
        ['1. Contacto', 'Red caliente y referidos primero; tráfico frío o prospección en Meta Ad Library después. El ángulo usado se registra (Sección 11).', 'Dirección comercial / setter', 'Responde y acepta responder el formulario.'],
        ['2. Formulario de cualificación', 'Fricción estratégica deliberada. Filtra curiosos sin presupuesto antes de gastar una hora de llamada.', 'Automático', 'Semáforo verde o amarillo (ver abajo).'],
        ['3. Llamada 1 — Diagnóstico', '45–60 min. Se captan los dolores, se hace la aritmética en pantalla con SUS números, se muestra quiénes somos y qué hacemos. No se pitchea precio. Se cierra fijando la llamada 2 como "la llamada de decisión".', 'Closer', 'El prospecto reconoce el número que está dejando en la mesa y acepta la llamada 2 con el decisor presente.'],
        ['4. Propuesta', 'Documento con diagnóstico, plan, garantía calculada y precio. Se envía una hora antes de la llamada 2, nunca dos días antes.', 'Closer', 'Enviada y confirmada la recepción.'],
        ['5. Llamada 2 — Decisión', '30–45 min. Se revisa la propuesta, se manejan objeciones (Sección 12) y se cierra. Sí o no, no "lo pienso".', 'Closer', 'Firma y cobro del setup.'],
        ['6. Onboarding', 'Accesos, kickoff, calendario de instalación de 14 días. El reloj de la garantía arranca cuando están todos los accesos.', 'Dirección', '—']
      ]
    },
    propuestaTiming: {
      titulo: 'Por qué la propuesta se manda una hora antes y no dos días antes',
      texto: 'Dos días de espera es tiempo para que el prospecto invente objeciones solo, busque alternativas y se enfríe. Una hora antes genera la emoción del "esto podría estar funcionando en mi negocio" y la llamada entra en caliente. Esto no es un truco de presión: es reconocer que la decisión se toma en la conversación, no en la lectura.'
    },
    formulario: {
      titulo: 'Formulario de cualificación',
      bajada: 'Diez preguntas. Las marcadas con ◆ son de descalificación automática.',
      // Cada pregunta: id, descalificadora (◆), texto, opciones [{label, valor, semaforo}], regla
      // semaforo por opción: 'verde' | 'amarillo' | 'rojo' | null (contexto, no puntúa)
      preguntas: [
        {
          id: 'q1', desc: true,
          texto: '¿Cuál es el precio de tu oferta principal?',
          regla: 'Menos de $900: rojo. $900–1,499: amarillo, ruta Tier 3. $1,500+: verde.',
          opciones: [
            { label: 'menos de $500', semaforo: 'rojo' },
            { label: '$500–899', semaforo: 'rojo' },
            { label: '$900–1,499', semaforo: 'amarillo' },
            { label: '$1,500–2,999', semaforo: 'verde' },
            { label: '$3,000 o más', semaforo: 'verde' }
          ]
        },
        {
          id: 'q2', desc: false,
          texto: '¿Cuánto facturaste el último mes?',
          regla: 'Contexto, no descalifica. Más de $30K con ticket alto: prioridad máxima.',
          opciones: [
            { label: 'menos de $3K', semaforo: null },
            { label: '$3–5K', semaforo: null },
            { label: '$5–10K', semaforo: null },
            { label: '$10–30K', semaforo: null },
            { label: 'más de $30K', semaforo: null }
          ]
        },
        {
          id: 'q3', desc: true,
          texto: '¿Cuántas ventas de tu oferta principal cerraste el último mes?',
          regla: '0 ventas: rojo. Oferta sin validar, no es nuestro cliente.',
          opciones: [
            { label: '0', semaforo: 'rojo' },
            { label: '1–2', semaforo: 'amarillo' },
            { label: '3–6', semaforo: 'verde' },
            { label: '7–15', semaforo: 'verde' },
            { label: 'más de 15', semaforo: 'verde' }
          ]
        },
        {
          id: 'q4', desc: false,
          texto: '¿Quién cierra las ventas hoy?',
          regla: '"Yo mismo" = Tipo A, el perfil ideal. "Checkout" = revisar si realmente es high ticket.',
          opciones: [
            { label: 'Yo mismo', semaforo: null },
            { label: 'Un closer propio', semaforo: null },
            { label: 'Un equipo', semaforo: null },
            { label: 'Nadie, se vende por checkout', semaforo: null }
          ]
        },
        {
          id: 'q5', desc: false,
          texto: '¿Cuánto invertiste en publicidad pagada el último mes?',
          regla: '$0 con ventas orgánicas sólidas = Tipo A puro. Máxima prioridad.',
          opciones: [
            { label: '$0', semaforo: null },
            { label: 'menos de $500', semaforo: null },
            { label: '$500–1,500', semaforo: null },
            { label: '$1,500–3,000', semaforo: null },
            { label: 'más de $3,000', semaforo: null }
          ]
        },
        {
          id: 'q6', desc: true,
          texto: '¿Qué presupuesto mensual tenés disponible para publicidad los próximos 3 meses, sin contar el costo del servicio?',
          regla: 'Menos de $1,000: rojo. $1,000–1,499: amarillo, solo Tier 3. $1,500+: verde.',
          opciones: [
            { label: 'menos de $1,000', semaforo: 'rojo' },
            { label: '$1,000–1,499', semaforo: 'amarillo' },
            { label: '$1,500–2,999', semaforo: 'verde' },
            { label: '$3,000–5,000', semaforo: 'verde' },
            { label: 'más de $5,000', semaforo: 'verde' }
          ]
        },
        {
          id: 'q7', desc: true,
          texto: 'Si mañana entraran 10 clientes nuevos, ¿podrías atenderlos con la calidad de hoy?',
          regla: '"No": rojo, se pospone 60 días. "30 días": amarillo, se ajusta el ritmo de escalado.',
          opciones: [
            { label: 'Sí', semaforo: 'verde' },
            { label: 'Necesitaría unos 30 días', semaforo: 'amarillo' },
            { label: 'No', semaforo: 'rojo' }
          ]
        },
        {
          id: 'q8', desc: false,
          texto: '¿Sos vos quien toma la decisión de inversión?',
          regla: 'Si es compartida, la llamada 2 se agenda con el decisor presente. No se pitchea sin él.',
          opciones: [
            { label: 'Sí, solo yo', semaforo: 'verde' },
            { label: 'La comparto con socio o pareja', semaforo: 'amarillo' },
            { label: 'Decide otra persona', semaforo: 'amarillo' }
          ]
        },
        {
          id: 'q9', desc: false,
          texto: '¿Hace cuánto estás en tu nivel de facturación actual?',
          regla: 'Más de 6 meses estancado = dolor maduro. Mejor prospecto que el que recién empieza a notarlo.',
          opciones: [
            { label: 'menos de 3 meses', semaforo: null },
            { label: '3–6 meses', semaforo: null },
            { label: '6–12 meses', semaforo: null },
            { label: 'más de 12 meses', semaforo: null }
          ]
        },
        {
          id: 'q10', desc: false,
          texto: '¿Trabajaste antes con una agencia o freelancer de publicidad? ¿Qué pasó?',
          regla: 'Si el relato es 100% culpa ajena sin ninguna responsabilidad propia: señal de alerta (Sección 3).',
          // Respuesta abierta en el PDF; se ofrece opción para poder puntuar el descalificador de Sección 3
          abierta: true,
          opciones: [
            { label: 'No trabajé antes con ninguna', semaforo: null },
            { label: 'Sí, y reconoce parte de la responsabilidad', semaforo: null },
            { label: 'Sí, y es 100% culpa ajena (señal de alerta)', semaforo: 'rojo' }
          ]
        }
      ],
      semaforoFinal: {
        headers: ['Semáforo', 'Condición', 'Acción'],
        filas: [
          ['VERDE', 'Ticket $1,500+ · presupuesto $1,500+/mes · 3 o más ventas el último mes · puede atender más volumen', 'Se agenda llamada 1 de inmediato, prioridad alta. Ruta Tier 2 con Módulo de Cierre.'],
          ['AMARILLO', 'Ticket $900–1,499 · o presupuesto $1,000–1,499 · o decisión compartida · o necesita 30 días de capacidad', 'Se agenda llamada 1, pero se prepara ruta Tier 3 y se pide la presencia del decisor.'],
          ['ROJO', 'Cualquier descalificador de la Sección 3, o cualquier ◆ en rojo', 'No se agenda. Respuesta honesta con el motivo y seguimiento a 60 o 90 días.']
        ]
      }
    }
  },

  /* ===== SECCIÓN 11 — QUÉ TESTEAMOS ===== */
  sec11: {
    num: '11',
    titulo: 'Qué testeamos al salir al mercado',
    bajada: 'Lo único variable es el ángulo de entrada. Todo lo demás queda fijo durante el test.',
    intro: 'Vamos a tener entre 10 y 30 conversaciones, no 500. Con ese volumen, si además movemos precio, entregables o garantía, no obtenemos data: obtenemos ruido. Precio, tiers, entregables y garantía quedan congelados. Lo que testeamos es la promesa con la que abrimos.',
    angulos: {
      headers: ['Ángulo', 'La promesa', 'Gancho para anuncio o mensaje', 'A quién le pega', 'Hipótesis'],
      filas: [
        ['A · Liberación del fundador', 'Dejá de ser el cuello de botella de tu propio negocio.', '"Si mañana dejás de grabar contenido, ¿cuántas ventas hacés la semana que viene?"', 'Tipo A agotado, con audiencia, que vive del orgánico.', 'Alta resonancia emocional, pero el prospecto puede no conectarlo con contratar pauta.'],
        ['B · La aritmética implacable', 'Tu ticket aguanta pagar $400 por cada cliente nuevo. Hoy pagás $0 porque no pautás. Ese es el dinero que dejás en la mesa.', '"Con un ticket de $2,000 podés pagar hasta $500 por venta y seguir ganando. ¿Sabés cuánto estás pagando hoy?"', 'El experto analítico, el que viene de un negocio o de finanzas.', 'Muy fuerte para diferenciar y para justificar el precio, pero requiere que el prospecto piense en números.'],
        ['C · Delegación total del cierre', 'Nosotros traemos los leads Y los cerramos. Tu única métrica pasa a ser cuántos clientes entran por semana.', '"¿Cuántas horas por semana se te van en llamadas de venta que no cierran?"', 'Tipo A que cierra él mismo y odia vender.', 'Nuestra apuesta. El dolor real de este ICP no es la pauta: es tener que vender. Además es lo único que ninguna agencia ofrece.']
      ]
    },
    medimos: {
      metricasTitulo: 'MÉTRICAS POR ÁNGULO',
      metricas: [
        'Tasa de respuesta sobre contactos iniciados',
        'Tasa de agenda sobre conversación iniciada — la métrica principal',
        'Tasa de asistencia a la llamada 1',
        'Objeción dominante — cuál aparece primero y con más frecuencia',
        'Tasa de avance de llamada 1 a llamada 2',
        'Cierres'
      ],
      reglasTitulo: 'REGLAS DEL TEST',
      reglas: [
        'Mínimo 20 conversaciones por ángulo antes de concluir nada. Por debajo de eso es intuición disfrazada de data.',
        'Un ángulo por lote de prospección. No se mezclan en el mismo mensaje.',
        'Cada conversación se registra con el ángulo usado. Sin registro, el test no existe.',
        'La revisión es semanal, entre dirección y dirección comercial, con los números a la vista.',
        'El ángulo ganador pasa al VSL y a los anuncios. Los otros dos quedan como variantes de prueba.'
      ]
    }
  },

  /* ===== SECCIÓN 12 — MANEJO DE OBJECIONES ===== */
  sec12: {
    num: '12',
    titulo: 'Manejo de objeciones',
    bajada: 'Las siete que van a aparecer. Las cuatro primeras se rompen antes de que las digan.',
    principio: {
      titulo: 'Principio operativo',
      texto: 'Una objeción rota antes de aparecer vale diez veces más que una respondida bien. Las objeciones de decisor compartido, de plazo y de "lo pienso" se desactivan en los primeros cinco minutos de la llamada 1, encuadrando el proceso: "en esta primera llamada vemos si tiene sentido trabajar juntos; en la segunda tomás la decisión, sí o no. Para eso necesito que estén las personas que deciden, y necesito una respuesta ese día — porque si no, estoy invirtiendo tiempo que le corresponde a otro cliente."'
    },
    // Acordeón: objeción visible, respuesta al desplegar
    objeciones: [
      {
        objecion: '"Es caro"',
        detras: 'No hizo la cuenta. Casi nunca es falta de dinero: es falta de referencia.',
        respuesta: 'Se responde con la Sección 4, en pantalla: "Con tu ticket de $2,000, la instalación se paga con dos clientes. ¿Cuántos cerraste el mes pasado? Bien, entonces esto se paga con el 40% de un mes tuyo normal, y a partir de ahí todo lo demás es incremental."'
      },
      {
        objecion: '"Ya trabajé con una agencia y no funcionó"',
        detras: 'La objeción más común y la mejor noticia de la llamada: significa que tiene presupuesto y ya intentó.',
        respuesta: '"Te entiendo, y te voy a decir exactamente dónde te fallaron: te entregaron leads y ahí terminó su responsabilidad. Cobraron igual vendieras o no. Nosotros cobramos sobre la venta. Si el lead no se convierte, nosotros tampoco ganamos." Se sigue mostrando el dashboard en vivo como respuesta a la opacidad.'
      },
      {
        objecion: '"¿Por qué el porcentaje? Prefiero pagar solo fijo"',
        detras: 'Miedo a pagar de más si funciona muy bien.',
        respuesta: '"Podés pagar solo fijo, existe esa opción. Pero fijate lo que pasa: si me pagás solo fijo, mi trabajo termina cuando te entrego la llamada agendada. Con el porcentaje, mi trabajo termina cuando vos cobrás. El porcentaje no es un costo: es la garantía de que estoy mirando tu número, no el mío."'
      },
      {
        objecion: '"Lo tengo que consultar con mi socio / mi pareja"',
        detras: 'Objeción de decisor. Si aparece en la llamada 2, se falló en la llamada 1.',
        respuesta: 'Se rompe antes: en el minuto uno de la llamada 1 se pregunta quién participa de la decisión y se pide que esté presente en la segunda. Si igual aparece: "Perfecto, es lo lógico. Agendemos ahora mismo veinte minutos con los dos, así responde las dudas directamente y no queda en un teléfono roto."'
      },
      {
        objecion: '"Necesito pensarlo"',
        detras: 'Casi siempre hay una objeción real sin decir.',
        respuesta: '"Claro. Solo para no dejarte con la duda: si tuvieras que decirme hoy qué es lo que más te frena, ¿qué sería? ¿El monto, el plazo, o si esto funciona para tu nicho en particular?" La respuesta trae la objeción verdadera, que sí se puede trabajar.'
      },
      {
        objecion: '"¿Puedo probar un mes?"',
        detras: 'Quiere reducir riesgo. Es legítimo, pero destruye el resultado.',
        respuesta: '"No, y te explico por qué te conviene que diga que no: el primer mes es fase de aprendizaje del algoritmo y de recolección de data. Si cortamos ahí, cortás justo antes de que empiece a funcionar y te quedás con la peor foto posible. Por eso el mínimo son tres meses, y por eso existe la garantía."'
      },
      {
        objecion: '"¿Y si no funciona?"',
        detras: 'Pregunta honesta. Merece respuesta honesta, no una promesa.',
        respuesta: 'Se responde con la Sección 8, con el número ya calculado: "En 60 días te generamos [N] llamadas agendadas cualificadas. Si no llegamos a ese número, seguimos trabajando sin cobrarte fee mensual hasta llegar. Lo que no te puedo garantizar es tu tasa de cierre, porque esa depende de la conversación — salvo que también cerremos nosotros, y entonces sí te lo garantizo sobre ventas."'
      }
    ]
  },

  /* ===== SECCIÓN 13 — REGLAS INTERNAS + CHECKLIST ===== */
  sec13: {
    num: '13',
    titulo: 'Reglas internas no negociables',
    bajada: 'Cada una existe porque su ausencia ya costó algo en un proyecto anterior.',
    reglas: {
      headers: ['#', 'Regla', 'Qué previene'],
      filas: [
        ['1', 'El precio de la Sección 6 es fijo. Solo las cuatro palancas de la Sección 9 modifican la propuesta económica, y solo dentro de sus condiciones.', 'Que el primer cliente fije un ancla de precio baja para los siguientes cincuenta.'],
        ['2', 'Solo se muestra prueba real. Capturas reales de Ads Manager, dashboards de clientes reales, resultados verificables. Cero paneles de demostración presentados como clientes, cero perfiles de respaldo, cero cifras inventadas.', 'Exposición legal, y la repetición exacta del problema que ya conocemos de otro proyecto. Un caso real modesto cierra mejor que uno grande fabricado, porque aguanta ser interrogado.'],
        ['3', 'La cuenta publicitaria vive siempre en el Business Manager del cliente. Nosotros entramos como socio con permisos. Nunca al revés.', 'Perder el historial y la data del cliente si nos restringen una cuenta — algo que ya pasó con una cuenta de $37,000 de gasto.'],
        ['4', 'Acceso de solo lectura al procesador de pagos como condición de cualquier porcentaje. Sin acceso, no hay porcentaje: pasa a fee fijo.', 'Que en el mes cuatro, cuando la cifra sea grande, el número reportado empiece a bajar. Pasa siempre.'],
        ['5', 'El porcentaje arranca en el mes 2. El mes 1 es instalación.', 'Cobrar sobre ventas orgánicas preexistentes, que es donde nace el primer conflicto.'],
        ['6', 'No se firma sin presupuesto de pauta comprometido y verificado.', 'Comernos la garantía por una inversión que nunca llegó a existir.'],
        ['7', 'El setup se cobra al 100% antes del día 1 de instalación.', 'Trabajar catorce días para alguien que todavía no decidió.'],
        ['8', 'Cap operativo de 10 clientes simultáneos. Al llegar, se cierra la entrada y sube el precio del siguiente lote.', 'Que la calidad de entrega caiga y perdamos los casos de éxito que necesitamos para vender los siguientes.'],
        ['9', 'Nada se promete en llamada que no esté escrito en este documento. Toda promesa fuera de aquí requiere aprobación escrita de dirección antes de la llamada, nunca durante.', 'La brecha entre lo que vendió el closer y lo que puede entregar la operación.'],
        ['10', 'Este documento se actualiza cuando cambia una decisión. Si algo cambió y no está acá, no ocurrió.', 'Que el equipo venda tres versiones distintas de la misma oferta.']
      ]
    },
    checklist: {
      titulo: 'Checklist antes de firmar cualquier cliente',
      bajada: 'Los diez puntos se verifican y se marcan. Si falta uno, no se firma.',
      items: [
        'Ticket del cliente confirmado en $1,500 o más (Tier 1 y 2) o entre $900 y $1,499 (Tier 3)',
        'Presupuesto de pauta comprometido, verificado y disponible: mínimo un ticket, piso $1,500/mes',
        'Al menos 3 ventas de su oferta principal el último mes (oferta validada)',
        'Decisor identificado y presente en la llamada de cierre',
        'Capacidad de entrega confirmada para al menos 3× su volumen actual',
        'Número de la garantía calculado con la fórmula de la Sección 8 y escrito en la propuesta',
        'Setup cobrado al 100%',
        'Acceso de solo lectura al procesador de pagos concedido (si hay porcentaje)',
        'Acceso al Business Manager del cliente concedido, con la cuenta publicitaria a su nombre',
        'Alcance firmado corresponde exactamente a un tier de la Sección 6, sin agregados verbales'
      ],
      proximaRevision: 'Próxima revisión obligatoria: al cerrar los primeros 3 clientes, o a los 30 días desde la primera llamada de venta — lo que ocurra primero. En esa revisión se reemplazan los CPA de referencia de la Sección 8 por los CPA reales observados, y se decide el ángulo ganador de la Sección 11.'
    }
  }
};

/* Exponer para el HTML (sin módulos, sin build) */
if (typeof window !== 'undefined') {
  window.DATA = DATA;
  window.PRECIOS = PRECIOS;
}
