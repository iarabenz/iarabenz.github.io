import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

@HostListener('document:mousemove', ['$event'])

anchorX = 0;
anchorY = 0;
anchor: HTMLElement | null = null;
rekt: DOMRect;

ngOnInIt(): void {
  if(this.anchor !== null) {
    if(this.rekt !== null) {
      this.rekt = this.anchor.getBoundingClientRect();
      
      this.anchorX = this.rekt.left + this.rekt.width / 2;
      this.anchorY = this.rekt.top + this.rekt.height / 2;
      
      this.anchor = document.getElementById("anchor");
    }
  }

  document.addEventListener("mousemove", (e) => {

  }
  );

}

onMouseMove(e: { clientX: any; clientY: any; }){
  
    console.log(e)

    const mouseX = e.clientX;
    const mouseY = e.clientY;


    const angleDeg = this.angle(mouseX, mouseY, this.anchorX, this.anchorY);

    console.log(angleDeg);

    const eyes = document.querySelectorAll(".eye");
    console.dir(eyes);
    eyes.forEach(eye => { 
        /* eye.style.transform = `rotate(${90 + angleDeg}deg)`; */

        console.dir(eye);
    })
}

angle (cx: number, cy: number, ex: number, ey: number) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = rad * 180 / Math.PI;
  return deg;
}
}

