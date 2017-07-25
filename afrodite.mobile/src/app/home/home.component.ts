import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afrodite-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public startpageClasses : string = 'startpage';

  private _firstBlockClasses: string;
  get firstBlockClasses():string {

    return this.step == 0 ? 'block' : 'block block--hidden';
  }

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

  public swiperConfig: Object = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      spaceBetween: 30,
  };

  constructor() { }

  ngOnInit() {

    var initialTimeout = setTimeout(()=>{
      
      this.startpageClasses += ' startpage--hidden';
      clearTimeout(initialTimeout);
    }, 10);
  }


  public getContinueButtonValue(step: number){

    switch(step){
      case 0:
        return 'START';
      case this.totalStep:
        return 'FINISH';
      default:
        return 'NEXT';
    }
  }

  public next(){

    if(this.step<this.totalStep)
      this.step++
  }
}