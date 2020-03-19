// this is my detailed listing page
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
  

// this function sets up the map, with the correct address for the listing clicked on
function Map() {
  return (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: Number(`${lat}`), lng: Number(`${lng}`) }} 
  >
    <Marker
    key={eyedee}
    position={{ lat: Number(`${lat}`), lng: Number(`${lng}`) }}/>
  </GoogleMap>)
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const useStyles = makeStyles({
  root: {
    minWidth: "50%",
    maxWidth: "75%"

  },
  header: {
    fontSize: 25,
    textDecoration: "underline"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

var lat;
var lng;
var eyedee;

// detailed listing component
const Details = (props) => {
  const classes = useStyles();
  // setting important values for usage
  // locally storing values
  const id = props.match.params.id
  const place = props.place.find(c => c.id === Number(id))
  const deets = props.deets.find(c => c.id === Number(id))
  lat = deets.lat;
  lng = deets.lng;
  eyedee = deets.id;

  // this renders the detailed page of the listing
  return (
    <div className="detailCardContainer">
      <Card className={classes.root}>
        {/* simple info displayed  */}
        <div>
          <Typography className={classes.header}>{`${place.name}`}</Typography><br/>
          <Typography>{`${place.hours}`}</Typography><br/>
          <Typography>{`${place.address}`}</Typography><br/>
          <Typography>{`${deets.details}`}</Typography><br/>
        </div>
        <div style={{width: '100%', height: '50vh'}}>
          {/* map display */}
          <WrappedMap
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA_ru3F_aRvWek6L40K3adwGXgHwVkfIlg'}
            loadingElement={<div style={{height: '100%'}} />}
            containerElement={<div style={{height: '100%'}} />}
            mapElement={<div style={{height: '100%'}} />}
            />
        </div>
      </Card>
    </div>

  )
}


export default Details 