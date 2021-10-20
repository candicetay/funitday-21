import {
	Box,
	Button,
	Card,
	CardContent,
	TextField,
	InputAdornment,
	SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import Toggle from './toggle';

const GamesToolbar = (props) => (
	<Box {...props}>
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-end',
				paddingTop: 3
			}}
		>
			<Button sx={{ mx: 1 }}>Rest</Button>
			<Button color="primary" variant="contained">
				Zone Specific
			</Button>
			<Toggle />
		</Box>
		<Box sx={{ mt: 3 }}>
			<Card>
				<CardContent>
					<Box sx={{ maxWidth: 500 }}>
						<TextField
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SvgIcon
											fontSize="small"
											color="action"
										>
											<SearchIcon />
										</SvgIcon>
									</InputAdornment>
								)
							}}
							placeholder="Search product"
							variant="outlined"
						/>
					</Box>
				</CardContent>
			</Card>
		</Box>
	</Box>
);

export default GamesToolbar;
