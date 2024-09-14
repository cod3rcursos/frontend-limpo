export default class DuracaoUtils {
    static formatar(segundos: number): string {
        const horas = Math.floor(segundos / 3600)
        const minutos = Math.floor((segundos % 3600) / 60)
        const segundo = segundos % 60
        return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}`
    }

    static formatarTexto(duracao: string): string {
        const apenasNumeros = `${+duracao.replace(/\D/g, '')}`
        const segundos = apenasNumeros.slice(-2)
        const minutos = apenasNumeros.slice(-4, -2)
        const horas = apenasNumeros.slice(0, -4)
        return `${horas.padStart(2, '0')}:${minutos.padStart(2, '0')}:${segundos.padStart(2, '0')}`
    }

    static desformatar(duracao: string): number {
        const apenasNumeros = duracao.replace(/\D/g, '')
        const segundos = apenasNumeros.slice(-2)
        const minutos = apenasNumeros.slice(-4, -2)
        const horas = apenasNumeros.slice(0, -4)
        return +horas * 3600 + +minutos * 60 + +segundos
    }
}
