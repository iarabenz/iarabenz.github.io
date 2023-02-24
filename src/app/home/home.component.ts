import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: { clientX: any; clientY: any; }) {
    /* console.log(e); */

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (this.anchor !== null) {
      this.rekt = this.anchor.getBoundingClientRect();
      /* console.dir(this.rekt); */
      this.anchorX = this.rekt.left + this.anchor.offsetWidth / 2;
      this.anchorY = this.rekt.top + this.anchor.offsetHeight / 2;
    }

    const angleDeg = this.angle(mouseX, mouseY, this.anchorX, this.anchorY);

    /* console.log(angleDeg); */

    var transX = (mouseX - this.anchorX) * 0.1;
    if (transX > 15) {
      transX = 15;
    } else if (transX < -15) {
      transX = -15;
    }
    var transY = (mouseY - this.anchorY) * 0.1;
    if (transY > 15) {
      transY = 15;
    } else if (transY < -15) {
      transY = -15;
    }


    const eyes = document.querySelectorAll(".eye") as NodeListOf<HTMLElement>;
    eyes.forEach(eye => { 

      eye.style.transform = `translate(${transX}px, ${transY}px)`;
      /* eye.style.transform = `rotate(${angleDeg}deg)`; */
      
    });
  }

  anchorX = 0;
  anchorY = 0;
  anchor: HTMLElement | null = null;
  rekt: DOMRect | null = null;

  constructor() {}

  ngOnInit(): void {
    this.anchor = document.getElementById("anchor");
  }

  angle(cx: number, cy: number, ex: number, ey: number) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
  }
}


/* export class HomeComponent {

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
/* 
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
 */ 