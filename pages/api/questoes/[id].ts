import questoes from "../questoesBanco"
export default function QuestoesApi(req, res){
    const questaoSelecionada = questoes.filter(questao => questao.id === +req.query.id)
    if(questaoSelecionada.length === 1){
        const questao = questaoSelecionada[0].embaralharRespostas()
        const obj = questao.paraObjeto()
        res.status(200).json(obj)
    } else {
        res.status(204).json({message: "Questão não encontrada"})
    }
   
}