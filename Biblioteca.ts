import Livro from "./LIvro/Livro";

export default class Biblioteca{
  private livro: Livro[] = [];

  adicionarLivro(livro: Livro){
    this.livro.push(livro)
  }

  removerLivros(){
    this.livro.pop()
  }
}