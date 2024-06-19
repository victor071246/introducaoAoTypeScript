import Conta from "../types/Conta.js";
import { formatarMoeda, formatarData } from "../utils/formaters.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { FormatoData } from "../types/FormatoData.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarExtrato();
function renderizarExtrato(): void {
    const gruposTransacoes: GrupoTransacao[] = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes: string = "";

    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacoesItem: string = "";
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacoesItem += `
                        <div class="transacao-item">
                            <div class="transacao-info">
                                <span class="tipo">${transacao.tipoTransacao}</span>
                                <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                            </div>
                            <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                        </div>
                `;
        }

        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${grupoTransacao.label}</strong>
                ${htmlTransacoesItem}
            </div>
        `;
    }

    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há transações registradas.</div>";
    }

    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}

const ExtratoComponent = {
    atualizar(): void {
        renderizarExtrato();
    },
};

export default ExtratoComponent;
