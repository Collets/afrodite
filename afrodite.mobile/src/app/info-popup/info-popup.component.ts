import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'afrodite-info-popup',
  templateUrl: './info-popup.component.html',
  styleUrls: ['./info-popup.component.scss']
})
export class InfoPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InfoPopupComponent>) { }

  ngOnInit() {
  }

  public call(){
    
    window.open('tel:+393381742263','_blank');
  }
}
