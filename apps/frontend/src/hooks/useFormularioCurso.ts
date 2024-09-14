'use client'
import { AulaDTO, CursoDTO, core } from '@repo/core'
import { useState } from 'react'

export default function useFormularioCurso(cursoInicial: CursoDTO) {
    const [curso, setCurso] = useState<CursoDTO>(cursoInicial)

    function alterarAtributo(atributo: string) {
        return (valor: any) => {
            setCurso((c) => ({ ...c, [atributo]: valor?.target?.value ?? valor }))
        }
    }

    return {
        curso,
        alterarAtributo,
        adicionarAula: () => setCurso(core.curso.adicionarAula(curso)),
        alterarAula: (a: AulaDTO) => setCurso(core.curso.alterarAula(curso, a)),
        esconderAula: (a: AulaDTO) => setCurso(core.curso.esconderAula(curso, a)),
        excluirAula: (a: AulaDTO) => setCurso(core.curso.excluirAula(curso, a)),
        moverAulaPraBaixo: (a: AulaDTO) => setCurso(core.curso.moverAula(curso, a, 1)),
        moverAulaPraCima: (a: AulaDTO) => setCurso(core.curso.moverAula(curso, a, -1)),
        publicarAula: (a: AulaDTO) => setCurso(core.curso.publicarAula(curso, a)),
    }
}
