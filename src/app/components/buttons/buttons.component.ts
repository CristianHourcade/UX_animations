import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  isKennyAnimation : String;
  isKenny : String;
  isKennyTitle : String;

  constructor(){
    this.isKenny = "kenny";
    this.isKennyTitle = "vivo";
    this.isKennyAnimation="";
  }

  ngOnInit() {

  }
  
  matarKenny(){
    this.isKenny = "dead";
    setTimeout(() => {
      this.isKennyTitle = "muerto"
    },2000)
  }

  revivirKenny(){
    this.isKenny = "kenny";
    this.isKennyTitle = "vivo";
  }
}
