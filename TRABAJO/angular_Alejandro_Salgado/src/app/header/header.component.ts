import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = '';
  password = '';
  userloged = '';

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.user == 'admin' && this.password == '1234') {
      this.userloged = this.user;
    }
  }

  logout():void {
    this.user = '';
    this.password = '';
    this.userloged = '';
  }

}
