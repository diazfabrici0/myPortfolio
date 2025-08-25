import { CommonModule } from '@angular/common'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  standalone: true, // <-- necesario si estás usando Angular 17+ standalone
  imports: [FormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formData = {
    name: '',
    email: '',
    message:''
  };

  constructor(private http: HttpClient){}

  onSubmit(){
    this.http.post("https://formspree.io/f/mldbzopw", this.formData)
      .subscribe(() => {
      Swal.fire({
        title: "Mensaje enviado!",
        icon: "success",
        draggable: true
      });
      }, () => {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "Algo salio mal!"
        });;
      });
  }
}
