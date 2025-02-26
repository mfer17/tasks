// filepath: /c:/Users/ADMIN/Desktop/Mis proyectos/tasks/src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCducm427egXfIr35-hsdQUHINax6q0Sys",
  authDomain: "task-4cbce.firebaseapp.com",
  databaseURL: "https://task-4cbce-default-rtdb.firebaseio.com",
  projectId: "task-4cbce",
  storageBucket: "task-4cbce.firebasestorage.app",
  messagingSenderId: "534478092647",
  appId: "1:534478092647:web:acdc24d9bdb236ce0657c2",
  measurementId: "G-M42YLYT0C6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };