import { FC } from 'react';
import {FilelistItem} from './FilelistItem'
import {FileProps} from '../interfaces/FileProps'

interface FilelistProps {
	files: FileProps[];
}
export const Filelist: FC<FilelistProps> = ({ files }) => {
	return (
		<div className="container">
			{files.map((file, index) => {
				return <FilelistItem file={file} key={file.id} />;
			})}
		</div>
	);
};