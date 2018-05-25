import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <li className="navbar-brand">
            {this.props.title}
            <span className="badge badge-pill badge-light ml-2">
              {this.props.tasks}
            </span>
          </li>
        </div>
      </nav>
    );
  }
}

export default Navigation;
