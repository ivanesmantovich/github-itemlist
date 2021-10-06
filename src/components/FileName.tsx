import { FC } from 'react';

interface FileNameProps {
	fileName: string;
}
export const FileName: FC<FileNameProps> = ({ fileName }) => {
	return <div className="fileName">{fileName}</div>;
};