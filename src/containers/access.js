// login container
// direct access to state
import { connect } from 'react-redux'
import Access from '../components/access'
import { user } from "../redux/actions"

// this function passes data from state to my component to be used
// this function only actually passes username, password not used and loggedIn is dealt with elsewhere
const mapStateToProps = (state) => {
	return {
			username: state.username,
			password: state.password,
			loggedIn: state.loggedIn,
			}
}

// this function binds an action to the dispatch in component, basically working backwards as mapStateToProps
const mapDispatchToProps = (dispatch) => {
	return {
			user: (username) => dispatch(user(username))
	}
}
// connects my container to component
export default connect(mapStateToProps, mapDispatchToProps)(Access)