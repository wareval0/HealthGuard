import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  logIn!: String;

  constructor(private router: Router) { }

  ngOnInit() {
    this.logIn = sessionStorage.getItem('user')!;
    if (!this.logIn) {
      this.router.navigate(['auth/login']);
    } else if (this.logIn.toLowerCase() == 'doctor') {
      this.router.navigate(['index']);
    } else{
      this.router.navigate(['home']);
    }
  }

}
