import { Embaralhar } from '../functions/array';
import RespostaModel from './resposta'
export default class QuestaoModel {
    #id: number;
    #enunciado: string;
    #respostas: RespostaModel[];
    #acertou: boolean;

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
        this.#id = id;
        this.#enunciado = enunciado;
        this.#respostas = respostas;
        this.#acertou = acertou;
    }
    get id(){
        return this.#id;
    }
    get enunciado(){
        return this.#enunciado;
    }
    get respostas(){
        return this.#respostas;
    }
    get acertou(){
        return this.#acertou;
    }
    get respondida(){
        for(let resposta of this.#respostas){
            if(resposta.revelada) return true;
        }
        return false
    }
    get naoRespondida(){
        return !this.respondida;
    }
    respodenderCom(indice:number):QuestaoModel{
        const acertou = this.#respostas[indice]?.certa;
        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i;
            const deveRevelar = respostaSelecionada || resposta.certa;
            return deveRevelar ? resposta.revelar() : resposta;
        })
        return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
    }
    embaralharRespostas(): QuestaoModel {
        let respotasEmbaralhadas = Embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respotasEmbaralhadas, this.#acertou)
    }
    static criarUsandoObj(obj: QuestaoModel): QuestaoModel {
        const respostas = obj.respostas.map(resposta=> RespostaModel.criarUsandoObj(resposta))
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)
    }
    paraObjeto(){
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respostas: this.#respostas.map(resposta => resposta.paraObjeto()),
            acertou: this.#acertou
        }
    }

}