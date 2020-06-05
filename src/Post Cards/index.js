import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
let endpoint;
if(process.env.NODE_ENV === 'development'){
    endpoint = 'http://localhost:8000/'
} else {
    endpoint = '/'
}

class Card extends Component {
	state = {
		isEditing: false,
		postId: '',
		text: '',
		postToEdit: {},
	};

	handleData = id => {
		this.setState({
			isEditing: !this.state.isEditing,
			postId: id,
			postToEdit: this.state.text,
		});
	};

	handleInput = event => {
		this.props.post.text = event.target.value;
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	saveChanges(e, id) {
		e.preventDefault();
		axios.put(`${endpoint}posts/${id}`, {
			text: this.props.post.text,
        })
        .then(response => {
            this.setState({
                isEditing: !this.state.isEditing,
            });
        })
        .catch(err => console.log(err));
	}

	render() {
		const { text } = this.props.post;
		const { handleDelete, index, id } = this.props;
		if (this.state.isEditing === true) {
			return (
				<form onSubmit={e => this.saveChanges(e, id)}>
					<textarea type='text' value={text} id={text} onChange={this.handleInput} rows="12" cols="85" />
					<button type='submit'>Save Changes</button>
				</form>
			);
		}
		return (
			<div className='card'>
				<h3>{text}</h3>
				<button className='btn btn-outline-danger' onClick={() => handleDelete(id, index)}>
					Delete
				</button>
				<button className='btn btn-outline-info' onClick={() => this.handleData(id)}>
					Edit
				</button>
			</div>
		);
	}
}

export default Card;
