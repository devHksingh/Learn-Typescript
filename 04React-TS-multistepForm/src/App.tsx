import { FormEvent, useState } from 'react'
import './App.css'
import { useMultistepForm } from './hook/useMultistepForm'
import { AccountForm, AddressFrom, UserForm } from './components'

type FormData = {
  firstName:string,
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA:FormData={
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function App() {

  const [data,setData] = useState(INITIAL_DATA)
  function updateFields(fields:Partial<FormData>){
    setData(prev=>{
      return {...prev,...fields}
    })
  }

  const {steps,currentStepIndex,step,isFirstStep,isLastStep,back,next} = useMultistepForm([
    <UserForm {...data} updateFields={updateFields}/>,
    <AddressFrom {...data} updateFields={updateFields}/>,
    <AccountForm {...data} updateFields={updateFields}/>,
  ])

  function onSubmit(e:FormEvent){
    e.preventDefault()
    if(!isLastStep) return next()
    alert("Successful Account Creation")
  }
  

  return (
    <>
      <div className='h-screen bg-gradient-to-t from-slate-950 flex justify-center items-center'>
        <div className='mx-auto border border-spacing-8 border-solid border-black bg-gradient-to-t from-slate-950 rounded-lg p-4 shadow-lg w-2/3'>

          <form  onSubmit={onSubmit} >
            <div>
              {currentStepIndex +1}/{steps.length}
            </div>
            {step}
            <div>
              {!isFirstStep && (
              <button type="button" onClick={back} className='mt-4 border rounded-md px-4 m-2 mr-4 font-mono text-sky-500'>
                Back
              </button>
            )}
            <button type="submit"
            className='mt-4 border rounded-md px-4 m-2 mr-4 font-mono text-lime-500'
            >{isLastStep ? "Finish" : "Next"}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
