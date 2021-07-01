import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import '@firebase/storage'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books!: Book[];
  booksSubscription!: Subscription;

  constructor(private bookService : BooksService,private router : Router) { }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

  ngOnInit(){
    this.booksSubscription = this.bookService.bookSubject.subscribe(
      (books: Book[]) =>{
        this.books = books
      }
    );
    this.bookService.emitBooks()
  }
  onNewBook(){
    this.router.navigate(['/books','new'])
  }

  onDeleteBook(book: Book) {
    this.bookService.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }

  


}


