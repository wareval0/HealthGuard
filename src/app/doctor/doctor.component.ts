import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  detail: Boolean = false;
  sap: Boolean = false;
  loader: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['']);
  }

  showHideDetail() {
    this.detail = !this.detail;
  }

  showSap() {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
      this.sap = !this.sap;
    }, 2000);
  }

}
