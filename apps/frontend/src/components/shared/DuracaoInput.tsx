'use client'
import { DuracaoUtils } from '@repo/core'
import { useState } from 'react'

export interface DuracaoInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    value: number
    onChange: (value: number) => void
}

export default function DuracaoInput(props: DuracaoInputProps) {
    const [duracao, setDuracao] = useState(DuracaoUtils.formatar(props.value))
    const { value, onChange, ...rest } = props
    return (
        <div className="input">
            <input
                {...rest}
                value={duracao}
                onChange={(e) => {
                    setDuracao(DuracaoUtils.formatarTexto(e.target.value))
                    onChange(DuracaoUtils.desformatar(e.target.value))
                }}
            />
        </div>
    )
}
