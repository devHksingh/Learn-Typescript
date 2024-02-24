
type AccountData ={
    email:string,
    password:string
}

type AccountFormProps = AccountData &{
    updateFields:(fields:Partial<AccountData>)
}


export function AccountForm({
    email,
    password,
    updateFields,
}:AccountFormProps){
    
}