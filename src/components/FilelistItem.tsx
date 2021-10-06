import { FC } from 'react';
import {CommitMessage} from './CommitMessage'
import {FileIcon} from './FileIcon'
import {FileName} from './FileName'
import {Time} from './Time'
import {FileProps} from '../interfaces/FileProps'

interface FilelistItemProps {
	file: FileProps;
}

export const FilelistItem: FC<FilelistItemProps> = ({ file }) => {
	return (
		<div className="fileListItem">
			<FileIcon iconType={file.fileIconType} />
			<FileName fileName={file.fileName} />
			<CommitMessage commitMessage={file.commitMessage} />
			<Time time={file.time} />
		</div>
	);
};