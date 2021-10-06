export interface FileProps {
	id: number;
	fileIconType: 'textfile' | 'folder';
	fileName: string;
	commitMessage: string;
	time: string;
}