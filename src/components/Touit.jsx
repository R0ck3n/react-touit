import { Component } from "react";
import { Helpers } from "../helpers/Helpers";
import Button from "./Button.jsx";
import "./Touit.css";

class Touit extends Component {
    constructor(props) {
        super(props);
        const { likes } = this.props;
        this.state = {
            isLiked: false,
            likeState: likes,
        };
    }

    addlike = () => {
        const { id, api } = this.props;
        const { isLiked, likeState } = this.state;
        api.addLike(id);
        this.setState({
            isLiked: !isLiked,
            likeState: likeState + 1,
        });
    };

    removelike = () => {
        const { id, api } = this.props;
        const { isLiked, likeState } = this.state;
        api.removeLike(id);
        this.setState({
            isLiked: !isLiked,
            likeState: likeState - 1,
        });
    };

    render() {
        const { pseudo, message, date } = this.props;
        const { likeState } = this.state;

        return (
            <div className="touit-container">
                <h4>{pseudo}</h4>
                <p className="touit-date">{Helpers.dateConverter(date)}</p>
                <p className="touit-likes">{"Likes : " + likeState}</p>
                <p className="touit-msg">{message}</p>
                {this.state.isLiked ? (
                    <Button text="remove like" onclick={this.removelike} />
                ) : (
                    <Button text="add like" onclick={this.addlike} />
                )}
            </div>
        );
    }
}

export default Touit;
