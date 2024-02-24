import { ReactElement ,useState} from "react";


export function useMultistepForm(steps:ReactElement[]){

    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next(){
        setCurrentStepIndex(i=>{
            if(i>=steps.length -1) return i
            return i+1
        })
    }

    function back(){
        setCurrentStepIndex(i => {
            if(i<=0) return i
            return i-1
        })
    }

    function goTO(index:number){
        setCurrentStepIndex(index)
    }

    return {
        steps,
        currentStepIndex,
        step:steps[currentStepIndex],
        next,
        back,
        goTO,
        isFirstStep:currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length -1,

    }
}