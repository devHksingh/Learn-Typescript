import { ReactNode } from "react"


type FromWrapperProps ={
    title:string,
    children:ReactNode
}


export function FormWrapper({title,children}:FromWrapperProps){
    <>
        <h2 className="text-center mb-4">
            {title}
        </h2>
        <div 
            className="flex flex-col"
        >
            {children}
        </div>
    </>
}