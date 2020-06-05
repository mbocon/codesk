import React, { Component } from 'react';

class Dropdown extends Component {
	toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

	state = {
		isOpen: false,
	};
	render() {
		const menuClass = `dropdown-menu${this.state.isOpen ? ' show' : ''}`;
		return (
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
                
                Javascript<input type="radio"  id="javascript" name="category" value="javascript"/>
                Jquery<input type="radio"  id="jquery" name="category" value="jquery"/>
                React<input type="radio"   id="react" name="category" value="react"/>
                HTML<input type="radio"  id="html" name="category" value="html"/>
                CSS<input type="radio"  id="css" name="category" value="css"/>
                Other<input type="radio"  id="other" name="category" value="other"/>
            
				</div>
			</div>
		);
	}
}

export default Dropdown;
