import { InfoPopupComponent } from '../info-popup/info-popup.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MdSidenav } from '@angular/material';
import { CookieOptions, CookieService } from 'ngx-cookie';

@Component({
  selector: 'afrodite-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('menu') menu: MdSidenav;

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

  constructor(public dialog: MdDialog,
              private CookieService:CookieService) { }

  ngOnInit() {

    var initialTimeout = setTimeout(()=>{
      
      this.startpageClasses += ' startpage--hidden';
      clearTimeout(initialTimeout);
    }, 1500);

    var cookieStep: number = <number>this.CookieService.getObject('afrodite-step');
    if(cookieStep)
      this.step = cookieStep;
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

      this.CookieService.putObject('afrodite-step', this.step);
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

  public restart(){

    this.step = 0;
    this.CookieService.remove('afrodite-step');
    this.menu.close();
  }
}