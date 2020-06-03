import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import logo from '../codeskLogo.png';



export default class Home extends React.Component {
    state = {
        isOpen: false
      };
    
      toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    
    render(){

        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

        return (
            <div>
                <header className='user-home-header'>
                    <div className="user-home-lft">
                        <img className='user-home-img' src={logo} alt="not found"/>
                    </div>
                    <div className="user-home-ctr">
                        <button className="btn btn-outline-success user-home-create-btn" >Create new</button>
                    </div>
                    <div className="user-home-rgt">
                        <h4 className='user-home-h4'>Welcome user</h4>
                        <button className='btn btn-outline-danger user-home-btn'>Logout</button>
                    </div>
                </header>

                <div className="user-home-main">
                    <div className="user-home-select">
                        <div className="dropdown" onClick={this.toggleOpen}>
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                >Select Category
                            </button>
                            <div className={menuClass} aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#nogo">Javascript</a>
                                <a className="dropdown-item" href="#nogo">Jquery</a>
                                <a className="dropdown-item" href="#nogo">React</a>
                                <a className="dropdown-item" href="#nogo">HTML</a>
                                <a className="dropdown-item" href="#nogo">CSS</a>
                            </div>
                        </div>
                    </div>

                    <div className="user-home-content">
                        <div className="user-home-content-child-1">
                            <form className='search-bar'>
                                <input className='user-search' type="text" id="search-bar" placeholder="Search for code " />
                                <input type="submit" value='Search'/>
                            </form>
                        </div>
                        <div className="user-home-content-child-2">
                            <div className="code-card">
                                <h4>Code block</h4>
                                <p>Lorem ipsum dolor sit amet deleniti.</p>
                            </div>
                            <div className="code-card">
                                <h4>Code block</h4>
                                <p>Lorem ipsum dolor sit amet consectetliqueipsum! Cumque, deleniti.</p>
                            </div>
                            <div className="code-card">
                                <h4>Code block</h4>
                                <p>Lorem ipsum dolor sit temporibus nulla dolorem ipsum! Cumque, deleniti.</p>
                            </div>
                            <div className="code-card">
                                <h4>Code block</h4>
                                <p>Lorem ipsum dolor sit temporibus nulla dolorem ipsum! Cumque, deleniti.</p>
                            </div>
                        </div>
                    
                    </div>
            </div>
            </div>
        )
    }
}