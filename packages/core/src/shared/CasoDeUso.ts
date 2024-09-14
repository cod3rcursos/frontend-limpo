export default interface CasoDeUso<ENTRADA, SAIDA> {
    executar(entrada: ENTRADA): SAIDA
}
