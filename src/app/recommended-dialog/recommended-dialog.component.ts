import { Component, Inject, OnInit } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  title: 'The Girl of Ink and Stars ' | 'Harry Potter and the Chamber of Secrets ' ;
}

@Component({
  selector: 'app-recommended-dialog',
  templateUrl: './recommended-dialog.component.html',
  styleUrls: ['./recommended-dialog.component.scss']
})
export class RecommendedDialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }


}
