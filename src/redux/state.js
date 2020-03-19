// this is my app's state
export default {
	// this is state for user, this declares user is not logged in as default
	// this is manipulated if login form is submitted
	user: 
		{
			username: false,
		},
	
	// list of objects, these are the listings and the basic info that goes with them
	// this is what i reference on the listing component
	place: [
		{
			"id": 1,
			"name": "Thundercloud Subs",
			"description": "A local sandwich shop",
			"hours": "11 - 10",
			"address": "201 E Riverside Drive, Austin, TX 78704"
		},

		{
			"id": 2,
			"name": "H-E-B",
			"description": "Grocery Store",
			"hours": "7a - 12p",
			"address": "2508 East Riverside Dr. Austin, TX 78741"
		},
	],

	// list of objects, these are the details for when you click a specific listing
	// referenced on details component
	deets: [
		{
			"id": 1,
			"details": "ThunderCloud Subs is a neighborhood sub shop with a rich tradition of good-natured people serving fresh, fast, and healthy food in a quirky and fun atmosphere. Andy Cotton and John Meddaugh founded ThunderCloud in 1975 with the simple philosophy of selling a great sub at a reasonable price. We proudly maintain that core philosophy today.",
			'lat': '30.255130',
			'lng': '-97.745300' 
		},

		{
			"id": 2,
			"details": "The story of H‑E‑B begins more than 100 years ago in a small, family‑owned store in the Texas Hill Country. Today H‑E‑B serves families all over Texas and Mexico in 155 communities, with more than 340 stores and over 100,000 employees.",
			'lat': '30.235160',
			'lng': '-97.722950' 
		},
	]

	
}