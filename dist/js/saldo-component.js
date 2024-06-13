let saldo = 3000;
alert("Testando compilação do TS");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
}
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent;
}
