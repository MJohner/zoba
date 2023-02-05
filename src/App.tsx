import React from 'react';

import './App.css';
import {Button, Container} from "react-bootstrap";
import Header from "./view/components/Header";
import Body from "./view/components/Body";
import Footer from "./view/components/Footer";

function App() {
    return (
        <Container id="page" className={"border"}>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </Container>

    );
}

export default App;
