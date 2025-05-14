import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB2fPEJvZjPUnrA0u_ENWWpYaAyup7TNo8",
  authDomain: "autenticacao-aula-6921e.firebaseapp.com",
  projectId: "autenticacao-aula-6921e",
  storageBucket: "autenticacao-aula-6921e.firebasestorage.app",
  messagingSenderId: "1072130448327",
  appId: "1:1072130448327:web:da2761e3fd0bc8fa4bd7e2",
  measurementId: "G-FMWRQHG9DT"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar a Autenticação do Firebase e criar uma referência para gerenciarmos a autenticação (login, logout, estado do usuário)
export const auth = getAuth(app);
