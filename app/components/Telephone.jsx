import React from 'react';

export default class Telephone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      telephone: '123-456-7890'
    };
  }

  render() {
    if(this.state.editing) {
      return this.renderEdit();
    }
    return this.renderTelephone();
  }

  renderEdit = () => {
    return <input type="text"
      ref={
        element => element ?
        element.selectionStart = this.state.telephone.length :
        null
      }
      autoFocus={true}
      defaultValue={this.state.telephone}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderTelephone = () => {
    return (
      <div onClick={this.edit}>
        <i className="fa fa-phone"></i>
        {this.state.telephone}
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
        telephone: value
      });
    }
  };
}
