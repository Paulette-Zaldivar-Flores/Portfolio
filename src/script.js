  window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('loading').style.display = 'none';
    }, 2000); // 2 seconds
  });

//   // select the element to animate
// const element = document.querySelector('.animate__animated.animate__slideInLeft');

// // add a scroll event listener to the window object
// window.addEventListener('scroll', () => {
//   // get the position of the element relative to the viewport
//   const bounding = element.getBoundingClientRect();

//   // check if the element is currently visible on the screen
//   if (
//     bounding.top >= 0 &&
//     bounding.left >= 0 &&
//     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//   ) {
//     // add the "animate__animated animate__slideInLeft" class to the element
//     element.classList.add('animate__animated', 'animate__slideInLeft');
//   }
// });




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
