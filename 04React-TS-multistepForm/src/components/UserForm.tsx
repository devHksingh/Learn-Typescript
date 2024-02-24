import { FormWrapper } from './FromWrapper'

type UserData = {
  firstName: string
  lastName: string
  age: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label className='text-lg text-orange-300 font-mono'>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        className='text-black rounded-lg p-1 pl-4 bg-zinc-400 font-medium '
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label className='text-lg text-orange-300 font-mono'>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        className='text-black rounded-lg p-1 pl-4 bg-zinc-400 font-medium '
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label className='text-lg text-orange-300 font-mono'>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        className='text-black rounded-lg p-1 pl-4 bg-zinc-400 font-medium '
        onChange={e => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  )
}