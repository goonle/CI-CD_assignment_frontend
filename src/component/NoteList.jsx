import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";

const categories = ["To-Do", "In Progress", "Done"];

const NoteList = ({notes}) => {
    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Kanban Board</h1>
            <Row className="d-flex justify-content-center">
                {categories.map((category, index) => (
                    <Col md={4} key={index}>
                        <h4 className="text-center">{category}</h4>
                        <div className="kanban-column p-2 bg-light rounded" style={{minHeight: "300px"}}>
                            {/*{notes*/}
                            {/*    .filter(note => note.category === category)*/}
                            {/*    .map((note) => (*/}
                            {/*        <Card className="mb-3 shadow-sm" key={note.id}>*/}
                            {/*            <Card.Body>*/}
                            {/*                <Card.Title>{note.title}</Card.Title>*/}
                            {/*                <Card.Text>{note.content}</Card.Text>*/}
                            {/*            </Card.Body>*/}
                            {/*    ))}*/}
                            <Card className="mb-3 shadow-sm" key={1}>
                                <Card.Body>
                                    <Card.Title>{"note.title"}</Card.Title>
                                    <Card.Text>{"note.content"}</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="mb-3 shadow-sm" key={2}>
                                <Card.Body>
                                    <Card.Title>{"note.title"}</Card.Title>
                                    <Card.Text>{"note.content"}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default NoteList;
