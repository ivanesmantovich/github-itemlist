import { FC } from 'react';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

interface TimeProps {
	time: string; // Например '1999-01-01' / '2021-09-13 20:09:09'
}
export const Time: FC<TimeProps> = ({ time }) => {
	return <span className="time">{dayjs(time).fromNow()}</span>;
};
