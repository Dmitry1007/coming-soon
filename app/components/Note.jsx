import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  render() {
    if(this.state.editing) {
      return this.renderEdit();
    }
    return this.renderNote();
  }

  renderEdit = () => {
    return <input type="text"
      ref={
        element => element ?
        element.selectionStart = this.props.task.length :
        null
      }
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderNote = () => {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo wow bounceInLeft" data-wow-delay="0.4s">
                <a className="site-logo" href="index.html">Ino Soon</a>
              </div>
            </div>
            <div className="col-sm-6">
                <ul className="contact-list wow bounceInRight" data-wow-delay="0.4s">
                  <li><i className="fa fa-phone"></i> 1 -234 -456 -7890</li>
                  <li>
                    <i className="fa fa-envelope"></i>
                      <span onClick={this.edit} className="task">{this.props.task}</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </header>
    );
  };

  edit = () => {
    this.setState({
      editing: true
    });
  };

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);

      this.setState({
        editing: false
      });
    }
  };
}
