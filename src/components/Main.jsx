import React, { Component } from "react";
import { Api } from "../api/Api.js";
import SendMessageForm from "./SendMessageForm";
import Trending from "./Trending";
import Touit from "./Touit";
import "./Main.css";

class Main extends Component {
    cronInterval = 10; // Interval de rafraîchissement en secondes
    refreshInterval = null; // Stocker l'ID de l'intervalle pour le nettoyer plus tard

    constructor(props) {
        super(props);
        this.state = {
            touits: [],
            lastTimestamp: 0,
            pseudoSendMessage: "",
            messageSended: "",
        };

        this.api = new Api();
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
    };

    render() {
        return (
            <main className="main">
                <div className="left-container">
                    <SendMessageForm send={this.sendMessage} />
                    <Trending />
                </div>
                <div className="right-container">
                    {this.state.touits
                        .sort((a, b) => b.ts - a.ts)
                        .map(({ id, name, message, ts }) => (
                            <Touit
                                key={id}
                                pseudo={name}
                                message={message}
                                date={ts}
                            />
                        ))}
                </div>
            </main>
        );
    }
}

export default Main;
