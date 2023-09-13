import Biblioteca from "../Biblioteca";
import Livro from "../LIvro/Livro";

export default class Usuario{
  private sacola: Livro[] = []

  constructor(private nome: string, private id: number){
  }

  addLivro(livro: Livro){
    const livroTitulo = livro.getTitulo()

    this.sacola.push(livro)
    livro.setQtdDisponivel(1)
    console.log(`Foi adicionado a sua sacola o Livro ${livroTitulo}`)
  }

  removerLivro(livro: Livro){
    const livroTitulo = livro.getTitulo()
    
    this.sacola.shift()
    console.log(`Foi removido da sua sacola o Livro ${livroTitulo}`)
  }

  mostrarSacola(){
    return this.sacola
  }
}