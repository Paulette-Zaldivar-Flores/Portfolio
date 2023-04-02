  window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('loading').style.display = 'none';
    }, 2000); // 2 seconds
  });




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
