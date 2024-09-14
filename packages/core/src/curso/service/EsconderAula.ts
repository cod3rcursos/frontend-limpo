import CasoDeUso from '../../shared/CasoDeUso'
import Aula from '../model/Aula'
import Curso from '../model/Curso'

type Entrada = {
    curso: Curso
    aula: Aula
}

export default class EsconderAula implements CasoDeUso<Entrada, Curso> {
    executar(entrada: Entrada): Curso {
        const { curso, aula } = entrada
        return curso.esconderAula(aula)
    }
}