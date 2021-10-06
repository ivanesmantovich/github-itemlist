import React, { useState, FC, ReactElement } from 'react';
import logo from './logo.svg';
import { CommitMessage } from './components/CommitMessage';
import { FileIcon } from './components/FileIcon';
import { FileName } from './components/FileName';
import { Time } from './components/Time';
import { FilelistItem } from './components/FilelistItem';
import { Filelist } from './components/Filelist';
import { FileProps } from './interfaces/FileProps';
import './App.css';

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
