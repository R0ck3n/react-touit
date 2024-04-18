import { Component } from "react";
import btnPic from "../imgs/btn.png";
import "./Button.css";

class Button extends Component {
    render() {
        const { text, onclick } = this.props;
        return (
            <div className="btn-container">
                <div>
                    <button onClick={onclick}>
                        <img src={btnPic} alt="" />
                        <span>{text}</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Button;
