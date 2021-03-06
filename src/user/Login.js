import React, { Component } from "react";
import "./Login.scss";

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
      <div className="bg">
        <div className="login">
          <h1>MangoTodo</h1>
          <div>
            <input type="text" placeholder="아이디" />
          </div>
          <div>
            <input type="password" placeholder="비밀번호" />
          </div>
          <div>
            <button onClick={this.handleLogin}>Login</button>
          </div>
          {this.state.isLogin && <h1>버튼을 눌렀습니다.</h1>}
        </div>
      </div>
    );
  }
}

export default Login;
