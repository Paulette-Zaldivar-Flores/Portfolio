  // window.addEventListener('load', function() {
  //   setTimeout(function() {
  //     document.getElementById('loading').style.display = 'none';
  //   }, 3000); // 3 seconds
  // });

// Bubbles
  const numStars = 30;
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.floor(Math.random() * 100)}vw`;
    star.style.top = `${Math.floor(Math.random() * 100)}vh`;
    star.style.transform = `scale(${Math.random()})`;
    star.style.width = `${Math.random()}em`;
    star.style.height = star.style.width;

    stars.push(star);
    document.body.append(star);
  }

  stars.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 12
    };

    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 2000, // random duration
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  });

  // Tools Buttons

  // Get buttons and pill list
// Get buttons and pill list
const frontendBtn = document.getElementById("frontend-btn");
const backendBtn = document.getElementById("backend-btn");
const otherToolsBtn = document.getElementById("other-tools-btn");
const skillList = document.getElementById("skill-list");

// Add click event listeners to buttons
frontendBtn.addEventListener("click", () => showSkills("frontend"));
backendBtn.addEventListener("click", () => showSkills("backend"));
otherToolsBtn.addEventListener("click", () => showSkills("other-tools"));

function showSkills(category) {
  // Hide all pills
  const pills = skillList.querySelectorAll(".pill");
  pills.forEach(pill => pill.style.display = "none");

  // Show pills for selected category
  switch (category) {
    case "frontend":
      skillList.querySelector(".devicon-javascript-plain").parentNode.style.display = "block";
      skillList.querySelector(".devicon-rails-plain").parentNode.style.display = "block";
      skillList.querySelector(".devicon-react-original").parentNode.style.display = "block";
      skillList.querySelector(".devicon-webpack-plain").parentNode.style.display = "block";
      skillList.querySelector(".devicon-bootstrap-plain").parentNode.style.display = "block";
      skillList.querySelector(".devicon-html5-plain").parentNode.style.display = "block";
      skillList.querySelector(".devicon-css3-plain").parentNode.style.display = "block";

      break;
    case "backend":
      skillList.querySelector(".devicon-ruby-plain").parentNode.style.display = "block";
      skillList.querySelector(".devicon-postgresql-plain").parentNode.style.display = "block";
      skillList.querySelector(".devicon-mysql-plain").parentNode.style.display = "block";
      break;
    case "other-tools":
      skillList.querySelector(".devicon-heroku-plain").parentNode.style.display = "block";
      skillList.querySelector(".devicon-figma-plain").parentNode.style.display = "block";
      skillList.querySelector(".rest-api-icon").parentNode.style.display = "block";
      skillList.querySelector(".netlify-api-icon").parentNode.style.display = "block";
      break;
    default:
      break;
  }
}
