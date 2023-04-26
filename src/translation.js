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
    health.textContent = "Una aplicación móvil que te permite cargar, traducir y compartir documentos médicos.";
    berry.textContent= "Berry Fiore es una página de aterrizaje para una empresa de dulces mexicanos en San Diego, CA";
    cocktails.textContent = "Ez Cocktails es un sitio web donde puedes buscar tus recetas de cócteles favoritas y obtener datos de cócteles suministrados por https://www.thecocktaildb.com/api.php.";
    promptory.textContent = "Promptory es una aplicación de diccionario que muestra la definición, imágenes, pronunciación de audio y partes de la oración de una palabra utilizando las API de Pexels y Dictionary."
    babyloop.textContent = "Una aplicación de comercio electrónico web que te permite alquilar y rentar productos para bebés al cargar tus ofertas.";
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
    health.textContent = "A mobile application that allows you upload, translate and share medical documents."
    berry.textContent= "Berry Fiore is a landing page for a Mexican sweets company in San Diego, CA"
    cocktails.textContent = "Ez Cocktails is a website where you can search your favorite cocktail recipes and retrieve cocktail data supplied by https://www.thecocktaildb.com/api.php"
    promptory.textContent = "Promptory is dictionary app that shows the definition, images, audio pronunciation and parts of speech of a word using the Pexels and Dictionary API."
    babyloop.textContent = "An ecommerce app web that allows you to rent and rent out baby products by uploading your offers."
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
