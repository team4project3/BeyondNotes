import React from "react";

class QuoteAndAuthor extends React.Component {
    render () {
        const randomColor = this.props.displayColor();
        const html = document.documentElement;
        html.style.backgroundColor = randomColor;

        return (
            <div style = {{ backgroundColor: "#616161" }} className="quotebox z-depth-5">
                <div 
                className="fadeIn"
                key={Math.random()}
                style={{ color: randomColor }}>
                    <h1 id="quote">"{this.props.quote}"</h1>
                    <h5 id="author">-{this.props.author ? this.props.author: "Unknown"}-</h5>
                </div>
                <button style={{ backgroundColor: randomColor }}
                id="newquote"
                onClick={this.props.handleClick}>
                    New Quote
                </button>
            </div>
        );
    }
}

export default QuoteAndAuthor;