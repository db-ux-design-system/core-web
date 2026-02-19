import { DBInput } from '@components';
import {
	type ChangeEvent,
	type FC,
	type InputHTMLAttributes,
	useEffect,
	useState
} from 'react';

type Props = {
	label: string;
	placeholder: string;
	value: string | number;
	onChange: (value: string | number) => void;
	debounce?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export const DebouncedInput: FC<Props> = ({
	value: initialValue,
	onChange,
	debounce = 500,
	label,
	placeholder
}) => {
	const [value, setValue] = useState<number | string>(initialValue);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
		setValue(event.target.value);

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			onChange(value);
		}, debounce);

		return () => clearTimeout(timeout);
	}, [value]);

	return (
		<DBInput
			variant="floating"
			label={label}
			placeholder={placeholder}
			value={value}
			onChange={handleInputChange}
		/>
	);
};

export default DebouncedInput;
