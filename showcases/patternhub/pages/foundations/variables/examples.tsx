import DefaultPage from '../../../components/default-page';
import { DBInfotext } from '../../../components/src/components/infotext';
import { DBCard } from '../../../components/src/components/card';
import { DBIcon } from '../../../components/src/components/icon';
import { DBButton } from '../../../components/src/components/button';

const Example = () => {
	return (
		<DefaultPage>
			<h1>Variable Examples</h1>
			<blockquote>
				<ul>
					<li>
						Some of the variables are "missused" to visualize the
						effect of e.g. a padding.
					</li>
					<li>
						All orange containers should symbolize the used
						variable.
					</li>
					<li>
						Don't use it like this in a real app. 💢For example
						`width: var(--db-spacing-fixed-md)`💥
					</li>
				</ul>
			</blockquote>

			{['Spacing fixed', 'Spacing responsive', 'Sizing'].map(
				(example) => (
					<>
						<h2>{example}</h2>
						<div className="example-container">
							{['functional', 'regular', 'expressive'].map(
								(tonality) => (
									<DBCard
										className={`example-item db-ui-${tonality}`}
										spacing="small">
										<DBInfotext
											icon="none"
											variant="informational">
											{tonality}
										</DBInfotext>
										<div
											className={`example-${example
												.toLowerCase()
												.replace(/ /g, '-')}`}>
											{example === 'Spacing fixed' && (
												<div>
													<DBIcon icon="account">
														Account
													</DBIcon>
													<span>
														gap:db-spacing-fixed-xl
													</span>
													<DBIcon icon="edit">
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
