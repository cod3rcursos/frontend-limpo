import Entidade, { EntidadeProps } from '../../shared/Entidade'

export interface AulaProps extends EntidadeProps {
    nome: string
    duracao: number
    videoURL: string
    visivel: boolean
    ordem: number
}

export default class Aula extends Entidade<Aula, AulaProps> {
    constructor(props: AulaProps) {
        super(props)
    }

    static vazia(): Aula {
        return new Aula({
            nome: '',
            duracao: 0,
            videoURL: '',
            visivel: false,
            ordem: 0,
        })
    }

    get nome() {
        return this.props.nome
    }

    get duracao() {
        return this.props.duracao
    }

    get videoURL() {
        return this.props.videoURL
    }

    get visivel() {
        return this.props.visivel
    }

    get ordem() {
        return this.props.ordem
    }

    esconder(): Aula {
        return this.clone({ visivel: false })
    }

    publicar(): Aula {
        return this.clone({ visivel: true })
    }
}
