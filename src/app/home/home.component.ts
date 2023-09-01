import { Component, HostListener, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { Canvas } from 'fabric/fabric-impl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _canvas?: fabric.Canvas;
  showTutorial: boolean = true;

  ngOnInit(): void {

    /* document.body.onmousemove = function(e) {
      document.documentElement.style.setProperty (
        '--x', (
          e.clientX+window.scrollX
        )
        + 'px'
      );
      document.documentElement.style.setProperty (
        '--y', (
          e.clientY+window.scrollY
        ) 
        + 'px'
      );
    } */

    this._canvas = new fabric.Canvas('fabricSurface', {
      backgroundColor: '#fdf5eb',
      selection: false,
      preserveObjectStacking: true,
      width: window.innerWidth,
      height: window.innerHeight,
      hoverCursor: 'grab',
      moveCursor:  'grabbing',
    });

    this._canvas.on('object:moving', (e) => {
      if (e.target) {
        e.target.opacity = 0.5;
        e.target.angle = 5;
        this.showTutorial = false;
        console.dir(this.showTutorial);
      }
    });

    this._canvas.on('object:modified', (e) => {
      if (e.target) {
        e.target.opacity = 1;
        e.target.angle = 0;
      }
    });

    this._canvas

      fabric.Image.fromURL('../assets/CD_Malbuch.gif', (img) => {
        img.set({
          left: 780/1920*window.innerWidth,
          top: 280/910*window.innerHeight,
          angle: 0,
        });
        img.scaleToWidth(250/1920*window.innerWidth);
        img.hasBorders = img.hasControls = false;
        this._canvas?.add(img);
        });

      fabric.Image.fromURL('../assets/HYF_Screenshot_Start.webp', (img) => {
      img.set({
        left: 860/1920*window.innerWidth,
        top: 700/910*window.innerHeight,
        angle: 0,
      });
      img.scaleToWidth(350/1920*window.innerWidth);
      img.hasBorders = img.hasControls = false;
      this._canvas?.add(img);
      });

      fabric.Image.fromURL('../assets/CD_Fahne.webp', (img) => {
        img.set({
          left: 1600/1920*window.innerWidth,
          top: 350/910*window.innerHeight,
          angle: 0,
        });
        img.scaleToWidth(300/1920*window.innerWidth);
        img.hasBorders = img.hasControls = false;
        this._canvas?.add(img);
        });

     fabric.Image.fromURL('../assets/Ghost_Ende.gif', (img) => {
      img.set({
        left: 1450/1920*window.innerWidth,
        top: 30/910*window.innerHeight,
        angle: 0,
      });
      img.scaleToWidth(300/1920*window.innerWidth);
      img.hasBorders = img.hasControls = false;
      this._canvas?.add(img);
      });

    fabric.Image.fromURL('../assets/Iara_Benz_Bilder_2.webp', (img) => {
      img.set({
        left: 1080/1920*window.innerWidth,
        top: 160/910*window.innerHeight,
        angle: 0,
      });
      img.scaleToWidth(400/1920*window.innerWidth);
      img.hasBorders = img.hasControls = false;
      this._canvas?.add(img);
      });

    fabric.Image.fromURL('../assets/KiR_Ansicht_Aussen.webp', (img) => {
      img.set({
        left: 410/1920*window.innerWidth,
        top: 240/910*window.innerHeight,
        angle: 0,
      });
      img.scaleToWidth(300/1920*window.innerWidth);
      img.hasBorders = img.hasControls = false;
      this._canvas?.add(img);
      });

      fabric.Image.fromURL('../assets/Traum (5).webp', (img) => {
        img.set({
          left: 1300/1920*window.innerWidth,
          top: 450/910*window.innerHeight,
          angle: 0,
      });
        img.scaleToWidth(350/1920*window.innerWidth);
        img.hasBorders = img.hasControls = false;
        this._canvas?.add(img);
        });

      fabric.Image.fromURL('../assets/Typo__Innenseiten (1).webp', (img) => {
        img.set({
          left: 80/1920*window.innerWidth,
          top: 340/910*window.innerHeight,
          angle: 0,
        });
        img.scaleToWidth(370/1920*window.innerWidth);
        img.hasBorders = img.hasControls = false;
        this._canvas?.add(img);
        });

      fabric.Image.fromURL('../assets/UI_Screen_1.webp', (img) => {
        img.set({
          left: 500/1920*window.innerWidth,
          top: 550/910*window.innerHeight,
          angle: 0,
        });
        img.scaleToWidth(400/1920*window.innerWidth);
        img.hasBorders = img.hasControls = false;
        this._canvas?.add(img);
        });

      fabric.Image.fromURL('../assets/Portrait2.webp', (img) => {
        img.set({
          left: 960/1920*window.innerWidth,
          top: 420/910*window.innerHeight,
          angle: 0,
        });
        img.scaleToWidth(300/1920*window.innerWidth);
        img.hasBorders = img.hasControls = false;
        this._canvas?.add(img);
                    
      });

    fabric.Image.fromURL('../assets/Das_kleinste.webp', (img) => {
      img.set({
        left: 1680/1920*window.innerWidth,
        top: 620/910*window.innerHeight,
        angle: 0,
      });
      img.scaleToWidth(180/1920*window.innerWidth);
      img.hasBorders = img.hasControls = false;
      this._canvas?.add(img);
      });
}
}

  /*   function animate(e: fabric.IEvent, dir: number) {
      const _canvas: any;
      if (e.target) {
        fabric.util.animate({
          startValue: e.target.angle,
          endValue: dir ? 10 : 0,
          duration: 100,
          onChange: (value: number) => {
            e.target!.rotate(value);
            _canvas.renderAll();
          },
          onComplete: () => {
            e.target!.setCoords();
          }
        });
        fabric.util.animate({
          startValue: e.target.scaleX,
          endValue: dir ? 1.2 : 1,
          duration: 100,
          onChange: (value: number) => {
            e.target!.scale(value);
            _canvas.renderAll();
          },
          onComplete: () => {
            e.target!.setCoords();
          }
        });
      }
    }
    
    this._canvas.on('mouse:down', (e: fabric.IEvent) => {
      animate(e, 1);
    });
    
    this._canvas.on('mouse:up', (e: fabric.IEvent) => {
      animate(e, 0);
    }); */