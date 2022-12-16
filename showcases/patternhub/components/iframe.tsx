export type IFrameType = {
	src: string;
};

const IFrame = ({ src }: IFrameType) => {
	return <iframe src={src} />;
};

export default IFrame;
