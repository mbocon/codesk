import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../codeskLogo.png';
import Card from '../Post Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered, faUsers, faUserSecret, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer';
import SignUpForm from '../Register/signupform';




export default class Home extends React.Component {
	state = {
		isOpen: false,
    posts: [],
    currentUser: {},
		email: '',
		password: '',
		isLoggedIn: false,
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
		fetch('/posts')
			.then(response => response.json())
			.then(data => this.setState({ posts: data }));
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
		window.location.reload()
	}

	toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

	render() {
		const menuClass = `dropdown-menu${this.state.isOpen ? ' show' : ''}`;
		if (localStorage.token) {
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
								<div className={menuClass} aria-labelledby='dropdownMenuButton'>
									<a className='dropdown-item' href='#nogo'>
										Javascript
									</a>
									<a className='dropdown-item' href='#nogo'>
										Jquery
									</a>
									<a className='dropdown-item' href='#nogo'>
										React
									</a>
									<a className='dropdown-item' href='#nogo'>
										HTML
									</a>
									<a className='dropdown-item' href='#nogo'>
										CSS
									</a>
								</div>
							</div>
						</div>

						<div className='user-home-content'>
							<div className='user-home-content-child-1'>
								<form className='search-bar'>
									<input className='user-search' type='text' id='search-bar' placeholder='Search for code ' />
									<input type='submit' value='Search' />
								</form>
							</div>
							<div className='user-home-content-child-2'>
								{this.state.posts.map((post, index) => {
									console.log(post._id, index, 'from map');
									return <Card post={post} index={index} id={post._id} handleDelete={this.handleDelete} />;
								})}
							</div>
						</div>
          </div>
          <Footer />
				</div>
			);
		} else {
			return (
				<div>
					<header className='user-home-header'>
						<div className='user-home-lft'>
							<Link to='/'>
								<img src={logo} alt='not found' />
							</Link>
						</div>
						<div className='user-home-ctr'>
						<Link to='/Register' className='btn btn-outline-info user-home-create-btn'>
							<span>
								<FontAwesomeIcon icon={faRegistered} />
							</span>
							REGISTER
						</Link>
					</div>
						<div className='user-home-rgt'>
							<form className='form-inline my-2 my-lg-0'>
								<span>
									<FontAwesomeIcon icon={faUsers} />
								</span>
								<input
									className='form-control mr-sm-2'
									placeholder='Email'
									type='email'
									name='email'
									id='email'
									onChange={this.handleInput}
								/>
								<span>
									<FontAwesomeIcon icon={faUserSecret} />
								</span>

								<input
									className='form-control mr-sm-2'
									placeholder='Password'
									type='password'
									name='password'
									id='password'
									onChange={this.handleInput}
								/>

								<NavLink to='/userhome'>
									<button type='submit' className='btn btn-outline-success' onClick={this.handleLogin}>
										<span>
											<FontAwesomeIcon icon={faSignInAlt} />
										</span>
										LOGIN
									</button>
								</NavLink>
							</form>
						</div>
					</header>
          <h1>Please login or sign up!</h1>
          <Footer />
				</div>
			);
		}
	}
}
