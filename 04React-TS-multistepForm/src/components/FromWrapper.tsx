import { ReactNode } from "react"


type FormWrapperProps ={
    title:string
    children:ReactNode
}


export function FormWrapper({ title, children }: FormWrapperProps){
    return (
        <>
        <h2 className="text-center mb-4 text-2xl font-semibold text-pretty text-zinc-600">
            {title}
        </h2>
        <div 
            className="flex flex-col gap-3 "
        >
            {children}
        </div>
    </>
    )
}