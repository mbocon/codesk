import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import logo from '../codeskLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer';
import Dropdown from '../Dropdown';

class Posts extends Component {
	state = {
		text: '',
		category: '',
		posts: [],
	};

	handleChange = event => {
		console.log(this.state.category);
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		fetch('/posts', {
			body: JSON.stringify({ text: this.state.text, category: this.state.category }),
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(newPost => {
				this.setState({
					posts: [newPost, ...this.state.posts],
					text: '',
				});
			});
		this.props.history.push('/userhome');
	};

	toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

	render() {
		const menuClass = `dropdown-menu${this.state.isOpen ? ' show' : ''}`;
		return (
			<div className='App'>
				<header className='user-home-header'>
					<div className='user-home-lft'>
						<Link to='/'>
							<img src={logo} alt='not found' />
						</Link>
					</div>
					<div className='user-home-ctr'>
						<Link to='/'>
							<button className='btn btn-outline-success user-home-create-btn'>
								<span>
									
									<FontAwesomeIcon icon={faReact} />
								</span>
								Go Home
							</button>
						</Link>
					</div>
					<div className='user-home-rgt'>
						<h4 className='user-home-h4'>Welcome user</h4>
						<button className='btn btn-outline-danger user-home-btn'>
							<span>
								
								<FontAwesomeIcon icon={faSignOutAlt} />
							</span>
							LOGOUT
						</button>
					</div>
				</header>

				<h1 className='display-4'>CREATE POST</h1>
				<form onSubmit={this.handleSubmit} className='form-group create-form'>
					<label for='exampleFormControlTextarea1' htmlFor='post'>
						<span>
							
							<FontAwesomeIcon icon={faCode} />
						</span>
						POST :
					</label>
					<textarea
						className='form-control text-area'
						value={this.state.text}
						id='text'
						rows='14'
						col='10'
						type='textarea'
						onChange={this.handleChange}
					/>
					<div className='dropdown-area'>
					<div className='dropdown' onClick={this.toggleOpen}>
						<button
							className='btn btn-secondary dropdown-toggle'
							type='button'
							id='dropdownMenuButton'
							data-toggle='dropdown'
							aria-haspopup='true'>
							Select Category
						</button>
						<div className={`${menuClass} select-category-dropdown`} aria-labelledby='dropdownMenuButton' onChange={this.handleChange} id='category'>
							Javascript
							<input type='radio' name='javascript' id='category' value='javascript' />
							Jquery
							<input type='radio' name='jquery' id='category' value='jquery' />
							React
							<input type='radio' name='react' id='category' value='react' />
							HTML
							<input type='radio' name='html' id='category' value='html' />
							CSS
							<input type='radio' name='css' id='category' value='css' />
							Other
							<input type='radio' name='other' id='category' value='other' />
						</div>
					</div>
					<button className='btn btn-outline-success create-btn'>Submit</button>
					</div>
				</form>
				<div className="footer">
				<Footer />
				</div>
			</div>
		);
	}
}

export default Posts;
