"use client"

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    return (
        <div style={{
            padding: '10rem'
        }}>
            <h1>:(</h1>
            <p>Ha ocurrido un error.</p>
            <button onClick={reset}>Intenter de Nuevo</button>
        </div>
    )
}