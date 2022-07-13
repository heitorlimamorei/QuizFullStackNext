import QuestaoModel from '../model/questao'
import styles from '../styles/Questao.module.css'
import Enunciado from './Enunciado';
import Resposta from './Resposta';
import Temporizador from './Temporizador';
const letras = [
    { valor: 'A', cor: '#F2C866' },
    { valor: 'B', cor: '#F266BA' },
    { valor: 'C', cor: '#85D4F2' },
    { valor: 'D', cor: '#BCE596' },
    { valor: 'E', cor: '#F2C868'}
]
interface QuestaoProps{
    valor: QuestaoModel
    respostaForcenida: (indice: number) => void
    tempoEsgotado: () => void;
    tempoParaResponder: number;
}
export default function Questao(props:QuestaoProps){
    const questao = props.valor;
    function renderizarRespostas(){
        return questao.respostas.map((resposta, i) => {
            return (
                <Resposta
                key={`${questao.id}-${i}`}
                valor={resposta}
                indice={i}
                letra={letras[i].valor}
                corFundoLetra={letras[i].cor}
                respostaForcenida={props.respostaForcenida}
                />
            )
        })
    }
    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado}/>
            <Temporizador  key={questao.id} duracao={props.tempoParaResponder} tempoEsgotado={props.tempoEsgotado}/>
            {renderizarRespostas()}
        </div>
    )
}