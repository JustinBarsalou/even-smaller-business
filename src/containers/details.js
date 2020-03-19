// detailed listing container
// direct access to state
import { connect } from 'react-redux'
import Details from '../components/details'

// this function passes data from state to my component to be used
// this passes the listings and detailed listings info to component
const mapStateToProps = (state) => {
	return {
			place: state.place,
			deets: state.deets,
	}
}
// connects my container to component
export default connect(mapStateToProps)(Details)