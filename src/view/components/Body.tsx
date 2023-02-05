import OrderForm from "./OrderForm";
import {Button, Container} from "react-bootstrap";
import React, {useState} from "react";

function Body(props: any) {
    const [showOrderForm, setShowOrderForm] = useState(false);
return(
    <Container>
        {!showOrderForm ?
            <Button onClick={() => setShowOrderForm(!showOrderForm) } variant="primary" className={"center"}>
            Ich möchte eine Züpfenbestellung machen
        </Button> :
            <OrderForm></OrderForm>}


    </Container>

);
}

export default Body;
