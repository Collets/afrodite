import { InfoPopupComponent } from '../info-popup/info-popup.component';
import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'afrodite-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public startpageClasses : string = 'startpage';

  public step: number = 0;
  public totalStep: number = 10;

  private _stepPercent: number;
  get stepPercent():number {

    return this.step * 100 / this.totalStep;
  }
  set stepPercent(stepPercent:number) {
    
    this._stepPercent = stepPercent;
  }

  private _continueButton: string;
  get continueButton():string {

    return this.getContinueButtonValue(this.step);
  }

  public canNext:boolean = false;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {

    var initialTimeout = setTimeout(()=>{
      
      this.startpageClasses += ' startpage--hidden';
      clearTimeout(initialTimeout);
    }, 3000);
  }


  public getContinueButtonValue(step: number){

    switch(step){
      case 0:
        return 'INIZIA';
      case this.totalStep:
        return 'COMPLETA!';
      default:
        return 'AVANTI';
    }
  }

  public next(){

    if(this.step <= this.totalStep && (this.canNext || this.step == 0)){

      this.step++
      this.canNext = false;
    }
      
  }

  public openInfo() {

    let dialogRef = this.dialog.open(InfoPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  public onAnswer(correct:boolean){

      this.canNext = correct;
  }
}