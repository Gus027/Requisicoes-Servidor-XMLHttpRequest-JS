// 1- Nesse projeto posso declarar um objeto e comportamento dele de muitas formas
// 2- Mostrarei duas funções que desenvolvi para que fique claro as maneiras que eu poderia esta utilizando no projeto com objeto XMLHttpRequest()


// Criando uma função encapsulando o objeto, e dando os parametros de dados para API:

function sendRequest() {
    const xhr = new XMLHttpRequest();                                   //Aqui se instancia a classe XMLHttpRequest(), para assim utilizar o objeto
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");    //Aqui faço a abertura da minha API dando os parametros da minha requisição que estou subindo
    xhr.onreadystatechange = function() {                               //E aqui chamo esse objeto com o metodo "onreadystatechange" e lhe classifico a função abaixo
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert("Sucesso!")
        document.getElementById("result").innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }


  
// 3- Neste exemplo não é diferente, porem descidi mostra-lo para que fique claro que é possivel esta implementando de algumas formas mais simples.
// 4- Utilizando JSON:

var xhnew = new XMLHttpRequest();                                       // Crio meu objeto XMLHttpRequest()

xhnew.onreadystatechange = function(){                                  //Uso o mesmo conceito do metodo "onreadystatechange" para encapsular a minha função
    if(xhnew.readyState == 4 && xhnew.status == 200){
        alert("Sucesso!")
        var rs = xhnew.response;                                        // Crio uma variavel "rs" para armazenar e retornar o retorno do meu body           
        var rs = JSON.parse(rs);                                        // E aqui transformando o mesmo em formato JSON 
        console.log(rs)
    }
}
/*
xhnew.open("GET","https://pokeapi.co/api/v2/pokemon/ditto");
xhnew.send();
*/


                                      //**    MAIS DETALHES DA IMPLEMENTAÇÃO E DOCUMENTAÇÃO NO E-MAIL READIGIDO    **//