import { Component } from "react";
import "./SendMessageForm.css";
import Button from "./Button";

class SendMessageForm extends Component {
    render() {
        return (
            <div className="sendMessage-container">
                <form>
                    <div>
                        <label htmlFor="pseudo"></label>
                        <input
                            type="text"
                            name="pseudo"
                            id="pseudo"
                            placeholder="Enter pseudo..."
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
