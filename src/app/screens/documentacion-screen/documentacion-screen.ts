import { Component } from '@angular/core';

@Component({
  selector: 'app-documentacion-screen',
  imports: [],
  templateUrl: './documentacion-screen.html',
  styleUrl: './documentacion-screen.scss'
})
export class DocumentacionScreen {
  urlDocumentacion = 'https://angular.dev';

  diapositivas = [
  { titulo: 'Diapositiva 1', imagen: 'assets/img/carousel_1.jpeg' },
  { titulo: 'Diapositiva 2', imagen: 'assets/img/carousel_2.jpeg' },
  { titulo: 'Diapositiva 3', imagen: 'assets/img/carousel_3.jpeg' }
  ];
}
