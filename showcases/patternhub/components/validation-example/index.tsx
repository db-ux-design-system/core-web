import {
	DBButton,
	DBCard,
	DBInfotext,
	DBInput
} from '@db-ux/react-core-components/src';

const ValidationExample = () => {
	return (
		<>
			<h3>Example</h3>

			<div className="validity-container">
				<DBCard>
					<h4>No custom validation</h4>
					<DBInfotext semantic="informational">
						<span>
							default browser behavior with auto changing colors
						</span>
					</DBInfotext>
					<form>
						<DBInput
							label="Required"
							placeholder="Required"
							invalidMessage="This is required"
							validMessage="Success"
							required
						/>
						<DBButton>Send</DBButton>
					</form>
				</DBCard>

				<DBCard>
					<h4>With custom validation (valid)</h4>
					<DBInfotext semantic="informational">
						<span>
							fixed validation, no auto changing of colors and bad
							UX
						</span>
					</DBInfotext>
					<form>
						<DBInput
							label="Required"
							placeholder="Required"
							invalidMessage="This is required"
							validMessage="Success"
							required
							validation="valid"
						/>
						<DBButton>Send</DBButton>
					</form>
				</DBCard>
			</div>
		</>
	);
};

export default ValidationExample;
