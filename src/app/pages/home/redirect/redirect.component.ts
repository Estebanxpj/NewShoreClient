import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent {
  constructor(private readonly router: Router) {}

  goToFlightPage() {
    this.router.navigateByUrl('/flights');
  }
}
