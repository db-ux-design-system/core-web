import {
	DBCard,
	DBInput,
	DBButton,
	DBInfotext
} from '../../../../output/react/src';

const ValidationExample = () => {
	return (
		<>
			<h3>Example</h3>

			<div className="validity-container">
				<DBCard>
					<h4>No customValidity</h4>
					<DBInfotext semantic="informational">
						<span>
							default browser behaviour with auto changing colors
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
					<h4>With customValidity (valid)</h4>
					<DBInfotext semantic="informational">
						<span>
							fixed customValidity, no auto changing of colors and
							bad UX
						</span>
					</DBInfotext>
					<form>
						<DBInput
							label="Required"
							placeholder="Required"
							invalidMessage="This is required"
							validMessage="Success"
							required
							customValidity="valid"
						/>
						<DBButton>Send</DBButton>
					</form>
				</DBCard>
			</div>
		</>
	);
};

export default ValidationExample;
