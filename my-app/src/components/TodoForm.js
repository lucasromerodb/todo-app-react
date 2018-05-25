import React, { Component } from 'react';

class TodoForm extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
    // console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          <form className="card-body" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="form-control"
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="responsible"
                placeholder="Responsible"
                className="form-control"
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="form-control"
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                name="priority"
                onChange={this.handleInput}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <input type="submit" value="Add" className="btn btn-primary btn-block" />
            </form>
          </div>
      </div>
    )
  }
}

export default TodoForm;
