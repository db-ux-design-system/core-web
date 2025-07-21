import {
	DBButton,
	DBCard,
	DBIcon,
	DBInfotext
} from '../../../../../output/react/src';
import DefaultPage from '../../../components/default-page';

const Example = () => {
	return (
		<DefaultPage>
			<h1>Variable Examples</h1>
			<blockquote>
				<ul>
					<li>
						Some of the variables are "misused" to visualize the
						effect of e.g. a padding.
					</li>
					<li>
						All orange containers should symbolize the used
						variable.
					</li>
					<li>
						Don't use it like this in a real app. 💢For example{' '}
						<code>width: var(--db-spacing-fixed-md)</code> 💥
					</li>
				</ul>
			</blockquote>

			{['Spacing fixed', 'Spacing responsive', 'Sizing'].map(
				(example) => (
					<>
						<h2>{example}</h2>
						<div className="example-container">
							{['functional', 'regular', 'expressive'].map(
								(density) => (
									<DBCard
										data-density={density}
										className="example-item"
										spacing="small">
										<DBInfotext
											icon="none"
											semantic="informational">
											{density.charAt(0).toUpperCase() +
												density.slice(1)}
										</DBInfotext>
										<div
											className={`example-${example.toLowerCase().replaceAll(' ', '-')}`}>
											{example === 'Spacing fixed' && (
												<div>
													<DBIcon icon="x_placeholder">
														User
													</DBIcon>
													<span>
														gap:db-spacing-fixed-xl
													</span>
													<DBIcon icon="pen">
														Edit
													</DBIcon>
													<div className="gap1">
														xl
													</div>
													<div className="gap2">
														xl
													</div>
												</div>
											)}
											{example ===
												'Spacing responsive' && (
												<div>
													<div className="margin1">
														sm
													</div>
													<span>
														margin-inline:db-spacing-responsive-sm
													</span>
													<div className="margin2">
														sm
													</div>
												</div>
											)}
											{example === 'Sizing' && (
												<div>
													<DBButton>
														height: sm
													</DBButton>
													<div className="sizing">
														sm
													</div>
												</div>
											)}
										</div>
									</DBCard>
								)
							)}
						</div>
					</>
				)
			)}
		</DefaultPage>
	);
};

export default Example;
