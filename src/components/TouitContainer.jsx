import { Component } from "react";
import "./TouitContainer.css";
import Touit from "./Touit";

class TouitContainer extends Component {
    render() {
        const { touits } = this.props;

        return (
            <>
                {touits
                    .sort((a, b) => b.ts - a.ts)
                    .map(({ id, name, message, ts }) => (
                        <Touit
                            key={id}
                            pseudo={name}
                            message={message}
                            date={ts}
                        />
                    ))}
            </>
        );
    }
}

export default TouitContainer;
