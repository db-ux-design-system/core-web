import { Slot } from '@builder.io/mitosis';

interface Props {
	title: string;
	children?: any;
}

export default function ContainerWrapperShowcase(props: Props) {
	return (
		<div className="default-container">
			<div className="component-header">
				<h1>{props.title}</h1>
			</div>
			<Slot />
		</div>
	);
}
