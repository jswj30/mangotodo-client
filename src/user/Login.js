import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  };

  render() {
    return (
      <div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="password" />
        </div>
        <div>
          <button onClick={this.handleLogin}>Login</button>
          {this.state.isLogin && <h1>버튼을 눌렀습니다.</h1>}
        </div>
      </div>
    );
  }
}

export default Login;
