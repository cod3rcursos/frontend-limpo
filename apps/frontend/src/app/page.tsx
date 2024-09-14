'use client'
import FormularioCurso from '@/components/curso/FormularioCurso'
import useCursos from '@/hooks/useCursos'

export default function Home() {
    const { cursos } = useCursos()
    return (
        <div className="flex justify-center items-center py-20">
            {cursos[0] && <FormularioCurso curso={cursos[0]} />}
        </div>
    )
}
