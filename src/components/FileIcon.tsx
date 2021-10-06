import { FC } from 'react';

interface fileIconsInterface {
	[key: string]: string;
}

const fileIcons: fileIconsInterface = {
	folder: 'fas fa-folder',
	textfile: 'fas fa-file-alt',
};

interface fileIconProps {
	iconType: string;
}
export const FileIcon: FC<fileIconProps> = ({ iconType }) => {
	return <i className={`fileIcon ${fileIcons[iconType]}`}></i>;
};