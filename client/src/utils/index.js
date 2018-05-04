import fb from 'firebase';

const config = {
  apiKey: 'AIzaSyCS2uFAF_imI9q0zF6azt7cKsO-8zgVcJ0',
  authDomain: 'ebook-471d6.firebaseapp.com',
  databaseURL: 'https://ebook-471d6.firebaseio.com',
  projectId: 'ebook-471d6',
  storageBucket: 'ebook-471d6.appspot.com',
  messagingSenderId: '334735448969',
};

export const firebase = fb.initializeApp(config);
