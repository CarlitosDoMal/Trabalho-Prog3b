const caixaprincipal=document.queryselector("caixaprincipal");
const caixaperguntas=document.queryselector("caixas-perguntas");
const caixaAlternativas=document.queryselector("caixa-alternativas");
const caixareultado= document.queryselector(".caixa resultado");
const textoResultado= document.queryselector(".texto-resultado");

const perguntas = []
     {
        enunciado: "Assim que saiu da escola voce se depara com uma nova tecnologia,um chat que consegue reponder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistatas. Qual o primeiro pensamento?",
        alternativas: [
     {
           texto: "isso é asustador!",
           afirmação: "afirmação"
     },
    {
           texto: "Isso é maravilhoso!",
           afirmação: "afirmação"
    }
  [
{,
}
        enunciado:"Com a descoberta desta tecnologia, chamada inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula, Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que faciliter o entendimento",
                afirmação: "afirmação"
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios",
                afirmação: "afirmação"
           }
        [
      {,
      }
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você e posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmação: "afirmação"
                {,

                }
                texto; "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importáncia de proteger os trabalhadores.",
                afirmação: "afirmação"
            {

        }    
      [,


      ]
      enunciado; "Ao final da discussão, voçê precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
      alternativas: [
           {
                texto: "Criar uma imagem utiliando uma plataforma de design como o Paint.",
                afirmação: "afirmação"
              },
              {
      enunciado: "Voçê tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho esta totalmente igual as do chat. O que voçê faz?",
      alternativas: [
           {
                texto: "Ecreva comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmação: "afirmação"
           {
        [
     {,
  [

  let atual = 0;
  let perguntaAtual;

  function mostraPergunta() {
      perguntaAtual = pergunta[atual];
      caixaPerguntas.textContent = perguntaAtual.enunciado;
      mostraAlternativas();
   }

  function mostraAlternativas() {
         for (const alternativa of perguntaAtual)
  }
  function mostraPergunta(){
       if (atual >= perguntas.lenght) {
           mostraResultado();
           return
       }
       perguntaAtual = perguntas[atual];
       caixaPerguntas.textContent = perguntaAtual.enunciado
       caixaAlternativas.textoResultado = "";
       mostraAlternativas();
  }

  function mostraAlternativas(){
       for(const alternativa of perguntaAtual.alternativas) {
           const botaoAlternativas = document.createElement("button");
           botaoAlternativas.textContent = alternativa.texto;
           botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativas));
           caixaAlternativas.appendChild(botaoAlternativas);
       }
  }

  function respostaSelecionada(opcaoSelecionada) {
      const afirmacoes = opcaoSelecionada.afirmação;
      historiaFinal += afirmacoes + " ";
      atual++;
      mostraPergunta();
  }

  function mostraResultado() {
      caixaperguntas.textContent = "Em 2049...";
      textoResultado.textContent = historiaFinal;
      caixaAlternativas.textContent = "";
  }

  mostraPergunta();


  ]





     }





        ]






           }





           }





      ]






              }








      ]






        }











        









       





      








        ]



  ]











        ]               

     








