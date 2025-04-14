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
    tempo.style.fontSize = "18px"; 
    tempo.style.fontWeight = "300"
    tempo.innerText = `${anos} ano(s), ${meses} meses e ${dias} dias.`;
    document.getElementById("foot").innerHTML = "";
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
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date5.png"
    },
    "2023-06-17": {
        diaTexto: "Date 17/06/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/junho17.png"
    },
    "2023-06-22": {
        diaTexto: "Date 22/06/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/junho22.png"
    },
    "2023-06-24": {
        diaTexto: "Date 24/06/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/24junho.mp4",
        imagemSrc: null
    },
    "2023-06-29": {
        diaTexto: "Date 29/06/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/29junho.mp4",
        imagemSrc: null
    },
    "2023-07-07": {
        diaTexto: "Date 07/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/julho7.png"
    },
    "2023-07-08": {
        diaTexto: "Date 08/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/julho8.png"
    },
    "2023-07-09": {
        diaTexto: "Date 09/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/julho9.png"
    },
    "2023-07-10": {
        diaTexto: "Date 10/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/julho10.png"
    },
    "2023-07-20": {
        diaTexto: "Date 20/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/julho20.png"
    },
    "2023-07-23": {
        diaTexto: "Date 23/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/julho23.png"
    },
    "2023-07-26": {
        diaTexto: "Date 26/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/julho26.png"
    },
    "2023-08-05": {
        diaTexto: "Date 05/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/5agosto.mp4",
        imagemSrc: null
    },
    "2023-08-08": {
        diaTexto: "Date 08/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/agosto8.png"
    },
    "2023-08-11": {
        diaTexto: "Date 11/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/agosto11.png"
    },
    "2023-08-15": {
        diaTexto: "Date 15/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/agosto15.png"
    },
    "2023-08-18": {
        diaTexto: "Date 18/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/agosto18.png"
    },
    "2023-08-20": {
        diaTexto: "Date 20/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/20agosto.mp4",
        imagemSrc: null
    },
    "2023-08-26": {
        diaTexto: "Date 26/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/agosto26.png"
    },
    "2023-08-30": {
        diaTexto: "Date 30/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/agosto30.png"
    },
    "2023-09-05": {
        diaTexto: "Date 05/09/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/setembro5.png"
    },
    "2023-09-08": {
        diaTexto: "Date 08/09/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/setembro8.png"
    },
    "2023-09-15": {
        diaTexto: "Date 15/09/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/setembro15.png"
    },
    "2023-09-28": {
        diaTexto: "Date 28/09/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/setembro28.png"
    },
    "2023-10-12": {
        diaTexto: "Date 12/10/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/outubro12.png"
    },
    "2023-10-13": {
        diaTexto: "Date 13/10/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/outubro13.png"
    },
    "2023-10-28": {
        diaTexto: "Date 28/10/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/outubro28.png"
    },
    "2023-10-30": {
        diaTexto: "Date 30/10/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/outubro30.png"
    },
    "2023-11-03": {
        diaTexto: "Date 03/11/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/novembro3.png"
    },
    "2023-11-08": {
        diaTexto: "Date 08/11/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
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
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/novembro19.png"
    },
    "2023-11-20": {
        diaTexto: "Date 20/11/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/20novembro.mp4",
        imagemSrc: null
    },
    "2023-12-04": {
        diaTexto: "Date 04/12/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: "../videos/4dezembro.mp4",
        imagemSrc: null
    },
    "2023-12-20": {
        diaTexto: "Date 20/12/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dezembro20.png"
    },
    "2023-12-25": {
        diaTexto: "Date 25/12/2023 🎄",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dezembro25.png"
    },
    "2024-01-10": {
        diaTexto: "Date 10/01/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/janeiro10.png"
    },
    "2024-01-11": {
        diaTexto: "Date 11/01/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/janeiro11.png"
    },
    "2024-01-14": {
        diaTexto: "Date 14/01/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/janeiro14.png"
    },
    "2024-01-15": {
        diaTexto: "Date 15/01/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/janeiro15.png"
    },
    "2024-01-16": {
        diaTexto: "Date 16/01/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/dois/janeiro16.png"
    },
    "2024-03-28": {
        diaTexto: "Date 28/03/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
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
    sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
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
        imagem.style = "width: 100%;";
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
