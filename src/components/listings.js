// this is my listings page
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import AddListing from '../containers/addListing'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	butt: {
		backgroundColor: '#61CE76',
		padding: 20,
		color: 'white',
		borderRadius: '5px'
	}
});

// listing component
// this renders a table, that shows the listings. 
const Listings = (props) => {
	const classes = useStyles();
	return (
		<div className="tableCont">
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
          {/* here are the titles for the information  */}
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">
								Description</TableCell>
							<TableCell align="right">Hours</TableCell>
							<TableCell align="right">Address</TableCell>
							{<TableCell align="right">Remove</TableCell>}
						</TableRow>
					</TableHead>
          {/* this maps through the array of listings and displays the information accordingly  */}
          {/* once one listing is mapped through, the next one starts if any */}
					<TableBody>
						{props.place.map((row, idx) => (
							<TableRow key={row.name}>
								<TableCell component="th" scope="row">
									<Link to={`/place/${row.id}`}>
										{row.name}
									</Link>
								</TableCell>
								<TableCell align="right">{row.description}</TableCell>
								<TableCell align="right">{row.hours}</TableCell>
								<TableCell align="right">{row.address}</TableCell>
								{<TableCell align="right">
                  {/* this is a button to delete a listing from the table */}
									<Button>
										<DeleteIcon onClick={() => props.removePlace(idx)}
											className="icon text-red" />
									</Button>
								</TableCell>}
							</TableRow>
						))}
					</TableBody>
				</Table>

      {/* this is a button that allows user to add listing */}
      {/* the user cant see this unless logged in  */}
			</TableContainer>
			<div className="addButton">
				{<AddListing />}
			</div>
		</div>
	)
}

export default Listings