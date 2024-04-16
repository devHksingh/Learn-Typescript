import { Club } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
// import { Separator } from "./ui/separator";


export function NavBar(){
    return (
        <div className="w-full flex justify-between items-center">
            <Button variant={'link'}>
                <Club className="mr-2 h-4 w-4"/>Club
            </Button>
            <h1 className="font-mono text-xl font-semibold text-orange-800">Form</h1>
            <ModeToggle />
        </div>
    )
}