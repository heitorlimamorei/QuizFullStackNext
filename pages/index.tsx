import { useEffect, useState } from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/questao";
import { useRouter } from "../node_modules/next/router";

const BASE_URL = "https://quiz-full-stack-next.vercel.app/api"; // para teste local http://localhost:3000/api

export default function Home() {
  const router = useRouter();
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const ids = await resp.json();
    console.log(ids);
    setIdsDasQuestoes(ids);
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObj(json);
    setQuestao(novaQuestao);
  }

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);
  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  function questaoRespondida(questao: QuestaoModel) {
    setQuestao(questao);
    const acertou = questao.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  }
  function idDaProximaPergunta() {
    if (questao) {
      const proximaPergunta = idsDasQuestoes.indexOf(questao.id) + 1;
      return idsDasQuestoes[proximaPergunta];
    }
  }
  function irProProximoPasso() {
    const proximoId = idDaProximaPergunta();
    proximoId ? irProximaQuestao(proximoId) : finalizar();
  }
  function irProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId);
  }
  function finalizar() {
    router.push({
      pathname: `/Resultado`,
      query:{
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    });
  }

  return (
    <Questionario
      questao={questao}
      ultima={idDaProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irProProximoPasso={irProProximoPasso}
    />
  );
}
