import {Button, Container, Stack} from "react-bootstrap";
import React, {ChangeEvent, useState} from "react";
import Intro from "./Order/Intro";
import Address from "./Order/Address";


function OrderForm() {

    const [OrderFormProgress, setOrderFormProgress] = useState(0);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [formData, setFormData] = useState({
        firstName: '',
        lastName:  '',
        street:  '',
        streetNr:  '',
        zip:  '',
        city:  ''
    })
    const orderForms = [
        <Intro></Intro>,
        <Address formData={formData} ></Address>
    ]
    return (
        <Container id="order" className={"border"}>
            {orderForms[OrderFormProgress]}

            <Stack direction="horizontal" gap={2} className={"center"}>
                {OrderFormProgress > 0 ?
                    <Button onClick={() => setOrderFormProgress(OrderFormProgress - 1) } variant="primary" className={"center"}>
                        Zurück
                    </Button> : null}
                {OrderFormProgress < orderForms.length-1 ?
                    <Button onClick={() => setOrderFormProgress(OrderFormProgress + 1) } variant="primary" className={"center"}>
                        Weiter
                    </Button> : null}
            </Stack>
        </Container>

    );
}
export function changeHandler(e: ChangeEvent, formik: any, props: any): any {
    const formikChange = formik.handleChange(e)
    const {name, value} = e.currentTarget as HTMLInputElement;
    console.log(formik.errors)
    if (!formik.errors[name] === undefined) {
        console.log(formik.errors[name])
        props.formData[name] = value;
    }
    return formikChange;
}

export default OrderForm;
