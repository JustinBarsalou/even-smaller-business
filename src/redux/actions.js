// this is my actions file
// these action creators are functions that will return an action
// these trigger in order to update state

//this function deals with assigning a username to the user allowing full access to site
export const user = (username) => {
	return {
		type: "LOGIN",
		value: username
	}
}
// this function deals with adding a place to the listing 
export const updatePlace = (place) => {
	console.log("IN ACTIONS", place)
	return {
		type: "ADD_PLACE",
		value: place
	}
}
// this function deals with removing a listing
// called when hitting delete button
export const removePlace = (index) => {
	return {
			type: 'REMOVE_PLACE',
			value: index
	}
}