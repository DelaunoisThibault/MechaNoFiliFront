import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  onSubmit() {
    // Implement your login logic here
    console.log('Username:', this.email);
    console.log('Password:', this.password);
    // Add authentication logic and navigate to the next page upon successful login
  }
}
