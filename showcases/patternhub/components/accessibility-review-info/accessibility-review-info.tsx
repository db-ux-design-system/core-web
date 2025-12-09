import { DBInfotext, type SemanticType } from '@components';
import { useEffect, useState } from 'react';

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
		if (accessibilityReview) {
			switch (accessibilityReview?.status) {
				case 'DONE': {
					setSemantic('successful');
					setText('Done');
					break;
				}

				case 'REVIEW': {
					setSemantic('warning');
					setText('In review');
					break;
				}

				case 'PROGRESS': {
					setSemantic('warning');
					setText('In progress');
					break;
				}

				default: {
					setSemantic('critical');
					setText('Missing');
					break;
				}
			}
		}
	}, [accessibilityReview]);

	return <DBInfotext semantic={semantic}>{text}</DBInfotext>;
};

export default AccessibilityReviewInfo;
