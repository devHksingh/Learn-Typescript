import { FormWrapper } from "./FromWrapper";

type AddressData ={
    street:string,
    city:string,
    state:string,
    zip:string
}

type AddressFromProps = AddressData &{
    updateFields: (fields:Partial<AddressData>) => void
}

export function AddressFrom({
    street,
    city,
    state,
    zip,
    updateFields
}:AddressFromProps){
    return (
        <FormWrapper title="Address Form" >

            <label className='text-lg text-orange-300 font-mono'>Street</label>
            <input 
            autoFocus
            required        
            type="text"
            value={street}
            className='text-black rounded-lg p-1 pl-4 bg-zinc-400 font-medium '
            onChange={e=> updateFields({street:e.target.value})}

             />
            <label  className='text-lg text-orange-300 font-mono'>City</label>
            <input 
            required
            type="text"
            value={city} 
            className='text-black rounded-lg p-1 pl-4 bg-zinc-400 font-medium '
            onChange={e=> updateFields({city:e.target.value})}
             />
            <label className='text-lg text-orange-300 font-mono' >State</label>
            <input 
            required
            type="text"
            value={state}
            className='text-black rounded-lg p-1 pl-4 bg-zinc-400 font-medium ' 
            onChange={e=> updateFields({state:e.target.value})}
             />
            <label className='text-lg text-orange-300 font-mono'>Zip</label>
            <input 
            required
            type="text"
            value={zip}
            className='text-black rounded-lg p-1 pl-4 bg-zinc-400 font-medium '
            onChange={e=> updateFields({zip:e.target.value})}
             />

        </FormWrapper>
    )
}