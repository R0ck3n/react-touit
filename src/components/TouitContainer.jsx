import { Component } from "react";
import "./TouitContainer.css";
import Touit from "./Touit";

class TouitContainer extends Component {
    render() {
        const { touits, api } = this.props;
        return (
            <>
                {touits
                    .sort((a, b) => b.ts - a.ts)
                    .map(({ id, name, message, ts, likes }) => (
                        <Touit
                            key={id}
                            pseudo={name}
                            message={message}
                            likes={likes}
                            date={ts}
                            id={id}
                            api={api}
                        />
                    ))}
            </>
        );
    }
}

export default TouitContainer;
