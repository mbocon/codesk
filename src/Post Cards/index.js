import React, { Component } from "react";
import "./style.css";

class Card extends Component {
    state = {
        isEditing: false,
        postId: ''
    }

    handleData = (id) => {
        console.log(this.state.isEditing)
        this.setState({
            isEditing: !this.state.isEditing,
            postId: id
        })
    }

    render() {

        const { text } = this.props.post;
        const{ handleDelete, index, id } = this.props;
    return (
        <div className='card'>
        <h3>{text}</h3>
        <button className='btn btn-outline-danger' onClick={()=> handleDelete(id, index)} >Delete</button>
         <button className="btn btn-outline-info" onClick={()=>this.handleData(id)}>Edit</button>
    </div>
    )
  }
}

export default Card;
