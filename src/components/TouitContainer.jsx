import { Component } from "react";
import "./TouitContainer.css";
import Touit from "./Touit";

class TouitContainer extends Component {
    localLikes = JSON.parse(localStorage.getItem("likes")) ?? {};

    saveAddlike = (id) => {
        this.localLikes[id.toString()] = true;
        localStorage.setItem("likes", JSON.stringify(this.localLikes));
    };

    saveRemovelike = (id) => {
        delete this.localLikes[id.toString()];
        localStorage.setItem("likes", JSON.stringify(this.localLikes));
    };

    render() {
        const { touits, api } = this.props;

        if (touits.length === 0) {
            return <div className="loading-touits">Loading...</div>;
        }

        return (
            <>
                {touits
                    .sort((a, b) => b.ts - a.ts)
                    .map(({ id, name, message, ts, likes }) => (
                        <Touit
                            key={id}
                            pseudo={name}
                            message={message}
                            likes={likes}
                            date={ts}
                            id={id}
                            api={api}
                            localLikes={this.localLikes}
                            saveAddlike={this.saveAddlike}
                            saveRemovelike={this.saveRemovelike}
                        />
                    ))}
            </>
        );
    }
}

export default TouitContainer;
