import React, { Component } from 'react';

class CreateContent extends Component {
  render() {
    console.log('CreateContent render');

    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault(); // action으로 인해서 페이지가 바뀌지 못하게
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title" />
          </p>
          <p>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="10"
              placeholder="description"
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

export default CreateContent;
