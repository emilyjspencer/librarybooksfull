/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './BookService';
import { Book } from './BookEntity';
import { BooksController } from './BooksController';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService],
  controllers: [BooksController],
})
export class BookModule {}
