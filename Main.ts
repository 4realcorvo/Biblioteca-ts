import Autores from "./Autores/Autores"
import Biblioteca from "./Biblioteca"
import Emprestimo from "./Emprestimo/Emprestimo"
import Genero from "./Generos/Generos"
import Livro from "./LIvro/Livro"
import Usuario from "./Usuario/Usuario"npx sucrase-node Main.ts

//Teste Livros comuns 
console.log('Livros Sem Categoria')

const autor1 = new Autores('Machado de Assis')
const livro1 = new Livro('O Alienista',autor1.nome,989021722,20)

const autor2 = new Autores('Graciliano Ramos')
const livro2 = new Livro('Vidas Secas',autor2.nome,872610923,32)

const autor3 = new Autores('Camilo Castelo Branco')
const livro3 = new Livro('Amor de Perdição',autor3.nome,172667123,13)

//Estoque de Livros na Biblioteca(Array de Livros)
const biblioteca = new Biblioteca()

//Adicionando Livros na Biblioteca
biblioteca.adicionarLivro(livro1)
biblioteca.adicionarLivro(livro2)
biblioteca.adicionarLivro(livro3)

console.log(biblioteca)
console.log('-----------------------------------------------------------------')

//Teste Livros Separados por Categoria
console.log('Livros Por Categoria')

const autorRomance = new Autores('Meg Waite Clayton')
const romance = new Genero('O Último Trem Para Londres',autorRomance.nome,111823624,20,'Aventura')

const autorFiccao = new Autores('Aldous Huxley')
const ficcao = new Genero('O Adimirável Mundo Novo',autorFiccao.nome,357721722,50,'Ficção')

const autorManga = new Autores('Echiro Oda')
const manga = new Genero('One Piece',autorManga.nome,768921722,230,'Mangá')

console.log(romance)
console.log(ficcao)
console.log(manga)

console.log('-----------------------------------------------------------------')

const emprestar = new Emprestimo()

//Pegando Livro Emprestado
console.log('Pegando Livro Emprestado')

emprestar.emprestimo(livro3)
console.log(biblioteca)

//Devolvendo Livro
console.log('Devolvendo Livro')

emprestar.devolucao(livro3)
console.log(biblioteca)

//Caso de Multa
console.log('Caso de Multa')

emprestar.emprestimo(livro2)
emprestar.multaDias(4,12)

console.log('-----------------------------------------------------------------')

//Teste Usuario
console.log('Usuário')

const usuario1 = new Usuario('Claudio',20)
const sacola = usuario1.mostrarSacola()

usuario1.addLivro(livro1)
console.log(sacola)

usuario1.removerLivro(livro1)