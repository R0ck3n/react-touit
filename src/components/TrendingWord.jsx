import { Component } from "react";
import "./TrendingWord.css";

class TrendingWord extends Component {
    render() {
        const { word, occurence } = this.props;
        return (
            <div className="trendingWord-container">
                <p>
                    {word}
                    <span>:</span>
                </p>
                <p>{occurence}</p>
            </div>
        );
    }
}

export default TrendingWord;
