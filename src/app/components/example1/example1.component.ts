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
  isTime3Step = true;
  isSubmittedSuccess = false;
  submittT = false;
  constructor() { }

  ngOnInit() {
  }


  setearTercerTiempo(){
    this.siguiente = true;
    setTimeout(() => {
      this.stepTercerActive = "tercer_paso";
      this.tercerPaso = true;
    }, 1800);
    setTimeout(() => {
      this.isTime3Step = false;
    }, 5000)
  }

  cargar(){
    this.isSubmittedSuccess = !this.isSubmittedSuccess;

    setTimeout(() => {
      this.submittT = true;
    },2500);
  }
}
