import Entidade, { EntidadeProps } from '../../shared/Entidade'
import Aula, { AulaProps } from './Aula'
import { Nivel } from './Nivel'

export interface CursoProps extends EntidadeProps {
    nome?: string
    nivel?: Nivel
    instrutores?: string[]
    aulas?: AulaProps[]
}

export default class Curso extends Entidade<Curso, CursoProps> {
    constructor(props: CursoProps) {
        super({
            ...props,
            aulas: Curso.normalizarAulas(props.aulas ?? []),
        })
    }

    get nome() {
        return this.props.nome
    }

    get nivel() {
        return this.props.nivel
    }

    get instrutores() {
        return this.props.instrutores
    }

    get aulas(): Aula[] {
        return this.props.aulas?.map((aula) => new Aula(aula)) ?? []
    }

    adicionarAula(): Curso {
        const aulas = [...this.props.aulas!]
        const ordem = aulas.length + 1
        aulas.push(Aula.vazia().clone({ ordem }).props)
        return this.clone({ aulas })
    }

    alterarAula(aula: Aula): Curso {
        const aulas = this.props.aulas!.map((a) => (a.id === aula.id ? aula.props : a))
        return this.clone({ aulas })
    }

    esconderAula(aula: Aula): Curso {
        const aulas = this.props.aulas!.map((a) => (a.id === aula.id ? aula.esconder().props : a))
        return this.clone({ aulas })
    }

    publicarAula(aula: Aula): Curso {
        const aulas = this.props.aulas!.map((a) => (a.id === aula.id ? aula.publicar().props : a))
        return this.clone({ aulas })
    }

    excluirAula(aula: Aula): Curso {
        const aulas = this.props.aulas!.filter((a) => a.id !== aula.id)
        return this.clone({ aulas })
    }

    moverAula(aula: Aula, delta: number): Curso {
        const posicao = this.props.aulas!.findIndex((a) => a.id === aula.id)
        const novaPosicao = posicao + delta
        if (novaPosicao < 0 || novaPosicao >= this.props.aulas!.length) {
            return this
        }
        const aulas = [...this.props.aulas!]
        const aulaMovida = aulas.splice(posicao, 1)
        aulas.splice(novaPosicao, 0, aulaMovida[0]!)

        return this.clone({
            aulas: aulas.map((a, i) => ({ ...a, ordem: i + 1 })),
        })
    }

    private static normalizarAulas(aulas: AulaProps[]): AulaProps[] {
        return aulas.map((a) => new Aula(a).props).sort((a, b) => a.ordem - b.ordem)
    }
}
