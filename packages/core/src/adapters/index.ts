import CursoDTO from './dto/Curso'
import AulaDTO from './dto/Aula'
import CoreFacade from './facade/CoreFacade'

const core = new CoreFacade()

export type { CursoDTO, AulaDTO }
export { core }
