// listings container
// direct access to state
import { connect } from 'react-redux'
import Listings from '../components/listings'
import { removePlace } from '../redux/actions'


// this function passes data from state to my component to be used
// this passes the listings and user info to component
// helps in showing add listing based on if user is logged in
const mapStateToProps = (state) => {
	return {
			place: state.place,
			address: state.place.address,
			deets: state.deets,
			user: state.user,
	}
}
// this function binds an action to the dispatch in component, basically working backwards as mapStateToProps
const mapDispatchToProps = (dispatch) => {
	return {
			removePlace: (index) => dispatch(removePlace(index))
	}
}
// connects my container to component
export default connect(mapStateToProps, mapDispatchToProps)(Listings)