import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import DeleteNote from "./DeleteNote";

const App = () => {

    const [addItem, setItem] = useState([]);

    const addNote = (note) => {
        setItem((prevData) => {
            return [...prevData, note];
        });
    };

    const onDelete = (id) => {
        setItem((olddata) => {
            return olddata.filter((currdata, ind) => {
                return (ind !== id);
            }) 
        });
    };

    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />

            {
                addItem.map((val, ind) => {
                    return (
                        <DeleteNote
                            key={ind}
                            id={ind}
                            title={val.title}
                            content={val.content}
                            deleteItem={onDelete}
                        />
                    );
                })
            }
            <Footer />
        </>

    )
};

export default App;

