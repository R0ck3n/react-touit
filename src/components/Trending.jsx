import { Component } from "react";
import "./Trending.css";
import TrendingWord from "./TrendingWord";

class Trending extends Component {
    render() {
        return (
            <div className="trending-container">
                <h3>Trending</h3>
                <TrendingWord word="tata" occurence={5120} />
            </div>
        );
    }
}

export default Trending;
