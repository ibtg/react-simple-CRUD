import React, { Component } from 'react';

class TOC extends Component {
  // 상위 컴포넌트가 렌더링되면, 하위 컴포넌트도 다시 렌더링 된다
  // 하지만 이때, TOC 부분에서 바뀐 것이 없을 때,
  // 다시 TOC 컴포넌트를 렌더링 하지 않도록 하기 위해서
  // ShoudComponentUpdate 함수를 사용한다
  shouldComponentUpdate(newProps, newState) {
    //props, state가 바뀌었을 때 바뀐 값이 인자로 전달된다
    //console.log('shouldComponentUpdate: ', newProps.data, this.props.data);
    if (newProps.data === this.props.data) {
      return false;
    }
    return true;
    // true면 아래 render 함수 호출, false 면 호출하지 않는다
  }

  render() {
    let lists = [];
    let data = this.props.data;

    for (let i = 0; i < data.length; i++) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={'/content/' + data[i].id}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {/* 
              위의 data-id 사용하지 않는 경우는 아래와 같이 수정 
            <a
            href={'/content/' + data[i].id}
            onClick={function (id, e) {
              //console.log(e.target.dataset.id)
              e.preventDefault();
              this.props.onChangePage(id); // TOC에서 App.js에 있는ㄴ 함수를 실행시키는 것이다
            }.bind(this, data[i].id)}
          >
            */}
            {data[i].title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
