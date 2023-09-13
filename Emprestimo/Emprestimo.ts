import Biblioteca from "../Biblioteca"
import Livro from "../LIvro/Livro"

export default class Emprestimo extends Biblioteca{
  emprestimo(livro: Livro){
    const qtd = livro.getQtdDisponivel()
    livro.setQtdDisponivel(qtd - 1)
  }
  
  devolucao(livro: Livro){
    const qtd = livro.getQtdDisponivel()
    livro.setQtdDisponivel(qtd + 1)
  }

  multaDias(tempoEstimado: number , tempoDePosse: number){
    const atraso = tempoDePosse - tempoEstimado;
    const multa = atraso * 2.5

    if(tempoDePosse === tempoEstimado){
      console.log('Último para a Devolução, porfavor devolva o Livro a Biblioteca!!')
    }else if(tempoDePosse > tempoEstimado){
      console.log(`Você Passou do Limite de Devolução, já são ${atraso} dias de atraso, multa aplicada no valor de R$ ${multa} reais!!`)
    }
  }
}