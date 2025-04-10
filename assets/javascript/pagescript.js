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
        diaTexto: "Date 11/05/2023 💗",
        textoHTML: `<p>Esse foi o dia em que nos vimos pessoalmente pela primeira vez.</p> <br>
                    <p>Quem diria que depois de todo o nervosismo, das risadas, os tucs e das piadas de mau gosto estaríamos aqui, não é? Sem dúvidas, foi um dos principais dias na nossa história, e devo dizer que não me arrependo de nada nesse dia, e o guardo com muito amor no meu coração. </p>  <br>
                    <p>Aqui temos o único registro decente desse dia:</p>`,
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
        diaTexto: "Date 27/05/2023 💗",
        textoHTML: `<p>Esse foi o dia em que nos vimos pessoalmente pela primeira vez.</p> <br>
                    <p>Quem diria que depois de todo o nervosismo, das risadas, os tucs e das piadas de mau gosto estaríamos aqui, não é? Sem dúvidas, foi um dos principais dias na nossa história, e devo dizer que não me arrependo de nada nesse dia, e o guardo com muito amor no meu coração. </p>  <br>
                    <p>Aqui temos o único registro decente desse dia:</p>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-06-01": {
        diaTexto: "Date 01/06/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date4.png"
    },
    "2023-06-08": {
        diaTexto: "Date 08/06/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-06-12": {
        diaTexto: "Date 12/06/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-06-17": {
        diaTexto: "Date 17/06/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-06-22": {
        diaTexto: "Date 22/06/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-06-24": {
        diaTexto: "Date 24/06/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-06-29": {
        diaTexto: "Date 29/06/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-07-07": {
        diaTexto: "Date 07/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-07-08": {
        diaTexto: "Date 08/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-07-09": {
        diaTexto: "Date 09/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-07-10": {
        diaTexto: "Date 10/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-07-20": {
        diaTexto: "Date 20/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-07-23": {
        diaTexto: "Date 23/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-07-26": {
        diaTexto: "Date 26/07/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-08-05": {
        diaTexto: "Date 05/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-08-08": {
        diaTexto: "Date 08/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-08-11": {
        diaTexto: "Date 11/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-08-15": {
        diaTexto: "Date 15/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-08-18": {
        diaTexto: "Date 18/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-08-20": {
        diaTexto: "Date 20/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-08-26": {
        diaTexto: "Date 26/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-08-30": {
        diaTexto: "Date 30/08/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-09-05": {
        diaTexto: "Date 05/09/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-09-08": {
        diaTexto: "Date 08/09/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-09-15": {
        diaTexto: "Date 15/09/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-09-28": {
        diaTexto: "Date 28/09/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-10-12": {
        diaTexto: "Date 12/10/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-10-13": {
        diaTexto: "Date 13/10/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-10-28": {
        diaTexto: "Date 28/10/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-10-30": {
        diaTexto: "Date 30/10/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-11-03": {
        diaTexto: "Date 03/11/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-11-08": {
        diaTexto: "Date 08/11/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-11-14": {
        diaTexto: "Date 14/11/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-11-19": {
        diaTexto: "Date 19/11/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-11-20": {
        diaTexto: "Date 20/11/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-12-04": {
        diaTexto: "Date 04/12/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-12-20": {
        diaTexto: "Date 20/12/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2023-12-25": {
        diaTexto: "Date 25/12/2023 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    },
    "2024-01-10": {
        diaTexto: "Date 10/01/2024 💗",
        textoHTML: `<p>TEXTO NULL</p> <br>`,
        videoSrc: null,
        imagemSrc: "../images/date3.png"
    }
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
