import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {

  siguiente = false;
  stepTercerActive = "";
  isMenu = false;
  tercerPaso = false;

  constructor() { }

  ngOnInit() {
  }


  setearTercerTiempo(){
    this.siguiente = true;
    setTimeout(() => {
      this.stepTercerActive = "tercer_paso";
      this.tercerPaso = true;
    }, 1800);
  }
}
