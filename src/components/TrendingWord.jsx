import { Component } from "react";
import "./TrendingWord.css";

class TrendingWord extends Component {
    render() {
        const { word, occurence } = this.props;
        return (
            <li className="trendingWord-container">
                <div>
                    <p>
                        {word}
                        <span>:</span>
                    </p>
                </div>
                <p>{occurence}</p>
            </li>
        );
    }
}

export default TrendingWord;
