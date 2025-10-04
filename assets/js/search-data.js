// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-acerca",
    title: "Acerca",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publicaciones",
          title: "Publicaciones",
          description: "Artículos y capítulos de libros publicados.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-proyectos",
          title: "Proyectos",
          description: "Proyectos de docencia e investigación.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/proyectos/";
          },
        },{id: "nav-repositorios",
          title: "Repositorios",
          description: "Repositorios para las clases de docencia y proyectos de investigación.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-docencia",
          title: "Docencia",
          description: "Asignaturas curriculares obligatorias, curriculares optativas y cursos intersemestrales impartidos en la ENES Juriquilla.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-colegas",
          title: "Colegas",
          description: "Miembros de laboratorio y grupos de trabajo.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-tesis",
          title: "Tesis",
          description: "Tesis de licenciatura, maestría y doctorado.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/thesis/";
          },
        },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-ecuaciones-diferenciales-i",
          title: 'Ecuaciones Diferenciales I',
          description: "Plan de Estudios de la Licenciatura en Tecnología. Sistema Escolarizado. Modalidad Presencial",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-mejora-del-desempeño-de-la-tasa-de-transferencia-de-calor-en-una-bomba-geotérmica",
          title: 'Mejora del desempeño de la tasa de transferencia de calor en una bomba...',
          description: "Instituto de Investigación en Ciencias Básicas y Aplicadas, UAEM.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-papiit-ta100223",
          title: 'PAPIIT TA100223',
          description: "Programación e implementación de esquemas numéricos en paralelo para soluciones aproximadas a ecuaciones diferenciales ordinarias así como parciales de orden fraccionario",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-papime-pe108324",
          title: 'PAPIME PE108324',
          description: "Diseño y desarrollo de un laboratorio de impresión 3D para la enseñanza",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-dinámica-de-sistemas-físicos",
          title: 'Dinámica de Sistemas Físicos',
          description: "Plan de Estudios de la Licenciatura en Tecnología. Sistema Escolarizado. Modalidad Presencial",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-modelación-de-sistemas-físicos",
          title: 'Modelación de Sistemas Físicos',
          description: "Plan de Estudios de la Licenciatura en Tecnología. Sistema Escolarizado. Modalidad Presencial",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-optimización",
          title: 'Optimización',
          description: "Plan de Estudios de la Licenciatura en Tecnología. Sistema Escolarizado. Modalidad Presencial",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-matemáticas-discretas",
          title: 'Matemáticas Discretas',
          description: "Plan de Estudios de la Licenciatura en Tecnología. Sistema Escolarizado. Modalidad Presencial",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-sistemas-embebidos",
          title: 'Sistemas Embebidos',
          description: "Plan de Estudios de la Licenciatura en Tecnología. Sistema Escolarizado. Modalidad Presencial",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-procesamiento-digital-de-imágenes",
          title: 'Procesamiento digital de imágenes',
          description: "Plan de Estudios de la Licenciatura en Tecnología. Sistema Escolarizado. Modalidad Presencial",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-introducción-al-aprendizaje-automático",
          title: 'Introducción al aprendizaje automático',
          description: "Cursos Intersemestrales. Sistema Escolarizado. Modalidad Presencial",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
