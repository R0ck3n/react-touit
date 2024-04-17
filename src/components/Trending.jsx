import { Component } from "react";
import "./Trending.css";
import TrendingWord from "./TrendingWord";

class Trending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        const { words } = this.props;
        words.then((res) => {
            this.setState({ data: res });
        });
    }

    render() {
        const { data } = this.state;

        if (!data) {
            return <div className="loading-text">Loading...</div>;
        }

        return (
            <div className="trending-container">
                <h3>Trending</h3>
                {data.map(({ word, occurence }) => (
                    <TrendingWord
                        key={word}
                        word={word}
                        occurence={occurence}
                    />
                ))}
            </div>
        );
    }
}

export default Trending;
