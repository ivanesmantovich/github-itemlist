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
		commitMessage: 'Added folders for components and interfaces',
		time: '2021-03-29',
	},
	{
		id: 3,
		fileIconType: 'folder',
		fileName: 'test',
		commitMessage: 'Added new tests',
		time: '2021-03-29',
	},
	{
		id: 4,
		fileIconType: 'textfile',
		fileName: 'grocery list',
		commitMessage: 'Milk, bread, butter',
		time: '2021-03-29',
	},
	{
		id: 5,
		fileIconType: 'textfile',
		fileName: 'blueberry pie recipe',
		commitMessage: 'New version',
		time: '2021-03-29',
	},
	{
		id: 6,
		fileIconType: 'textfile',
		fileName: 'poem',
		commitMessage: '1.0.0',
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
