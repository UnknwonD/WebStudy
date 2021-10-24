import { deleteDoc, doc, updateDoc } from "@firebase/firestore";
import { dbService } from "myBase";
import React, { useState } from "react";

const Dweet = ({ dweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newDweet, setNewDweet] = useState(dweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this dweet?");
        if(ok) {
            //delete dweet
            //백틱 ` 문자 입력하는 방법 -> ₩ 문자를 한/영 키를 누룬 후 해주면 됨 ```````
            await deleteDoc(doc(dbService, "dweets", `${dweetObj.id}`))
        }
    };

    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        await updateDoc(doc(dbService, "dweets", `${dweetObj.id}`), {text: newDweet});
        setEditing(false);
    };
    const onChange = (event) => {
        const {target : {value}} = event;
        setNewDweet(value);
    };

    return (
    <div>
        {
            editing ? (
            <>
            <form onSubmit={onSubmit}> 
                <input type="text" placeholder="Edit your Dweet" value ={newDweet} onChange={onChange} required/>
                <input type="submit" value="Update Dweet" />
            </form>
            <button onClick={toggleEditing}>Cancel</button>
            </>
             ):(
        <>
        <h4> {dweetObj.text} </h4>
            {isOwner && (
            <> 
            <button onClick={onDeleteClick} >Delete Dweet</button>
            <button onClick={toggleEditing}>Edit Dweet</button> 
            </>
        )} 
        </>
        )
        }
    </div>
)};

export default Dweet;