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

  // 10 escenarios del juego Desafío PDHI basados en capítulos de Perspectivas estratégicas (2026)
  gameScenarios: [
    {
      chapter: 'Cap. 1 · Modelo Productivo',
      title: '¿Qué hacemos con la estructura productiva argentina?',
      desc: 'Entre 2023 y 2025 la actividad industrial cayó un 8% y el gasto en ciencia y tecnología para 2026 se redujo un 48% real. ¿Cuál es la salida estratégica del PDHI?',
      options: [
        {
          text: 'Especializarnos solo en exportar materias primas sin valor agregado y dejar que el mercado asigne recursos.',
          correct: false
        },
        {
          text: 'Combinar reindustrialización con complejidad tecnológica (INVAP, INTA, INTI, CAREM) junto al fortalecimiento de la economía popular.',
          correct: true
        },
        {
          text: 'Frenar todo crecimiento industrial bajo una agenda de "decrecimiento" europeo.',
          correct: false
        }
      ],
      explanation: 'El Prólogo y el Cap. 1 rechazan tanto la reprimarización libertaria como el decrecimiento: proponen crecer complejizando la industria y la ciencia, integrando a la economía popular.'
    },
    {
      chapter: 'Cap. 2 · Energía Justa y Soberana',
      title: 'El 84% de nuestra energía primaria viene de petróleo y gas',
      desc: 'Argentina tiene hidrocarburos, energía nuclear, hidroelectricidad y renovables. ¿Cómo plantea el PDHI organizar la transición energética?',
      options: [
        {
          text: 'Entregar la renta energética a exportadoras privadas para juntar dólares rápidos sin importar las tarifas internas.',
          correct: false
        },
        {
          text: 'Usar los recursos estratégicos para impulsar desarrollo productivo propio, integración territorial, tarifas justas y transición sustentable.',
          correct: true
        },
        {
          text: 'Apagar de inmediato toda producción de gas y petróleo sin reemplazarla.',
          correct: false
        }
      ],
      explanation: 'El problema no es solo cuánto se produce sino quién capta la renta y cómo se distribuye para mejorar la vida cotidiana e industrializar el país.'
    },
    {
      chapter: 'Cap. 3 · Deuda y Macroeconomía',
      title: 'Vencimientos imposibles con acreedores y el FMI',
      desc: 'Los vencimientos proyectados con privados para 2026 equivalen al 31% de las reservas del BCRA, sumado al peso de la deuda con el FMI. ¿Qué propone el libro?',
      options: [
        {
          text: 'Aplicar ajuste fiscal permanente sobre jubilaciones, obra pública y educación para pagar al contado.',
          correct: false
        },
        {
          text: 'Exigir la corresponsabilidad del FMI para despejar vencimientos hasta recuperar reservas, inflación y poder adquisitivo previos a 2018.',
          correct: true
        },
        {
          text: 'Tomar nueva deuda de corto plazo a tasas altísimas para postergar el problema un año más.',
          correct: false
        }
      ],
      explanation: 'El Cap. 3 plantea recuperar la sostenibilidad de la deuda sin ahogar el crecimiento, los ingresos populares ni la inversión estratégica.'
    },
    {
      chapter: 'Cap. 5 · Malvinas, Atlántico Sur y Antártida',
      title: 'Más que una consigna simbólica',
      desc: 'El Atlántico Sur concentra rutas interoceánicas, pesca, energía offshore y proyección antártica. ¿Cómo aborda el PDHI la cuestión Malvinas?',
      options: [
        {
          text: 'Como un asunto diplomático secundario que no debe interferir con la relación comercial con potencias.',
          correct: false
        },
        {
          text: 'Como una política de Estado integral que articula soberanía territorial, desarrollo científico-marítimo, defensa e interés nacional.',
          correct: true
        },
        {
          text: 'Como una reivindicación exclusivamente histórica sin impacto económico ni geopolítico actual.',
          correct: false
        }
      ],
      explanation: 'La plataforma continental argentina y la cuestión Malvinas son piezas clave de un proyecto soberano de desarrollo.'
    },
    {
      chapter: 'Cap. 9 · Nuestra Reforma Laboral',
      title: 'Trabajo, automatización e inteligencia artificial',
      desc: 'Frente a reformas laborales regresivas y discursos sobre el "fin del trabajo" por la IA, ¿qué defiende el PDHI?',
      options: [
        {
          text: 'Flexibilizar contratos y eliminar derechos laborales para que las empresas compitan bajando salarios.',
          correct: false
        },
        {
          text: 'Reivindicar la centralidad del trabajo en todas sus formas y regular la tecnología para que la productividad mejore derechos y tiempo libre.',
          correct: true
        },
        {
          text: 'Prohibir toda innovación tecnológica en los lugares de trabajo.',
          correct: false
        }
      ],
      explanation: 'Citando a Francisco y León XIV, el Cap. 9 sostiene que la clave no es si se usa IA, sino quién la controla y cómo se distribuyen sus beneficios.'
    },
    {
      chapter: 'Cap. 10 · Techo para Vivir, Tierra para Habitar',
      title: '1,2 millones de familias viven en barrios populares',
      desc: 'Jóvenes que no pueden alquilar, jubilados que no llegan al monoambiente y déficit habitacional estructural. ¿Cuál es el enfoque del PDHI?',
      options: [
        {
          text: 'Desregular completamente los alquileres y esperar que el crédito privado resuelva la demanda.',
          correct: false
        },
        {
          text: 'Reconocer la vivienda como bien de uso y derecho: planificación del suelo, integración socio urbana de barrios populares y acceso universal.',
          correct: true
        },
        {
          text: 'Erradicar barrios populares hacia las afueras sin servicios ni transporte.',
          correct: false
        }
      ],
      explanation: 'El acceso a la tierra y la vivienda es condición material para proyectar la vida hacia adelante y construir comunidad.'
    },
    {
      chapter: 'Cap. 11 · Ambiente, Justicia Social y Casa Común',
      title: 'La falsa grieta entre producción y ambiente',
      desc: 'Retomando el Mensaje Ambiental de Perón (1972) y Laudato Si’ (2015), ¿qué plantea la ecología integral del PDHI?',
      options: [
        {
          text: 'Que el cuidado ambiental es un lujo de países ricos y hay que postergarlo hasta crecer económicamente.',
          correct: false
        },
        {
          text: 'Que no hay dos crisis separadas sino una sola crisis socio-ambiental: combatir la pobreza y cuidar la naturaleza van de la mano.',
          correct: true
        },
        {
          text: 'Que los problemas ambientales se resuelven solo con reciclaje individual de los consumidores.',
          correct: false
        }
      ],
      explanation: 'Discutir el ambiente es discutir quién accede al agua, quién respira aire sano y quién decide sobre el uso del suelo.'
    },
    {
      chapter: 'Cap. 12 · Derecho a la Alimentación',
      title: 'Seguridad y soberanía alimentaria',
      desc: 'En un país productor de alimentos donde crece el hambre y la malnutrición infantil, ¿qué propone el PDHI?',
      options: [
        {
          text: 'Dejar que los precios internos se igualen a los internacionales sin regulación.',
          correct: false
        },
        {
          text: 'Articular seguridad alimentaria (acceso efectivo) con soberanía alimentaria, agroecología y fortalecimiento de comedores y SAE escolares.',
          correct: true
        },
        {
          text: 'Reemplazar la alimentación fresca por ultraprocesados baratos en las escuelas.',
          correct: false
        }
      ],
      explanation: 'La alimentación saludable en la escuela y en los barrios es un derecho humano y una política central contra la desigualdad.'
    },
    {
      chapter: 'Cap. 15 y 16 · Niñez y Política Educativa',
      title: 'Las "escuelas desbordadas" y el ajuste educativo',
      desc: 'Con el presupuesto educativo nacional cayendo un 49% real (2023-2026) y escuelas desbordadas por demandas sociales, ¿qué plantea el capítulo educativo?',
      options: [
        {
          text: 'Responsabilizar individualmente a docentes y familias, y cerrar grados donde cae la natalidad.',
          correct: false
        },
        {
          text: 'Fortalecer el rol garante del Estado, aprovechar la baja natalidad para parejas pedagógicas y jornada completa, y tejer redes intersectoriales.',
          correct: true
        },
        {
          text: 'Implementar vouchers para que las escuelas compitan entre sí por matrícula.',
          correct: false
        }
      ],
      explanation: 'La escuela no puede sola contra la pobreza: necesita inversión, equipos interdisciplinarios y articulación con salud y organizaciones comunitarias.'
    },
    {
      chapter: 'Cap. 17 · Transformación Digital Humana',
      title: 'Soberanía tecnológica frente a las Big Tech',
      desc: 'Las grandes plataformas capturan datos educativos y moldean la subjetividad juvenil. ¿Qué propone la Transformación Digital Humana?',
      options: [
        {
          text: 'Adoptar sin regulación cualquier plataforma comercial extranjera en las escuelas.',
          correct: false
        },
        {
          text: 'Desarrollar plataformas educativas públicas y soberanas, regular el uso de IA y proteger los datos de estudiantes y docentes.',
          correct: true
        },
        {
          text: 'Desconectar las escuelas de internet para evitar problemas.',
          correct: false
        }
      ],
      explanation: 'El Estado debe garantizar conectividad y dispositivos propios, promoviendo ciudadanía digital crítica y resguardo de derechos.'
    }
  ],

  // Datos de diagnóstico educativo (de ambos PDFs)
  eduStats: [
    {
      number: '-49%',
      label: 'Caída real del presupuesto educativo nacional entre 2023 y 2026 (con recortes >70% en infraestructura y 75% en becas Progresar).',
      source: 'Perspectivas estratégicas, Cap. 16 (p. 419)',
      accent: ''
    },
    {
      number: '54,6% / 70%',
      label: 'Estudiantes por debajo del nivel básico en Matemática (Aprender 2024): 54,6% en el total y 70% en el quintil de menores ingresos.',
      source: 'Perspectivas estratégicas, Cap. 16 (p. 418)',
      accent: 'accent-gold'
    },
    {
      number: '23% → 19%',
      label: 'Baja de la inversión educativa sobre el presupuesto total de CABA entre 2015 y 2023/2026 (20% en 2024).',
      source: 'FDHI.00.26 Educación CABA (p. 4)',
      accent: 'accent-blue'
    },
    {
      number: '24.509 vs 8.380',
      label: 'Matrícula de Formación Docente en CABA (2024): el sector estatal sostiene el núcleo formativo frente al privado, aunque cayó entre 2020 y 2024.',
      source: 'FDHI.00.26 Educación CABA, Sec. 4.8 (p. 47)',
      accent: 'accent-green'
    }
  ],

  eduProposals: [
    {
      category: 'niveles',
      title: 'Nivel Inicial: Cuidado y Pedagogía',
      items: [
        'Conducción integral desde el área educativa nacional para superar la fragmentación con áreas sociales.',
        'Ampliar oferta pública de 45 días a 2 años y universalizar salas de 3, 4 y 5 con jornada extendida opcional.',
        'Integrar funciones de cuidado y alfabetización cultural, artística y científica temprana.'
      ]
    },
    {
      category: 'niveles',
      title: 'Nivel Primario: Parejas Pedagógicas',
      items: [
        'Aprovechar la caída de la natalidad para mejorar la enseñanza en lugar de cerrar grados o cargos.',
        'Implementar parejas pedagógicas en el primer ciclo para fortalecer la alfabetización inicial.',
        'Universalizar la jornada completa o extendida con idiomas, ciencias, arte y deporte en articulación comunitaria.'
      ]
    },
    {
      category: 'niveles',
      title: 'Nivel Secundario: Nuevo Modelo',
      items: [
        'Reestructurar el currículum por áreas integradas, dialogando con la vida y expectativas juveniles.',
        'Sistema integral de seguimiento temprano del ausentismo y ampliación de becas.',
        'Espacios puente territoriales con organizaciones sociales, vínculo con universidades y fortalecimiento técnico-profesional.'
      ]
    },
    {
      category: 'formacion',
      title: 'Formación Docente y Profesorados',
      items: [
        'Articular la extensa red de ISFD/ENS/IES con acuerdos comunes sin perder arraigo regional.',
        'Acompañar trayectorias de estudiantes que son primera generación superior y trabajan o tienen tareas de cuidado.',
        'Formación continua gratuita con sentido pedagógico (superar la lógica mercantil del "puntaje"), tutores de docentes noveles y recomposición salarial.'
      ]
    },
    {
      category: 'formacion',
      title: 'Alertas en CABA (FDHI 2026)',
      items: [
        'Disputa por el centro de gravedad de la formación docente entre UdelaCiudad (sin series estadísticas comparables ni concursos plenos) e institutos históricos.',
        'Cierre de ofertas estratégicas en institutos públicos (ej. Lengua y Física en el IES N° 2 Mariano Acosta) y cierre del postítulo de ESI en 2025.',
        'Urgencia de fortalecer lectura/escritura superior y formatos de cursada compatibles con la realidad laboral.'
      ]
    },
    {
      category: 'transversal',
      title: 'Escuela, Comunidad y Mundo Digital',
      items: [
        'Equipos interdisciplinarios para salud mental y violencias, alimentación escolar saludable, cooperadoras y ciudades educadoras.',
        'Política nacional de educación digital crítica, plataformas públicas soberanas y regulación de la IA.',
        'Suspensión del uso de celulares en niveles obligatorios y reemplazo por dispositivos estatales garantizados.',
        'Evaluación integral no punitiva ni competitiva orientada a reducir desigualdades.'
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
