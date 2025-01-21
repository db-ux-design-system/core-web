// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

export type IFrameType = {
	src: string;
};

const IFrame = ({ src }: IFrameType) => {
	return (
		<iframe
			src={
				process.env.NEXT_PUBLIC_BASE_PATH
					? `${process.env.NEXT_PUBLIC_BASE_PATH}${src}`
					: src
			}
		/>
	);
};

export default IFrame;
