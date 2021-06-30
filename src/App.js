import React, { useRef } from "react";
import Header from "./containers/header/Header";
import Body from "./containers/body/Body";

const App = () => {
    const forPrint = useRef();

    return (
        <div ref={forPrint}>
            <Header refs={forPrint} />
            <Body />
        </div>
    );
};

export default App;
