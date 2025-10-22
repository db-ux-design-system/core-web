import { useEffect, useState } from 'react';
import { DBInfotext, type SemanticType } from '../../../../output/react/src';

export type AccessibilityReviewInfoType = {
	name: string;
	status: 'DONE' | 'REVIEW' | 'PROGRESS' | string;
	date: string;
};

const AccessibilityReviewInfo = (
	accessibilityReview?: AccessibilityReviewInfoType
) => {
	const [semantic, setSemantic] = useState<SemanticType>('critical');
	const [text, setText] = useState<string>('Missing');

	useEffect(() => {
		if (accessibilityReview?.status === 'DONE') {
			setSemantic('successful');
			setText('Done');
		} else if (accessibilityReview?.status === 'REVIEW') {
			setSemantic('warning');
			setText('In review');
		} else if (accessibilityReview?.status === 'PROGRESS') {
			setSemantic('warning');
			setText('In progress');
		} else {
			setSemantic('critical');
			setText('Missing');
		}
	}, [accessibilityReview]);

	return <DBInfotext semantic={semantic}>{text}</DBInfotext>;
};

export default AccessibilityReviewInfo;
