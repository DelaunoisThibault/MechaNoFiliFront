import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  email: string = '';
  password: string = '';
  username: string = '';

  onSubmit() {
    // Implement your login logic here
    console.log('Username:', this.username);
    console.log('Username:', this.email);
    console.log('Password:', this.password);
    // Add authentication logic and navigate to the next page upon successful login
  }
}
