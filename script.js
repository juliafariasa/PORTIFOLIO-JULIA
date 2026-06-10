const saudacao = document.getElementById("saudacao");
const horaAtual = new Date().getHours();

if (saudacao) {
  if (horaAtual >= 5 && horaAtual < 12) {
    saudacao.textContent = "Bom dia, seja bem-vindo ao meu portfólio!";
  } else if (horaAtual >= 12 && horaAtual < 18) {
    saudacao.textContent = "Boa tarde, seja bem-vindo ao meu portfólio!";
  } else {
    saudacao.textContent = "Boa noite, seja bem-vindo ao meu portfólio!";
  }
}
