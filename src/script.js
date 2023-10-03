const frontendBtn = document.getElementById("frontend-btn");
const backendBtn = document.getElementById("backend-btn");
const otherToolsBtn = document.getElementById("other-tools-btn");
const skillList = document.getElementById("skill-list");


frontendBtn.addEventListener("click", () => showSkills("frontend"));
backendBtn.addEventListener("click", () => showSkills("backend"));
otherToolsBtn.addEventListener("click", () => showSkills("other-tools"));

function showSkills(category) {
  const pills = skillList.querySelectorAll(".pill");
  pills.forEach(pill => pill.style.display = "none");
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
