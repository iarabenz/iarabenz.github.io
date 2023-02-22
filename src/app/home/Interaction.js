/* document.addEventListener("mousemove", (e) => {

    console.log(e)

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById("anchor")
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    console.log(angleDeg)

    const eyes = document.querySelectorAll(".eye")
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;

    })
}
)

function angle (cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
} */


/* const container = document.querySelector('.container');
container.addEventListener('mousemove', e => {
  const eyes = document.querySelectorAll('.eye');
  [].forEach.call(eyes, function(eye) {
    // Get the mouse position on the horizontal axis
    let mouseX = eye.getBoundingClientRect().right;
    // If it's the left eye we need the left offset instead the right
    if (eye.classList.contains('eye-left')) {
      mouseX = eye.getBoundingClientRect().left;
    }
    // Now we also need the vertical offset
    let mouseY = eye.getBoundingClientRect().top;
    // Now we are going to calculate the radian value of the offset between the mouse and the eye
    let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
    // Let's convert this into a degree based value so we can use it in CSS
    let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
    // Now all we have to do is add this degrees to our eye!
    eye.style.transform = `rotate(${rotationDegrees}deg)`;
  });
}); */