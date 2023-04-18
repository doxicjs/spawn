import { Button } from "lib";
import { useExampleStore } from "shared/stores/example";
import { useForm } from "react-hook-form";
import TextField from "lib/TextField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
	foo: z.literal("bar"),
});

type TFormSchema = z.infer<typeof FormSchema>;

export default function Home() {
	const { count, increment, decrement } = useExampleStore();
	const {
		register,
		formState: { errors, isDirty, isSubmitSuccessful },
		handleSubmit,
	} = useForm<TFormSchema>({
		resolver: zodResolver(FormSchema),
	});

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center gap-4">
			<h1 className="text-4xl font-medium">Doxic Spawn</h1>
			<span className="text-4xl font-medium">{count}</span>
			<div className="w-full max-w-max flex gap-2">
				<Button color="primary" size="sm" onClick={increment}>
					Increment
				</Button>
				<Button color="neutral" size="sm" onClick={decrement}>
					Decrement
				</Button>
			</div>
			<form
				onSubmit={handleSubmit((data) => {
					console.log(data);
				})}
				className="flex flex-col gap-2 w-full max-w-xs"
			>
				<TextField
					label="Foo"
					error={errors.foo?.message}
					helper="Must submit bar"
					inputProps={{
						...register("foo"),
						placeholder: "bar",
						disabled: isSubmitSuccessful,
					}}
				/>
				<Button
					type="submit"
					disabled={!isDirty || isSubmitSuccessful}
					variant={isSubmitSuccessful ? "outline" : "fill"}
					fullwidth
				>
					{isSubmitSuccessful ? "Success" : "Submit"}
				</Button>
			</form>
		</div>
	);
}
