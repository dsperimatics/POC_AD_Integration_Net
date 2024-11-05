import { Component, OnInit, Inject } from '@angular/core';
//import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor(@Inject(DOCUMENT) private document: Document) { }
  constructor() { }

  ngOnInit(): void {
  }

  //goToUrl(): void {
  //  debugger;
  //  this.document.location.href = 'https://stackoverflow.com';
  //}

  goToUrl() {
    //window.location.href = 'http://google.com/'
    (window as any).open("http://google.com/");
  }
}
