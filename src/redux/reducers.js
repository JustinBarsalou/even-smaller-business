// this is my reducers file
// here is where the state is manipulated 
// there is a reducer for each piece of state
// based on the action triggered, different parts of state are changed
import { combineReducers } from 'redux'

// this reducer updates the place state by adding or removing
// place state is used for normal listing page
const place = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PLACE':
			return [...state, action.value ]
		case 'REMOVE_PLACE':
			const place = [...state]
			place.splice(action.value, 1)
			return place
		default:
			return state
	}
}

// this reducer updates user state (logged in or not)
// allows for addListing
// const user = (state = null, action) => {
// 	switch (action.type) {
// 		case 'LOGIN':
// 			return {
// 				username: action.value
// 			}
// 		default:
// 			return state
// 	}
// }

// this reducer updates the detailed listing state
const deets = (state = null, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				deets: action.value
			}
		default:
			return state
	}
}

export default combineReducers({ place,  deets })