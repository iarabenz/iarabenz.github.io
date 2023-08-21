import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {

  kleinsteImages: string[] = [
    "assets/Das_kleinste_Mockup_1.png",
    "assets/Das_kleinste_Mockup_2.png",
    "assets/Das_kleinste_Mockup_3.png",
    "assets/Das_kleinste_Mockup_4.png",
    "assets/Das_kleinste_Mockup_5.png",
    "assets/Das_kleinste_Mockup_6.png"
  ];

  risoImages: string[] = [
    "assets/Traum_Seite_01.png",
    "assets/Traum_Seite_02.png",
    "assets/Traum_Seite_03.png",
    "assets/Traum_Seite_04.png",
    "assets/Traum_Seite_05.png",
    "assets/Traum_Seite_06.png",
    "assets/Traum_Seite_07.png",
    "assets/Traum_Seite_08.png",
    "assets/Traum_Seite_09.png",
    "assets/Traum_Seite_10.png",
    "assets/Traum_Seite_11.png"
  ];

  verschwindenImages: string[] = [
    "assets/Verschwinden_Magazine (1).png",
    "assets/Verschwinden_Magazine (2).png",
    "assets/Verschwinden_Magazine (3).png",
    "assets/Verschwinden_Magazine (4).png",
    "assets/Verschwinden_Magazine (5).png",
    "assets/Verschwinden_Magazine (6).png",
    "assets/Verschwinden_Magazine (7).png",
    "assets/Verschwinden_Magazine (8).png",
    "assets/Verschwinden_Magazine (9).png",
    "assets/Verschwinden_Magazine (10).png",
    "assets/Verschwinden_Magazine (11).png",    
    "assets/Verschwinden_Magazine (12).png",
    "assets/Verschwinden_Magazine (13).png",
    "assets/Verschwinden_Magazine (14).png",
    "assets/Verschwinden_Magazine (15).png",
    "assets/Verschwinden_Magazine (16).png",
    "assets/Verschwinden_Magazine (17).png",
    "assets/Verschwinden_Magazine (18).png",
    "assets/Verschwinden_Magazine (19).png",
    "assets/Verschwinden_Magazine (20).png",
    "assets/Verschwinden_Magazine (21).png",
    "assets/Verschwinden_Magazine (23).png",
    "assets/Verschwinden_Magazine (24).png",
    "assets/Verschwinden_Magazine (25).png",
    "assets/Verschwinden_Magazine (26).png",
  ];

  typoImages: string[] = [
    "assets/Typo__Innenseiten (1).png",
    "assets/Typo__Innenseiten (2).png",
    "assets/Typo__Innenseiten (3).png",
    "assets/Typo__Innenseiten (4).png",
    "assets/Typo__Innenseiten (5).png",
    "assets/Typo__Innenseiten (6).png",
    "assets/Typo__Innenseiten (7).png",
    "assets/Typo__Innenseiten (8).png",
    "assets/Typo__Innenseiten (9).png",
    "assets/Typo__Innenseiten (10).png",
    "assets/Typo__Innenseiten (11).png",    
    "assets/Typo__Innenseiten (12).png",
    "assets/Typo__Innenseiten (13).png",
    "assets/Typo__Innenseiten (14).png",
    "assets/Typo__Innenseiten (15).png",
    "assets/Typo__Innenseiten (16).png",
    "assets/Typo__Innenseiten (17).png",
    "assets/Typo__Innenseiten (18).png",
    "assets/Typo__Innenseiten (19).png",
    "assets/Typo__Innenseiten (20).png",
    "assets/Typo__Innenseiten (21).png",
    "assets/Typo__Innenseiten (23).png",
    "assets/Typo__Innenseiten (24).png"
  ];
}
