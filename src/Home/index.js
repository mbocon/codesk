import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../codeskLogo.png";
import Card from "../Post Cards";


export default class Home extends React.Component {
  state = {
    isOpen: false,
    posts: [],
  };

    componentDidMount() {
        fetch('/posts')
            .then(response => response.json())
            .then(data  => this.setState({ posts: data }));
    }
    
    handleDelete = (id, index) => {
        console.log(id, index, 'from delete click')
        fetch(`/posts/${id}`, {
            method: "DELETE"
        }).then(()=>{
            this.setState({
                posts: [...this.state.posts.slice(0,index), ...this.state.posts.slice(index + 1)]
            })
        });
    }


    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {

    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

    return (
      <div>
        <header className="user-home-header">
          <div className="user-home-lft">
            <Link to="/">
              <img src={logo} alt="not found" />
            </Link>
          </div>
          <div className="user-home-ctr">
        
            <Link to='/posts'>
            <button className="btn btn-outline-success user-home-create-btn">
              Create new
            </button>
            </Link>
          
          
          </div>
          <div className="user-home-rgt">
            <h4 className="user-home-h4">Welcome user</h4>
            <button className="btn btn-outline-danger user-home-btn">
              Logout
            </button>
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
              >
                Select Category
              </button>
              <div className={menuClass} aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#nogo">
                  Javascript
                </a>
                <a className="dropdown-item" href="#nogo">
                  Jquery
                </a>
                <a className="dropdown-item" href="#nogo">
                  React
                </a>
                <a className="dropdown-item" href="#nogo">
                  HTML
                </a>
                <a className="dropdown-item" href="#nogo">
                  CSS
                </a>
              </div>
            </div>
          </div>

          <div className="user-home-content">
            <div className="user-home-content-child-1">
              <form className="search-bar">
                <input
                  className="user-search"
                  type="text"
                  id="search-bar"
                  placeholder="Search for code "
                />
                <input type="submit" value="Search" />
              </form>
            </div>
            <div className="user-home-content-child-2">
             {this.state.posts.map(( post, index )=>{
                 console.log(post._id, index, 'from map')
                return (
                   <Card post={post} index={index} id={post._id} handleDelete={this.handleDelete} />
                )
             })}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
