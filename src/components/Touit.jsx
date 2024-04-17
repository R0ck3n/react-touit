import { Component } from "react";
import { Helpers } from "../helpers/Helpers";
import "./Touit.css";

class Touit extends Component {
    render() {
        const { pseudo, message, date } = this.props;

        return (
            <div className="touit-container">
                <h4>{pseudo}</h4>
                <p>{Helpers.dateConverter(date)}</p>
                <p>{message}</p>
            </div>
        );
    }
}

export default Touit;
