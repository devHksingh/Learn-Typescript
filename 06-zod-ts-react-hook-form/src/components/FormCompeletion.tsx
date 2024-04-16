import { useState } from "react";
import { Progress } from "./ui/progress";


export function FormCompeletion(){
    const [task1,setTask1] = useState(false)
    const [task2,setTask2] = useState(false)
    const [task3,setTask3] = useState(false)
    return(
        <>
         <div className=" w-full mt-10 ">
            <div className="flex justify-between items-center">
            {
                task1? (
                    <> 
                    <div className="border border-green-500 bg-green-400 text-black p-1 rounded-3xl ease-in-out">1</div>
                    <span className=" h-4 w-[48rem]"><Progress value={100} /></span>
                    </>
                ):(
                    <>
                    <div className="border border-white p-1 rounded-3xl">1</div>
                    <span className=" h-4 w-[48rem]"><Progress value={0} /></span>
                    </>
                )
            }
            {
                task2? (
                    <>
                    <div className="border border-green-500 bg-green-400 text-black p-1 rounded-3xl">2</div>
                    <span className=" h-4 w-[48rem]"><Progress value={100} /></span>
                    </>
                ):(
                    <>
                    <div className="border border-white p-1 rounded-3xl">2</div>
                    <span className=" h-4 w-[48rem]"><Progress value={0} /></span>
                    </>
                )
            }
            {
                task3? (
                    
                    <div className="border border-green-500 bg-green-400 text-black p-1 rounded-3xl">3</div>
                ):(
                    <>
                    <div className="border border-white p-1 rounded-3xl">3</div>
                    
                    </>

                )
            }
            </div>
            
            {/* <div className="flex justify-center items-center">
                <div className="border border-green-500 bg-green-400 text-black p-1 rounded-3xl">1</div>
                
            <span className=" h-4 w-[48rem]"><Progress value={100} /></span>
            <div className="border border-white p-1 rounded-3xl">2</div>
            <span className=" h-4 w-[48rem]"><Progress value={0}/></span>
            <div className="border border-white p-1 rounded-3xl">3</div>
            </div> */}
            
            
         </div>

{/* <div>
        {task1 ? (
            <div className="border border-green-500 bg-green-400 text-black p-1 rounded-3xl">1</div>
        ) : (
            <div className="border border-white p-1 rounded-3xl">2</div>
        )}
    </div> */}
        </>
    )
}