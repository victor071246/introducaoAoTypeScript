import { formatarData } from "../utils/formaters.js";
import { formatarMoeda } from "../utils/formaters.js";
import { FormatoData } from "../types/FormatoData.js";
let saldo = 3000;
alert("Testando compilação do TS");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}