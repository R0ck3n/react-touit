import { Component } from "react";
import "./Logo.css";

class Logo extends Component {
    render() {
        return (
            <>
                <div className="logo-container">
                    <img src={this.props.logo} alt="logo du site" />
                    <span>-</span>
                    <p>touit</p>
                </div>
                <h1 className="slogan">
                    Un réseau sans maîtres, où chaque voix comh1te.
                </h1>
            </>
        );
    }
}

export default Logo;
