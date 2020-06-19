import React, { Component } from 'react';

class Control extends Component {
  //클래스 소속함수는 function 키워드 생략한다
  //컴포넌트는 반드시 하나의 최상위 태그로 시작해야 한다
  //여기선 header가 최상위

  render() {
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode('create');
            }.bind(this)}
          >
            Create
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode('update');
            }.bind(this)}
          >
            Update
          </a>
        </li>
        <li>
          <input
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode('delete');
            }.bind(this)}
            type="button"
            value="delete"
          />
        </li>
      </ul>
    );
  }
}

export default Control;
