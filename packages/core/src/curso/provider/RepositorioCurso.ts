import Curso from '../model/Curso'

export default interface RepositorioCurso {
    listar(): Promise<Curso[]>
    obterPorId(id: string): Promise<Curso>
    remover(id: string): Promise<void>
    salvar(curso: Curso): Promise<void>
}
