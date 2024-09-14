import { Nivel } from '../curso/model/Nivel'
import Curso from '../curso/model/Curso'

const cursos: Curso[] = [
    new Curso({
        nome: 'Curso de React',
        nivel: Nivel.BASICO,
        instrutores: ['fulano', 'ciclano'],
        aulas: [
            {
                nome: 'Introdução ao React',
                duracao: 7 * 60 + 54,
                videoURL: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
                visivel: true,
                ordem: 1,
            },
            {
                nome: 'O que é React?',
                duracao: 6 * 60 + 23,
                videoURL: 'https://www.youtube.com/watch?v=dpw9EHDh2bM',
                visivel: true,
                ordem: 2,
            },
            {
                nome: 'O Básico sobre Componentes',
                duracao: 5 * 60 + 45,
                videoURL: 'https://www.youtube.com/watch?v=XLJN4JfniH4',
                visivel: true,
                ordem: 3,
            },
            {
                nome: 'Propriedades',
                duracao: 6 * 60 + 45,
                videoURL: 'https://www.youtube.com/watch?v=CVpUuw9XSjY',
                visivel: true,
                ordem: 4,
            },
        ],
    }),
]

export default cursos
