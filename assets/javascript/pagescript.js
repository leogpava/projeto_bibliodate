let secdate = document.getElementById("res");
let article = secdate.querySelector("article");
let data = document.getElementById("data");
let sucesso = document.getElementById("sucesso");
let dia = document.getElementById("dia")
let imagem = document.getElementById("innerimg")
let texto = document.getElementById("para")
let video = document.getElementById("video")

function clicar() {
    const dateValue = data.value;
    data.value = ""; // Limpa o campo de data

    switch (dateValue) {
        case "2023-04-28":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";

            dia.innerHTML = `<p>Date 28/04/2023 💗</p>`;
            video.src = "../videos/vinteoito.mp4";
            texto.innerHTML = `<p>Esse foi o dia em que nos vimos pessoalmente pela primeira vez.</p> <br>
                               <p>Quem diria que depois de todo o nervosismo, das risadas, os tucs e das piadas de mau gosto estaríamos aqui, não é? Sem dúvidas, foi um dos principais dias na nossa história, e devo dizer que não me arrependo de nada nesse dia, e o guardo com muito amor no meu coração. </p>  <br>
                               <p>Aqui temos o único registro decente desse dia:</p>`;
            imagem.src = "";
            break;

        case "2023-05-11":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            video.style.display = "none";
            texto.innerHTML = `<p>Esse foi o dia em que nos vimos pessoalmente pela primeira vez.</p> <br>
                               <p>Quem diria que depois de todo o nervosismo, das risadas, os tucs e das piadas de mau gosto estaríamos aqui, não é? Sem dúvidas, foi um dos principais dias na nossa história, e devo dizer que não me arrependo de nada nesse dia, e o guardo com muito amor no meu coração. </p>  <br>
                               <p>Aqui temos o único registro decente desse dia:</p>`;
            imagem.src = "../images/date1.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 11/05/2023 💗</p>`;
            break;

        case "2023-05-20":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>Esse foi o dia em que nos vimos pessoalmente pela primeira vez.</p> <br>
                               <p>Quem diria que depois de todo o nervosismo, das risadas, os tucs e das piadas de mau gosto estaríamos aqui, não é? Sem dúvidas, foi um dos principais dias na nossa história, e devo dizer que não me arrependo de nada nesse dia, e o guardo com muito amor no meu coração. </p>  <br>
                               <p>Aqui temos o único registro decente desse dia:</p>`;
            video.style.display = "none";
            imagem.src = "../images/date2.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 20/05/2023 💗</p>`;
            break;

        case "2023-05-27":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>Esse foi o dia em que nos vimos pessoalmente pela primeira vez.</p> <br>
                               <p>Quem diria que depois de todo o nervosismo, das risadas, os tucs e das piadas de mau gosto estaríamos aqui, não é? Sem dúvidas, foi um dos principais dias na nossa história, e devo dizer que não me arrependo de nada nesse dia, e o guardo com muito amor no meu coração. </p>  <br>
                               <p>Aqui temos o único registro decente desse dia:</p>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 27/05/2023 💗</p>`;
            break;

        case "2023-06-01":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date4.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 01/06/2023 💗</p>`;
            break;

        case "2023-06-08":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 08/06/2023 💗</p>`;
            break;

        case "2023-06-12":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 12/06/2023 💗</p>`;
            break;

        case "2023-06-17":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 17/06/2023 💗</p>`;
            break;

        case "2023-06-22":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 22/06/2023 💗</p>`;
            break;

        case "2023-06-24":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 24/06/2023 💗</p>`;
            break;
            
        case "2023-06-29":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 29/06/2023 💗</p>`;
            break;

        case "2023-07-07":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 07/07/2023 💗</p>`;
            break;

        case "2023-07-08":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 08/07/2023 💗</p>`;
            break;

        case "2023-07-09":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 09/07/2023 💗</p>`;
            break;

        case "2023-07-10":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 10/07/2023 💗</p>`;
            break;
            
        case "2023-07-20":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 20/07/2023 💗</p>`;
            break;

        case "2023-07-23":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 23/07/2023 💗</p>`;
            break;

        case "2023-07-26":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 26/07/2023 💗</p>`;
            break;
            
        case "2023-08-05":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 05/08/2023 💗</p>`;
            break;


        case "2023-08-08":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;

            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"

            dia.innerHTML = `<p>Date 08/08/2023 💗</p>`;
            break;

        case "2023-08-11":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
    
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
    
            dia.innerHTML = `<p>Date 11/08/2023 💗</p>`;
            break;

        case "2023-08-15":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
        
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
        
            dia.innerHTML = `<p>Date 15/08/2023 💗</p>`;
            break;
       
        case "2023-08-18":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
            
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
            
            dia.innerHTML = `<p>Date 18/08/2023 💗</p>`;
            break;
      
        case "2023-08-20":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                
            dia.innerHTML = `<p>Date 20/08/2023 💗</p>`;
            break;

        case "2023-08-26":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                
            dia.innerHTML = `<p>Date 26/08/2023 💗</p>`;
            break;

        case "2023-08-30":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                
            dia.innerHTML = `<p>Date 30/08/2023 💗</p>`;
            break;

        case "2023-09-05":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                
            dia.innerHTML = `<p>Date 05/09/2023 💗</p>`;
            break;

        case "2023-09-08":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                    
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                    
            dia.innerHTML = `<p>Date 08/09/2023 💗</p>`;
            break;

        case "2023-09-15":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                    
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                    
            dia.innerHTML = `<p>Date 15/09/2023 💗</p>`;
            break;

        case "2023-09-28":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                    
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                    
            dia.innerHTML = `<p>Date 28/09/2023 💗</p>`;
            break;

        case "2023-10-12":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                    
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                    
            dia.innerHTML = `<p>Date 12/10/2023 💗</p>`;
            break;

        case "2023-10-13":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                    
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                    
            dia.innerHTML = `<p>Date 13/10/2023 💗</p>`;
            break;

        case "2023-10-28":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                    
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                    
            dia.innerHTML = `<p>Date 28/10/2023 💗</p>`;
            break;

        case "2023-10-30":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                    
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                    
            dia.innerHTML = `<p>Date 30/10/2023 💗</p>`;
            break;

        case "2023-11-03":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                    
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                    
            dia.innerHTML = `<p>Date 03/11/2023 💗</p>`;
            break;

        case "2023-00-00":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                    
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                    
            dia.innerHTML = `<p>Date 00/00/2023 💗</p>`;
            break;

        case "2023-00-00":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                    
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                    
            dia.innerHTML = `<p>Date 00/00/2023 💗</p>`;
            break;

        case "2023-00-00":
            sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>`;
                    
            article.style.display = "block";
            secdate.style.display = "block";
            sucesso.style.display = "block";
            texto.innerHTML = `<p>TEXTO NULL</p> <br>`;
            video.style.display = "none";
            imagem.src = "../images/date3.png";
            imagem.style = "width: 100%;"
                    
            dia.innerHTML = `<p>Date 00/00/2023 💗</p>`;
            break;


                

        case "":
            window.alert("[ERRO] Inserir Data");
            break;

        default:
            secdate.style.display = "none";
            sucesso.innerHTML = `<p>Date não encontrado.</p>`;
            break;
    }
}
