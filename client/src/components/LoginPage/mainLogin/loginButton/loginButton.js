import React, {Component} from "react";
class loginButton extends Component {
  
  launchModal = () => {
    alert("Login Here");
  }

  render() {
    return (
      <div>
        <button 
          className="btn waves-effect waves-light">
          onClick={this.launchModal}>{this.props.children}
        </button>
      </div>
    )
  }

};
export default loginButton;