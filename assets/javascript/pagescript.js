let contador = document.getElementById("contador");
let date = new Date("2023-04-24");

let hoje = new Date();
let diffTime = hoje - date;
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Converte milissegundos para dias

let anos = hoje.getFullYear() - date.getFullYear();
let meses = hoje.getMonth() - date.getMonth();
let dias = hoje.getDate() - date.getDate();

if (dias < 0) {
    meses--;
    dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate(); // Dias no mês anterior
}
if (meses < 0) {
    anos--;
    meses += 12;
}

tempo.innerText = `${diffDays} dias.`;

function change() {
    tempo.style.fontSize = "14px"; 
    tempo.innerText = `${anos} ano(s), ${meses} meses e ${dias} dias.`;
    document.getElementById("foot").innerHTML = "e daqui para frente será muito mais!";
}

let secdate = document.getElementById("res");
let article = secdate.querySelector("article");
let data = document.getElementById("data");
let sucesso = document.getElementById("sucesso");
let dia = document.getElementById("dia")
let imagem = document.getElementById("innerimg")
let texto = document.getElementById("para")
let video = document.getElementById("video")

// Mapeamento de datas e seus respectivos conteúdos
const dateMap = {
    "2023-04-28": {
        diaTexto: "Date 28/04/2023 💗",
        textoHTML: `<p>Esse foi o dia em que nos vimos pessoalmente pela primeira vez.</p> <br>
                    <p>Quem diria que depois de todo o nervosismo, das risadas, os tucs e das piadas de mau gosto estaríamos aqui, não é? Sem dúvidas, foi um dos principais dias na nossa história, e devo dizer que não me arrependo de nada nesse dia, e o guardo com muito amor no meu coração. </p>  <br>
                    <p>Aqui temos o único registro decente desse dia:</p>`,
        videoSrc: "../videos/vinteoito.mp4",
        imagemSrc: null
    },
    "2023-05-11": {
        diaTexto: "Date 11/05/2023 🎥",
        textoHTML: `<p>Depois de eu pensar que tomaria bolo, nós tivemos o nosso primeiro date a sós.</p> <br>
                    <p>Apesar de eu estar muito feliz de estar com você, o meu silêncio ficou claro, mas você me completou com suas fofocas e conversas incríveis. Nesse dia eu percebi que apesar de cedo, já estava apaixonado por você, e que era você quem eu queria para mim. </p>  <br>
                    <p>Essa foi uma das nossas primeiras fotos:</p>`,
        videoSrc: null,
        imagemSrc: "../images/date1.png"
    },
    "2023-05-20": {
        diaTexto: "Date 20/05/2023 💗",
        textoHTML: `<p>Esse foi o dia em que nos vimos pessoalmente pela primeira vez.</p> <br>
                    <p>Quem diria que depois de todo o nervosismo, das risadas, os tucs e das piadas de mau gosto estaríamos aqui, não é? Sem dúvidas, foi um dos principais dias na nossa história, e devo dizer que não me arrependo de nada nesse dia, e o guardo com muito amor no meu coração. </p>  <br>
                    <p>Aqui temos o único registro decente desse dia:</p>`,
        videoSrc: null,
        imagemSrc: "../images/date2.png"
    },
    "2023-05-27": {
        diaTexto: "Date 27/05/2023 🌽",
        textoHTML: `<p>Festa junina e dançaaaaaaa.</p> <br>
                    <p>Conheci sua escola nesse dia, além de ter quase me matado de ciúmes (com razão) Acontece que acabou que foi legal, já que foi o primeiro dia em que estávamos juntos como um casal. Ah é, nesse dia também ganhei minha aliança de ficante (o elástico de cabelo). </p>  <br>
                    <p>Se liga na aliança do pai:</p>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-05-28": {
        diaTexto: "Date 28/05/2023 💗",
        textoHTML: `<p>DUAS HORAS DE ATRASO!!</p> <br>
                    <p>Nesse dia eu descobri o que era namorar com você, até porque você não mudou nadinha nesses dois anos. Atrasou DUAS horas quando veio conhecer os meus pais, e eu fiquei muito puto. Tirando isso, eu fiquei super feliz de você estar aqui comigo e almoçando na minha casa pela primeira vez. </p>  <br>
                    <p>Mas sério, eu fiquei muito puto.</p>`,
        videoSrc: null,
        imagemSrc: "../images/maio28.png"
    },
    "2023-06-01": {
        diaTexto: "Date 01/06/2023 🕷️",
        textoHTML: `<p>Homem-aranha, Homem-aranha, a Nicole me ama!</p> <br>
                    <p>Nossas sessões de cinema continuaram, mas dessa vez sem muita falação, já que eu tava doido pra ver o filme do Aranhaverso (que realmente foi muito legal) e estar na sua companhia foi melhor ainda, já que você realmente é a melhor companheira que eu poderia ter. Você conheceu um pouquito do meu lado nerd, e mesmo assim continuou comigo, então tá ótimo!</p> `,
        videoSrc: null,
        imagemSrc: "../images/date4.png"
    },
    "2023-06-08": {
        diaTexto: "Date 08/06/2023 💗",
        textoHTML: `<p>Segunda vez que você veio para a minha casa, e foi incrível mais uma vez. Descobertas, se você bem me entende, e também eu pude finalmente dizer que te amo pela primeira vez, ás 15:50 dessa tarde tão linda.</p> <br>`,
        videoSrc: "../videos/junho8.mp4",
        imagemSrc: null
    },
    "2023-06-12": {
        diaTexto: "Date 12/06/2023 💗",
        textoHTML: `<p>O primeiro de todos os dias dos namorados.</p> <br>
                    <p>Fiquei montando um presente inesquecível durante um bom tempo. Muitas ideias, e muitas coisas feitas a mão (as quais eu tinha um total de zero de habilidade para fazer) No final tudo deu certo, e fomos no Hippos ter um datezinho. Te dei flores pela primeira vez, conversamos muito em casa, ganhei um presente incrível e no final tudo foi absurdamente incrível.</p>`,
        videoSrc: null,
        imagemSrc: "../images/date5.png"
    },
    "2023-06-17": {
        diaTexto: "Date 17/06/2023 💗",
        textoHTML: `<p>Primeira vez que você foi em uma festa de família!</p> <br>
                    <p>Como dois pombinhos emocionados, te chamei para ir conhecer minha vó e ir no aniversário dela, em uma pizzaria muito gostosa. Foi ótimo ter você comigo durante um jantar em família, até porque você estava se tornando isso para mim: família.</p>`,
        videoSrc: null,
        imagemSrc: "../images/junho17.png"
    },
    "2023-06-22": {
        diaTexto: "Date 22/06/2023 💗",
        textoHTML: `<p>CU DO THANOS</p> <br>
                    <p>Foi um dia de conhecer tartaruga e tomar um delicioso suco de açai (ou pelo menos foi o que eu pensei) Mas chegando lá, foi a coisa mais nojenta e horrorosa que eu tomei em toda a minha vida. (e que parecia com o cu do Thanos, imagem autoexlicativa)</p>`,
        videoSrc: null,
        imagemSrc: "../images/junho22.png"
    },
    "2023-06-24": {
        diaTexto: "Date 24/06/2023 🌽",
        textoHTML: `<p>Festa Junina de novo, mas dessa vez foi a minha.</p> <br>
                    <p>Dancei, passei vergonha na sua frente, e fui maquiado por você. Foi divertido porque você conheceu alguns amigos meus, e foi vez de estarmos de casal na minha escola!</p>`,
        videoSrc: "../videos/24junho.mp4",
        imagemSrc: null
    },
    "2023-06-29": {
        diaTexto: "Date 29/06/2023 💗",
        textoHTML: `<p>Tenho quase certeza que foi a primeira vez que você foi almoçar comigo na minha vó.</p> <br>
                    <p>Você levou o Buddy para passear junto comigo, e foi a coisa mais fofa do MUNDO! Eu te amo demais.</p>`,
        videoSrc: "../videos/29junho.mp4",
        imagemSrc: "../images/junho29.png"
    },
    "2023-07-07": {
        diaTexto: "Date 07/07/2023 💗",
        textoHTML: `<p>Uma viagem MUITO inesperada.</p> <br>
                    <p>Até hoje não sei como os nossos pais deixaram que eu fosse viajar com você. Duas crianças, que estavam recém "namorando" foram juntos para São Sebastião aproveitar as férias. Esse foi o primeiro dia, e me lembro até hoje do nervosismo em encontrar a D. Hendrika, quem você dizia ser tão brava (e de fato, era mesmo.)</p>`,
        videoSrc: null,
        imagemSrc: "../images/julho7.png"
    },
    "2023-07-08": {
        diaTexto: "Date 08/07/2023 💗",
        textoHTML: `<p>Esse dia eu conheci o centrinho de São Sebastião. Foi um dia incrível, porque eu tomei aquele maravilhoso sorvete de sonho de valsa que você tanto me falava, e porque foi nosso primeiro passeio em casal viajando. Inesperado, feliz, incrível!</p> <br>
        <p>Nesse dia também fizemos o nosso quadrinho lindo com as mãos de areia. Foi muito fofo.</p>`,
        videoSrc: null,
        imagemSrc: "../images/julho8.png"
    },
    "2023-07-09": {
        diaTexto: "Date 09/07/2023 💗",
        textoHTML: `<p>Foi o meu último dia antes de voltar para casa. Jogamos muito com a Amanda, enquanto tinha os amigos da sua vó lá. Acho que não fizemos muito mais que isso nesse dia.</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/julho9.png"
    },
    "2023-07-10": {
        diaTexto: "Date 10/07/2023 💗",
        textoHTML: `<p>Nesse dia eu fui embora, mas antes nós tentamos assistir ao nascer do sol juntos. Resultado? Céu nublado, sem sol, e você dormiu no meu colo na praia. Não existe tempo ruim com você ao meu lado. </p>`,
        videoSrc: null,
        imagemSrc: "../images/julho10.png"
    },
    "2023-07-20": {
        diaTexto: "Date 20/07/2023 💗",
        textoHTML: `<p>Já fiquei ansioso só de lembrar. Foi um dos dias mais lindos de toda a nossa história. Depois de alguns meses, estávamos de volta no lugar em que nos vimos pela primeira vez, com outras intenções agora.</p> <br>
        <p>Fomos pintar quadrinhos, mas secretamente eu estava me TREMENDO porque ia te pedir em namoro. Você nem desconfiava. Escrevi o AEDA, e li para você de forma muito nervosa, e então finalmente realizei o que eu tanto queria: te pedir em namoro.</p> <br>
        <p>Foi a melhor decisão que eu poderia ter tomado, e tudo correu muito bem. Desde esse dia, agora posso te chamar oficialmente de NAMORADA, e futuramente vou chamar de minha esposa!</p>`,
        videoSrc: null,
        imagemSrc: "../images/julho20.png"
    },
    "2023-07-23": {
        diaTexto: "Date 23/07/2023 💗",
        textoHTML: `<p>Agora oficialmente como namorados, fui conhecer os seus avós e grande parte da sua família. Foi meio complicado, já que eu tinha dormido muuito pouco por causa da formatura, e eu tava bem mal da barriga. Mas foi legal, conversei bastante com o seu vô, e sabia que ele seria meu parceiro!</p>`,
        videoSrc: null,
        imagemSrc: "../images/julho23.png"
    },
    "2023-07-26": {
        diaTexto: "Date 26/07/2023 💗",
        textoHTML: `<p>Assim como todo casal nesse ano, fomos assistir o bendito filme da Barbie nos cinemas, e obviamente de rooosaaaaa. Amei tirar a sua foto na caixa de boneca Barbie inclusive. Foi um dia bem legal.</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/julho26.png"
    },
    "2023-08-05": {
        diaTexto: "Date 05/08/2023 💗",
        textoHTML: `<p>Esse foi o dia em que você conheceu os meus padrinhos. Foi muito legal, já que eu queria muito que você conhecesse eles. Você se cagou de medo andando no bondinho, assiste o vídeo que você vai ver KKKKKKKKK</p> <br>`,
        videoSrc: "../videos/5agosto.mp4",
        imagemSrc: null
    },
    "2023-08-08": {
        diaTexto: "Date 08/08/2023 💗",
        textoHTML: `<p>Sendo bem sincero, eu não lembro de quem era o aniversário, mas foi da família e você foi comigo. Acho que era da Aninha. Ah, e obviamente foi na GUIDA.</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/agosto8.png"
    },
    "2023-08-11": {
        diaTexto: "Date 11/08/2023 💗",
        textoHTML: `<p>Depois de alguns meses agora estávamos de volta no açai. Sim, o mesmo que tirei foto tampando sua cara KKKKKKKKKK</p> <br>
        <p>Um dia antes eu te levei flores aleatoriamente também, mas como foi uma passagem rápida eu não coloquei como date.</p>
        <p>Nesse dia você também me deu o livro do Chorão, e foi um gesto muito lindo, porque me senti muito amado e reconhecido. Eu te amo muito!</p>`,
        videoSrc: null,
        imagemSrc: "../images/agosto11.png"
    },
    "2023-08-15": {
        diaTexto: "Date 15/08/2023 💗",
        textoHTML: `<p>No começo do namoro nós sempre quisemos ir tomar um café caro em alguma cafeteria superfaturada. Foi isso que fizemos nesse dia. Fomos no Shopping Anália Franco, e comemos um bolo de cenoura delicioso, com uma calda deliciosa, e no final eu paguei uma água de DOZE REAIS.</p><br>
        <p>Pelo menos o bolo tava uma delicia!</p>`,
        videoSrc: null,
        imagemSrc: "../images/agosto15.png"
    },
    "2023-08-18": {
        diaTexto: "Date 18/08/2023 💗",
        textoHTML: `<p>Foi aniversário da Amanda, e o bolo tava muito delicioso. Daí você decidiu fazer skincare em mim, duas divas. Pelo menos saíram fotos e vídeos muito bons desse dia.</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/agosto18.png"
    },
    "2023-08-20": {
        diaTexto: "Date 20/08/2023 💗",
        textoHTML: `<p>BODAS DE <span>BEIJINHOS!</span></p> <br><p>Foi uma das bodas mais legais, você veio em casa e fizemos muitos beijinhos deliciosos.</p>`,
        videoSrc: "../videos/20agosto.mp4",
        imagemSrc: null
    },
    "2023-08-26": {
        diaTexto: "Date 26/08/2023 💗",
        textoHTML: `<p>Foi a primeira vez que você foi no sítio da minha vó Mada. Você tava com medo, mas andou de quadriciclo comigo mesmo assim, e foi um dia bemmmm legal.</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/agosto26.png"
    },
    "2023-08-30": {
        diaTexto: "Date 30/08/2023 💗",
        textoHTML: `<p>Para minha alegria(atual tristeza, decepção, trevas) foi a primeira vez que você usou o manto do colossalMeiras!</p><br><p>Também fomos no Popeyes, e você ficou suuuuuper fofinha com o combo Kids, minha eterna criança.</p>`,
        videoSrc: null,
        imagemSrc: "../images/agosto30.png"
    },
    "2023-09-05": {
        diaTexto: "Date 05/09/2023 💗",
        textoHTML: `<p>Se não me engano, foi a primeira vez que fui na casa da sua tia. Eu estava nervoso, claro, como tudo no começo do namoro. Foi desconfortável, mas bastante divertido. Fiquei amassando seus primos no fifa.</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/setembro5.png"
    },
    "2023-09-08": {
        diaTexto: "Date 08/09/2023 💗",
        textoHTML: `<p>EL CLAAAAAAAASSSSSSSICO</p> <br> <p> Esse dia em particular foi MUITO legal. Fomos juntos comer no Hojiro, e eu tinha preparado nosso albúm oficial da figurinhas do El Classico, que reunia todas as nonssas avaliações de dates que faziamos no começo do namoro. Você estava deslumbrante, e a comida muito boa. No final, tudo foi muito incrível.</p>`,
        videoSrc: null,
        imagemSrc: "../images/setembro8.png"
    },
    "2023-09-15": {
        diaTexto: "Date 15/09/2023 💗",
        textoHTML: `<p>Dia 15 foi a primeira vez que andamos juntos de metrô, em um rolezão para ir na feira da USP. Aprendemos muito, vimos coisas muito legais e tivemos uma tarde incrível juntos. Depois você veio para casa, e dormiu igual um BEBÊ! Foi muito fofinho. </p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/setembro15.png"
    },
    "2023-09-28": {
        diaTexto: "Date 28/09/2023 💗",
        textoHTML: `<p>Dessa vez um date de rotina, mas uma rotina muito legal ao seu lado. Fomos assistir Besouro Azul, e de brinde eu comprei um tênis depois de sair o meu reembolso do golpe do meio do NADA.</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/setembro28.png"
    },
    "2023-10-12": {
        diaTexto: "Date 12/10/2023 💗",
        textoHTML: `<p>Esse foi o dia que cê me fez dar um puta de um tombo no parque, MAS tiramos fotos muito bonitas de casal, foi bem fofo.</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/outubro12.png"
    },
    "2023-10-13": {
        diaTexto: "Date 13/10/2023 💗",
        textoHTML: `<p>Essa foi mais uma de nossas sexta-feiras, mas nos fizemos esse lindos Smore's para comer. Todo momento com você é especial!</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/outubro13.png"
    },
    "2023-10-28": {
        diaTexto: "Date 28/10/2023 💗",
        textoHTML: `<p>Foi a primeira feira da sua escola que fui, e marquei presença assistindo a todas as peças que você dirigu. Você sempre foi muito inteligente, e o resultado ficou incrível. Também fiquei zuando com o pessoal lá, e depois ainda comemos no Mc Donalds podre que me fez passar mal.</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/outubro28.png"
    },
    "2023-10-30": {
        diaTexto: "Date 30/10/2023 💗",
        textoHTML: `<p>ANIVERNICK!</p><br><p>Foi o primeiro feriado internacional da Nicole que eu participei. Mesmo com um dia turbulento, e muitos problemas, seria impossível deixar esse dia TÃO especial passar em branco.</p><br><p>Para começar o dia, te mandei flores inesperadas junto com um querido kitkat, as quais você amou. De noite nós fomos no Outback com os meus pais para comemorar, já que somos quase que a sua segunda família, e foi muito incrível. Ainda me lembro de você morrendo de vergonha no parabéns. Ah é, também teve o bolinho surpresa em casa que minha vó brotou para cantar parabéns também. Foi o primeiro de muitos de seus dias especiais. </p>`,
        videoSrc: null,
        imagemSrc: "../images/outubro30.png"
    },
    "2023-11-03": {
        diaTexto: "Date 03/11/2023 💗",
        textoHTML: `<p>Jesus APAGA A LUZ... ela é do jeito que eu gosto</p><br><p>Nesse dia quando você veio tava tudo sem luz. São paulo sendo São Paulo. Mesmo assim, ficamos juntos no escuro, aí você decidiu fazer skincare em mim de novo, além de me HUMILHAR indo mostrar para a minha mãe. Faz parte.</p>`,
        videoSrc: null,
        imagemSrc: "../images/novembro3.png"
    },
    "2023-11-08": {
        diaTexto: "Date 08/11/2023 💗",
        textoHTML: `<p>MILHARES DE COXINHAS!</p><br><p>Esse dia nós nos empaturramos de coxinha do Ragazzo, já que fomos no famoso rodízio. Teve nhoque e competição de comer coxinhas, a qual eu OBVIAMENTE deixei você ganhar hahahahaha</p>`,
        videoSrc: null,
        imagemSrc: "../images/novembro8.png"
    },
    "2023-11-14": {
        diaTexto: "Date 14/11/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/novembro14.png"
    },
    "2023-11-19": {
        diaTexto: "Date 19/11/2023 💗",
        textoHTML: `<p>Nesse domingo você foi para casa e simplesmente decidiu que queria jogar Fortnite. Foi MUITO engraçado, mas você realmente quase ganhou, tá de parabéns diva.</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/novembro19.png"
    },
    "2023-11-20": {
        diaTexto: "Date 20/11/2023 💗",
        textoHTML: `<p>Faltando cerca de um mês para o natal, você foi ajudar a minha família a montar a nossa árvore, deixando conosco um pedacinho do seu grande coração. Eu estava super animado para o Natal, e ter você ao meu lado foi a melhor coisa que poderia ter acontecido. Te amo MUITO gatinha.</p> <br>`,
        videoSrc: "../videos/20novembro.mp4",
        imagemSrc: null
    },
    "2023-12-04": {
        diaTexto: "Date 04/12/2023 💗",
        textoHTML: `<p>KKKKKKKKKKK EU AMO ESSE VIDEO</p> <br><p>Nesse dia fomos treinar na smartfit com o Rodrigo, e foi muito engraçado. Você tava treinando muito forte com os seus dois kilinhos em cada braço, amor. Pelo menos você compensou no cardio, com essa corrida MARAVILHOSA!</p>`,
        videoSrc: "../videos/4dezembro.mp4",
        imagemSrc: null
    },
    "2023-12-20": {
        diaTexto: "Date 20/12/2023 💗",
        textoHTML: `<p>UMA DAS COISAS MAIS LEGAIS QUE FIZEMOS!</p><br><p>Para comemorar o nosso dia 20, decidimos fazer uma coisa incrível: uma casinha de natal de KitKat. Depois de muitas brigas e teimosias na cozinha, saiu uma casinha muito fofa e bonita, feita por nós dois. Tava MUITO gostosa também!</p>`,
        videoSrc: null,
        imagemSrc: "../images/dezembro20.png"
    },
    "2023-12-25": {
        diaTexto: "Date 25/12/2023 🎄",
        textoHTML: `<p>Jingle Bells, Jingle Bells, a Nicole ama o Leo!</p><br><p>Sem dúvidas, um natal inesquecível. Foi o nosso primeiro natal juntos, e não poderia ser melhor. Nesse dia eu te dei o nosso filho de pelúcia, o Leco. Você me deu presentes incríveis, mas nada poderia ser melhor do que a sua ilustre presença na minha vida. Foi para encerrar o ano com chave de ouro.</p>`,
        videoSrc: null,
        imagemSrc: "../images/dezembro25.png"
    },
    "2024-01-10": {
        diaTexto: "Date 10/01/2024 💗",
        textoHTML: `<p>Dessa vez eu estava de volta em São Sebastião, para nossa alegria. Foi o primeiro dia de mais uma viagem juntinhos! Ficamos na praia, me queimei um pouco no primeiro dia, mas você estava maravilhooooooooosa.</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/janeiro10.png"
    },
    "2024-01-11": {
        diaTexto: "Date 11/01/2024 💗",
        textoHTML: `<p>Foi dia de dar rolê de ônibus no centrinho de são sebas. Tomei um caldo de cana daora na beira da praia esse dia.</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/janeiro11.png"
    },
    "2024-01-14": {
        diaTexto: "Date 14/01/2024 💗",
        textoHTML: `<p>Após alguns dias mais tranquilos, jogando baralho e ficando em casa e na praia, fomos de novo ao centrinho. Estávamos combinando, os dois pombinhos de branco, coisa mais linda. Fomos até o pier dessa vez, onde tava uma baita ventania.</p>`,
        videoSrc: null,
        imagemSrc: "../images/dois/janeiro14.png"
    },
    "2024-01-15": {
        diaTexto: "Date 15/01/2024 💗",
        textoHTML: `<p>Último diazinho antes de eu ir embora. Nós demos um role na pedra, e ficamos de amores juntinhos lá, comendo ovomaltine rocks. Também comemos carangueijo nesse dia, foi esquisito.</p>`,
        videoSrc: null,
        imagemSrc: "../images/dois/janeiro15.png"
    },
    "2024-01-16": {
        diaTexto: "Date 16/01/2024 💗",
        textoHTML: `<p>Não foi exatamente um date, mas foi com certeza uma data muito marcante. Eu estava prestes a ir embora, e nós brigamos. Foi nesse dia que eu aprendi a deixar o meu ego de lado, porque nosso relacionamento é muito mais importante que isso. Então ficamos lá, dois chorões na rede apenas aprendendo a se amar da melhor forma possível. Foi muito marcante para mim, porque significou um grande gesto de amor e perdão.</p>`,
        videoSrc: null,
        imagemSrc: "../images/dois/janeiro16.png"
    },
    "2024-03-28": {
        diaTexto: "Date 28/03/2024 💗",
        textoHTML: `<p>Nossa primeira páscoa juntos foi muito legal! Decidimos fazer ovos um para o outro. Obviamente eu escolhi fazer de KitKat para você, já que é o seu doce favorito, e ficou lindo E gostoso. Você fez o de sensação para mim, porque é a melhor combinação do mundo e ficou DIVINO. Devorei o ovo rapidinho. Amo esses momentos com você!</p>`,
        videoSrc: null,
        imagemSrc: "../images/dois/marco28.png"
    },
    "2024-03-29": {
        diaTexto: "Date 29/03/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/marco29.png"
    },
    "2024-03-30": {
        diaTexto: "Date 30/03/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/30marco.mp4",
        imagemSrc: null
    },
    "2024-04-15": {
        diaTexto: "Date 15/04/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/abril15.png"
    },
    "2024-04-20": {
        diaTexto: "Date 20/04/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/abril20.png"
    },
    "2024-04-28": {
        diaTexto: "Date 28/04/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/abril28.png"
    },
    "2024-05-08": {
        diaTexto: "Date 08/05/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/maio8.png"
    },
    "2024-05-22": {
        diaTexto: "Date 22/05/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/maio22.png"
    },
    "2024-05-30": {
        diaTexto: "Date 30/05/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/30maio.mp4",
        imagemSrc: null
    },
    "2024-05-31": {
        diaTexto: "Date 31/05/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/maio31.png"
    },
    "2024-06-04": {
        diaTexto: "Date 04/06/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/junho4.png"
    },
    "2024-06-12": {
        diaTexto: "Date 12/06/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/junho12.png"
    },
    "2024-06-23": {
        diaTexto: "Date 23/06/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/junho23.png"
    },
    "2024-06-29": {
        diaTexto: "Date 29/06/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/29junho_2.mp4",
        imagemSrc: null
    },
    "2024-07-06": {
        diaTexto: "Date 06/07/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/julho6.png"
    },
    "2024-07-13": {
        diaTexto: "Date 13/07/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/julho13.png"
    },
    "2024-07-27": {
        diaTexto: "Date 27/07/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/julho27.png"
    },
    "2024-08-04": {
        diaTexto: "Date 04/08/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/agosto4.png"
    },
    "2024-08-20": {
        diaTexto: "Date 20/08/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/20ago.mp4",
        imagemSrc: null
    },
    "2024-08-24": {
        diaTexto: "Date 24/08/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/agosto24.png"
    },
    "2024-08-30": {
        diaTexto: "Date 30/08/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/agosto30.png"
    },
    "2024-09-21": {
        diaTexto: "Date 21/09/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/21setembro.mp4",
        imagemSrc: null
    },
    "2024-10-12": {
        diaTexto: "Date 12/10/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/outubro12.png"
    },
    "2024-10-26": {
        diaTexto: "Date 26/10/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/outubro26.png"
    },
    "2024-10-30": {
        diaTexto: "Date 30/10/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/30outubro.mp4",
        imagemSrc: null
    },
    "2024-12-01": {
        diaTexto: "Date 01/12/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/dezembro1.png"
    },
    "2024-12-06": {
        diaTexto: "Date 06/12/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/dezembro6.png"
    },
    "2024-12-11": {
        diaTexto: "Date 11/12/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/dezembro11.png"
    },
    "2024-12-24": {
        diaTexto: "Date 24/12/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/24dezembro.mp4",
        imagemSrc: null
    },
    "2024-12-25": {
        diaTexto: "Date 25/12/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/dezembro25.png"
    },
    "2025-01-01": {
        diaTexto: "Date 01/01/2025 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/janeiro1.png"
    },
    "2025-01-08": {
        diaTexto: "Date 08/01/2025 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/8janeiro.mp4",
        imagemSrc: null
    },
    "2025-02-06": {
        diaTexto: "Date 06/02/2025 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/6fevereiro.mp4",
        imagemSrc: null
    },
    "2025-02-23": {
        diaTexto: "Date 23/02/2025 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/fevereiro23.png"
    },
    "2025-03-05": {
        diaTexto: "Date 05/03/2025 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/marco5.png"
    },
    "2025-04-06": {
        diaTexto: "Date 06/04/2025 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/6abril.mp4",
        imagemSrc: null
    },
};

// Função para exibir os dados do "date"
function exibirDate(diaTexto, textoHTML, videoSrc = null, imagemSrc = null) {
    sucesso.innerHTML = `<p>Date encontrado com <span>sucesso!</span> 👇</p>`;
    article.style.display = "block";
    secdate.style.display = "block";
    sucesso.style.display = "block";

    dia.innerHTML = `<p>${diaTexto}</p>`;
    texto.innerHTML = textoHTML;

    if (videoSrc) {
        video.style.display = "block";
        video.src = videoSrc;
    } else {
        video.style.display = "none";
    }

    if (imagemSrc) {
        imagem.style.display = "block";
        imagem.src = imagemSrc;
    } else {
        imagem.style.display = "none";
    }
}

// Função principal chamada ao clicar
function clicar() {
    const dateValue = data.value;
    data.value = ""; // Limpa o campo de data

    if (dateValue === "") {
        window.alert("[ERRO] Inserir Data");
        return;
    }

    const dateInfo = dateMap[dateValue];
    if (dateInfo) {
        // Exibe os dados da data encontrada
        exibirDate(dateInfo.diaTexto, dateInfo.textoHTML, dateInfo.videoSrc, dateInfo.imagemSrc);
    } else {
        // Caso a data não seja encontrada
        secdate.style.display = "none";
        sucesso.innerHTML = `<p>Date não encontrado.</p>`;
    }
}
