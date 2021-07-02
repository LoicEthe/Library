import { Component } from '@angular/core';
import "firebase/firestore";
import firebase from '@firebase/app'
import '@firebase/auth';
import '@firebase/database';
import '@firebase/firestore';
import '@firebase/storage'
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Books';


  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyBWOhmF3kIpzBYgOmA6b4nyAt-WYd08lOs",
      authDomain: "books-3164e.firebaseapp.com",
      databaseURL: "https://books-3164e-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "books-3164e",
      storageBucket: "books-3164e.appspot.com",
      messagingSenderId: "460774900514",
      appId: "1:460774900514:web:f3d71af0bdc960b6a7db7b",
      measurementId: "G-8K9FSPBL7B"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }




}
