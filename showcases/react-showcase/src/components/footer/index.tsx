import { DBFooter } from '../../../../../output/react/src';
import defaultComponentVariants from '../../../../shared/footer.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getFooter = ({
	children,
	showCopyright,
	showMain,
	showMeta,
	width
}: any) => (
	<DBFooter
		showCopyright={showCopyright ?? true}
		showMain={showMain ?? true}
		showMeta={showMeta ?? true}
		width={width}
		main={<span>{children}</span>}
	/>
);

const FooterComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBFooter"
			variants={getVariants(
				defaultComponentVariants,
				getFooter,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default FooterComponent;
