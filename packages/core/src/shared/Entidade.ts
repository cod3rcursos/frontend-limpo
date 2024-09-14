import Id from './Id'

export interface EntidadeProps {
    id?: string
}

export default abstract class Entidade<ENTIDADE, PROPS extends EntidadeProps> {
    public readonly props: PROPS

    constructor(props: PROPS) {
        this.props = { ...props, id: props.id ?? Id.novo() }
    }

    get id() {
        return this.props.id
    }

    clone(props: Partial<PROPS>): ENTIDADE {
        return new (this.constructor as any)({
            ...this.props,
            ...props,
        })
    }
}
