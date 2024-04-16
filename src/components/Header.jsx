import { Component } from "react";
import "./Header.css";
import logo from "../imgs/logo.jpg";
import Logo from "./Logo";

class Header extends Component {
    render() {
        //const { title, subtitle, changeOrder, state } = this.props;
        return (
            <header>
                <div>
                    <Logo logo={logo} />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-house"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                                </svg>
                                <p>Home</p>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-person-square"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                </svg>
                                <p>Se connecter</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
