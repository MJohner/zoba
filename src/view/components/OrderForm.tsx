import {Button, Container, Stack} from "react-bootstrap";
import Header from "./Header";
import React, {useState} from "react";
import Intro from "./Order/Intro";
import Address from "./Order/Address";


function OrderForm() {

    const [orderFromProgress, setOrderFromProgress] = useState(0);
    const [formData, setFormData] = useState({})
    const orderForms = [
        <Intro></Intro>,
        <Address formData={formData} ></Address>
    ]
    return (
        <Container id="order" className={"border"}>
            {orderForms[orderFromProgress]}

            <Stack direction="horizontal" gap={2} className={"center"}>
                {orderFromProgress > 0 ?
                    <Button onClick={() => setOrderFromProgress(orderFromProgress - 1) } variant="primary" className={"center"}>
                        Zurück
                    </Button> : <div></div>}
                {orderFromProgress < orderForms.length-1 ?
                    <Button onClick={() => setOrderFromProgress(orderFromProgress + 1) } variant="primary" className={"center"}>
                        Weiter
                    </Button> : <div></div>}
            </Stack>
        </Container>

    );
}

export default OrderForm;
