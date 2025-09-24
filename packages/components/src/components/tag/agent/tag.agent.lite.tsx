import { DBButton } from '../../button';
import { DBCheckbox } from '../../checkbox';
import { DBLink } from '../../link';
import { DBRadio } from '../../radio';
import { DBTag } from '../index';

export default function Tag() {
	return (
		<>
			<h1>DBTag Documentation Examples</h1>

			<h2>1. Default Tags</h2>
			<DBTag>
				<DBButton>Tag as Button</DBButton>
			</DBTag>
			<DBTag>
				<DBLink>Tag as Link</DBLink>
			</DBTag>
			<DBTag>
				<DBCheckbox>Tag as Checkbox</DBCheckbox>
			</DBTag>
			<DBTag>
				<DBRadio>Tag as Radio</DBRadio>
			</DBTag>
			<DBTag>Static Tag</DBTag>

			<h2>2. Overflow Example</h2>
			<DBTag overflow={true}>
				<span>Static Tag with overflow</span>
			</DBTag>

			<h2>3. Removable Tag</h2>
			<DBTag
				behavior="removable"
				onRemove={() => console.log('Tag removed')}>
				Removable Tag
			</DBTag>

			<h2>4. Semantic Variants</h2>
			<DBTag semantic="adaptive">Adaptive Tag</DBTag>
			<DBTag semantic="neutral">Neutral Tag</DBTag>
			<DBTag semantic="critical">Critical Tag</DBTag>
			<DBTag semantic="informational">Informational Tag</DBTag>
			<DBTag semantic="warning">Warning Tag</DBTag>
			<DBTag semantic="successful">Successful Tag</DBTag>

			<h2>5. Icon Support</h2>
			<DBTag icon="user">Tag with Icon</DBTag>
		</>
	);
}
