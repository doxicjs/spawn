import { useExampleStore } from '@/shared/stores/example'
import FoobarForm from '@/components/Form/Foobar'
import { Button } from '@/components/ui/button'

export default function Home() {
  const { count, increment, decrement } = useExampleStore()

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-medium">Doxic Spawn</h1>
      <span className="text-4xl font-medium">{count}</span>
      <div className="flex w-full max-w-max gap-2">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <FoobarForm />
    </div>
  )
}
