import React from 'react';

export default class Email extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      address: 'info@yourbadassdomain.com'
    };
  }

  render() {
    if(this.state.editing) {
      return this.renderEdit();
    }
    return this.renderEmail();
  }

  renderEdit = () => {
    return <input type="text"
      ref={
        element => element ?
        element.selectionStart = this.state.address.length :
        null
      }
      autoFocus={true}
      defaultValue={this.state.address}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderEmail = () => {
    return (
      <div onClick={this.edit}>
        <i className="fa fa-envelope"></i>
        {this.state.address}
      </div>
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

    if (!value.trim()){
      return;
    } else {
      this.setState({
        editing: false,
        address: value
      });
    }
  };
}
