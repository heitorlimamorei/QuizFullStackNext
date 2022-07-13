import Botao from "../components/Botao";
import Estatistica from "../components/Estatistica";
import { useRouter } from "../node_modules/next/router";
import styles from "../styles/Resultado.module.css";
export default function Resultado() {
  const router = useRouter();
  const total = +router.query.total;
  const certas = +router.query.certas;
  const percentual = Math.round((certas / total) * 100);
  return (
    <div className={styles.resultado}>
      <h1>Resultado</h1>
      <div style={{display:'flex'}}>
      <Estatistica
        valor={total}
        texto="Perguntas"
      />
         <Estatistica
        valor={certas}
        texto="Certas"
        corFundo="#9CD2A4"
      />
         <Estatistica
        valor={`${percentual}%`}
        texto="Percentual"
        corFundo="#DE6A33"
      />
      </div>
      <Botao texto="Tentar novamente" href="/" />
    </div>
  );
}
