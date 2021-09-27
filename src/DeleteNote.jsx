import React from "react";
import Button from '@mui/material/Button';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const DeleteNote = (props) => {

    const delNote = () => {
        props.deleteItem(props.id);
    };

    return (
        <>
            <div className="note d-inline-flex m-auto justify-content-between ">
                <div className=" card notes m-3">
                    <div className="card-body" >
                        <h1 className="card-title createTit">{props.title}</h1>
                        <br />
                        <p className="card-text createTxt">{props.content}</p>
                        <Button className="crBtn" onClick={delNote}>
                            <DeleteOutlineIcon className="delete crBtn" />
                        </Button>
                    </div>

                </div>
            </div>

        </>
    );
};

export default DeleteNote;