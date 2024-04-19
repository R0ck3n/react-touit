import React, { Component } from "react";
import { TouiteurAPI } from "../api/TouiteurAPI.js";
import SendMessageForm from "./SendMessageForm";
import Trending from "./Trending";
import "./Main.css";
import TouitContainer from "./TouitContainer.jsx";

class Main extends Component {
    // Interval de rafraîchissement en secondes
    cronInterval = 10;

    // Stocker l'ID de l'intervalle pour le nettoyer plus tard
    refreshInterval = null;

    // Nombre de trend affichée
    trendCount = 10;

    //last timestamp
    lastTimestamp = 0;

    constructor(props) {
        super(props);
        this.api = new TouiteurAPI();
        this.state = {
            touits: [],
            trends: this.api.getTrends(this.trendCount),
            pseudoSendMessage: "",
            messageSended: "",
        };
    }

    async componentDidMount() {
        this.refresh();
        this.refreshInterval = setInterval(
            () => this.refresh(),
            this.cronInterval * 1000
        );
    }

    componentWillUnmount() {
        if (this.refreshInterval !== false) {
            clearInterval(this.refreshInterval);
        }
    }

    refresh = async () => {
        console.log("refresh");
        if (this.lastTimestamp !== 0) {
            const newTouits = await this.api.getTouitSince(this.lastTimestamp);

            if (newTouits.messages.length > 0) {
                let newTouitList = [
                    ...this.state.touits,
                    ...newTouits.messages,
                ];

                let filteredTouitList = newTouitList.filter(
                    (objet, index, self) =>
                        self.findIndex((t) => t.id === objet.id) === index
                );

                this.setState({ touits: filteredTouitList });
                this.lastTimestamp = newTouits.ts;
            }
        } else {
            const touits = await this.api.getAllTouit();
            this.setState({ touits });
            this.lastTimestamp = touits[touits.length - 1].ts;
        }
    };

    sendMessage = (pseudo, message) => {
        // Gérer l'envoi du message
        this.api.sendTouit(pseudo, message);
        this.refresh();
    };

    render() {
        const { touits, trends } = this.state;
        return (
            <main className="main">
                <div className="left-container">
                    <section>
                        <SendMessageForm send={this.sendMessage} />
                    </section>
                    <section>
                        <Trending words={trends} />
                    </section>
                </div>
                <div className="right-container">
                    <section>
                        <TouitContainer touits={touits} api={this.api} />
                    </section>
                </div>
            </main>
        );
    }
}

export default Main;
