import { AulaDTO } from '@repo/core'
import { IconArrowDown, IconArrowUp, IconCheck, IconEyeOff, IconTrash } from '@tabler/icons-react'
import DuracaoInput from '../shared/DuracaoInput'

export interface FormularioAulaProps {
    aula: AulaDTO
    aulaMudou: (aula: AulaDTO) => void
    moverPraCima: (aula: AulaDTO) => void
    moverPraBaixo: (aula: AulaDTO) => void
    publicar: (aula: AulaDTO) => void
    esconder: (aula: AulaDTO) => void
    excluir: (aula: AulaDTO) => void
}

export default function FormularioAula(props: FormularioAulaProps) {
    const { aula } = props

    return (
        <div className="flex items-center gap-2 bg-zinc-600 p-3 rounded-md">
            <div className="button bg-black px-2">#{aula.ordem}</div>
            <div className="input">
                <input
                    type="text"
                    value={aula.nome}
                    onChange={(e) => {
                        props.aulaMudou({ ...aula, nome: e.target.value })
                    }}
                />
            </div>
            <div className="input">
                <input
                    type="text"
                    value={aula.videoURL}
                    onChange={(e) => {
                        props.aulaMudou({ ...aula, videoURL: e.target.value })
                    }}
                />
            </div>
            <div className="input">
                <DuracaoInput
                    value={aula.duracao}
                    onChange={(duracao) => props.aulaMudou({ ...aula, duracao })}
                />
            </div>

            <div className="flex gap-1.5 h-full">
                <button
                    className="button bg-purple-600"
                    onClick={() => props.moverPraBaixo(props.aula)}
                >
                    <IconArrowDown />
                </button>
                <button
                    className="button bg-purple-600"
                    onClick={() => props.moverPraCima(props.aula)}
                >
                    <IconArrowUp />
                </button>
                <button
                    className={`button ${aula.visivel ? 'bg-green-600' : 'bg-zinc-800'}`}
                    onClick={() => {
                        if (aula.visivel) props.esconder(aula)
                        else props.publicar(aula)
                    }}
                >
                    {aula.visivel ? <IconCheck /> : <IconEyeOff />}
                </button>
                <button className="button bg-red-600" onClick={() => props.excluir(props.aula)}>
                    <IconTrash />
                </button>
            </div>
        </div>
    )
}
