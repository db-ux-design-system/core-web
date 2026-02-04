import { DBLoadingIndicator } from '../../../../output/react/src/index';

import { useEffect, useState } from 'react';
import {
	DBAccordion,
	DBAccordionItem,
	DBBadge,
	DBBrand,
	DBButton,
	DBCard,
	DBCheckbox,
	DBCustomSelect,
	DBDivider,
	DBHeader,
	DBIcon,
	DBInfotext,
	DBInput,
	DBLink,
	DBNavigation,
	DBNavigationItem,
	DBNotification,
	DBPopover,
	DBRadio,
	DBSection,
	DBSelect,
	DBStack,
	DBSwitch,
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs,
	DBTag,
	DBTextarea,
	DBTooltip
} from '../../../../output/react/src/index';
import type { ComponentParserType, ComponentType } from './data';

const validHosts = new Set(['marketingportal.extranet.deutschebahn.com']);

const ComponentSwitch = ({
	type,
	content,
	index,
	props,
	className
}: ComponentType) => {
	const resolvedContent = Array.isArray(content)
		? content.map((innerComponent: ComponentType, innerIndex: number) => (
				<ComponentSwitch
					key={`innerComponent-${index}-${innerIndex}`}
					index={`${index}-${innerIndex}`}
					type={innerComponent.type}
					content={innerComponent.content}
					props={innerComponent.props}
					className={innerComponent.className}
				/>
			))
		: content;

	if (type === 'h1') {
		return <h1 className={className}>{resolvedContent}</h1>;
	}

	if (type === 'h2') {
		return <h2 className={className}>{resolvedContent}</h2>;
	}

	if (type === 'h3') {
		return <h3 className={className}>{resolvedContent}</h3>;
	}

	if (type === 'h4') {
		return <h4 className={className}>{resolvedContent}</h4>;
	}

	if (type === 'p') {
		return <p className={className}>{resolvedContent}</p>;
	}

	if (type === 'div') {
		return <div className={className}>{resolvedContent}</div>;
	}

	if (type === 'flex') {
		return (
			<div
				className={`flex ${className ?? ''}`}
				data-variant={props?.column ? 'column' : 'row'}>
				{resolvedContent}
			</div>
		);
	}

	if (type === 'a') {
		try {
			const url = new URL('', props.href);
			const { host } = url;
			if (validHosts.has(host)) {
				return (
					<a
						className={className}
						href={props.href}
						target={props.target}>
						{resolvedContent}
					</a>
				);
			}
		} catch (error: unknown) {
			console.error(error);
		}
	}

	if (type === 'notification') {
		return (
			<DBNotification className={className} {...props}>
				{resolvedContent}
			</DBNotification>
		);
	}

	if (type === 'brand') {
		return (
			<DBBrand className={className} {...props}>
				{resolvedContent}
			</DBBrand>
		);
	}

	if (type === 'button') {
		return (
			<DBButton className={className} {...props}>
				{resolvedContent}
			</DBButton>
		);
	}

	if (type === 'card') {
		return (
			<DBCard className={className} {...props}>
				{resolvedContent}
			</DBCard>
		);
	}

	if (type === 'divider') {
		return (
			<DBDivider className={className} {...props}>
				{resolvedContent}
			</DBDivider>
		);
	}

	if (type === 'header') {
		return (
			<DBHeader className={className} {...props}>
				{resolvedContent}
			</DBHeader>
		);
	}

	if (type === 'icon') {
		return (
			<DBIcon className={className} {...props}>
				{resolvedContent}
			</DBIcon>
		);
	}

	if (type === 'infotext') {
		return (
			<DBInfotext className={className} {...props}>
				{resolvedContent}
			</DBInfotext>
		);
	}

	if (type === 'input') {
		return (
			<DBInput className={className} {...props}>
				{resolvedContent}
			</DBInput>
		);
	}

	if (type === 'checkbox') {
		return (
			<DBCheckbox className={className} {...props}>
				{resolvedContent}
			</DBCheckbox>
		);
	}

	if (type === 'radio') {
		return (
			<DBRadio className={className} {...props}>
				{resolvedContent}
			</DBRadio>
		);
	}

	if (type === 'link') {
		return (
			<DBLink className={className} {...props}>
				{resolvedContent}
			</DBLink>
		);
	}

	if (type === 'section') {
		return (
			<DBSection className={className} {...props}>
				{resolvedContent}
			</DBSection>
		);
	}

	if (type === 'textarea') {
		return (
			<DBTextarea className={className} {...props}>
				{resolvedContent}
			</DBTextarea>
		);
	}

	if (type === 'select') {
		return (
			<DBSelect className={className} {...props}>
				{resolvedContent}
			</DBSelect>
		);
	}

	if (type === 'tag') {
		return (
			<DBTag className={className} {...props}>
				{resolvedContent}
			</DBTag>
		);
	}

	if (type === 'navigation-item') {
		return (
			<DBNavigationItem className={className} {...props}>
				{resolvedContent}
			</DBNavigationItem>
		);
	}

	if (type === 'accordion') {
		return (
			<DBAccordion className={className} {...props}>
				{resolvedContent}
			</DBAccordion>
		);
	}

	if (type === 'accordion-item') {
		return (
			<DBAccordionItem className={className} {...props}>
				{resolvedContent}
			</DBAccordionItem>
		);
	}

	if (type === 'navigation') {
		return (
			<DBNavigation className={className} {...props}>
				{resolvedContent}
			</DBNavigation>
		);
	}

	if (type === 'badge') {
		return (
			<DBBadge className={className} {...props}>
				{resolvedContent}
			</DBBadge>
		);
	}

	if (type === 'popover') {
		return (
			<DBPopover className={className} {...props}>
				{resolvedContent}
			</DBPopover>
		);
	}

	if (type === 'tooltip') {
		return (
			<DBTooltip className={className} {...props}>
				{resolvedContent}
			</DBTooltip>
		);
	}

	if (type === 'tab-item') {
		return (
			<DBTabItem className={className} {...props}>
				{resolvedContent}
			</DBTabItem>
		);
	}

	if (type === 'tab-list') {
		return (
			<DBTabList className={className} {...props}>
				{resolvedContent}
			</DBTabList>
		);
	}

	if (type === 'tabs') {
		return (
			<DBTabs className={className} {...props}>
				{resolvedContent}
			</DBTabs>
		);
	}

	if (type === 'tab-panel') {
		return (
			<DBTabPanel className={className} {...props}>
				{resolvedContent}
			</DBTabPanel>
		);
	}

	if (type === 'switch') {
		return (
			<DBSwitch className={className} {...props}>
				{resolvedContent}
			</DBSwitch>
		);
	}

	if (type === 'stack') {
		return (
			<DBStack className={className} {...props}>
				{resolvedContent}
			</DBStack>
		);
	}

	if (type === 'custom-select') {
		return (
			<DBCustomSelect className={className} {...props}>
				{resolvedContent}
			</DBCustomSelect>
		);
	}

	if (type === 'loading-indicator') {
		return (
			<DBLoadingIndicator className={className} {...props}>
				{resolvedContent}
			</DBLoadingIndicator>
		);
	}

	// Template hygen before

	return <span className={className}>{resolvedContent}</span>;
};

const ComponentParser = ({ componentsString }: ComponentParserType) => {
	const [components, setComponents] = useState<ComponentType[] | unknown>();

	useEffect(() => {
		try {
			setComponents(JSON.parse(componentsString));
		} catch (error: unknown) {
			console.error(error);
		}
	}, [componentsString]);

	if (components && Array.isArray(components)) {
		return (
			<>
				{components.map((component: ComponentType, index: number) => {
					return (
						<ComponentSwitch
							key={`component-${index}`}
							index={index}
							type={component.type}
							content={component.content}
							props={component.props}
						/>
					);
				})}
			</>
		);
	}

	return <DBInfotext semantic="critical">Wrong format</DBInfotext>;
};

export default ComponentParser;
