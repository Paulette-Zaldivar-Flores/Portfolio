function updateLanguage(language) {
  const home = document.getElementById("home");
  const about_me = document.getElementById("about");
  const my_projects = document.getElementById("my-projects");
  const contact_me = document.getElementById("contact-me");
  const greeting = document.getElementById("h2-greeting");
  const blue = document.getElementById("blue");
  const build = document.getElementById("build");
  const web = document.getElementById( "web");
  const about = document.getElementById("about-me");
  const story = document.getElementById("my-story");
  const tech = document.getElementById("tech");
  const projects = document.getElementById("projects");
  const health = document.getElementById("health-pocket");
  const contact = document.getElementById("contact");
  const paragraph2 = document.getElementById("paragraph-style-2");
  const button = document.getElementById("button");
  const berry = document.getElementById("berry-fiore");
  const cocktails = document.getElementById("cocktails");
  const promptory = document.getElementById("promptory");
  const babyloop = document.getElementById("baby-loop");
  const mamoru =  document.getElementById("mamoru");

  if (language === "spanish") {
    home.textContent = "Inicio";
    about_me.textContent = "Sobre Mi";
    my_projects.textContent = "Mis Proyectos";
    contact_me.textContent = "Contácteme";
    greeting.textContent = "Hola, mi nombre es";
    blue.textContent = "Paulette Zaldivar Flores";
    build.textContent = "diseño y construyo";
    web.textContent = "aplicaciones web";
    about.textContent = "- Sobre Mi -";
    story.textContent = "Hola, soy Paulette, una educadora y desarrolladora frontend con un fuerte interés en crear aplicaciones amigables para el usuario. Con más de una década de experiencia docente, he desarrollado una variedad de habilidades, incluyendo comunicación efectiva, resolución de problemas y trabajo en equipo. Una de mis fortalezas es mi habilidad para comunicarme de manera que las personas se sientan cómodas, lo que me permite ayudar a los individuos a comprender fácilmente conceptos complejos. Como persona multilingüe que ha trabajado en entornos internacionales, aporto una perspectiva global a mi trabajo. Me apasiona ofrecer soluciones frontend limpias y efectivas que mejoren la experiencia de los usuarios con la tecnología. Estoy emocionada de llevar mi experiencia en educación y mi pasión por el desarrollo frontend a un equipo inclusivo que fomente el crecimiento profesional, la empatía y la creatividad. Si está interesado en discutir cualquier oportunidad, no dude en ponerse en contacto conmigo."
    tech.textContent = "- Mis Herramientas -";
    projects.textContent = "- Mis Proyectos -";
    health.textContent = "Health Pocket es una aplicación móvil que te permite cargar, traducir y compartir documentos médicos. Este proyecto fue desarrollado para mi proyecto final en Le Wagon Tokyo. Fui la desarrolladora frontend, la gerente de proyecto y la diseñadora. Sin embargo, también participé como desarrolladora fullstack para varias funciones. ¡Echa un vistazo a la demo!";
    berry.textContent= "Berry Fiore es una página de destino para una compañía de dulces mexicanos en San Diego, CA. Este es un proyecto de trabajo independiente pagado que se actualiza continuamente. Actualmente estoy aprendiendo a rastrear Instagram para actualizar las imágenes de Instagram en esta página. La cliente dijo que le encanta todo!";
    cocktails.textContent = "Ez Cocktails es un sitio web donde puedes buscar tus recetas favoritas de cócteles. Este es mi primer proyecto grupal desarrollado para el Voyage 40 en Chingu. En este proyecto, fui la desarrolladora frontend y diseñadora. Aprendí a usar Jira y Git durante el desarrollo de este proyecto.";
    promptory.textContent = "Promptory es una aplicación de diccionario que muestra la definición, imágenes, pronunciación de audio y partes de la oración de una palabra utilizando las API de Pexels y Dictionary. Este es mi proyecto final para SheCodes y demuestra todo lo que aprendí como desarrolladora frontend y diseñadora en ese momento."
    babyloop.textContent = "Baby Loop es una aplicación web de comercio electrónico que te permite alquilar y alquilar productos para bebés al cargar tus ofertas. Este proyecto fue desarrollado para Le Wagon Tokyo y es mi primer proyecto fullstack. Fui la desarrolladora frontend, diseñadora y gestora de proyecto.";
    mamoru.textContent = "Mamoru es una aplicación de comercio electrónico que promueve la sostenibilidad al conectar a los usuarios con negocios sostenibles. Actualmente, trabajo como desarrollador frontend y diseñador para esta empresa en este proyecto y en otros proyectos también.";
    contact.textContent = "- Contácteme -";
    paragraph2.textContent = "Mi pasión por el desarrollo frontend ha florecido junto con mis habilidades de codificación. Me fascinan las posibilidades ilimitadas de crear páginas web que conecten al mundo digitalmente. ¿Quizás mi próximo proyecto podría ser contigo? ";
    button.textContent = "Contácteme";
  } else {
    home.textContent = "Home";
    about_me.textContent = "About Me";
    my_projects.textContent = "My Projects";
    contact_me.textContent = "Contact Me"
    greeting.textContent = "Hello, my name is";
    blue.textContent = "Paulette Zaldivar Flores";
    build.textContent = "I design and build";
    web.textContent = "web applications";
    about.textContent = "- About Me -"
    story.textContent = "Hi, I'm Paulette, a Senior Educator and Frontend Developer with a strong interest in creating user-friendly applications. With over a decade of teaching experience, I have developed a diverse set of skills including effective communication, problem-solving, and teamwork. One of my strengths is my ability to communicate in a way that makes people feel comfortable, which allows me to help individuals understand complex concepts easily. As a multilingual individual who has worked in international environments, I bring a global perspective to my work. I am passionate about delivering clean and effective frontend solutions that enhance users' experiences with technology. I am excited to bring my expertise in education and my passion for frontend development to an inclusive team that fosters professional growth, empathy, and creativity. If you are interested in discussing any opportunities, please feel free to contact me."
    tech.textContent = "- My Tool Box -"
    projects.textContent = "- My Projects-";
    health.textContent = "Health Pocket is a mobile application that allows you upload, translate and share medical documents. This was developed as my final project for Le Wagon Tokyo. I was the lead frontend developer, project manager and designer. However, I participated as a fullstack developer for several features. Check out the demo."
    berry.textContent= "Berry Fiore is a landing page for a Mexican sweets company in San Diego, CA. This is a paid freelance project that is continously updated. I am currently learning how to scrape instagram to update instagram images in this page. The customer said she loves the whole thing!"
    cocktails.textContent = "Ez Cocktails is an app where you can search for your favorite cocktail recipes. This is my first group project developed for Voyage 40 at Chingu. For this project I was the frontend developer and designer. I learned how to use Jira and Git during the development of this project."
    promptory.textContent = "Promptory is dictionary app that shows the definition, images, audio pronunciation and parts of speech of a word using the Pexels and Dictionary API. This is my final project for SheCodes it demonstrates all my learning as a frontend developer and designer at the time."
    babyloop.textContent = "Baby Loop is an ecommerce app that allows you to rent and rent out baby products by uploading your offers. This project was developed for Le Wagon Tokyo and is my first fullstack project. I was the frontend developer, designer and project manager for this project."
    mamoru.textContent = "Mamoru is an ecommerce app that promotes sustainability by connecting users with sustainable businesses. I am currently working as a frontend developer and designer for this company, handling this project and other projects as well.";
    contact.textContent = "-Contact Me";
    paragraph2.textContent ="My passion for frontend development has flourished alongside my coding skills. I am fascinated by the limitless possibilities of creating web pages that connect the world digitally. Perhaps my next project could be with you?";
    button.textContent = "Contact Me";
  }
}

const languageSwitch = document.getElementById("language-switch-input");
languageSwitch.addEventListener("change", function() {
  if (languageSwitch.checked) {
    updateLanguage("spanish");
  } else {
    updateLanguage("english");
  }
});
