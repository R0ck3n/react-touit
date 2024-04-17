import { Component } from "react";
import "./SendMessageForm.css";
import Button from "./Button";

class SendMessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "",
        };
    }

    handleText = (ev) => {
        this.setState({ msg: ev.target.value });
    };

    handleForm = (ev) => {
        ev.preventDefault();
        const { send } = this.props;
        const { msg } = this.state;
        this.setState({ msg: "" });

        send(ev.target.pseudo.value, msg);
        //console.log(ev.target.pseudo.value, msg);
    };

    render() {
        return (
            <div className="sendMessage-container">
                <form onSubmit={this.handleForm}>
                    <div>
                        <label htmlFor="pseudo"></label>
                        <input
                            type="text"
                            name="pseudo"
                            id="pseudo"
                            placeholder="Enter pseudo..."
                            onChange={this.handlePseudo}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="touit"></label>
                        <textarea
                            name="touit"
                            id="touit"
                            placeholder="Exprimez-vous librement..."
                            className="sendMessage-textbox"
                            onChange={this.handleText}
                            value={this.state.msg}
                            required
                        ></textarea>
                    </div>
                    <Button text="send" />
                </form>
            </div>
        );
    }
}

export default SendMessageForm;
