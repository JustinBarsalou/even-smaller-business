// add listing container
// direct access to state
import { connect } from 'react-redux'
import AddListing from '../components/addListing'
import { updatePlace } from "../redux/actions"

// this function binds an action to the dispatch in component, basically working backwords as mapStateToProps
const mapDispatchToProps = (dispatch) => {
	return {
			updatePlace: (place) => dispatch(updatePlace(place))
	}
}

export default connect(null, mapDispatchToProps)(AddListing)