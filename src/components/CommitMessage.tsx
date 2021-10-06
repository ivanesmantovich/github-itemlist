import { FC } from 'react';
interface CommitMessageProps {
	commitMessage: string;
}
export const CommitMessage: FC<CommitMessageProps> = ({ commitMessage }) => {
	return <div className="commitMessage"><a href="/">{commitMessage}</a></div>;
};
