import React from 'react';

import './App.css';
import {Button, Container, Stack} from "react-bootstrap";

function App() {
  return (
        <Container>
            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>
        </Container>

  );
}

export default App;
