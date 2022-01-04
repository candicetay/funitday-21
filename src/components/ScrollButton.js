import React, { useState } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Button } from '@material-ui/core';

const ScrollButton = () => {
	// const [visible, setVisible] = useState(false);

	// const toggleVisible = () => {
	//   const scrolled = document.documentElement.scrollTop;
	//   if (scrolled > 300) {
	//     setVisible(true);
	//   } else if (scrolled <= 300) {
	//     setVisible(false);
	//   }
	// };

	// const scrollToTop = () => {
	//   window.scrollTo({
	//     top: 0,
	//     behavior: 'smooth'
	//     /* you can also use 'auto' behaviour
	//        in place of 'smooth' */
	//   });
	// };

	// const scrollToTop = () => {
	//   document.querySelector('body').scrollTo(0, 0);
	//   window.focus();
	//   window.scrollTo(0, 0);
	//   document.documentElement.scrollTo(0, 0);
	// };

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth' // for smoothly scrolling
		});
	};

	// window.addEventListener('scroll', toggleVisible);

	return (
		<Button variant="contained" size="large">
			<ArrowCircleUpIcon onClick={scrollToTop} />
		</Button>
	);
};

export default ScrollButton;
