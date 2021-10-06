import React, { useState, FC, ReactElement } from 'react';
import logo from './logo.svg';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import './App.css';

interface TimeProps {
	time: string; // Например '1999-01-01' / '2021-09-13 20:09:09'
}
const Time: FC<TimeProps> = ({ time }) => (
	<span className="time">{dayjs(time).fromNow()}</span>
);

interface FileProps {
	id: number;
	fileIconType: 'textfile' | 'folder';
	fileName: string;
	commitMessage: string;
	time: string;
}

interface FilelistItemProps {
	file: FileProps;
}

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
const FileIcon: FC<fileIconProps> = ({ iconType }) => {
	return <i className={`fileIcon ${fileIcons[iconType]}`}></i>;
};

interface FileNameProps {
	fileName: string;
}
const FileName: FC<FileNameProps> = ({ fileName }) => {
	return <div className="fileName">{fileName}</div>;
};

interface CommitMessageProps {
	commitMessage: string;
}
const CommitMessage: FC<CommitMessageProps> = ({ commitMessage }) => {
	return <div className="commitMessage">{commitMessage}</div>;
};

const FilelistItem: FC<FilelistItemProps> = ({ file }) => {
	return (
		<div className="fileListItem">
			<FileIcon iconType={file.fileIconType} />
			<FileName fileName={file.fileName} />
			<CommitMessage commitMessage={file.commitMessage} />
			<Time time={file.time} />
		</div>
	);
};

interface FilelistProps {
	files: FileProps[];
}
const Filelist: FC<FilelistProps> = ({ files }) => {
	return (
		<div className="container">
			{files.map((file, index) => {
				return <FilelistItem file={file} key={file.id} />;
			})}
		</div>
	);
};

const files: FileProps[] = [];
files.push(
	{
		id: 1,
		fileIconType: 'folder',
		fileName: 'docs',
		commitMessage:
			'Time from now Returns the string of relative time from now. This dependent on RelativeTime plugin to work',
		time: '2021-03-29',
	},
	{
		id: 2,
		fileIconType: 'folder',
		fileName: 'src',
		commitMessage: 'Work in progress...',
		time: '2021-03-29',
	},
	{
		id: 3,
		fileIconType: 'folder',
		fileName: 'testTextFile',
		commitMessage: 'Work in progress...',
		time: '2021-03-29',
	},
	{
		id: 4,
		fileIconType: 'textfile',
		fileName: 'grocery list',
		commitMessage: 'Work in progress...',
		time: '2021-03-29',
	},
	{
		id: 5,
		fileIconType: 'textfile',
		fileName: 'blueberry pie recipe',
		commitMessage: 'Work in progress...',
		time: '2021-03-29',
	},
	{
		id: 6,
		fileIconType: 'textfile',
		fileName: 'poem',
		commitMessage: 'Work in progress...',
		time: '2021-03-29',
	}
);

function App() {
	return (
		<div className="App">
			<Filelist files={files} />
		</div>
	);
}

export default App;
