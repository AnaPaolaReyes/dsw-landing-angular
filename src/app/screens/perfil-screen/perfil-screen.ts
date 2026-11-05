import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss'
})
export class PerfilScreen {
  perfil = {
    nombre: 'Ana Paola Reyes Jiménez',
    carrera: 'Ingeniería en Ciencia de Datos',
    email: 'rj202454978@alm.buap.mx',
    telefono: '246 330 4723',
    direccion: 'Calle, número, colonia, Puebla, Pue.',
    nacimiento: '22/12/2006'
  };
}

