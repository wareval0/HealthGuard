import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user!: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    sessionStorage.setItem('user', this.user);
    this.router.navigate(['/']);
  }

}
