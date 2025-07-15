import Link from 'next/link';
import { ArcherContainer, ArcherElement } from 'react-archer';
import { DBCard, DBLink, DBSection } from '../../../../../output/react/src';
import DefaultPage from '../../../components/default-page';

const ColorUsageGuide = () => {
	return (
		<DefaultPage>
			<h1>How to apply colors</h1>
			<p>
				This decision tree can help you to find out which method is the
				most suitable and easiest to color layouts, elements or
				components in your project.
			</p>
			<DBSection>
				<ArcherContainer
					strokeColor="var(--db-adaptive-on-bg-basic-emphasis-60-default)"
					endMarker={true}
					endShape={{ arrow: { arrowLength: 5, arrowThickness: 5 } }}>
					<div className="decision-tree" data-density="functional">
						<div className="decision-tree-row grid-1-1-1">
							<span></span>
							<ArcherElement
								id="start"
								relations={[
									{
										targetId: 'dst-layout',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									},
									{
										targetId: 'advanced-coloring',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									}
								]}>
								<DBCard elevationLevel="2">
									<div className="card-inner">
										<p>
											<strong>
												What would you like to color?
											</strong>
										</p>
									</div>
								</DBCard>
							</ArcherElement>
							<span></span>
						</div>
						<div className="decision-tree-row grid-1-1-1">
							<ArcherElement
								id="dst-layout"
								relations={[
									{
										targetId: 'semantic-color',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									},
									{
										targetId: 'background-text-color',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									}
								]}>
								<DBCard
									className="column-1-3"
									elevationLevel="2">
									<div className="card-inner">
										<p>
											<strong>
												Coloring using the DST layout
											</strong>
										</p>
									</div>
								</DBCard>
							</ArcherElement>
							<ArcherElement
								id="advanced-coloring"
								relations={[
									{
										targetId: 'custom-components',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									}
								]}>
								<DBCard elevationLevel="2">
									<div className="card-inner">
										<p>
											<strong>
												Advanced and detailed coloring
											</strong>
										</p>
									</div>
								</DBCard>
							</ArcherElement>
						</div>
						<div className="decision-tree-row grid-1-1-1">
							<ArcherElement
								id="semantic-color"
								relations={[
									{
										targetId: 'semantic-color-explanation',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									}
								]}>
								<DBCard
									className="db-color-blue"
									elevationLevel="3">
									<div className="card-inner">
										<p>
											Change semantic / contextual
											container color
										</p>
									</div>
								</DBCard>
							</ArcherElement>
							<ArcherElement
								id="background-text-color"
								relations={[
									{
										targetId: 'background-icon-text-color',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									}
								]}>
								<DBCard
									className="db-color-violet"
									elevationLevel="3">
									<div className="card-inner">
										<p>Backgrounds or texts and icons</p>
									</div>
								</DBCard>
							</ArcherElement>
							<ArcherElement
								id="custom-components"
								relations={[
									{
										targetId:
											'custom-components-explanation',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									}
								]}>
								<DBCard
									className="db-color-yellow"
									elevationLevel="3">
									<div className="card-inner">
										<p>Parts of custom components</p>
									</div>
								</DBCard>
							</ArcherElement>
						</div>
						<div className="decision-tree-row grid-1-1-1">
							<ArcherElement
								id="semantic-color-explanation"
								relations={[
									{
										targetId: 'semantic-color-link',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									}
								]}>
								<DBCard className="db-color-blue">
									<div className="card-inner">
										<span className="db-font-size-sm">
											This will change the whole semantic
											/ contextual color set used by
											backgrounds, texts, icons and DST
											Components (using adaptive colors)
											within a container.
										</span>
									</div>
								</DBCard>
							</ArcherElement>
							<ArcherElement
								id="background-icon-text-color"
								relations={[
									{
										targetId: 'background-color',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									},
									{
										targetId: 'text-icon-color',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									}
								]}>
								<DBCard className="db-color-violet">
									<div className="card-inner db-font-size-sm">
										<p>
											Change <strong>background</strong>{' '}
											or <strong>text and icon</strong>{' '}
											color gradation within a container
											or for an certain element.
										</p>
										<p>
											{' '}
											Only colors that are permitted for
											the corresponding purposes can be
											selected here.
										</p>
									</div>
								</DBCard>
							</ArcherElement>
							<ArcherElement
								id="custom-components-explanation"
								relations={[
									{
										targetId: 'adaptive-color',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									},
									{
										targetId: 'explicit-color',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									}
								]}>
								<DBCard className="db-color-yellow">
									<div className="card-inner db-font-size-sm">
										<p>
											Parts of custom components (texts,
											backgrounds, borders, interactive
											states, etc.) are colored in the css
											/ scss with variables.
										</p>
									</div>
								</DBCard>
							</ArcherElement>
						</div>
						<div className="decision-tree-row grid-1-1-1">
							<div></div>
							<div className="decision-tree-row grid-1-1">
								<ArcherElement
									id="background-color"
									relations={[
										{
											targetId: 'background-color-link',
											sourceAnchor: 'bottom',
											targetAnchor: 'top'
										}
									]}>
									<DBCard className="db-color-violet">
										<div className="card-inner db-font-size-sm">
											<p>
												<strong>
													Background color
												</strong>
											</p>
											<p>
												Changes the elevation or
												transparency of a container.
											</p>
										</div>
									</DBCard>
								</ArcherElement>
								<ArcherElement
									id="text-icon-color"
									relations={[
										{
											targetId: 'text-icon-color-link',
											sourceAnchor: 'bottom',
											targetAnchor: 'top'
										}
									]}>
									<DBCard className="db-color-violet">
										<div className="card-inner">
											<p className="db-font-size-sm">
												<strong>
													Text and icon color
												</strong>
											</p>
										</div>
									</DBCard>
								</ArcherElement>
							</div>

							<div className="decision-tree-row grid-1-1">
								<ArcherElement
									id="adaptive-color"
									relations={[
										{
											targetId: 'adaptive-color-link',
											sourceAnchor: 'bottom',
											targetAnchor: 'top'
										}
									]}>
									<DBCard className="db-color-yellow">
										<div className="card-inner db-font-size-sm">
											<p>
												<strong>
													Default: Adaptive colors
												</strong>
											</p>
											<p>
												Adaptive to surrounding semantic
												container color and dark mode
											</p>
										</div>
									</DBCard>
								</ArcherElement>
								<ArcherElement
									id="explicit-color"
									relations={[
										{
											targetId: 'explicit-color-link',
											sourceAnchor: 'bottom',
											targetAnchor: 'top'
										}
									]}>
									<DBCard className="db-color-yellow">
										<div className="card-inner db-font-size-sm">
											<p>
												<strong>
													Optional: Explicit colors
												</strong>
											</p>
											<p>Still adaptive to dark mode</p>
										</div>
									</DBCard>
								</ArcherElement>
							</div>
						</div>
						<div className="decision-tree-row grid-1-1-1">
							<ArcherElement id="semantic-color-link">
								<Link href="./color-schemes#color-schemes">
									<DBCard
										className="db-color-blue"
										role="button"
										elevationLevel="3"
										behavior="interactive">
										<div className="card-inner">
											<DBLink>
												Use container color class
											</DBLink>
										</div>
									</DBCard>
								</Link>
							</ArcherElement>

							<div className="decision-tree-row grid-1-1">
								<ArcherElement id="background-color-link">
									<Link href="./color-schemes#background-color-modifier-classes">
										<DBCard
											className="db-color-violet"
											role="button"
											elevationLevel="3"
											behavior="interactive">
											<div className="card-inner">
												<DBLink>
													Use background color
													modifier classes
												</DBLink>
											</div>
										</DBCard>
									</Link>
								</ArcherElement>
								<ArcherElement id="text-icon-color-link">
									<Link href="./color-schemes#on-background-color-modifier-classes">
										<DBCard
											className="db-color-violet"
											role="button"
											elevationLevel="3"
											behavior="interactive">
											<div className="card-inner">
												<DBLink>
													Use on-background color
													modifier classes
												</DBLink>
											</div>
										</DBCard>
									</Link>
								</ArcherElement>
							</div>

							<div className="decision-tree-row grid-1-1">
								<ArcherElement id="adaptive-color-link">
									<DBCard
										className="db-color-yellow"
										role="button"
										elevationLevel="3">
										<div className="card-inner">
											Use adaptive color variables (link
											will follow)
										</div>
									</DBCard>
								</ArcherElement>
								<ArcherElement id="explicit-color-link">
									<DBCard
										className="db-color-yellow"
										role="button"
										elevationLevel="3">
										<div className="card-inner">
											Use explicit color variables (link
											will follow)
										</div>
									</DBCard>
								</ArcherElement>
							</div>
						</div>
					</div>
				</ArcherContainer>
			</DBSection>
		</DefaultPage>
	);
};

export default ColorUsageGuide;
