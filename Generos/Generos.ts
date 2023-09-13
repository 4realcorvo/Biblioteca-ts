import Autores from "../Autores/Autores";
import Livro from "../LIvro/Livro";

export default class Genero extends Livro{
  genero: string

  constructor(private titulo: string, private autor: Autores, private isbn: number, private qtdDisponivel: number, genero: string){
    super(titulo,autor,isbn,qtdDisponivel)
    this.genero = genero
  }
}