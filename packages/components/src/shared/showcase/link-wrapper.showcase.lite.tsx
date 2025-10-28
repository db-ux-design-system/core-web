import { Slot } from '@builder.io/mitosis';
import DBDivider from '../../components/divider/divider.lite';
import DBLink from '../../components/link/link.lite';

interface Props {
	exampleName: string;
	componentPath: string;
	children?: any;
}

export default function LinkWrapperShowcase(props: Props) {
	function getHref(): string {
		const page = props.exampleName.replaceAll(' ', '-').toLowerCase();
		return `/react-showcase/#/${props.componentPath}?page=${page}`;
	}

	return (
		<div>
			<DBDivider></DBDivider>
			<DBLink
				content="external"
				class="link-headline"
				target="_blank"
				href={getHref()}>
				{props.exampleName}
			</DBLink>
			<Slot />
		</div>
	);
}
