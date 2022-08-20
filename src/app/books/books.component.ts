import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/models/Book.model';
import { BooksService } from '../books.service';
import { RecommendedDialogComponent } from '../recommended-dialog/recommended-dialog.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService, public dialog: MatDialog) { }



  books!: Book[];

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(data =>{
      this.books = data;
    })
  }

   openDialog() {
    this.dialog.open(RecommendedDialogComponent, {
      data: {
        title: 'The Girl of Ink and Stars',
      },
})  }

}
