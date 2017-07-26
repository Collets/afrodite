import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'afrodite-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  @Output() onAnswer: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();

  private _step: number = 0;
  @Input() 
  set step(step: number){
    this._step = step;

    this.changeClass();
  }
  
  get step(): number{
    return this._step;
  };

  @Input() totalStep: number = 0;

  public blockClasses:Array<string>;

  public swiperConfig: Object = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      spaceBetween: 30,
  };
    
  public firstAnswer: string;
  public firstCorrectAnswer: string ='Tigre';

  public _answer: boolean;
  get answer(){
    switch(this.step){
      case 1:
        return this.firstAnswer == this.firstCorrectAnswer;
      default: 
        return true;
    }
  }

  constructor() { }

  ngOnInit() {
    
    this.blockClasses = new Array<string>();
    for(let i:number = 0; i<this.totalStep;i++){

      this.blockClasses.push('block ' + 'block--' + i);
    }
  }

  public changeClass(){

    for(let i:number = 0;i<this.step;i++){

      this.blockClasses[i] = 'block block--hidden';
    }
  }

  public changeAnswer(){

    this.onAnswer.emit(this.answer);
  }

  public onSubmit(){

    this.onNext.emit();
  }
}
