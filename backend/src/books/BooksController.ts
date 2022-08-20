/* eslint-disable prettier/prettier */
import { Controller, Get} from '@nestjs/common';
import { Book } from './BookEntity';
import { BookService } from './BookService';


@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookService) {}


  @Get()
  findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }


}
