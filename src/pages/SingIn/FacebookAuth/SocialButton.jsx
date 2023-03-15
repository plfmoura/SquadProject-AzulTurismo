import React from "react";
// import SocialLogin from "react-social-login";

class SocialButton extends React.Component {
  render() {
    const { children,  style, triggerLogin, ...props} = this.props;
    return (
        <button onClick={triggerLogin} {...props} style={style}>
          {children}
        </button>
    );
  }
}

export default SocialButton;