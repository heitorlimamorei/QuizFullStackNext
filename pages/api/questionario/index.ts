import { Embaralhar } from '../../../functions/array'
import questoes from '../questoesBanco'
export default function Questionario(req:any, res:any){
    const ids = questoes.map(questao => questao.id)
    return res.status(200).json( Embaralhar(ids) )
}