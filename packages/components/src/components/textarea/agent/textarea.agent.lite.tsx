import { DBTextarea } from '../index';

export default function Textarea() {
	return (
		<>
			<h1>DBTextarea Documentation Examples</h1>

			<h2>1. Default Textarea</h2>
			<DBTextarea label="Default Textarea" />

			<h2>2. Resizable Variants</h2>
			<DBTextarea resize="none" label="No Resize" />
			<DBTextarea resize="both" label="Resize Both" />
			<DBTextarea resize="horizontal" label="Resize Horizontal" />
			<DBTextarea resize="vertical" label="Resize Vertical" />

			<h2>3. Rows and Columns</h2>
			<DBTextarea rows={5} cols={30} label="Custom Rows and Columns" />

			<h2>4. Wrap Variants</h2>
			<DBTextarea wrap="hard" label="Hard Wrap" />
			<DBTextarea wrap="soft" label="Soft Wrap" />
			<DBTextarea wrap="off" label="No Wrap" />

			<h2>5. Disabled State</h2>
			<DBTextarea disabled label="Disabled Textarea" />

			<h2>6. Placeholder Examples</h2>
			<DBTextarea
				placeholder="Enter text here"
				label="With Placeholder"
			/>

			<h2>7. Message Property Example</h2>
			<DBTextarea
				label="Textarea with Message"
				message="This is a helper message."
			/>

			<h2>8. Input Event Example</h2>
			<DBTextarea
				label="Input Event"
				onInput={(event: any) =>
					console.log('Input event:', event.target.value)
				}
			/>
		</>
	);
}
