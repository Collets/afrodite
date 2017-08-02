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

    this.changeClass();
    this.focus();
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
    
    this.blockClasses = new Array<string>();
    for(let i:number = 0; i <= this.totalStep;i++){

      this.blockClasses.push('block ' + 'block--' + i);
    }

    this.answers = new Array<any>(this.totalStep);
    this.correctAnswers = new Array<any>();

    this.setCorrectAnswers();
  }

  public changeClass(){

    for(let i:number = 0;i < this.step;i++){

      this.blockClasses[i] = 'block block--hidden';
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

    this.correctAnswers[1] = '19';
  }

  public focus(){

    if(this.inputs){

      this.inputs.forEach((item)=>{

        if(item && item.id == ('input-' + (this.step - 1)))
          item.focus();
      });
    }
  }

  public openSurprise() {

    let dialogRef = this.dialog.open(SurprisePopupComponent);
    dialogRef.afterClosed().subscribe(result => {

      if(result)
        alert('yuppy!!');
    });
  }
}
