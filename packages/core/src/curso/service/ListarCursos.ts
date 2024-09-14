import { cursos } from '../../constants'
import CasoDeUso from '../../shared/CasoDeUso'
import Curso from '../model/Curso'

export default class ListarCursos implements CasoDeUso<void, Promise<Curso[]>> {
    async executar(): Promise<Curso[]> {
        return cursos
    }
}
