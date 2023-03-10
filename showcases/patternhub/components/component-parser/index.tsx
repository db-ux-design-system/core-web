import { useEffect, useState } from 'react';
import DBInfotext from '../src/components/infotext/infotext';
import DBButton from '../src/components/button/button';
import DBIcon from '../src/components/icon/icon';
import { ComponentParserType, ComponentType } from './data';

const validHosts = ['marketingportal.extranet.deutschebahn.com'];

const ComponentSwitch = ({
	type,
	content,
	index,
	props,
	className
}: ComponentType) => {
	const resolvedContent =
		content instanceof Array
			? content.map(
					(innerComponent: ComponentType, innerIndex: number) => (
						<ComponentSwitch
							key={`innerComponent-${index}-${innerIndex}`}
							index={`${index}-${innerIndex}`}
							type={innerComponent.type}
							content={innerComponent.content}
							props={innerComponent.props}
							className={innerComponent.className}
						/>
					)
			  )
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
	if (type === 'flex') {
		return (
			<div
				className={`flex ${className ? className : ''}`}
				data-variant={props?.column ? 'column' : 'row'}>
				{resolvedContent}
			</div>
		);
	}
	if (type === 'a') {
		try {
			const url = new URL('', props.href);
			const host = url.host;
			if (validHosts.includes(host)) {
				return (
					<a
						className={className}
						href={props.href}
						target={props.target}>
						{resolvedContent}
					</a>
				);
			}
		} catch (e) {
			console.error(e);
		}
	}
	if (type === 'button') {
		return (
			<DBButton className={className} {...props}>
				{resolvedContent}
			</DBButton>
		);
	}
	if (type === 'icon') {
		return (
			<DBIcon className={className} {...props}>
				{resolvedContent}
			</DBIcon>
		);
	}
	// TODO: Add tag here

	return <span className={className}>{resolvedContent}</span>;
};

const ComponentParser = ({ componentsString }: ComponentParserType) => {
	const [components, setComponents] = useState<ComponentType[] | unknown>();

	useEffect(() => {
		try {
			setComponents(JSON.parse(componentsString));
		} catch (e) {
			console.error(e);
		}
	}, [componentsString]);

	if (components && components instanceof Array) {
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
