import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/models/Book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  books: Book[] = [
    {
      title: 'The Girl of Ink and Stars',
      author: 'Kiran Millwood Hargrave',
      genre: 'Fantasy',
      isbn: '349384934',
      fiction: true,
    },
    {
      title: 'Finding Sisu',
      author: 'Katja Pantzar',
      genre: 'Self-help',
      isbn: '349384434344',
      fiction: false,
    },
  ];

  getBooks(): Observable<any> {
    return this.http.get('http://localhost:3002/books/');
  }

}
