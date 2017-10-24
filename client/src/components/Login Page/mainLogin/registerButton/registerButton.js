import React, {Component} from "react";
class RegisterButton extends Component {
  
  launchModal = () => {
    alert("Register Here");
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
  
  export default RegisterButton;