import { v4 as uuid } from 'uuid';

export default [
	{
		id: uuid(),
		createdAt: '27/03/2019',
		description:
			"As per the annual tradition of FUN IT Day, the committee hopes that the activities can help teams bond and create memorable memories. This run is a little different as it is physical but yet still constained by SMM. Regardless of your team's playing style, we hope you have fun!",
		title: 'What is this all about?'
	},
	{
		id: uuid(),
		createdAt: '31/03/2019',
		description:
			'The format follows a scavenger-bingo style. It is like bingo yet not really! This year, we are also introducing a leaderboard concept for teams to know right away who is leading! Bid farewell to waiting for us to count points :)',
		title: 'What is the format?'
	},
	{
		id: uuid(),
		createdAt: '03/04/2019',
		description:
			'Submit video or pictorial evidence via the telegram chat with 1 / more of our committee members! Refer to specific instructions for each activity.',
		title: 'Proof of Completion'
	},
	{
		id: uuid(),
		createdAt: '04/04/2019',
		description:
			'To ease the process of claims, please visit places which provide receipts. In the event receipts are not available, yiour team needs to write and asign a statement stating the details of your purchases so that it can be cleared with Finance.',
		title: 'Claims'
	},
	{
		id: uuid(),
		createdAt: '04/04/2019',
		description:
			'Fret not, just contact the committee members via Telegram ;) We are here for you.',
		title: 'What if we are lost or unsure?'
	}
];
