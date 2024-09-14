import Aula from '../../curso/model/Aula'
import AulaDTO from '../dto/Aula'
import Curso from '../../curso/model/Curso'
import CursoDTO from '../dto/Curso'
import EsconderAula from '../../curso/service/EsconderAula'
import ExcluirAula from '../../curso/service/ExcluirAula'
import ListarCursos from '../../curso/service/ListarCursos'
import MoverAula from '../../curso/service/MoverAula'
import PublicarAula from '../../curso/service/PublicarAula'
import AlterarAula from '../../curso/service/AlterarAula'
import AdicionarAula from '../../curso/service/AdicionarAula'

export default class CursoFacade {
    adicionarAula(curso: CursoDTO): CursoDTO {
        const casoDeUso = new AdicionarAula()
        const cursoAtualizado = casoDeUso.executar(new Curso(curso))
        return cursoAtualizado.props
    }

    alterarAula(curso: CursoDTO, aula: AulaDTO): CursoDTO {
        const casoDeUso = new AlterarAula()
        const entrada = { curso: new Curso(curso), aula: new Aula(aula) }
        const cursoAtualizado = casoDeUso.executar(entrada)
        return cursoAtualizado.props
    }

    esconderAula(curso: CursoDTO, aula: AulaDTO): CursoDTO {
        const casoDeUso = new EsconderAula()
        const entrada = { curso: new Curso(curso), aula: new Aula(aula) }
        const cursoAtualizado = casoDeUso.executar(entrada)
        return cursoAtualizado.props
    }

    excluirAula(curso: CursoDTO, aula: AulaDTO): CursoDTO {
        const casoDeUso = new ExcluirAula()
        const entrada = { curso: new Curso(curso), aula: new Aula(aula) }
        const cursoAtualizado = casoDeUso.executar(entrada)
        return cursoAtualizado.props
    }

    async listar(): Promise<CursoDTO[]> {
        const casoDeUso = new ListarCursos()
        const cursos = await casoDeUso.executar()
        return cursos.map((curso) => curso.props)
    }

    moverAula(curso: CursoDTO, aula: AulaDTO, delta: number): CursoDTO {
        const casoDeUso = new MoverAula()
        const entrada = { curso: new Curso(curso), aula: new Aula(aula), delta }
        const cursoAtualizado = casoDeUso.executar(entrada)
        return cursoAtualizado.props
    }

    publicarAula(curso: CursoDTO, aula: AulaDTO): CursoDTO {
        const casoDeUso = new PublicarAula()
        const entrada = { curso: new Curso(curso), aula: new Aula(aula) }
        const cursoAtualizado = casoDeUso.executar(entrada)
        return cursoAtualizado.props
    }
}
