import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {

  kleinsteImages: string[] = [
    "assets/Das_kleinste_Mockup_1.webp",
    "assets/Das_kleinste_Mockup_2.webp",
    "assets/Das_kleinste_Mockup_3.webp",
    "assets/Das_kleinste_Mockup_4.webp",
    "assets/Das_kleinste_Mockup_5.webp",
    "assets/Das_kleinste_Mockup_6.webp"
  ];

  risoImages: string[] = [
    "assets/Traum (1).webp",
    "assets/Traum (2).webp",
    "assets/Traum (3).webp",
    "assets/Traum (4).webp",
    "assets/Traum (5).webp",
    "assets/Traum (6).webp",
    "assets/Traum (7).webp",
    "assets/Traum (8).webp",
    "assets/Traum (9).webp",
    "assets/Traum (10).webp"
    ];

  verschwindenImages: string[] = [
    "assets/Verschwinden_Magazine (1).webp",
    "assets/Verschwinden_Magazine (2).webp",
    "assets/Verschwinden_Magazine (3).webp",
    "assets/Verschwinden_Magazine (4).webp",
    "assets/Verschwinden_Magazine (5).webp",
    "assets/Verschwinden_Magazine (6).webp",
    "assets/Verschwinden_Magazine (7).webp",
    "assets/Verschwinden_Magazine (8).webp",
    "assets/Verschwinden_Magazine (9).webp",
    "assets/Verschwinden_Magazine (10).webp",
    "assets/Verschwinden_Magazine (11).webp",    
    "assets/Verschwinden_Magazine (12).webp",
    "assets/Verschwinden_Magazine (13).webp",
    "assets/Verschwinden_Magazine (14).webp",
    "assets/Verschwinden_Magazine (15).webp",
    "assets/Verschwinden_Magazine (16).webp",
    "assets/Verschwinden_Magazine (17).webp",
    "assets/Verschwinden_Magazine (18).webp",
    "assets/Verschwinden_Magazine (19).webp",
    "assets/Verschwinden_Magazine (20).webp",
    "assets/Verschwinden_Magazine (21).webp",
    "assets/Verschwinden_Magazine (23).webp",
    "assets/Verschwinden_Magazine (24).webp",
    "assets/Verschwinden_Magazine (25).webp",
    "assets/Verschwinden_Magazine (26).webp",
  ];

  typoImages: string[] = [
    "assets/Typo__Innenseiten (1).webp",
    "assets/Typo__Innenseiten (2).webp",
    "assets/Typo__Innenseiten (3).webp",
    "assets/Typo__Innenseiten (4).webp",
    "assets/Typo__Innenseiten (5).webp",
    "assets/Typo__Innenseiten (6).webp",
    "assets/Typo__Innenseiten (7).webp",
    "assets/Typo__Innenseiten (8).webp",
    "assets/Typo__Innenseiten (9).webp",
    "assets/Typo__Innenseiten (10).webp",
    "assets/Typo__Innenseiten (11).webp",    
    "assets/Typo__Innenseiten (12).webp",
    "assets/Typo__Innenseiten (13).webp",
    "assets/Typo__Innenseiten (14).webp",
    "assets/Typo__Innenseiten (15).webp",
    "assets/Typo__Innenseiten (16).webp",
    "assets/Typo__Innenseiten (17).webp",
    "assets/Typo__Innenseiten (18).webp",
    "assets/Typo__Innenseiten (19).webp",
    "assets/Typo__Innenseiten (20).webp",
    "assets/Typo__Innenseiten (21).webp",
    "assets/Typo__Innenseiten (23).webp",
    "assets/Typo__Innenseiten (24).webp",
    "assets/Typo__Innenseiten (25).webp"
  ];
}
