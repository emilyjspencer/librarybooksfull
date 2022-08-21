/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './books/Book.module';
import { Book } from './books/BookEntity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'omittttttted',
      database: 'librarybooks',
      entities: [ Book],
      synchronize: false,
    }),
    BookModule,
  ],
})
export class AppModule {}
