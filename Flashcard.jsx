import React, { Component } from 'react';

class Flashcard extends Component {
  constructor(props) {
    super(props);
    // set state to toggle element
    this.state = {
      isFlipped: false,
      flippedContent: this.props.item.answer.content,
      notFlippedContent: this.props.item.question.content,

    };
  }

  componentDidMount() {
    this.setState({ content: this.props.item.question.content })
  }

  flip() {
    if (this.state.isFlipped === false) {
      this.setState({ content: this.state.flippedContent })
    }
    else if (this.state.isFlipped === true) {
      this.setState({ content: this.state.notFlippedContent })
    }
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render () {
    return (
        <div onClick={this.flip.bind(this)}>
          <h4>{ this.state.content }</h4>
        </div>
    )
  }
}

export default Flashcard
