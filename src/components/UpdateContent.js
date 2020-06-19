import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    this.InputFormHanlder = this.InputFormHanlder.bind(this);
  }
  InputFormHanlder(e) {
    this.setState({ [e.target.name]: e.target.value });
    //e.target.name은 title이 될 수도, desc가 될 수도 있다
    //이 값이 setState 함수에 의해서 ,state 값인 id, title값이 바뀌고
    // 아래 input 태그의 value 속성의 값으로 바뀐 value 값이 들어가게 된다
  }

  render() {
    console.log('UpdateContent render');

    return (
      <article>
        <h2>Update</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id} />
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.InputFormHanlder}
            />
          </p>

          <p>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="10"
              value={this.state.desc}
              onChange={this.InputFormHanlder}
            ></textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
