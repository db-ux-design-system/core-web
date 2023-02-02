import { useState } from 'react';
import { DBButton } from '../../../../../output/react/src';
import './index.scss';

const ButtonComponent = () => {
	const [variant, setVariant] = useState<
		'primary' | 'secondary' | 'tertiary' | 'ghost'
	>('primary');
	return (
		<div>
			<h1>Button</h1>
			<div className="button-container">
				<select
					value={variant}
					onChange={(event) => {
						setVariant(event?.target?.value as any);
					}}>
					<option value="primary">primary</option>
					<option value="secondary">secondary</option>
					<option value="ghost">ghost</option>
					<option value="tertiary">tertiary</option>
				</select>

				<DBButton variant={variant}>{variant}</DBButton>
				<DBButton variant={variant} disabled>
					{variant}
				</DBButton>
				<DBButton variant={variant} icon="account">
					{variant}
				</DBButton>
				<DBButton variant={variant} icon="account" disabled>
					{variant}
				</DBButton>
				<DBButton variant={variant} icon="account" icntxt>
					{variant}
				</DBButton>
				<DBButton variant={variant} icon="account" disabled icntxt>
					{variant}
				</DBButton>
				<DBButton variant={variant} state="loading">
					{variant}
				</DBButton>
			</div>
		</div>
	);
};

export default ButtonComponent;
