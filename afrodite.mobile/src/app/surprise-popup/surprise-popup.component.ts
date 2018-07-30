import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'afrodite-surprise-popup',
  templateUrl: './surprise-popup.component.html',
  styleUrls: ['./surprise-popup.component.scss']
})
export class SurprisePopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SurprisePopupComponent>) { }

  ngOnInit() {
  }

  public no(){

    this.dialogRef.close(false);
  }

  public yes(){

    this.dialogRef.close(true);
  }
}
