import QuestaoModel from "../model/questao";
import styles from "../styles/Questionario.module.css";
import Botao from "./Botao";
import Questao from "./Questao";
interface QuestionarioProps {
  questao: QuestaoModel;
  ultima: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irProProximoPasso: () => void;
}
export default function Questionario(props: QuestionarioProps) {
  function respostaForcenida(indice: number) {
    if (props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.respodenderCom(indice));
    }
  }
  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <Questao
          valor={props.questao}
          respostaForcenida={respostaForcenida}
          tempoEsgotado={props.irProProximoPasso}
          tempoParaResponder={6}
        />
      ) : (
        false
      )}
      <Botao
        onClick={props.irProProximoPasso}
        texto={props.ultima ? "Finalizar" : "Próxima"}
      />
    </div>
  );
}
