// add listing container
// direct access to state
import { connect } from 'react-redux'
import AddListing from '../components/addListing'
import { updatePlace } from "../redux/actions"

// this function binds an action to the dispatch in component, basically working backwards as mapStateToProps
const mapDispatchToProps = (dispatch) => {
	return {
			updatePlace: (place) => dispatch(updatePlace(place))
	}
}

// connects my container to component
export default connect(null, mapDispatchToProps)(AddListing)