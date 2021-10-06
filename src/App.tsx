import React, { useState, FC, ReactElement } from 'react';
import logo from './logo.svg';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import './App.css';

// PROP TIPS
// Next, let’s figure out what data each component needs to render. This will give us the props and propTypes for each one.
// See if you can figure out the propTypes definition for each of these without looking ahead at the code. The FileList should take one prop, files, which is an array of file objects.
// The FileListItem will just take a single file object as the file prop. That object should have a name, type, a commit with a message, and a last-modified time.
// FileName will take a file object and expect it to have a name property.
// FileIcon will take a file object and use its type property to decide which kind of icon to show.
// CommitMessage will take a commit object and expect it to have a message property.
// Finally, Time will take an absolute time string. We’re going to reuse the Time component we made for Tweet, propTypes and all.
// PROP TIPS

interface TimeProps {
	time: string; // Например '1999-01-01' / '2021-09-13 20:09:09'
}
const Time: FC<TimeProps> = ({ time }) => (
	<span className="time">{dayjs(time).fromNow()}</span>
);

interface FileProps {
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
		<div className='container'>
			{files.map((file, index) => {
				return <FilelistItem file={file} key={index} />;
			})}
		</div>
	);
};

const files: FileProps[] = [];
files.push({
	fileIconType: 'folder',
	fileName: 'docs',
	commitMessage: 'Time from now Returns the string of relative time from now. This dependent on RelativeTime plugin to work',
	time: '2021-03-29',
}, {
	fileIconType: 'folder',
	fileName: 'src',
	commitMessage: 'Work in progress...',
	time: '2021-03-29',
}, {
	fileIconType: 'folder',
	fileName: 'testTextFile',
	commitMessage: 'Work in progress...',
	time: '2021-03-29',
},{
	fileIconType: 'textfile',
	fileName: 'grocery list',
	commitMessage: 'Work in progress...',
	time: '2021-03-29',
}, {
	fileIconType: 'textfile',
	fileName: 'blueberry pie recipe',
	commitMessage: 'Work in progress...',
	time: '2021-03-29',
}, {
	fileIconType: 'textfile',
	fileName: 'poem',
	commitMessage: 'Work in progress...',
	time: '2021-03-29',
});

function App() {
	return (
		<div className="App">
			<Filelist files={files} />
		</div>
	);
}

export default App;
