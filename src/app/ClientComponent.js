"use client"

const ClientComponent = () => {
    return (
        <div>
            <p>{process.env.NEXT_PUBLIC_APPLICATION_HOST}</p>
        </div>
    )
}

export default ClientComponent
