import { Component } from "react";
import "./Main.css";
import SendMessageForm from "./SendMessageForm";
import Trending from "./Trending";

class Main extends Component {
    render() {
        //const { title, subtitle, changeOrder, state } = this.props;
        return (
            <main className="main">
                <div className="left-container">
                    <SendMessageForm />
                    <Trending />
                </div>
                <div className="right-container"></div>
            </main>
        );
    }
}

export default Main;
