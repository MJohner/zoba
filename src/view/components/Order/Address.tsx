import React from "react";
import {Container, Form, Stack} from "react-bootstrap";
import { useFormik} from "formik";
import {number, object, string} from "yup";
import {changeHandler} from "../OrderForm";

const addressSchema = object({
    firstName: string().required("Bitte Vornamen eingeben").max(50, "Dieses Feld darf nicht grösser sein als 50 Zeichen"),
    lastName: string().required("Bitte Nachnamen eingeben").max(50, "Dieses Feld darf nicht grösser sein als 50 Zeichen"),
    street: string().required("Bitte Strasse eingeben").max(50, "Dieses Feld darf nicht grösser sein als 50 Zeichen"),
    streetNr: string().required("Bitte Hausnummer eingeben").max(10, "Dieses Feld darf nicht grösser sein als 10 Zeichen"),
    zip: number().required("Bitte Postleitzahl eingeben").integer("Bitte eine Zahl eingeben").max(9999, "Die PLZ sollte unter 9999 sein").min(1000, "Die PLZ muss grösser als 1000 sein"),
    city: string().required("Bitte Strasse eingeben").max(100, "Dieses Feld darf nicht grösser sein als 100 Zeichen"),
});

function Address(props: any) {
    const formik = useFormik({

        initialValues: {
            firstName: props.formData.firstName,
            lastName: props.formData.lastName,
            street: props.formData.street,
            streetNr: props.formData.streetNr,
            zip: props.formData.zip,
            city: props.formData.city
        },
        validationSchema: addressSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },

    })

    return (
        <Container>
            <p className="text-start">Bitte hier angeben, an wen und wohin die Züpfen geliefert werden sollen.</p>
            <Form onSubmit={formik.handleSubmit}>

                <Stack direction="horizontal" gap={2} className={"center"}>
                    <Form.Group className="mb-3">
                        <Form.Label>Vorname</Form.Label>
                        <Form.Control type="text"
                                      name="firstName"
                                      id="firstName"
                                      value={formik.values.firstName}
                                      onChange={e => changeHandler(e, formik, props)}

                        ></Form.Control>
                        <Form.Text>{formik.errors.firstName ?
                            <div>{formik.errors.firstName as string}</div> : null}</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Nachname</Form.Label>
                        <Form.Control type="text"
                                      id="lastName"
                                      name="lastName"
                                      value={formik.values.lastName}
                                      onChange={e => changeHandler(e, formik, props)}
                        ></Form.Control>
                        <Form.Text>{formik.errors.lastName ?
                            <div>{formik.errors.lastName as string}</div> : null}</Form.Text>
                    </Form.Group>
                </Stack>
                <Stack direction="horizontal" gap={2} className={"center"}>
                    <Form.Group className="mb-3">
                        <Form.Label>Strasse</Form.Label>
                        <Form.Control type="text"
                                      name="street"
                                      id="street"
                                      value={formik.values.street}
                                      onChange={e => changeHandler(e, formik, props)}
                        ></Form.Control>
                        <Form.Text>{formik.errors.street ?
                            <div>{formik.errors.street as string}</div> : null}</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Hausnummer</Form.Label>
                        <Form.Control type="text"
                                      name="streetNr"
                                      id="streetNr"
                                      value={formik.values.streetNr}
                                      onChange={e => changeHandler(e, formik, props)}>

                        </Form.Control>
                        <Form.Text>{formik.errors.streetNr ?
                            <div>{formik.errors.streetNr as string}</div> : null}</Form.Text>
                    </Form.Group>
                </Stack>
                <Stack direction="horizontal" gap={2} className={"center"}>
                    <Form.Group className="mb-3">
                        <Form.Label>PLZ</Form.Label>
                        <Form.Control type="number"
                                      name="zip"
                                      id="zip"
                                      value={formik.values.zip}
                                      onChange={e => changeHandler(e, formik, props)}>

                        </Form.Control>
                        <Form.Text>{formik.errors.zip ? <div>{formik.errors.zip as string}</div> : null}</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Ort</Form.Label>
                        <Form.Control type="text"
                                      name="city"
                                      id="city"
                                      value={formik.values.city}
                                      onChange={e => changeHandler(e, formik, props)}>
                        </Form.Control>
                        <Form.Text>{formik.errors.city ? <div>{formik.errors.city as string}</div> : null}</Form.Text>
                    </Form.Group>
                </Stack>
            </Form>

        </Container>
    );
}

export default Address;
