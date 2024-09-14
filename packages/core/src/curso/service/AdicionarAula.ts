import CasoDeUso from '../../shared/CasoDeUso'
import Curso from '../model/Curso'

export default class AdicionarAula implements CasoDeUso<Curso, Curso> {
    executar(curso: Curso): Curso {
        return curso.adicionarAula()
    }
}
