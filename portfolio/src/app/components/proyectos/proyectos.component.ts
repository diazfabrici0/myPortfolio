import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface Proyecto {
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
  link: string;
}

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  proyectos: Proyecto [] = [
    {
      titulo: "miCalc",
      descripcion: "Una calculadora funcional a la cual se le puede cambiar el tema.",
      imagen: "../../../assets/image/calc.png",
      tecnologias:["Bootstrap, HTML, JS"],
      link: "https://mil-calculadora.vercel.app/",
    },
    {
      titulo: "To-Do List",
      descripcion: "Una aplicacion en la cual se puede hacer una lista de actividades pendientes las cuales pueden ser marcadas como cumplidas, eliminadas y editadas",
      imagen: "",
      tecnologias: ["React, Tailwind"],
      link: "",
    },
    {
      titulo: "Carta Fratelli",
      descripcion: "Carta digital editable para el bar cervezero Frateli",
      imagen:"",
      tecnologias: ["React, Tailwind, Node.js"],
      link: "",
    }
  ];

  mostrarTodos = false;

  get proyectosAMostrar() {
    if (!this.mostrarTodos && window.innerWidth < 768) {
      return this.proyectos.slice(0,1);
    }
    return this.proyectos
  }

  toggleMostrarTodos() {
    this.mostrarTodos = !this.mostrarTodos;
  }

  proyectoSeleccionado: Proyecto | null = null;
  modalAbierto = false;

  abrirModal(proyecto: Proyecto){
    this.proyectoSeleccionado = proyecto;
    setTimeout(() => {
      this.modalAbierto = true;
    }, 10);
  }

  cerrarModal(){
    this.modalAbierto = false;
    setTimeout(() => {
      this.proyectoSeleccionado = null;
    }, 300);
  }

  faXmark = faXmark;
}
