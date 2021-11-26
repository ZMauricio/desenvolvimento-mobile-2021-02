import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  private autenticado: boolean = true; // Antes era false

  constructor(private fireAuth: AngularFireAuth) { }

  criarConta(email: string, senha: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, senha);
  }

  logar(email: string, senha: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, senha);
  }

  sair() {
    return this.fireAuth.signOut();
  }

  public isAutenticado(): boolean {
    return this.autenticado;
  }

  public setAutenticado(valor: boolean) {
    this.autenticado = valor;
  }
}
