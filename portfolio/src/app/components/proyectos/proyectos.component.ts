import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Proyecto {
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
}

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  proyectos: Proyecto [] = [
    {
      titulo: "miCalc",
      descripcion: "Una calculadora funcional a la cual se le puede cambiar el tema.",
      imagen: "",
      tecnologias:["Bootstrap, HTML, JS"],
    },
    {
      titulo: "To-Do List",
      descripcion: "Una aplicacion en la cual se puede hacer una lista de actividades pendientes las cuales pueden ser marcadas como cumplidas, eliminadas y editadas",
      imagen: "",
      tecnologias: ["React, Tailwind"],
    }
  ];

  proyectoSeleccionado: Proyecto | null = null;

  abrirModal(proyecto: Proyecto){
    this.proyectoSeleccionado = proyecto;
  }

  cerrarModal(){
    this.proyectoSeleccionado = null;
  }
}
