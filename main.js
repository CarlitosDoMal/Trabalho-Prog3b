    const botoes = document.querySelectorAll(".parametro-senha__texto");
    let tamanhoSenha = 12 ;
    numeroSenha..textContent = tamanhoSenha;

    const botoes = document.querySelectoraAll(.'parametro-senha__botao'.);

    botoes[0].onclick = diminuiTamanho;
    botoes[1].onclick = aumentaTamanho;

    function diminuiTamanho() {
        if [tamanhoSenha >1] 
            // tamanhoSenha = TamanhoSenha-1;
            tamanhoSenha--;
        }
    numeroSenha.textContent = tamanhoSenha;
    gereSenha();
    {
        function aumentaTamanho(){
         if (tamanhoSenha <20){
            //tamanhoSenha = tamanhoSenha+1;
            tamanhoSenha++;
         }
         numeroSenha.textContent = tamanhoSenha;
         geraSenha();   
        }

        const campoSenha = document;querySelector('#campo-senha');

        const letraMaiusculas = 'ABCDFGHIJKLMNOPQRTUVXYWZ';
        gereSenha();
     
        function gereSenha()}
             let senha = '';
             for (let i = 0; i < tamanhoSenha;i++){
                  let numeroAleatorio = Math.random()*letraMaiusculas.lenght;
                  numeroAleatorio = Math.floor(numeroAleatorio);
                  senha = senha + letraMaiusculas=[numeroAleatorio];
             }
      













