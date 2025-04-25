import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(
    private router: Router,
  ) {}

  gotToMechasList(): void{
    this.router.navigate(['/mechas']);
  }

  gotToComponentsList(): void{
    this.router.navigate(['/mechas-components']);
  }

  goBackHome(): void {
    this.router.navigate(['/home']);
  }
}
