import { SurprisePopupComponent } from '../surprise-popup/surprise-popup.component';
import { retry } from 'rxjs/operator/retry';
import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';

import * as _ from 'lodash';
import { MdInputDirective, MdDialog, MdDialogRef } from '@angular/material';

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

    if(this.blockClasses){

      this.changeClass();
    }
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
    
  public answers: Array<any>;
  public correctAnswers: Array<any>;
  
  @ViewChildren(MdInputDirective) inputs: QueryList<MdInputDirective>;

  // private _correct: boolean;
  get correct(){
    
    if(this.step>0)
      return this.answers[this.step-1] == this.correctAnswers[this.step-1];

    return true;
  }

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
    
    this.init();
    this.changeClass();
  }

  public init(){

    if(!this.blockClasses){

      this.blockClasses = new Array<string>();
      for(let i:number = 0; i <= this.totalStep;i++){

        this.blockClasses.push('block ' + 'block--' + i);
      }

      this.answers = new Array<any>(this.totalStep);
      this.correctAnswers = new Array<any>();

      this.setCorrectAnswers();
    }
  }

  public changeClass(){

    if(this.step == 0){

      this.blockClasses = null;
      this.init();
    }
    else{

      for(let i:number = 0;i < this.step;i++){

        this.blockClasses[i] = 'block block--hidden';
      }
    }
  }
  public changeAnswer(){

    this.onAnswer.emit(this.correct);
  }

  public onSubmit(){

    this.onNext.emit();
  }

  public setCorrectAnswers(){

    for(let i:number = 0; i < this.totalStep;i++){

      this.correctAnswers.push('Tigre');
    }

    this.correctAnswers[0] = '3';
    this.correctAnswers[1] = '2';
    this.correctAnswers[2] = '1';
    this.correctAnswers[3] = '2';
    this.correctAnswers[4] = '3';
    this.correctAnswers[5] = '3';
    this.correctAnswers[6] = '2';
    this.correctAnswers[7] = '4';
    this.correctAnswers[8] = '1';
    this.correctAnswers[9] = '3';
  }

  public openSurprise() {

    let dialogRef = this.dialog.open(SurprisePopupComponent);
    dialogRef.afterClosed().subscribe(result => {

      if(result)
        alert('yuppy!!');
    });
  }
}
