import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReadContent from './components/ReadContent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    // 데이터를 추가할 때(Create 기능을 사용할 때) 사용하는 정보일 뿐 ui에 영향을 주지 않으므로 state 값으로 주지 않는다
    this.state = {
      mode: 'welcome',
      selected_content_id: 1,
      subject: { title: 'WEB', sub: 'World Wide Web' },
      welcome: { title: 'Welcome', desc: 'Hello React!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HypterText Markup Language' },
        { id: 2, title: 'CSS', desc: 'Cascading Style Sheets' },
        {
          id: 3,
          title: 'JavaScript',
          desc: 'JavaScript is programming language for Web pages',
        },
      ],
    };
  }

  getReadContent() {
    for (let i = 0; i < this.state.contents.length; i++) {
      const data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        console.log('getReadContent returns is: ', data);
        return data;
      }
    }
  }

  getContent() {
    console.log('App render ');
    let _title, _desc, _article;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      let _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    }
    return _article;
  }

  render() {
    return (
      // 가장 최상위 태그는 div
      <div className="App">{this.getContent()}</div>
    );
  }
}

export default App;
