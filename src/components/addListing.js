// this is my add listings page
import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

// add listing component 
// class component allows for holding its own data
class AddListing extends Component {
    state = {
        open: false,
        name: '',
        address: '',
        hours: '',
        description: '',
    }

    // this changes the state of the button on whether or not its supposed to show based on clicking it
    toggleDialog = () => this.setState({ open: !this.state.open })

    // this handles the change in characters when user is typing in text field
    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    // this handles info on what listing is being added and dispatches the info
    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.placeTotal + 1
        delete payload.open
        this.props.updatePlace(payload)
        this.setState({ open: false })
    }

    // this updates the page so the structure changes depending on if a listing is added
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                address: '',
                hours: '',
                description: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    {/* physical button to add listing  */}
                    <Button
                        variant="contained"
                        onClick={this.toggleDialog}
                    >
                        Add Listing
                    </Button>
                </div>
                <div>
                    {/* handling if the addListing box is open or not  */}
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Business</DialogTitle>
                        <DialogContent>
                            {/* this is the form for adding the details for the listing being added */}
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="name" 
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    placeholder="address" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="hours" 
                                    placeholder="Hours" 
                                    value={this.state.hours} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="description" 
                                    placeholder="Description" 
                                    value={this.state.description} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddListing