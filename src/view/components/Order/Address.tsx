import React from "react";
import {Container, Form, Stack} from "react-bootstrap";
import {Formik} from "formik";
import {number, object, string} from "yup";

const addressSchema = object({
    firstName: string().required("Bitte Vornamen eingeben").max(50),
    lastName: string().required("Bitte Nachnamen eingeben").max(50),
    street: string().required("Bitte Strasse eingeben").max(50),
    streetNr: string().required("Bitte Hausnummer eingeben").max(10),
    zip: number().required("Bitte Postleitzahl eingeben").positive().integer().max(9999).min(1000),
    city: string().required("Bitte Strasse eingeben").max(50),
});


function Address(props: any) {

    return (
        <Container>

            <p className="text-start">Namen und Adresse</p>
            <Formik initialValues={{
                firstName: props.formData.firstName,
                lastName: props.formData.lastName,
                street: props.formData.street,
                streetNr: props.formData.streetNr,
                zip: props.formData.zip,
                city: props.formData.city
            }}
                    validationSchema={addressSchema}
                    onSubmit={async (values) => {
                        alert(JSON.stringify(values, null, 2))}}>
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                  }) =>
                    (<Form>
                        <Stack direction="horizontal" gap={2} className={"center"}>
                            <Form.Group className="mb-3">
                                <Form.Label>Vorname</Form.Label>
                                <Form.Control type="text"
                                              name="firstname"
                                              value={values.firstName}
                                              onChange={handleChange}
                                              isValid={touched.firstName && !errors.firstName}

                                ></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nachname</Form.Label>
                                <Form.Control type="text"
                                              name="lastName"
                                              value={values.lastName}
                                              onChange={handleChange}
                                              isValid={touched.lastName && !errors.lastName}
                                ></Form.Control>
                            </Form.Group>
                        </Stack>
                        <Stack direction="horizontal" gap={2} className={"center"}>
                            <Form.Group className="mb-3">
                                <Form.Label>Strasse</Form.Label>
                                <Form.Control type="text"
                                              name="street"
                                              value={values.street}
                                              onChange={handleChange}
                                              isValid={touched.street && !errors.street}

                                ></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Hausnummer</Form.Label>
                                <Form.Control type="text"
                                              name="streetNr"
                                              value={values.streetNr}
                                              onChange={handleChange}
                                              isValid={touched.streetNr && !errors.streetNr}>

                                </Form.Control>
                            </Form.Group>
                        </Stack>
                        <Stack direction="horizontal" gap={2} className={"center"}>
                            <Form.Group className="mb-3">
                                <Form.Label>PLZ</Form.Label>
                                <Form.Control type="text"
                                              name="zip"
                                              value={values.zip}
                                              onChange={handleChange}
                                              isValid={touched.zip && !errors.zip}>

                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Ort</Form.Label>
                                <Form.Control type="text"
                                              name="city"
                                              value={values.city}
                                              onChange={handleChange}
                                              isValid={touched.city && !errors.city}>
                                </Form.Control>
                            </Form.Group>
                        </Stack>

                    </Form>)}
            </Formik>

        </Container>
    );
}

export default Address;
