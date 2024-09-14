export default class DuracaoUtils {
    static formatar(segundos: number): string {
        const minutos = Math.floor(segundos / 60)
        const segundo = segundos % 60
        return `${minutos.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}`
    }

    static formatarTexto(duracao: string): string {
        const apenasNumeros = `${+duracao.replace(/\D/g, '')}`
        const segundos = apenasNumeros.slice(-2)
        const minutos = apenasNumeros.slice(0, -2)
        return `${minutos.padStart(2, '0')}:${segundos.padStart(2, '0')}`
    }

    static desformatar(duracao: string): number {
        const apenasNumeros = duracao.replace(/\D/g, '')
        const segundos = apenasNumeros.slice(-2)
        const minutos = apenasNumeros.slice(0, -2)
        return parseInt(segundos) + parseInt(minutos) * 60
    }
}
