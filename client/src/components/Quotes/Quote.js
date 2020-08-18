import React from "react";
import QuoteAndAuthor from "../Quotes/QuoteAndAuthor.js";
import quotes from "../Quotes/QuoteDatabase.js";
import "../Quotes/Quote.css";

class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
    
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes)
  };

  randomColor() {
    const colors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA']

    const color = 

    colors[Math.floor(Math.random() * colors.length)];

    return color;
  }
  
  render() {
    return (
      <div>
        <QuoteAndAuthor
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default Quote;


// randomColor() {
//   const color = `rgb(
//     ${Math.floor(Math.random() * 155)},
//     ${Math.floor(Math.random() * 155)},
//     ${Math.floor(Math.random() * 155)})`;
//   return color;
// }