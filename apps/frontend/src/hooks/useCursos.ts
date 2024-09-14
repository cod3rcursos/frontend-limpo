'use client'
import { core, CursoDTO } from '@repo/core'
import { useEffect, useState } from 'react'

export default function useCursos() {
    const [cursos, setCursos] = useState<CursoDTO[]>([])

    useEffect(() => {
        core.curso.listar().then(setCursos)
    }, [])

    return { cursos }
}
