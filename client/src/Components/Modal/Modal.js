import { Button, Modal, FloatingLabel, Form, Container } from 'react-bootstrap';
function ModalCom({ handleClose, show }) {
    return <>
        <Modal show={show} centered>
            <Modal.Header>
                <Modal.Title>Tweet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
                <FloatingLabel controlId="floatingTextarea2" label="Your Thoughts">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleClose()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default ModalCom