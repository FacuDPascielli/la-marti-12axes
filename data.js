// Datos de la app: La Martí · Patria Grande · PDHI

window.APP_DATA = {
  // 6 pares de ejes = 12 polos internos dentro del campo nacional, popular y humanista
  axes: [
    {
      id: 'desarrollo',
      name: 'Modelo de Desarrollo',
      leftName: 'Reindustrialización y Complejidad Productiva',
      rightName: 'Economía Popular, Cuidado y Ecología Integral',
      leftColor: '#1a66b2',
      rightColor: '#1e7c4d',
      leftIcon: 'factory',
      rightIcon: 'leaf'
    },
    {
      id: 'organizacion',
      name: 'Arquitectura del Poder',
      leftName: 'Estado Planificador y Centralidad Federal',
      rightName: 'Gestión Comunitaria y Poder Territorial',
      leftColor: '#c6382b',
      rightColor: '#d4891c',
      leftIcon: 'state',
      rightIcon: 'community'
    },
    {
      id: 'horizonte',
      name: 'Horizonte Político-Cultural',
      leftName: 'Soberanía Nacional y Antiimperialismo',
      rightName: 'Patria Grande e Integración Latinoamericana',
      leftColor: '#1e293b',
      rightColor: '#0f766e',
      leftIcon: 'shield',
      rightIcon: 'globe'
    },
    {
      id: 'escuela',
      name: 'Urgencia Escolar Hoy',
      leftName: 'Garante de Saberes y Ascenso Social',
      rightName: 'Trinchera de Cuidado y Derechos',
      leftColor: '#6344a6',
      rightColor: '#be185d',
      leftIcon: 'book',
      rightIcon: 'heart'
    },
    {
      id: 'tecnologia',
      name: 'Conocimiento y Tecnología',
      leftName: 'Soberanía Digital e Innovación Crítica',
      rightName: 'Vínculo Presencial y Pedagogía Humana',
      leftColor: '#0284c7',
      rightColor: '#9a5b13',
      leftIcon: 'chip',
      rightIcon: 'people'
    },
    {
      id: 'metodo',
      name: 'Método de Transformación',
      leftName: 'Conducción Estratégica y Mayorías Institucionales',
      rightName: 'Protagonismo desde las Periferias',
      leftColor: '#334155',
      rightColor: '#15803d',
      leftIcon: 'compass',
      rightIcon: 'megaphone'
    }
  ],

  // 24 preguntas (4 por eje). direction: 1 suma al polo izquierdo, -1 suma al polo derecho.
  questions: [
    // Eje 1: Desarrollo
    {
      axis: 'desarrollo',
      direction: 1,
      text: 'Sin industrialización pesada, energía propia y desarrollo científico-técnico, cualquier proyecto de justicia social termina chocando contra la restricción externa.'
    },
    {
      axis: 'desarrollo',
      direction: -1,
      text: 'La economía popular y las tareas de cuidado no son un parche transitorio: sostienen el tejido social y deben ser reconocidas como eje permanente del desarrollo.'
    },
    {
      axis: 'desarrollo',
      direction: 1,
      text: 'El crecimiento económico y la diversificación productiva son la condición material indispensable para recuperar el salario y la movilidad social.'
    },
    {
      axis: 'desarrollo',
      direction: -1,
      text: 'Ningún proyecto productivo es válido si reproduce el extractivismo sin cuidar la Casa Común y la soberanía alimentaria de los pueblos.'
    },

    // Eje 2: Organización
    {
      axis: 'organizacion',
      direction: 1,
      text: 'El Estado nacional debe recuperar rectoría y planificación federal fuerte para evitar que cada provincia o municipio quede librado a su suerte.'
    },
    {
      axis: 'organizacion',
      direction: -1,
      text: 'Las organizaciones sociales, cooperadoras, bachilleratos populares y redes barriales conocen las necesidades reales mejor que cualquier escritorio estatal.'
    },
    {
      axis: 'organizacion',
      direction: 1,
      text: 'Para transformar la educación hace falta autoridad política estatal que ordene presupuestos, currículas comunes y condiciones laborales en todo el país.'
    },
    {
      axis: 'organizacion',
      direction: -1,
      text: 'La escuela pública solo se defiende si se abre a la gestión social y comunitaria, articulando con clubes, centros culturales y movimientos del barrio.'
    },

    // Eje 3: Horizonte
    {
      axis: 'horizonte',
      direction: 1,
      text: 'La prioridad estratégica hoy es reconstruir un Proyecto Nacional argentino con defensa de Malvinas, el Atlántico Sur y nuestros recursos estratégicos.'
    },
    {
      axis: 'horizonte',
      direction: -1,
      text: 'No hay salida nacional aislada: nuestra identidad y proyecto político solo cobran sentido como parte de la Patria Grande latinoamericana.'
    },
    {
      axis: 'horizonte',
      direction: 1,
      text: 'Antes que miradas cosmopolitas, necesitamos fortalecer la autoestima nacional, la historia patria y la soberanía sobre nuestro territorio.'
    },
    {
      axis: 'horizonte',
      direction: -1,
      text: 'Las luchas por tierra, techo, trabajo y educación en Argentina hermanan directamente con los movimientos populares de toda América Latina y el Sur Global.'
    },

    // Eje 4: Escuela
    {
      axis: 'escuela',
      direction: 1,
      text: 'La principal deuda con los sectores populares es garantizar que aprendan a leer, escribir, pensar matemáticamente y acceder al conocimiento complejo.'
    },
    {
      axis: 'escuela',
      direction: -1,
      text: 'Con más del 40% de pibes en la pobreza, la escuela tiene que priorizar el cuidado integral: alimentación, salud mental, afecto y sostén cotidiano.'
    },
    {
      axis: 'escuela',
      direction: 1,
      text: 'Si bajamos la exigencia académica en nombre de la contención, terminamos consolidando una "exclusión incluyente" con circuitos desiguales.'
    },
    {
      axis: 'escuela',
      direction: -1,
      text: 'La pedagogía de la ternura y el acompañamiento de trayectorias son imposibles si la escuela no aborda antes las violencias y el sufrimiento social.'
    },

    // Eje 5: Tecnología
    {
      axis: 'tecnologia',
      direction: 1,
      text: 'Los profesorados y escuelas deben apropiarse críticamente de la inteligencia artificial y desarrollar plataformas educativas públicas y soberanas.'
    },
    {
      axis: 'tecnologia',
      direction: -1,
      text: 'Frente a la hiperconectividad y los algoritmos comerciales, el aula debe resguardar el encuentro presencial, el libro en papel y la palabra cara a cara.'
    },
    {
      axis: 'tecnologia',
      direction: 1,
      text: 'Formar ciudadanía digital crítica y entregar equipamiento estatal es clave para que la brecha tecnológica no profundice la desigualdad de clase.'
    },
    {
      axis: 'tecnologia',
      direction: -1,
      text: 'Suspender el uso de celulares en la escuela obligatoria y frenar la virtualización excesiva en los profesorados protege la atención y el lazo pedagógico.'
    },

    // Eje 6: Método
    {
      axis: 'metodo',
      direction: 1,
      text: 'La militancia debe formar cuadros técnicos y políticos capaces de disputar el gobierno, planificar políticas públicas y construir mayorías electorales.'
    },
    {
      axis: 'metodo',
      direction: -1,
      text: 'Todo programa real nace de la escucha directa en las periferias geográficas y existenciales, organizando a los últimos antes de pensar en cargos.'
    },
    {
      axis: 'metodo',
      direction: 1,
      text: 'Sin decisión política firme desde la conducción del Estado, las experiencias locales quedan aisladas y no logran revertir el ajuste.'
    },
    {
      axis: 'metodo',
      direction: -1,
      text: 'El pueblo no es un destinatario pasivo de políticas públicas: debe ser protagonista en su diseño, ejecución y control cotidiano.'
    }
  ],

  // Hitos históricos, políticas y tradiciones asociadas a cada uno de los 12 polos
  poleMilestones: {
    desarrollo_left: {
      title: 'Reindustrialización y Complejidad Productiva',
      milestones: [
        '1° y 2° Plan Quinquenal (1947-1955) e IAPI',
        'Creación de INVAP, CONEA, INTA, INTI y satélites ARSAT',
        'Ley de Educación Técnico Profesional N° 26.058 (2005)',
        'Defensa del reactor nuclear CAREM y la industria nacional'
      ]
    },
    desarrollo_right: {
      title: 'Economía Popular, Cuidado y Ecología Integral',
      milestones: [
        'Mensaje Ambiental a los Pueblos de Perón (Madrid, 1972)',
        'Carta Encíclica Laudato Si’ sobre la Casa Común (2015)',
        'Creación de la UTEP y Ley de Barrios Populares / RENABAP (2018)',
        'Reconocimiento de la economía del cuidado y agroecología'
      ]
    },
    organizacion_left: {
      title: 'Estado Planificador y Centralidad Federal',
      milestones: [
        'Gratuidad Universitaria por Decreto 29.337 (1949)',
        'Ley de Financiamiento Educativo N° 26.075 (2005)',
        'Ley de Educación Nacional N° 26.206 y Paritaria Nacional Docente (2006)',
        'Planificación federal del Sistema Formador Docente'
      ]
    },
    organizacion_right: {
      title: 'Gestión Comunitaria y Poder Territorial',
      milestones: [
        'Reforma Universitaria de Córdoba (1918) y cogobierno estudiantil',
        'Movimiento de Bachilleratos Populares y Escuelas de Gestión Social',
        'Empresas Recuperadas por sus Trabajadores (post-2001)',
        'Cooperadoras escolares y Ciudades Educadoras'
      ]
    },
    horizonte_left: {
      title: 'Soberanía Nacional y Antiimperialismo',
      milestones: [
        'Combate de la Vuelta de Obligado (1845)',
        'Creación de YPF (1922) y Recuperación de YPF (2012)',
        'Causa Malvinas, Atlántico Sur y proyección Antártica',
        'Pensamiento Nacional contra la colonización pedagógica (FORJA / Jauretche)'
      ]
    },
    horizonte_right: {
      title: 'Patria Grande e Integración Latinoamericana',
      milestones: [
        'Gesta Independentista Continental (1810-1824) y Congreso de Panamá (1826)',
        'Ensayo "Nuestra América" de José Martí (1891)',
        'Cumbre de Mar del Plata: "No al ALCA" (2005)',
        'Creación de UNASUR, CELAC y solidaridad con luchas del Sur Global'
      ]
    },
    escuela_left: {
      title: 'Escuela Garante de Saberes y Ascenso Social',
      milestones: [
        'Ley 1420 de Educación Común, Laica y Gratuita (1884)',
        'Creación de la Universidad Obrera Nacional / UTN (1948)',
        'Expansión de las Universidades Nacionales del Conurbano',
        'Parejas pedagógicas y fortalecimiento de alfabetización y matemática'
      ]
    },
    escuela_right: {
      title: 'Escuela Trinchera de Cuidado y Derechos',
      milestones: [
        'Fundación Eva Perón: "Los únicos privilegiados son los niños"',
        'Ley de Educación Sexual Integral N° 26.150 (2006)',
        'Asignación Universal por Hijo - AUH (2009) y Becas Progresar',
        'Equipos de Orientación Escolar y Servicio Alimentario Escolar (SAE)'
      ]
    },
    tecnologia_left: {
      title: 'Soberanía Digital e Innovación Crítica',
      milestones: [
        'Programa Conectar Igualdad (2010) y netbooks para estudiantes',
        'Lanzamiento de los satélites ARSAT-1 (2014) y ARSAT-2 (2015)',
        'Desarrollo de plataformas educativas públicas y software libre',
        'Lineamientos de Transformación Digital Humana e IA soberana (2026)'
      ]
    },
    tecnologia_right: {
      title: 'Vínculo Presencial y Pedagogía Humana',
      milestones: [
        'Experiencia de las Escuelas Rurales del Maestro Luis Iglesias',
        'Pedagogía del Oprimido de Paulo Freire: diálogo y encuentro',
        'Escuelas de la Patria de Simón Rodríguez ("O inventamos o erramos")',
        'Defensa de la presencialidad en profesorados y regulación de celulares'
      ]
    },
    metodo_left: {
      title: 'Conducción Estratégica y Mayorías Institucionales',
      milestones: [
        '17 de Octubre de 1945 y Constitución Justicialista de 1949',
        'Ley de Servicios de Comunicación Audiovisual N° 26.522 (2009)',
        'Plan de Desarrollo Humano Integral (2023)',
        'Perspectivas Estratégicas - Fundación DHI & CLACSO (2026)'
      ]
    },
    metodo_right: {
      title: 'Protagonismo desde las Periferias',
      milestones: [
        'Resistencia Peronista (1955-1973) y el Cordobazo (1969)',
        'Ronda de las Madres de Plaza de Mayo (desde 1977)',
        'Noche de los Lápices (1976) y lucha por el Boleto Educativo',
        'Jornadas del 19 y 20 de diciembre de 2001 y Movimientos Piqueteros'
      ]
    }
  },

  // 38 perfiles del espectro interno de Patria Grande y campo nacional-popular/izquierda latinoamericana
  // Vector: [%Izq desarrollo, %Izq organizacion, %Izq horizonte, %Izq escuela, %Izq tecnologia, %Izq metodo]
  profiles: [
    // REFERENTES Y PENSADORES
    {
      name: 'Juan Grabois',
      type: 'Referente',
      wiki: 'Juan_Grabois',
      vector: [20, 22, 42, 25, 45, 18],
      bio: 'Referente de Patria Grande y Argentina Humana. Pone en el centro la economía popular, Tierra, Techo y Trabajo, la ecología integral y empezar por los últimos.'
    },
    {
      name: 'Itai Hagman',
      type: 'Referente',
      wiki: 'Itai_Hagman',
      vector: [68, 65, 58, 55, 65, 68],
      bio: 'Economista y presidente de la Fundación DHI. Articula planificación estatal, conocimiento técnico y diálogo entre el campo nacional-popular y las demandas sociales.'
    },
    {
      name: 'John William Cooke',
      type: 'Referente',
      wiki: 'John_William_Cooke',
      vector: [65, 45, 35, 48, 50, 28],
      bio: 'Puente entre el peronismo revolucionario y el marxismo latinoamericano. Crítico de las burocracias, impulsor de la radicalización programática y la unidad popular.'
    },
    {
      name: 'Juan Domingo Perón',
      type: 'Referente',
      wiki: 'Juan_Domingo_Perón',
      vector: [85, 88, 78, 62, 55, 85],
      bio: 'Arquitecto de la Comunidad Organizada, los Planes Quinquenales, la justicia social y el Mensaje Ambiental de 1972 como proyecto nacional planificado.'
    },
    {
      name: 'Eva Perón',
      type: 'Referente',
      wiki: 'Eva_Perón',
      vector: [45, 55, 70, 22, 35, 35],
      bio: 'Símbolo de la reparación histórica desde los humildes, la ternura militante, los derechos de la niñez ("los únicos privilegiados") y el protagonismo de las trabajadoras.'
    },
    {
      name: 'Cristina Fernández de Kirchner',
      type: 'Referente',
      wiki: 'Cristina_Fernández_de_Kirchner',
      vector: [78, 82, 55, 68, 82, 82],
      bio: 'Conducción estratégica del ciclo 2003-2015: ampliación de derechos educativos, Conectar Igualdad, industrialización, universidades públicas y soberanía tecnológica.'
    },
    {
      name: 'Néstor Kirchner',
      type: 'Referente',
      wiki: 'Néstor_Kirchner',
      vector: [76, 78, 38, 65, 70, 78],
      bio: 'Reconstrucción de la autoridad política estatal post-2001, desendeudamiento, Memoria-Verdad-Justicia, Ley de Educación Nacional y "No al ALCA" junto a la Patria Grande.'
    },
    {
      name: 'Axel Kicillof',
      type: 'Referente',
      wiki: 'Axel_Kicillof',
      vector: [80, 84, 58, 68, 72, 76],
      bio: 'Economista y gobernador bonaerense: defensa del rol planificador del Estado, obra pública, escuelas y universidades provinciales, y soberanía productiva y energética.'
    },
    {
      name: 'Arturo Jauretche',
      type: 'Referente',
      wiki: 'Arturo_Jauretche',
      vector: [75, 68, 75, 60, 40, 58],
      bio: 'Pensador nacional contra la colonización pedagógica. Reivindica pensar desde la realidad propia, sin importar recetas ajenas ni complejos de inferioridad.'
    },
    {
      name: 'Paulo Freire',
      type: 'Referente',
      wiki: 'Paulo_Freire',
      vector: [28, 18, 25, 35, 30, 15],
      bio: 'Pedagogo de la liberación. Enseñar exige alegría, escucha, lectura crítica del mundo y organización comunitaria contra la educación bancaria.'
    },
    {
      name: 'Rodolfo Walsh',
      type: 'Referente',
      wiki: 'Rodolfo_Walsh',
      vector: [55, 35, 40, 55, 50, 20],
      bio: 'Periodista y militante revolucionario. Compromiso intelectual con la verdad, la clase trabajadora y la denuncia de la miseria planificada.'
    },
    {
      name: 'Padre Carlos Mugica',
      type: 'Referente',
      wiki: 'Carlos_Mugica',
      vector: [22, 20, 45, 18, 30, 15],
      bio: 'Sacerdote tercermundista en la Villa 31. Opción preferencial por los pobres, cristianismo comprometido con el pueblo y organización villera.'
    },
    {
      name: 'Hebe de Bonafini',
      type: 'Referente',
      wiki: 'Hebe_de_Bonafini',
      vector: [40, 30, 35, 30, 35, 18],
      bio: 'Referente histórica de Madres de Plaza de Mayo. Lucha inclaudicable contra la impunidad, defensa de los derechos humanos y universidades populares.'
    },
    {
      name: 'Maestro Luis Iglesias',
      type: 'Referente',
      wiki: 'Luis_Fortunato_Iglesias',
      vector: [48, 32, 60, 62, 20, 35],
      bio: 'Pedagogo argentino de la escuela rural unitaria. Demostró que con creatividad, autonomía docente y afecto se garantiza aprendizaje de alta calidad.'
    },
    {
      name: 'Enrique Dussel',
      type: 'Referente',
      wiki: 'Enrique_Dussel',
      vector: [38, 35, 15, 45, 42, 25],
      bio: 'Filósofo de la liberación. Pensamiento situado desde las periferias del Sur Global, crítica al eurocentrismo y ética de la vida.'
    },
    {
      name: 'Hugo Chávez',
      type: 'Referente',
      wiki: 'Hugo_Chávez',
      vector: [62, 52, 10, 45, 55, 55],
      bio: 'Impulsor del bolivarianismo del siglo XXI, las misiones educativas y sanitarias en los barrios y la integración latinoamericana (ALBA, UNASUR, CELAC).'
    },
    {
      name: 'Fidel Castro',
      type: 'Referente',
      wiki: 'Fidel_Castro',
      vector: [76, 80, 14, 72, 68, 52],
      bio: 'Líder de la Revolución Cubana: campaña nacional de alfabetización, sistema público universal de salud y educación, soberanía antiimperialista e internacionalismo.'
    },
    {
      name: 'Rodolfo Kusch',
      type: 'Referente',
      wiki: 'Rodolfo_Kusch',
      vector: [26, 28, 22, 42, 24, 24],
      bio: 'Filósofo argentino de la liberación y el "estar" americano: rescató la sabiduría popular e indígena frente al pensamiento colonial importado.'
    },
    {
      name: 'Eduardo Galeano',
      type: 'Referente',
      wiki: 'Eduardo_Galeano',
      vector: [34, 30, 14, 46, 32, 26],
      bio: 'Autor de "Las venas abiertas de América Latina": memoria crítica del saqueo colonial, pedagogía de la indignación y esperanza desde abajo.'
    },
    {
      name: 'Orlando Fals Borda',
      type: 'Referente',
      wiki: 'Orlando_Fals_Borda',
      vector: [30, 20, 24, 52, 40, 18],
      bio: 'Sociólogo colombiano creador de la Investigación-Acción Participativa (IAP) y el "sentipensar": construir conocimiento junto a las comunidades campesinas y populares.'
    },
    {
      name: 'Pepe Mujica',
      type: 'Referente',
      wiki: 'José_Mujica',
      vector: [42, 48, 22, 48, 35, 45],
      bio: 'Ex presidente uruguayo y referente ético de la izquierda latinoamericana: austeridad militante, integración regional, crítica al consumismo y defensa de la educación pública.'
    },
    {
      name: 'Lula da Silva',
      type: 'Referente',
      wiki: 'Luiz_Inácio_Lula_da_Silva',
      vector: [72, 65, 28, 52, 65, 62],
      bio: 'Líder obrero brasileño, fundador del PT: articulación entre sindicalismo, movimientos populares (MST), industrialización, lucha contra el hambre y unidad sudamericana.'
    },
    {
      name: 'Salvador Allende',
      type: 'Referente',
      wiki: 'Salvador_Allende',
      vector: [74, 72, 24, 65, 68, 65],
      bio: 'Presidente socialista chileno de la Unidad Popular: vía democrática al socialismo, nacionalización del cobre, medio litro de leche para cada niño y proyecto Cybersyn.'
    },
    {
      name: 'Ernesto "Che" Guevara',
      type: 'Referente',
      wiki: 'Che_Guevara',
      vector: [68, 45, 12, 58, 52, 22],
      bio: 'Revolucionario argentino-cubano: antiimperialismo consecuente, voluntariado y formación del "hombre nuevo", campaña de alfabetización y solidaridad internacionalista.'
    },
    {
      name: 'José Carlos Mariátegui',
      type: 'Referente',
      wiki: 'José_Carlos_Mariátegui',
      vector: [52, 32, 18, 58, 42, 28],
      bio: 'Pensador marxista peruano: "ni calco ni copia, sino creación heroica". Unió la cuestión indígena y agraria con el proyecto socialista indoamericano.'
    },
    {
      name: 'Gabriela Mistral',
      type: 'Referente',
      wiki: 'Gabriela_Mistral',
      vector: [38, 42, 25, 55, 22, 42],
      bio: 'Maestra rural chilena y primera Nobel latinoamericana: defensora de la escuela pública rural, los derechos de la infancia y la hermandad cultural de América Latina.'
    },
    {
      name: 'Frida Kahlo',
      type: 'Referente',
      wiki: 'Frida_Kahlo',
      vector: [32, 26, 20, 34, 28, 22],
      bio: 'Artista y militante comunista mexicana: reivindicación de las raíces indígenas y populares, arte comprometido, cuerpo político e identidad latinoamericana.'
    },
    {
      name: 'Berta Cáceres',
      type: 'Referente',
      wiki: 'Berta_Cáceres',
      vector: [14, 18, 16, 28, 26, 14],
      bio: 'Lideresa indígena lenca y ambientalista hondureña: defensa de los ríos, los bienes comunes y los territorios frente al extractivismo y las transnacionales.'
    },
    {
      name: 'Rigoberta Menchú',
      type: 'Referente',
      wiki: 'Rigoberta_Menchú',
      vector: [24, 26, 18, 36, 28, 22],
      bio: 'Lideresa indígena maya quiché y Premio Nobel de la Paz: memoria histórica, defensa de los pueblos originarios, la tierra y los derechos humanos en América Latina.'
    },
    {
      name: 'Marielle Franco',
      type: 'Referente',
      wiki: 'Marielle_Franco',
      vector: [24, 22, 28, 26, 48, 18],
      bio: 'Socióloga, feminista negra y militante de las favelas de Río de Janeiro: voz de las periferias urbanas, los derechos humanos y la organización comunitaria.'
    },
    {
      name: 'Rosario Vera Peñaloza',
      type: 'Referente',
      wiki: 'Rosario_Vera_Peñaloza',
      vector: [56, 60, 68, 72, 26, 52],
      bio: '"Maestra de la Patria" riojana: fundadora de los primeros jardines de infantes y museos escolares, defensora del juego y la formación docente pública.'
    },
    {
      name: 'Julieta Lanteri',
      type: 'Referente',
      wiki: 'Julieta_Lanteri',
      vector: [54, 48, 52, 58, 45, 36],
      bio: 'Médica, sufragista y fundadora del Partido Feminista Nacional: pionera en votar en Argentina, luchó por los derechos de las mujeres, la niñez y la salud pública.'
    },
    {
      name: 'Alicia Moreau de Justo',
      type: 'Referente',
      wiki: 'Alicia_Moreau_de_Justo',
      vector: [60, 56, 48, 62, 42, 46],
      bio: 'Médica, educadora y militante socialista y de derechos humanos: cofundadora de la APDH, impulsora del voto femenino, la educación popular y el laicismo.'
    },
    // PRÓCERES
    {
      name: 'José Martí',
      type: 'Prócer',
      wiki: 'José_Martí',
      vector: [42, 35, 15, 52, 35, 30],
      bio: 'Inspiración de nuestra corriente estudiantil. Pensador de Nuestra América, la educación emancipadora ("ser culto es el único modo de ser libre") y el antiimperialismo.'
    },
    {
      name: 'Manuel Belgrano',
      type: 'Prócer',
      wiki: 'Manuel_Belgrano',
      vector: [82, 75, 72, 78, 62, 65],
      bio: 'Pionero del desarrollo productivo, las escuelas técnicas, la educación pública para mujeres y sectores populares y la soberanía nacional.'
    },
    {
      name: 'Juana Azurduy',
      type: 'Prócer',
      wiki: 'Juana_Azurduy',
      vector: [35, 25, 20, 35, 25, 15],
      bio: 'Luchadora de la emancipación altoperuana y rioplatense. Representa el federalismo desde abajo, la rebeldía popular y las periferias en armas por la independencia.'
    },
    {
      name: 'Bartolina Sisa',
      type: 'Prócer',
      wiki: 'Bartolina_Sisa',
      vector: [24, 18, 16, 32, 22, 14],
      bio: 'Comandanta aymara del levantamiento anticolonial de 1781 en el Alto Perú: símbolo de la resistencia indígena, campesina y de las mujeres del Sur.'
    },
    {
      name: 'José Gervasio Artigas',
      type: 'Prócer',
      wiki: 'José_Gervasio_Artigas',
      vector: [38, 22, 28, 42, 30, 18],
      bio: 'Protector de los Pueblos Libres. Impulsor del primer reglamento de reforma agraria ("los más infelices serán los más privilegiados") y el federalismo popular.'
    },
    {
      name: 'Simón Rodríguez',
      type: 'Prócer',
      wiki: 'Simón_Rodríguez',
      vector: [50, 35, 18, 60, 25, 32],
      bio: 'Maestro de Bolívar y padre de la pedagogía latinoamericana. "O inventamos o erramos": educación popular para formar ciudadanos productores e independientes.'
    },
    {
      name: 'José de San Martín',
      type: 'Prócer',
      wiki: 'José_de_San_Martín',
      vector: [72, 80, 20, 65, 55, 75],
      bio: 'Libertador de América. Ejemplo de planificación estratégica continental, austeridad republicana y unidad nuestroamericana frente al poder colonial.'
    },
    {
      name: 'Simón Bolívar',
      type: 'Prócer',
      wiki: 'Simón_Bolívar',
      vector: [66, 76, 8, 60, 50, 70],
      bio: 'El Libertador y artífice del Congreso Anfictiónico de Panamá: "La Patria es América". Proyecto de unidad continental frente a las potencias imperiales.'
    },
    {
      name: 'Mariano Moreno',
      type: 'Prócer',
      wiki: 'Mariano_Moreno',
      vector: [74, 72, 65, 76, 62, 68],
      bio: 'Motor jacobino de la Revolución de Mayo: autor del Plan de Operaciones, fundador de la Gazeta y la Biblioteca Pública para democratizar la cultura y la soberanía.'
    },
    {
      name: 'Augusto César Sandino',
      type: 'Prócer',
      wiki: 'Augusto_César_Sandino',
      vector: [42, 32, 16, 48, 35, 16],
      bio: 'General de Hombres Libres en Nicaragua: símbolo de la resistencia antiimperialista campesina y popular en Centroamérica y Nuestra América.'
    },
    // MOVIMIENTOS HISTÓRICOS
    {
      name: 'Independentistas Latinoamericanos (1810-1824)',
      type: 'Movimiento Histórico',
      wiki: 'Guerras_de_independencia_hispanoamericanas',
      vector: [50, 45, 12, 58, 40, 40],
      bio: 'El ciclo emancipador de San Martín, Bolívar, Artigas y Monteagudo: soberanía continental, reforma agraria artiguista y ruptura con el orden colonial.'
    },
    {
      name: 'Reforma Universitaria de 1918',
      type: 'Movimiento Histórico',
      wiki: 'Reforma_universitaria_de_1918',
      vector: [58, 28, 22, 75, 55, 35],
      bio: 'Gesta estudiantil cordobesa que irradió a toda América Latina: cogobierno democrático, autonomía, extensión universitaria y libertad de cátedra.'
    },
    {
      name: 'Resistencia Peronista (1955-1973)',
      type: 'Movimiento Histórico',
      wiki: 'Resistencia_peronista',
      vector: [68, 42, 72, 48, 40, 20],
      bio: 'Organización clandestina y sindical de la clase trabajadora frente a la proscripción y los fusilamientos: lealtad popular desde abajo.'
    },
    {
      name: 'Tendencia Revolucionaria / Montoneros (años 70)',
      type: 'Movimiento Histórico',
      wiki: 'Montoneros',
      vector: [60, 38, 30, 45, 45, 22],
      bio: 'Militancia juvenil y barrial de los 70 que buscó articular peronismo, liberación nacional y protagonismo de las bases en villas, fábricas y universidades.'
    },
    {
      name: 'Movimiento Sin Tierra (MST - Brasil)',
      type: 'Movimiento Histórico',
      wiki: 'Movimiento_de_los_Trabajadores_Rurales_Sin_Tierra',
      vector: [22, 18, 18, 44, 36, 16],
      bio: 'Mayor movimiento campesino de América Latina: reforma agraria popular, agroecología, escuelas propias del campo ("Pedagogía do Movimento") y formación política.'
    },
    {
      name: 'Zapatistas (EZLN - México)',
      type: 'Movimiento Histórico',
      wiki: 'Ejército_Zapatista_de_Liberación_Nacional',
      vector: [16, 10, 12, 36, 30, 10],
      bio: 'Caracoles autónomos de Chiapas: "mandar obedeciendo", escuelitas zapatistas, defensa de la tierra y un mundo donde quepan muchos mundos desde abajo.'
    },
    {
      name: 'Movimientos Globales por la Vivienda y Tierra, Techo y Trabajo',
      type: 'Movimiento Histórico',
      wiki: 'Unión_de_Trabajadores_y_Trabajadoras_de_la_Economía_Popular',
      vector: [18, 15, 38, 26, 42, 15],
      bio: 'Tradición de la UTEP, el MTE y redes globales por el hábitat digno: economía popular, integración socio urbana y organización desde los barrios populares.'
    },
    {
      name: 'Movimiento de Bachilleratos Populares y Empresas Recuperadas',
      type: 'Movimiento Histórico',
      wiki: 'Empresa_recuperada',
      vector: [25, 12, 45, 38, 35, 14],
      bio: 'Experiencias nacidas al calor del 2001: autogestión obrera sin patrón y escuelas secundarias comunitarias con pedagogía freireana.'
    },
    {
      name: 'Feminismo Popular y Ni Una Menos',
      type: 'Movimiento Histórico',
      wiki: 'Ni_una_menos',
      vector: [26, 28, 32, 24, 52, 22],
      bio: 'Visibilización de las tareas de cuidado como trabajo no pago, defensa de la ESI, lucha contra las violencias machistas y organización en territorios.'
    },
    // HITOS HISTÓRICOS VINCULADOS AL PDHI
    {
      name: 'Planes Quinquenales (1947-1955)',
      type: 'Hito del PDHI',
      wiki: 'Primer_Plan_Quinquenal_de_Argentina',
      vector: [88, 90, 75, 72, 65, 85],
      bio: 'Referencia metodológica directa del Prólogo del libro: autoridad política estatal + equipos técnicos + participación de la comunidad organizada en la planificación.'
    },
    {
      name: 'Programa Conectar Igualdad (2010)',
      type: 'Hito del PDHI',
      wiki: 'Conectar_Igualdad',
      vector: [65, 78, 55, 62, 95, 72],
      bio: 'Política emblemática de democratización tecnológica: entrega de millones de netbooks para achicar la brecha digital y garantizar el derecho al conocimiento.'
    },
    {
      name: 'Mensaje Ambiental (1972) & Laudato Si’ (2015)',
      type: 'Hito del PDHI',
      wiki: 'Laudato_si%27',
      vector: [24, 38, 25, 35, 42, 35],
      bio: 'Doble hito doctrinal del PDHI: la advertencia temprana de Perón y la ecología integral de Francisco frente a una única crisis social y ambiental.'
    },
    {
      name: 'PDHI (2023) & Perspectivas Estratégicas (2026)',
      type: 'Hito del PDHI',
      wiki: 'Patria_Grande_(partido_político)',
      vector: [52, 55, 45, 48, 62, 55],
      bio: 'Síntesis programática contemporánea de Patria Grande y Fundación DHI: partir de las necesidades humanas, sumar rigor técnico y planificar un Proyecto Nacional.'
    }
  ],

  // 12 escenarios del juego Desafío PDHI (accesibles sin haber leído el libro, con opciones mezcladas)
  gameScenarios: [
    {
      shortLabel: '01 · Producción',
      chapter: 'Cap. 1 · Modelo Productivo',
      title: '¿Qué diferencia al Desarrollo Humano Integral del desarrollismo clásico?',
      desc: 'El PDHI coincide con el desarrollismo en industrializar el país, pero marca una diferencia clave en el Prólogo. ¿Cuál es?',
      options: [
        {
          text: 'Que el desarrollismo propone demasiada intervención estatal cuando debería dejarlo al mercado.',
          correct: false
        },
        {
          text: 'Que el desarrollismo encierra su lectura en la producción y la infraestructura, subordinando la distribución, la economía popular, el cuidado y la cultura.',
          correct: true
        },
        {
          text: 'Que el desarrollismo busca crecer económicamente en lugar de aplicar políticas de "decrecimiento" para frenar el consumo.',
          correct: false
        }
      ],
      explanation: '¡Bien ahí! Esa es la pregunta desempate: el PDHI quiere reindustrializar, pero sin olvidar la economía popular, el cuidado y el derecho a la felicidad.',
      eduLink: 'Conecta con la Educación Técnico-Profesional y las universidades orientadas al desarrollo integral.'
    },
    {
      shortLabel: '02 · Energía',
      chapter: 'Cap. 2 · Energía Justa y Soberana',
      title: '¿Para qué tiene que servir nuestra energía?',
      desc: 'Argentina cuenta con gas, petróleo, energía nuclear, hidroelectricidad y renovables. ¿Cómo plantea el PDHI usar esos recursos?',
      options: [
        {
          text: 'Para sostener la industria nacional, garantizar tarifas justas en los hogares y financiar la transición sustentable.',
          correct: true
        },
        {
          text: 'Para exportarlos sin restricciones al precio internacional aunque las familias y escuelas no puedan pagar la luz o el gas.',
          correct: false
        },
        {
          text: 'Para apagar de inmediato toda producción de gas y petróleo de un día para el otro.',
          correct: false
        }
      ],
      explanation: 'La energía es un bien estratégico: lo central es quién se queda con la renta y cómo mejora la vida del pueblo.',
      eduLink: 'Sin tarifas justas ni energía soberana no hay escuelas calefaccionadas ni industria que demande egresados.'
    },
    {
      shortLabel: '03 · Deuda',
      chapter: 'Cap. 3 · Deuda y Macroeconomía',
      title: '¿Cómo salir de la trampa de la deuda con el FMI?',
      desc: 'Los vencimientos de deuda ahogan las reservas del Banco Central y condicionan el presupuesto público. ¿Qué propone el PDHI?',
      options: [
        {
          text: 'Ajustar aún más jubilaciones, obra pública y educación para pagarle al contado a los acreedores.',
          correct: false
        },
        {
          text: 'Tomar nueva deuda a tasas todavía más altas para patear el problema un año.',
          correct: false
        },
        {
          text: 'Exigir la corresponsabilidad del FMI para despejar vencimientos sin ahogar el crecimiento ni los ingresos populares.',
          correct: true
        }
      ],
      explanation: 'El FMI fue corresponsable de una deuda impagable: ningún acuerdo puede estar por encima de la dignidad del pueblo.',
      eduLink: 'Cada punto de deuda pagado con ajuste significa recorte en becas, infraestructura escolar y salarios docentes.'
    },
    {
      shortLabel: '04 · Previsión',
      chapter: 'Cap. 4 · Sistema Previsional',
      title: '¿Cómo cuidar a nuestros jubilados y jubiladas?',
      desc: 'Millones de trabajadores informales y mujeres que hicieron tareas de cuidado no logran juntar 30 años de aportes formales. ¿Qué defiende el PDHI?',
      options: [
        {
          text: 'Volver a las AFJP privadas y subir la edad jubilatoria para que cada uno se arregle solo.',
          correct: false
        },
        {
          text: 'Sostener un sistema público solidario con moratorias y jubilaciones dignas que reconozcan el trabajo no registrado y de cuidado.',
          correct: true
        },
        {
          text: 'Dar únicamente pensiones reducidas por debajo de la mínima y no heredables.',
          correct: false
        }
      ],
      explanation: 'Las moratorias previsionales fueron una reparación histórica frente a la informalidad laboral estructural.',
      eduLink: 'La protección de la vejez y el diálogo intergeneracional son pilares del Desarrollo Humano Integral.'
    },
    {
      shortLabel: '05 · Soberanía',
      chapter: 'Cap. 5 · Malvinas, Atlántico Sur y Antártida',
      title: '¿Por qué Malvinas es clave para el proyecto de país?',
      desc: 'El Atlántico Sur concentra pesca, rutas marítimas, energía y proyección hacia la Antártida. ¿Cómo aborda el PDHI la cuestión Malvinas?',
      options: [
        {
          text: 'Como una política de Estado que une soberanía territorial, ciencia marítima, defensa e interés nacional.',
          correct: true
        },
        {
          text: 'Como un reclamo simbólico del pasado que no debe molestar la relación comercial con las potencias.',
          correct: false
        },
        {
          text: 'Como un tema exclusivamente militar sin relación con los recursos naturales ni el desarrollo.',
          correct: false
        }
      ],
      explanation: 'Defender Malvinas y el Atlántico Sur es defender nuestros bienes comunes y nuestra soberanía en el siglo XXI.',
      eduLink: 'La causa Malvinas y la soberanía territorial forman parte de los contenidos irrenunciables de nuestra escuela pública.'
    },
    {
      shortLabel: '06 · Seguridad y Justicia',
      chapter: 'Cap. 6 y 8 · Seguridad y Justicia',
      title: 'Salir de la falsa grieta "mano dura vs. mirar para otro lado"',
      desc: 'Los barrios populares son quienes más sufren tanto el delito como los abusos judiciales. ¿Qué propone el PDHI?',
      options: [
        {
          text: 'Bajar la edad de imputabilidad y militarizar los barrios sin políticas sociales.',
          correct: false
        },
        {
          text: 'Atender la demanda real de seguridad con prevención comunitaria, reforma judicial democrática y acceso a la justicia.',
          correct: true
        },
        {
          text: 'Minimizar la preocupación por la inseguridad considerándola solo un invento de los medios.',
          correct: false
        }
      ],
      explanation: 'Salir a la calle sin miedo es un derecho básico: hace falta presencia inteligente del Estado y comunidad organizada.',
      eduLink: 'Las escuelas necesitan redes de prevención de violencias y justicia cercana para cuidar las trayectorias juveniles.'
    },
    {
      shortLabel: '07 · Trabajo e IA',
      chapter: 'Cap. 9 · Nuestra Reforma Laboral',
      title: 'Trabajo, economía popular e inteligencia artificial',
      desc: 'Frente a reformas laborales que quitan derechos y el avance de la automatización, ¿qué plantea el PDHI?',
      options: [
        {
          text: 'Reivindicar el trabajo en todas sus formas (asalariado, popular y de cuidado) y regular la tecnología para ampliar derechos.',
          correct: true
        },
        {
          text: 'Flexibilizar contratos y eliminar indemnizaciones para que las empresas contraten pagando menos.',
          correct: false
        },
        {
          text: 'Prohibir por ley el uso de computadoras e inteligencia artificial en los lugares de trabajo.',
          correct: false
        }
      ],
      explanation: 'La clave no es si se usa tecnología o IA, sino quién la controla y cómo se reparten sus beneficios.',
      eduLink: 'Reconocer el trabajo docente y preparar a jóvenes para un trabajo con derechos es central en la escuela secundaria y superior.'
    },
    {
      shortLabel: '08 · Tierra y Techo',
      chapter: 'Cap. 10 · Techo para Vivir, Tierra para Habitar',
      title: 'El derecho a la vivienda y los barrios populares',
      desc: 'Jóvenes que no pueden alquilar y más de 1,2 millones de familias en barrios populares sin servicios básicos. ¿Cuál es la respuesta del PDHI?',
      options: [
        {
          text: 'Desregular todos los alquileres y esperar que el mercado inmobiliario construya viviendas baratas.',
          correct: false
        },
        {
          text: 'Erradicar los barrios populares hacia las afueras lejanas sin transporte ni escuelas.',
          correct: false
        },
        {
          text: 'Planificar el uso del suelo, regular alquileres e impulsar la integración socio urbana de los barrios populares.',
          correct: true
        }
      ],
      explanation: 'Tierra, Techo y Trabajo: sin un hábitat digno es imposible proyectar la vida familiar ni educativa.',
      eduLink: 'La urbanización con escuelas, jardines y conectividad en barrios populares garantiza el derecho efectivo a estudiar.'
    },
    {
      shortLabel: '09 · Ambiente y Alimentos',
      chapter: 'Cap. 11 y 12 · Ecología Integral y Alimentación',
      title: 'Casa Común y derecho a la alimentación',
      desc: 'En un país productor de alimentos donde crece el hambre y la contaminación, ¿qué propone la ecología integral del PDHI?',
      options: [
        {
          text: 'Postergar el cuidado ambiental hasta que el país sea rico y dejar que los alimentos coticen sin regulación.',
          correct: false
        },
        {
          text: 'Combatir la pobreza y cuidar la naturaleza al mismo tiempo, impulsando agroecología y soberanía alimentaria.',
          correct: true
        },
        {
          text: 'Garantizar alimentos ultraprocesados baratos en comedores sin importar su calidad nutricional.',
          correct: false
        }
      ],
      explanation: 'No hay dos crisis separadas (una social y otra ambiental), sino una sola crisis socio-ambiental que exige justicia y cuidado.',
      eduLink: 'Impacta directo en el Servicio Alimentario Escolar (SAE) saludable y en la educación ambiental integral.'
    },
    {
      shortLabel: '10 · Salud, Discapacidad y Niñez',
      chapter: 'Cap. 13, 14 y 15 · Cuidado de la Vida',
      title: '"Los únicos privilegiados son los niños"',
      desc: 'Crece el malestar en salud mental juvenil y las personas con discapacidad enfrentan recortes y barreras. ¿Qué plantea el PDHI?',
      options: [
        {
          text: 'Fortalecer la salud pública, garantizar accesibilidad universal y escuchar a niñeces, familias y personas con discapacidad.',
          correct: true
        },
        {
          text: 'Recortar pensiones y dejar que cada familia resuelva la salud y la discapacidad en el sector privado.',
          correct: false
        },
        {
          text: 'Diseñar políticas desde oficinas técnicas sin participación ni escucha de quienes viven esas realidades.',
          correct: false
        }
      ],
      explanation: 'El método del PDHI empieza siempre por escuchar las necesidades humanas reales con cercanía.',
      eduLink: 'Exige Equipos de Orientación Escolar completos y articulación real entre escuela, salud y niñez.'
    },
    {
      shortLabel: '11 · Educación',
      chapter: 'Cap. 16 · Política Educativa',
      title: '¿Qué denuncia el capítulo educativo como "exclusión incluyente"?',
      desc: 'Hoy más del 91% de los chicos está escolarizado, pero el capítulo advierte sobre la "exclusión incluyente". ¿Qué significa ese concepto?',
      options: [
        {
          text: 'Que las escuelas públicas rechazan la inscripción de estudiantes de sectores populares.',
          correct: false
        },
        {
          text: 'Que se incluye a sectores populares en el sistema, pero a través de circuitos desiguales en condiciones, infraestructura y aprendizajes.',
          correct: true
        },
        {
          text: 'Que el exceso de inclusión en escuelas comunes bajó el nivel académico de los sectores medios.',
          correct: false
        }
      ],
      explanation: '¡Pregunta clave de la formación! No alcanza con tener vacante si la escuela está desbordada y reproduce la desigualdad de origen.',
      eduLink: 'Es el corazón de la Etapa 3 y Etapa 4 de nuestra formación.'
    },
    {
      shortLabel: '12 · Digital y Cultura',
      chapter: 'Cap. 17 y 18 · Transformación Digital y Cultura',
      title: 'Tecnología, celulares en el aula y soberanía cultural',
      desc: 'Frente a la captura de datos por grandes plataformas y el uso excesivo de celulares en clase, ¿qué propone el PDHI?',
      options: [
        {
          text: 'Suspender celulares personales en niveles obligatorios y garantizar dispositivos y plataformas educativas públicas y soberanas.',
          correct: true
        },
        {
          text: 'Pedirle a cada estudiante que use su propio celular en clase para no comprar equipamiento escolar.',
          correct: false
        },
        {
          text: 'Eliminar toda enseñanza digital e internet de las escuelas públicas.',
          correct: false
        }
      ],
      explanation: 'Ni tecnofobia ni entrega a las Big Tech: el Estado garantiza conectividad, dispositivos pedagógicos y soberanía cultural.',
      eduLink: 'En las escuelas implica ciudadanía digital crítica, dispositivos garantizados por el Estado y regulación de la IA.'
    }
  ],

  // 10 rondas del juego físico "Carrera por el Objeto" (Prode del Forms + Datos Págs. 4-11 FDHI Educación CABA)
  physicalGameRounds: [
    {
      block: 'Ronda A · Prode del Forms (en vivo)',
      title: 'La prioridad #1 de nuestra reunión',
      prompt: 'Antes de mostrar el gráfico del Forms: ¿cuál fue la problemática o eje más votado por todos nosotros hoy?',
      answer: 'El organizador destapa la pestaña Respuestas del Google Forms y suma +10 pts al grupo que más se acerque.'
    },
    {
      block: 'Ronda A · Prode del Forms (en vivo)',
      title: 'Termómetro de consenso',
      prompt: 'En la pregunta principal del Forms, ¿qué porcentaje aproximado sacó la opción ganadora?',
      answer: 'Se verifica en el gráfico de torta del Forms. El grupo con la estimación más cercana suma +10 pts.'
    },
    {
      block: 'Ronda A · Prode del Forms (en vivo)',
      title: 'La mayor división / sorpresa',
      prompt: '¿En qué pregunta del Forms estuvieron más parejas o divididas las respuestas entre compas?',
      answer: 'Se chequea en vivo en los gráficos del Forms (+10 pts al grupo que acierte el tema más dividido).'
    },
    {
      block: 'Ronda B · Datos CABA (Págs. 4–11)',
      title: 'Presupuesto educativo en CABA (Pág. 4)',
      prompt: 'En 2015, Educación representaba el 23% del presupuesto total de la Ciudad. ¿A qué porcentaje cayó en 2023 y se proyecta retroceder en 2026?',
      answer: 'Cayó al 19% en 2023, tuvo una leve recuperación al 20% en 2024 y se proyecta un nuevo retroceso al 19% en 2026 (Pág. 4).'
    },
    {
      block: 'Ronda B · Datos CABA (Págs. 4–11)',
      title: 'Gestión estatal vs. privada en Formación Docente (Pág. 9)',
      prompt: 'En CABA, el 51% de los estudiantes de inicial, primaria y secundaria va a escuelas privadas. ¿Qué porcentaje de estudiantes de Formación Docente Inicial cursa en el Estado?',
      answer: '¡El 79% cursa en la gestión estatal! A diferencia de otros niveles, el Estado sigue siendo el núcleo de la formación docente (Pág. 9).'
    },
    {
      block: 'Ronda B · Datos CABA (Págs. 4–11)',
      title: 'Desigualdad territorial por barrios (Pág. 8)',
      prompt: 'En nivel inicial, la oferta estatal promedio es 37%, pero en Villa Lugano llega al 71%. ¿A cuánto baja en la Comuna 2 (Recoleta)?',
      answer: 'Baja al 19% en la Comuna 2. En secundaria pasa algo similar: 57% estatal en San Telmo vs. 23% en Villa Riachuelo (Pág. 8).'
    },
    {
      block: 'Ronda B · Datos CABA (Págs. 4–11)',
      title: '¿Cuántos Institutos de Formación Docente estatales hay? (Pág. 7)',
      prompt: 'Además de la UdelaCiudad (creada en 2018), ¿cuántos Institutos de Formación Docente de gestión estatal existen en CABA?',
      answer: 'Existen 29 Institutos de Formación Docente de gestión estatal dependientes del Ministerio de Educación (Pág. 7).'
    },
    {
      block: 'Ronda B · Datos CABA (Págs. 4–11)',
      title: 'El vacío de la "gestión social" (Pág. 9-10)',
      prompt: 'La Ley Nacional 26.206 reconoce la gestión estatal, privada y social (bachilleratos populares, cooperativas). ¿Cómo la registra CABA?',
      answer: 'CABA no reconoce la gestión social: solo reconoce estatal y privada, metiendo a las experiencias comunitarias y sindicales dentro de la matrícula privada (Pág. 9).'
    },
    {
      block: 'Ronda B · Datos CABA (Págs. 4–11)',
      title: 'Organización gremial y estudiantil (Pág. 10-11)',
      prompt: '¿Cómo se llama la coordinadora que nuclea a los Centros de Estudiantes de los Institutos de Formación Docente en CABA (y cuántos sindicatos docentes hay)?',
      answer: 'La CET (Coordinadora de Estudiantes Terciarios), junto a la CEB en secundarios, Cooperadoras y 17 sindicatos docentes liderados por UTE-CTERA (Pág. 10-11).'
    },
    {
      block: 'Ronda B · Datos CABA (Págs. 4–11)',
      title: 'Marco normativo de la Ciudad (Pág. 11)',
      prompt: 'La Constitución de CABA (arts. 23-25) garantiza la educación pública, pero ¿qué norma clave sigue faltando en la Ciudad de Buenos Aires?',
      answer: 'CABA no cuenta todavía con una Ley General de Educación propia (Pág. 11).'
    }
  ],

  // Datos de diagnóstico educativo (Págs. 4 a 11 de FDHI.00.26--EDUCACION)
  eduStats: [
    {
      number: '23% → 19%',
      label: 'Inversión educativa sobre el presupuesto total de CABA: cayó del 23% (2015) al 19% (2023), 20% (2024) y se proyecta 19% en 2026.',
      source: 'FDHI Educación CABA, Pág. 4',
      accent: ''
    },
    {
      number: '79% Estatal',
      label: 'En Formación Docente Inicial el 79% cursa en gestión estatal, mientras en inicial/primario/secundario el 51% asiste a privadas.',
      source: 'FDHI Educación CABA, Pág. 9',
      accent: 'accent-green'
    },
    {
      number: '29 IFD',
      label: 'Institutos de Formación Docente de gestión estatal en CABA (junto a UdelaCiudad, creada en 2018 por Ley N° 6.053).',
      source: 'FDHI Educación CABA, Pág. 7',
      accent: 'accent-blue'
    },
    {
      number: '19% vs 71%',
      label: 'Brecha territorial en nivel inicial estatal: 19% en Comuna 2 frente a 71% en Villa Lugano (y 23% en Villa Riachuelo en secundaria).',
      source: 'FDHI Educación CABA, Pág. 8',
      accent: 'accent-gold'
    }
  ],

  eduProposals: [
    {
      category: 'niveles',
      title: 'Mapa del Sistema Educativo en CABA (Págs. 6–8)',
      items: [
        '2.720 unidades educativas totales (46% gestión estatal) y 779.501 estudiantes (56% estatal si se incluyen adultos y especial).',
        'En nivel inicial solo el 47% de la matrícula es estatal y en secundaria el 49%, con fuerte desigualdad entre el norte y el sur.',
        'La Educación Especial se organiza en Escalafón A (hospitalaria/domiciliaria), B (EII, CEI, CENTES) y C (escuelas especiales).'
      ]
    },
    {
      category: 'formacion',
      title: 'Centralidad Estatal en Formación Docente (Págs. 7 y 9)',
      items: [
        'Frente al predominio privado en otros niveles, el 79% de quienes se forman como docentes en CABA eligen el sistema estatal (29 IFD y ENS).',
        'En Educación de Adultos (CENS, escuelas de reingreso, bachilleratos, contextos de encierro) la matrícula estatal llega al 97%.',
        'Fuerte tradición de organización estudiantil en terciarios (CET), secundarios (CEB), familias (Cooperadoras) y 17 sindicatos docentes.'
      ]
    },
    {
      category: 'transversal',
      title: 'Las 8 Problemáticas Centrales en CABA (Págs. 4–5)',
      items: [
        '1) Baja matrícula en inicial y primario por caída de natalidad, con déficit de vacantes en el sur y de jornada completa.',
        '2) Crecimiento de padecimientos de salud mental en NNyA, falta de personal en EOE y saturación del sistema de salud.',
        '3) Sobrecarga laboral docente y directiva, trabas en licencias médicas y en el ascenso en la carrera.',
        '4) Dificultades en secundaria profundizadas por reformas permanentes (Plan BA Aprende), debates en Lengua/Matemática y desafíos de inclusión.',
        '5) Déficits de infraestructura, transporte, alimentación escolar y desarticulación / caída de matrícula en los IFD.'
      ]
    },
    {
      category: 'transversal',
      title: 'Vacíos Normativos y Gestión Social (Págs. 9–11)',
      items: [
        'CABA no reconoce la "gestión social" (organizaciones sociales, cooperativas, bachilleratos populares) prevista en la Ley Nacional 26.206.',
        'La Ciudad todavía carece de una Ley General de Educación propia (solo cuenta con los arts. 23-25 de la Constitución de CABA).',
        'Reorganización territorial en curso: la Ley N° 6.888 (2025) agrupa los 21 Distritos Escolares por comuna.'
      ]
    }
  ],

  // 12 Ejes propuestos para construir un Plan de Educación Humana Integral desde La Martí
  plan12Ejes: [
    {
      num: 1,
      group: 1,
      title: 'Financiamiento Blindado e Infraestructura Digna',
      description: 'Recuperación de pisos mínimos de inversión educativa por ley, plan federal de obras escolares, conectividad en aulas y equipamiento básico.',
      justification: 'Sin condiciones materiales mínimas, el "derecho a la educación" es papel mojado. Defendemos un Estado garante frente al ajuste del 49% real.',
      problem: 'Escuelas con problemas edilicios, sin calefacción ni agua adecuada, recorte de becas Progresar y abandono de obras.',
      prompts: [
        '¿Qué condiciones edilicias y de cursada faltan hoy en nuestros propios profesorados?',
        '¿Cómo vinculamos la pelea presupuestaria con la defensa de la educación como derecho y no como gasto?'
      ]
    },
    {
      num: 2,
      group: 1,
      title: 'Trabajo Docente Jerarquizado y Carrera Colectiva',
      description: 'Recomposición salarial, horas pagas para planificación institucional en equipo, estabilidad laboral y creación de nuevos roles pedagógicos.',
      justification: 'El docente es un trabajador intelectual y cultural, no un "apostol" precarizado ni un mero aplicador de recetas técnicas.',
      problem: 'Sobrecarga laboral, pluriempleo ("docentes taxi"), problemas en licencias médicas y desgaste en escuelas desbordadas.',
      prompts: [
        '¿Qué implica pensar el trabajo docente dentro de un proyecto de Desarrollo Humano Integral?',
        '¿Cómo evitar que las reformas trasladen más tareas sin tiempo pago ni recursos?'
      ]
    },
    {
      num: 3,
      group: 1,
      title: 'Baja Natalidad como Oportunidad Pedagógica',
      description: 'Prohibición de cierre de salas, grados o cargos ante la baja demográfica; reconversión hacia parejas pedagógicas y grupos reducidos.',
      justification: 'La educación no se rige por criterios de rentabilidad o "eficiencia" de mercado: menos pibes por aula significa mejor enseñanza y cuidado.',
      problem: 'Políticas de ajuste (como en CABA y otras jurisdicciones) que usan la baja natalidad como excusa para cerrar cursos y fusionar escuelas.',
      prompts: [
        '¿Qué argumentos políticos y pedagógicos podemos llevar a las escuelas y familias frente al cierre de grados?',
        '¿Cómo potenciar las parejas pedagógicas en el primer ciclo?'
      ]
    },
    {
      num: 4,
      group: 2,
      title: 'Defensa y Articulación del Sistema Formador (ISFD/ENS/IES)',
      description: 'Planificación federal de la formación docente que jerarquice a los institutos históricos, impida el cierre de carreras y garantice cogobierno democrático.',
      justification: 'Los profesorados estatales concentran la enorme mayoría de futuros docentes (más del 74% de la matrícula en CABA) y son la columna vertebral del sistema público.',
      problem: 'Desarticulación institucional, avance de lógicas universitarias sin concursos ni territorialidad (ej. UdelaCiudad) y cierre de profesorados.',
      prompts: [
        '¿Qué relación debería existir entre institutos históricos y universidades en un proyecto propio?',
        '¿Cómo defendemos las carreras docentes frente a la caída de matrícula?'
      ]
    },
    {
      num: 5,
      group: 2,
      title: 'Trayectorias Estudiantiles en Profesorados',
      description: 'Becas integrales, jardines materno-paternales en los institutos, acompañamiento en lectura/escritura superior y formatos de cursada compatibles con el trabajo.',
      justification: 'Quienes estudiamos docencia somos en gran parte primera generación de educación superior, trabajadores/as y personas con tareas de cuidado.',
      problem: 'Alta deserción en los primeros años de los profesorados y ausencia de cifras públicas claras de permanencia y egreso.',
      prompts: [
        '¿Qué políticas concretas necesita hoy un/a estudiante de profesorado para no abandonar en 1° o 2° año?',
        '¿Cómo equilibramos presencialidad, calidad académica y realidad laboral?'
      ]
    },
    {
      num: 6,
      group: 2,
      title: 'Formación Continua Situada, Gratuita y No Mercantil',
      description: 'Reemplazo del mercado de cursos "junta-puntaje" por trayectos gratuitos, en horario laboral, anclados en los problemas reales de cada escuela.',
      justification: 'El saber pedagógico se construye colectivamente desde la práctica situada, no comprando certificados individuales.',
      problem: 'Inestabilidad laboral en dispositivos de capacitación (ej. Escuela de Maestros) y cierre de postítulos clave como el de ESI.',
      prompts: [
        '¿Qué temas urgentes (salud mental, alfabetización, IA, ESI) debería garantizar gratuitamente el Estado para docentes en ejercicio?'
      ]
    },
    {
      num: 7,
      group: 3,
      title: 'Desborde Escolar y Redes Intersectoriales de Cuidado',
      description: 'Fortalecimiento de Equipos de Orientación Escolar (EOE) y articulación obligatoria con salud, niñez y desarrollo social.',
      justification: 'Poner a los NNyA en el centro ("los únicos privilegiados") exige que la escuela no quede sola frente a la crisis social.',
      problem: 'Docentes y directivos desbordados atendiendo crisis familiares, violencias, consumos y padecimientos de salud mental sin equipos suficientes.',
      prompts: [
        '¿Hasta dónde llega la tarea docente y dónde empieza la responsabilidad de otras áreas del Estado?',
        '¿Cómo formar a futuros docentes para trabajar en red sin sobrecargarse?'
      ]
    },
    {
      num: 8,
      group: 3,
      title: 'Educación Sexual Integral (ESI) y Derechos de la Niñez',
      description: 'Implementación efectiva y financiada de la Ley 26.150 en todos los niveles y en la formación docente inicial y continua.',
      justification: 'Educar es ampliar derechos, prevenir violencias, construir vínculos igualitarios y reconocer a NNyA como sujetos de derecho.',
      problem: 'Desfinanciamiento nacional de la ESI, cierre de postítulos jurisdiccionales y ataques ideológicos conservadores.',
      prompts: [
        '¿Qué lugar real tiene hoy la ESI en nuestros planes de estudio de profesorado?',
        '¿Cómo disputar el sentido de la ESI frente a los discursos de odio?'
      ]
    },
    {
      num: 9,
      group: 3,
      title: 'Escuela, Comunidad y Gestión Social',
      description: 'Impulso a cooperadoras, bachilleratos populares, alimentación escolar saludable (SAE) y espacios puente con clubes y centros culturales.',
      justification: 'La educación no empieza ni termina en la puerta del aula: el tejido comunitario es parte del sujeto pedagógico de Patria Grande.',
      problem: 'Aislamiento institucional de las escuelas, tercerización precaria de comedores escolares y estigmatización de experiencias comunitarias.',
      prompts: [
        '¿Qué podemos aprender en los profesorados de la educación popular y los bachilleratos populares?',
        '¿Cómo transformar la comida escolar en política de cuidado y soberanía alimentaria?'
      ]
    },
    {
      num: 10,
      group: 4,
      title: 'Soberanía Digital, IA y Ética del Encuentro',
      description: 'Infraestructura y plataformas públicas soberanas, formación docente crítica en IA, protección de datos y reemplazo de celulares por dispositivos estatales.',
      justification: 'No aceptamos ni la tecnofobia ni la entrega acrítica a las corporaciones tecnológicas: la tecnología debe servir al desarrollo humano.',
      problem: 'Brecha digital (45% de estudiantes sin computadora en el hogar), uso problemático de pantallas y captura algorítmica de la atención.',
      prompts: [
        '¿Cómo usamos la IA en la formación docente sin atrofiar el pensamiento crítico?',
        '¿Qué opinamos de la propuesta del libro de suspender celulares en niveles obligatorios?'
      ]
    },
    {
      num: 11,
      group: 4,
      title: 'Educación, Trabajo y Proyecto Productivo Nacional',
      description: 'Articulación de la secundaria, la ETP y el nivel superior con la reindustrialización, la economía popular, la ecología integral y el sistema científico.',
      justification: 'Educar "para qué país": necesitamos una escuela que dialogue con el trabajo digno y la soberanía nacional, no con la precarización.',
      problem: 'Crisis de sentido de la escuela secundaria y desconexión entre las carreras superiores y un modelo económico reprimarizado.',
      prompts: [
        '¿Para qué modelo de país estamos formando estudiantes hoy?',
        '¿Cómo incorporar la ecología integral y el mundo del trabajo en nuestras materias?'
      ]
    },
    {
      num: 12,
      group: 4,
      title: 'Pedagogía Nuestroamericana y Evaluación Emancipadora',
      description: 'Currículas descolonizadas con memoria histórica, Malvinas y Patria Grande, y un sistema de evaluación integral no punitivo.',
      justification: 'Como enseñaron Martí, Freire y Jauretche, no hay liberación sin pensamiento propio ni justicia educativa con rankings que culpan a los pobres.',
      problem: 'Uso punitivo de pruebas estandarizadas para estigmatizar escuelas públicas y avance de enfoques por "habilidades" vaciados de contenido crítico.',
      prompts: [
        '¿Qué saberes nuestroamericanos y populares faltan en el diseño curricular actual?',
        '¿Cómo evaluar para mejorar la enseñanza sin caer en la meritocracia?'
      ]
    }
  ]
};
