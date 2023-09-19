import { useEffect, useState } from 'react';
import {
	DBAlert,
	DBBrand,
	DBButton,
	DBCard,
	DBCheckbox,
	DBDivider,
	DBHeader,
	DBIcon,
	DBInfotext,
	DBInput,
	DBLink,
	DBBadge,
	DBMainNavigation,
	DBNavigationItem,
	DBRadio,
	DBSection,
	DBSelect,
	DBTag,
	DBAccordion,
	DBAccordionItem,
	DBTextarea
} from '../src';
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
			const host = url.host;
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

	if (type === 'alert') {
		return (
			<DBAlert className={className} {...props}>
				{resolvedContent}
			</DBAlert>
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

	if (type === 'main-navigation') {
		return (
			<DBMainNavigation className={className} {...props}>
				{resolvedContent}
			</DBMainNavigation>
		);
	}

	if (type === 'badge') {
		return (
			<DBBadge className={className} {...props}>
				{resolvedContent}
			</DBBadge>
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

	return <DBInfotext variant="critical">Wrong format</DBInfotext>;
};

export default ComponentParser;
