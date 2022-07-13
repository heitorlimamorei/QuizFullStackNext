import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(1, "Qual o nome do presidente dos EUA em 2011", [
        RespostaModel.errada("George W. Bush"),
        RespostaModel.certa("Barack Obama"),
        RespostaModel.errada("Donald Trump"),
        RespostaModel.errada("Bill Clinton")

    ], false),
    new QuestaoModel(2, "Qual foi o primeiro caça de 5° geração do mundo", [
        RespostaModel.errada("F16 VIPER"),
        RespostaModel.errada("F35 light II"),
        RespostaModel.errada("SU 57"),
        RespostaModel.certa("F22 rapator")
    ]),
    new QuestaoModel(3, "O Google foi o desenvolvedor original do Waze", [
        RespostaModel.errada("VERDADEIRO"),
        RespostaModel.certa("FALSO")
    ]),
    new QuestaoModel(4, "O Youtube foi uma criação original do Google ?", [
        RespostaModel.certa("FALSO"),
        RespostaModel.errada("VERDADEIRO"),

    ]),
    new QuestaoModel(5, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        RespostaModel.errada('Costa e Silva'),
        RespostaModel.errada('Emílio Médici'),
        RespostaModel.errada('Ernesto Geisel'),
        RespostaModel.certa('João Figueiredo'),
    ]),
    new QuestaoModel(6, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        RespostaModel.errada('Ás'),
        RespostaModel.errada('Nove'),
        RespostaModel.errada('Rei'),
        RespostaModel.certa('Valete'),
    ]),
    new QuestaoModel(7, 'O adjetivo "venoso" está relacionado a:', [
        RespostaModel.errada('Vela'),
        RespostaModel.errada('Vento'),
        RespostaModel.errada('Vênia'),
        RespostaModel.certa('Veia'),
    ]),
    new QuestaoModel(8, 'Que nome se dá à purificação por meio da água?', [
        RespostaModel.errada('Abrupção'),
        RespostaModel.errada('Abolição'),
        RespostaModel.errada('Abnegação'),
        RespostaModel.certa('Ablução'),
    ]),
    new QuestaoModel(9, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        RespostaModel.errada('Monte Branco'),
        RespostaModel.errada('Monte Fuji'),
        RespostaModel.errada('Monte Carlo'),
        RespostaModel.certa('Monte Everest'),
    ]),
    new QuestaoModel(10, 'Em que parte do corpo se encontra a epiglote?', [
        RespostaModel.errada('Estômago'),
        RespostaModel.errada('Pâncreas'),
        RespostaModel.errada('Rim'),
        RespostaModel.certa('Pescoço'),
    ]),
    new QuestaoModel(11, 'A compensação por perda é chamada de...', [
        RespostaModel.errada('Déficit'),
        RespostaModel.errada('Indexação'),
        RespostaModel.errada('Indébito'),
        RespostaModel.certa('Indenização'),
    ]),
    new QuestaoModel(12, 'Que personagem do folclore brasileiro tem uma perna só?', [
        RespostaModel.errada('Cuca'),
        RespostaModel.errada('Curupira'),
        RespostaModel.errada('Boitatá'),
        RespostaModel.certa('Saci-pererê'),
    ]),
    new QuestaoModel(13, 'Quem é o "patrono" do Exército Brasileiro?', [
        RespostaModel.errada('Marechal Deodoro'),
        RespostaModel.errada('Barão de Mauá'),
        RespostaModel.errada('Marquês de Pombal'),
        RespostaModel.certa('Duque de Caxias'),
    ]),
    new QuestaoModel(14, 'Quem apresentou o primeiro Xbox ao mundo em seu primeiro evento ?', [
        RespostaModel.errada('Tim Cook'),
        RespostaModel.errada('Phil Spencer'),
        RespostaModel.certa('Bill Gates'),
        RespostaModel.errada('Larry Page')
    ])
]
export default questoes;