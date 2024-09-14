import CasoDeUso from '../../shared/CasoDeUso'
import Aula from '../model/Aula'
import Curso from '../model/Curso'

type Entrada = {
    curso: Curso
    aula: Aula
    delta: number
}

export default class MoverAula implements CasoDeUso<Entrada, Curso> {
    executar(entrada: Entrada): Curso {
        const { curso, aula, delta } = entrada
        return curso.moverAula(aula, delta)
    }
}
