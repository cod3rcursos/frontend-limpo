import { CursoDTO, Nivel } from '@repo/core'
import FormularioAula from './FormularioAula'
import useFormularioCurso from '@/hooks/useFormularioCurso'
import { IconPlus } from '@tabler/icons-react'

export interface FormularioCursoProps {
    curso: CursoDTO
}

export default function FormularioCurso(props: FormularioCursoProps) {
    const {
        curso,
        adicionarAula,
        alterarAtributo,
        alterarAula,
        moverAulaPraCima,
        moverAulaPraBaixo,
        esconderAula,
        publicarAula,
        excluirAula,
    } = useFormularioCurso(props.curso)

    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-5xl text-yellow-500">Formulário de Curso</h1>
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col input">
                    <span>Nome:</span>
                    <input type="text" value={curso.nome} onChange={alterarAtributo('nome')} />
                </div>
                <div className="flex flex-col input">
                    <span>Nível:</span>
                    <select value={curso.nivel} onChange={alterarAtributo('nivel')}>
                        <option value={Nivel.BASICO}>Básico</option>
                        <option value={Nivel.INTERMEDIARIO}>Intermediário</option>
                        <option value={Nivel.AVANCADO}>Avançado</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col input">
                <span>Instrutores:</span>
                <input type="text" value={curso.instrutores?.join(', ')} />
            </div>
            <div className="mt-7">
                <span className="text-2xl">Aulas</span>
                <hr />
            </div>
            {(curso.aulas ?? []).map((aula) => (
                <FormularioAula
                    key={aula.id}
                    aula={aula}
                    aulaMudou={alterarAula}
                    moverPraBaixo={moverAulaPraBaixo}
                    moverPraCima={moverAulaPraCima}
                    publicar={publicarAula}
                    esconder={esconderAula}
                    excluir={excluirAula}
                />
            ))}
            <button
                className="button bg-yellow-500 text-black self-start px-4"
                onClick={() => adicionarAula()}
            >
                <IconPlus />
                Adicionar aula
            </button>
        </div>
    )
}
