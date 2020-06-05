import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../codeskLogo.png';
import Card from '../Post Cards';
import FilteredCard from '../Filtered Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered, faUsers, faUserSecret, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer';
import SignUpForm from '../Register/signupform';
import axios from 'axios';

export default class Home extends React.Component {
	state = {
		isOpen: false,
		posts: [],
		currentUser: {},
		email: '',
		password: '',
		isLoggedIn: false,
		category: '',
		filtered: false,
		filteredArr: [],
	};

	handleInput = event => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	handleLogin = event => {
		event.preventDefault();
		fetch('/users/login', {
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
			}),
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(response => {
				localStorage.token = response.token;
				this.setState({
					currentUser: response.currentUser,
					isLoggedIn: true,
					email: '',
					password: '',
				});
			})
			.catch(err => console.log(err));
	};

	componentDidMount() {
		if (this.state.filtered === false) {
			fetch('/posts')
				.then(response => response.json())
				.then(data => this.setState({ posts: data }));
		}
	}

	handleDelete = (id, index) => {
		fetch(`/posts/${id}`, {
			method: 'DELETE',
		}).then(() => {
			this.setState({
				posts: [...this.state.posts.slice(0, index), ...this.state.posts.slice(index + 1)],
			});
		});
	};

	handleLogOut() {
		localStorage.clear();
		window.location.href='/'
	}

	toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

	getCategory = category => {
		axios.get('/posts/category', {
				params: {
					category: category,
				},
			})
			.then(response => {
				this.setState({
					filteredArr: response.data,
					filtered: !this.state.filtered,
				});
			});
	};

	render() {
		const menuClass = `dropdown-menu${this.state.isOpen ? ' show' : ''}`;
		return (
			<div>
				<header className='user-home-header'>
					<div className='user-home-lft'>
						<Link to='/'>
							<img src={logo} alt='not found' />
						</Link>
					</div>
					<div className='user-home-ctr'>
						<Link to='/posts'>
							<button className='btn btn-outline-success user-home-create-btn'>Create new</button>
						</Link>
					</div>
					<div className='user-home-rgt'>
						<h4 className='user-home-h4'>Welcome user</h4>
						<button onClick={this.handleLogOut} className='btn btn-outline-danger user-home-btn'>
							Logout
						</button>
					</div>
				</header>

				<div className='user-home-main'>
					<div className='user-home-select'>
						<div className='dropdown' onClick={this.toggleOpen}>
							<button
								className='btn btn-secondary dropdown-toggle'
								type='button'
								id='dropdownMenuButton'
								data-toggle='dropdown'
								aria-haspopup='true'>
								Select Category
							</button>
							{this.state.filtered === false ?
							<div className={menuClass} aria-labelledby='dropdownMenuButton'>
								<button className='dropdown-item' onClick={() => this.getCategory('javascript')}>
									Javascript
								</button>
								<button className='dropdown-item' onClick={() => this.getCategory('jquery')}>
									Jquery
								</button>
								<button className='dropdown-item' onClick={() => this.getCategory('react')}>
									React
								</button>
								<button className='dropdown-item' onClick={() => this.getCategory('html')}>
									HTML
								</button>
								<button className='dropdown-item' onClick={() => this.getCategory('css')}>
									CSS
								</button>
								<button className='dropdown-item' onClick={() => this.getCategory('other')}>
									Other
								</button>
							</div> : 
							<div className={menuClass} aria-labelledby='dropdownMenuButton'>
							<button className='dropdown-item' onClick={() => this.getCategory()}>
								Show all
							</button>
						</div>
						}
						</div>
					</div>

					<div className='user-home-content'>
						
						<div className='user-home-content-child-2'>
							{this.state.filtered === false ? this.state.posts.map((post, index) => {
								return <Card post={post} index={index} id={post._id} handleDelete={this.handleDelete} />;
							}) : <div className='user-home-content'><div className='user-home-content-child-3'>{this.state.filteredArr.map((data, index)=>{
								return(
									<FilteredCard post={data} index={index} id={data._id} handleInput={this.handleDelete} className="filtered-card" />
								)
							})}</div></div>
						 }
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
