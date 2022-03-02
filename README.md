## FUN IT Day 2021 Info Site
![license](https://img.shields.io/badge/license-MIT-blue.svg)

> This website is made possible by [![Material Kit - React](https://s3.eu-west-2.amazonaws.com/devias/products/react-material-dashboard/react-material-free-xl.jpg)](https://react-material-dashboard.devias.io/) and Vercel.

## About the Info Site
This website was created to facilitate a physical decentralised mass team bonding company event, with this information site meant to accompany a digital [Bingo sheet](bingobaker.com). Minor modifications were done to the components from the original React template for this site.

#### Note:
- All images (except Publicity posters) and gifs on the site are sourced from Google Images and belong to the respective content creators. No attempt was made to monetise them.
- All textual data is hard coded in json with no database reference due to the limited data.

## Pages on Site

- [Schedule](https://funitday-21.vercel.app/app/schedule)
- [Instructions & FAQ](https://funitday-21.vercel.app/app/instructions)
- [Bingo - Snacks](https://funitday-21.vercel.app/app/eat)
- [Bingo - Activities](https://funitday-21.vercel.app/app/gameplay)
- [Leaderboard](https://funitday-21.vercel.app/app/leaderboard)
- [Comms](https://funitday-21.vercel.app/app/publicity)

## Quick start

- Download the project

- Make sure your NodeJS and npm versions are up to date for `React 17`. npm and yarn versions are explicitly stated in package.json for deployment on Vercel.

- Install dependencies: `npm install` or `yarn`

- Start the server: `npm run start` or `yarn start`

- Views are on: `localhost:3000`

## File Structure

Within the download you'll find the following directories and files:

```
material-react-dashboard

├── .eslintrc
├── .gitignore
├── .prettierrc
├── CHANGELOG.md
├── jsconfig.json
├── LICENSE.md
├── package.json
├── README.md
├── public
	├── static
	├── images
		├── food
		├── gameplay
		├── publicity
		├── FUN-IT logo
└── src
	├── components
	├── instructions
	├── utils
	├── theme
	├── pages
	│	├── EmailComms
	│	├── FoodList
	│	├── GamePlay
	│	├── Instructions
	│	├── Leaderboard
	│	├── NotFound
	│	├── Schedule
	├── App.jsx
	├── index.jsx
	└── Routes.jsx
```
## License

- Licensed under MIT (https://github.com/devias-io/react-material-dashboard/blob/master/LICENSE.md)
