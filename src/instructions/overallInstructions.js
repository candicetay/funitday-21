import { v4 as uuid } from 'uuid';

export default [
	{
		id: uuid(),
		createdAt: '27/03/2019',
		description:
			"FUN IT Day is a IT tradition to bond, it's been a long wait but it's finally here! We are unable to travel but the spirit of travelling and exploration can take place anywhere :)",
		title: 'What is IT Fun Day?',
		media: '/static/images/gameplay/funitday2020.jpg'
	},
	{
		id: uuid(),
		createdAt: '31/03/2019',
		description:
			'The game format follows a scavenger-bingo style - complete as many tiles on the board! For activities denoted with an *, the best submission wins a bonus prize to be awarded after the event. This year, we also have a live leaderboard to check out who is leading!',
		title: 'What is the game format?',
		media: '/static/images/gameplay/bingo.png'
	},
	{
		id: uuid(),
		createdAt: '27/03/2019',
		description:
			'The points for each bingo tile in the bracket e.g. (x) means x points will be awarded for verified completion. For each team strike of any row or column, receive +50 points. There is no limit to how many rows, columns or tiles you are allowed to complete.',
		title: 'Point System - How to Ace IT',
		media: '/static/images/gameplay/leaderboard.png'
	},
	{
		id: uuid(),
		createdAt: '03/04/2019',
		description:
			'Submit video or pictorial evidence for each bingo tile via the telegram chat with our committee members! Refer to the specific instructions for each activity. If we missed out any tabulation from the leaderboard, feel free to contact us. Do note, we will take some time to verify submissions!',
		title: 'Proof of Completion and Verification',
		media: '/static/images/gameplay/selfie-pose.jpg'
	},
	{
		id: uuid(),
		createdAt: '04/04/2019',
		description:
			'To ease the process, please visit places which provide receipts. If receipts are not available, your team needs to write and assign a statement stating the details of your purchases so that it can be cleared with Finance.',
		title: 'Claims',
		media: '/static/images/gameplay/receipts.jpg'
	},
	{
		id: uuid(),
		createdAt: '04/04/2019',
		description:
			'Public transport or private transport? It is your call. However, please stay in your zone and do not meet up physically with other groups - SMM. The activities are designed to be generally location agnostic so location should not be a huge issue.',
		title: 'Getting around',
		media: '/static/images/gameplay/ezlink.jpg'
	},
	{
		id: uuid(),
		createdAt: '04/04/2019',
		description:
			'You can check for scoring updates. You can also interact with the board by selecting on emoji reactions and posting comments!',
		title: 'What is this leaderboard? How do I use it?',
		media: '/static/images/gameplay/leaderboard.png'
	},
	{
		id: uuid(),
		createdAt: '04/04/2019',
		description:
			"Just chill while we tabulate the final scores and then we will end off with a virtual closing ceremony (please join as a team)! Attend the zoom remotely, please do not return to office. All good days should end with a bang ain't it!",
		title: 'What is the plan after games?',
		media: '/static/images/gameplay/zoom.jpg'
	},
	{
		id: uuid(),
		createdAt: '04/04/2019',
		description:
			'Fret not, just contact the committee members via Telegram ;) We are here for you.',
		title: 'What if we are lost or unsure?',
		media: '/static/images/gameplay/telegram-logo.png'
	}
];
