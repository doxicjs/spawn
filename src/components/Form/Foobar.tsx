import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const FormSchema = z.object({
  foo: z.literal('bar')
})

type TFormSchema = z.infer<typeof FormSchema>

export default function FoobarForm() {
  const {
    register,
    formState: { isDirty, isSubmitSuccessful },
    handleSubmit
  } = useForm<TFormSchema>({
    resolver: zodResolver(FormSchema)
  })
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
      className="flex w-full max-w-xs flex-col gap-2"
    >
      <input
        {...register('foo')}
        placeholder="bar"
        disabled={isSubmitSuccessful}
      />
      <button type="submit" disabled={!isDirty || isSubmitSuccessful}>
        {isSubmitSuccessful ? 'Success' : 'Submit'}
      </button>
    </form>
  )
}
