import React, { Component } from "react";
import { TouiteurAPI } from "../api/TouiteurAPI.js";
import SendMessageForm from "./SendMessageForm";
import Trending from "./Trending";
import Touit from "./Touit";
import "./Main.css";
import TouitContainer from "./TouitContainer.jsx";

class Main extends Component {
    // Interval de rafraîchissement en secondes
    cronInterval = 60;

    // Stocker l'ID de l'intervalle pour le nettoyer plus tard
    refreshInterval = null;

    // Nombre de trend affichée
    trendCount = 10;

    constructor(props) {
        super(props);
        this.api = new TouiteurAPI();
        this.state = {
            touits: [],
            trends: this.api.getTrends(this.trendCount),
            lastTimestamp: 0,
            pseudoSendMessage: "",
            messageSended: "",
        };
    }

    async componentDidMount() {
        await this.refresh(); // Rafraîchir une première fois lors du montage
        this.refreshInterval = setInterval(
            this.refresh.bind(this),
            this.cronInterval * 1000
        ); // Lancer le rafraîchissement périodique
    }

    componentWillUnmount() {
        clearInterval(this.refreshInterval); // Nettoyer l'intervalle lors du démontage
    }

    refresh = async () => {
        if (this.state.lastTimestamp !== 0) {
            const newTouits = await this.api.getTouitSince(
                this.state.lastTimestamp
            );

            if (newTouits.messages.length > 0) {
                let newTouitList = [
                    ...this.state.touits,
                    ...newTouits.messages,
                ];

                let filteredTouitList = newTouitList.filter(
                    (objet, index, self) =>
                        self.findIndex((t) => t.id === objet.id) === index
                );

                this.setState({
                    touits: filteredTouitList,
                    lastTimestamp: newTouits.ts,
                });
            }
        } else {
            const touits = await this.api.getAllTouit();
            this.setState({ touits });
            this.setState({ lastTimestamp: touits[touits.length - 1].ts });
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
                    <SendMessageForm send={this.sendMessage} />
                    <Trending words={trends} />
                </div>
                <div className="right-container">
                    <TouitContainer touits={touits} />
                </div>
            </main>
        );
    }
}

export default Main;
