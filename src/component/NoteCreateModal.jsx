import React from "react";
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SERVER_URL from "../credential/credential";
import axios from "axios";

export default class NoteCreateModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            title: "",
            content: ""
        };

        this.clickCloseModalHandler = this.clickCloseModalHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    clickCloseModalHandler() {
        this.setState({show: false});
        if (this.props.clickCloseModalHandler) {
            this.props.clickCloseModalHandler(); // Ensure parent state updates
        }
    }

    handleSubmit() {
        const {title, content} = this.state;

        if (!title.trim() || !content.trim()) {
            alert("Please enter both title and content!");
            return;
        }

        // Call parent method to add note (if passed as a prop)
        if (this.props.onAddNote) {
            this.props.onAddNote({title, content});
        }

        const token = localStorage.getItem('token');
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${SERVER_URL}/note/create/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            data: {
                title: title,
                content: content
            }
        }
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));

            })
            .catch()

        this.setState({title: "", content: ""});
        this.clickCloseModalHandler(); // Close modal
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.clickCloseModalHandler} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter note title"
                                value={this.state.title}
                                onChange={(e) => this.setState({title: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                placeholder="Enter note content"
                                value={this.state.content}
                                onChange={(e) => this.setState({content: e.target.value})}
                                style={{resize: "none"}}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.clickCloseModalHandler}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Save Note
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
