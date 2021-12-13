var numeroSecreto = parseInt(Math.random() * 11);
var numeroDeTentativas = 3;

function Chutar() {
  var numeroChutado = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");
  if (numeroDeTentativas >= 0) {
    if (numeroChutado == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou!";
    } else if (numeroDeTentativas < 1) {
      elementoResultado.innerHTML = "Você errou! Suas chances acabaram.";
    } else if (numeroChutado < 0 || numeroChutado > 10) {
      elementoResultado.innerHTML = "Por favor, insira um número de 0 à 10.";
      numeroDeTentativas + numeroDeTentativas + 1;
    } else {
      if (numeroChutado > numeroSecreto) {
        elementoResultado.innerHTML =
          "Você errou! O número é menor. Restam " +
          numeroDeTentativas +
          " tentativas.";
      } else {
        elementoResultado.innerHTML =
          "Você errou! O número é maior. Restam " +
          numeroDeTentativas +
          " tentativas.";
      }
    }
    console.log(numeroDeTentativas);
    numeroDeTentativas = numeroDeTentativas - 1;
  } else {
    elementoResultado.innerHTML =
      "Suas tentativas acabaram, o número secreto era " + numeroSecreto;
  }
}