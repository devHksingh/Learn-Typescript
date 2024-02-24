import { FormWrapper } from './FromWrapper'

type AccountData = {
  email: string
  password: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label className='text-lg text-orange-300 font-mono'>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        className='text-black rounded-lg p-1 pl-4 bg-zinc-400 font-medium '
        onChange={e => updateFields({ email: e.target.value })}
      />
      <label className='text-lg text-orange-300 font-mono'>Password</label>
      <input
        required
        type="password"
        value={password}
        className='text-black rounded-lg p-1 pl-4 bg-zinc-400 font-medium '
        onChange={e => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  )
}