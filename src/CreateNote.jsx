import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) => {
        // const value=event.target.value;
        // const name=event.target.name;

        const { name, value } = event.target;

        setNote((prevData) => {
            return ({
                ...prevData,
                [name]: value,
            });
        });

    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }



    return (
        <>
            <div className="card notes m-auto my-3">
                <div className="card-header">
                    Short Notes Taking App
                </div>
                <form className="card-body">
                    <input type="text" className="card-title createTit" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" />
                    <br />
                    <textarea rows="" column="" className="card-text createTxt" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note..."></textarea>
                    <br />
                    <Button className="crBtn" onClick={addEvent}>
                        <AddIcon className="plus_sign crBtn" />
                    </Button>
                </form>
            </div>

        </>
    );
};

export default CreateNote;