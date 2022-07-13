import { CountdownCircleTimer } from '../node_modules/react-countdown-circle-timer/lib/index';
import styles from '../styles/Temporizador.module.css';
interface TemporizadorProps {
    duracao: number ;
    tempoEsgotado: () => void;
    key: any
}
export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer 
            duration={props.duracao}
            isPlaying
            size={120}
            onComplete={props.tempoEsgotado}
            colors={['#43dea3', '#F7B801', '#cc0000']}
            colorsTime={[10, 5, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}