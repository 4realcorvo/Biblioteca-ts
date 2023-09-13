import Autores from "../Autores/Autores";

export default class Livro{
  constructor(
    private titulo: string, 
    private autor: Autores, 
    private isbn: number, 
    private qtdDisponivel: number){
  }

  getTitulo(): string{
    return this.titulo
  }

  setTitulo(titulo: string){
    this.titulo = titulo;
  }

  getAutor(): Autores{
    return this.autor
  }

  setAutor(autor: Autores){
    this.autor = autor;
  }
  
  getIsbn(): number{
    return this.isbn
  }

  setIsbn(isbn: number){
    this.isbn = isbn;
  }

  getQtdDisponivel(): number{
    return this.qtdDisponivel
  }

  setQtdDisponivel(qtdDisponivel: number){
    this.qtdDisponivel = qtdDisponivel;
  }
}