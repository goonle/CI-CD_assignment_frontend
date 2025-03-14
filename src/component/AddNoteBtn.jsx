import React from 'react';
import Button from "react-bootstrap/Button";

function AddNoteBtn(props) {
    const {clickHandler} = props;
    return (
        <div className="d-flex justify-content-end mb-3">
            <Button variant="primary" className="mb-3" onClick={clickHandler}>Add Note</Button>
        </div>
    );
}

export default AddNoteBtn;