import { Component } from "react";
import btnPic from "../imgs/btn.png";
import "./Button.css";

class Button extends Component {
    render() {
        const { text } = this.props;
        return (
            <div className="btn-container">
                <div>
                    <button>
                        <img src={btnPic} alt="" />
                        <span>{text}</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Button;
