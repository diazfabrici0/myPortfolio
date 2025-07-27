import { CommonModule } from '@angular/common'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
        alert('mensaje enviado');
      }, () => {
        alert('error al enviar el mensaje.');
      });
  }
}
