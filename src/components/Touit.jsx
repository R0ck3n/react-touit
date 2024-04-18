import { Component } from "react";
import { Helpers } from "../helpers/Helpers";
import Button from "./Button.jsx";
import "./Touit.css";

class Touit extends Component {
    constructor(props) {
        super(props);
        const { likes, id, localLikes } = this.props;
        this.state = {
            isLiked: localLikes?.[id.toString()] || false,
            likeState: likes,
        };
    }

    addlike = () => {
        const { id, api, saveAddlike } = this.props;
        const { isLiked, likeState } = this.state;
        api.addLike(id);
        saveAddlike(id);
        this.setState({
            isLiked: !isLiked,
            likeState: likeState + 1,
        });
    };

    removelike = () => {
        const { id, api, saveRemovelike } = this.props;
        const { isLiked, likeState } = this.state;
        api.removeLike(id);
        saveRemovelike(id);
        this.setState({
            isLiked: !isLiked,
            likeState: likeState - 1,
        });
    };

    render() {
        const { pseudo, message, date } = this.props;
        const { likeState, isLiked } = this.state;
        return (
            <div className="touit-container">
                <h4>{pseudo}</h4>
                <p className="touit-date">{Helpers.dateConverter(date)}</p>
                <p className="touit-likes">{"Likes : " + likeState}</p>
                <p className="touit-msg">{message}</p>
                {isLiked ? (
                    <Button text="remove like" onclick={this.removelike} />
                ) : (
                    <Button text="add like" onclick={this.addlike} />
                )}
            </div>
        );
    }
}

export default Touit;
