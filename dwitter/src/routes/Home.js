import { dbService } from "myBase";
import React, { useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, orderBy, query } from "@firebase/firestore";
import Dweet from "components/Dweet";

const Home = ( { userObj } ) => {

    const [dweet, setDweet] = useState("");
    const [dweets, setDweets] = useState([]);
    /*
    foreach를 사용하는 방법
    const getDweets = async () => {
        const dbdweets = await getDocs(collection(dbService, "dweets"));
         // 잘 모르겠지만, 콘솔 로그 했을 때, doc이 제대로 나오지 않음. forEach 혹은 위에 getDocs에 문제가 있는 것으로 보임.
        dbdweets.forEach(document => {
            const dweetObject = {
                ...document.data(),
                id: document.id,
            }

        //useState를 이용한 set함수를 이용할 때, 함수를 전달할 수 있음, 함수를 전달하게 되면 리액트에서 이전 값에 접근할 수 있게 해줌
            setDweets(prev => [dweetObject, ...prev]);
        });
    };
*/
    useEffect(() => {
        const q = query(collection(dbService, "dweets"), orderBy("createAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const dweetArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setDweets(dweetArray);
        });
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "dweets"), {
                text:dweet,
                createAt:Date.now(),
                creatorId: userObj.uid,
            });
            console.log("Document wrriten with ID:", docRef.id);
        }catch(error) {
            console.log("Error in Adding Document: ", error);
        };
        //Enter가 눌리면 창을 초기화
        setDweet("");
    };
    const onChange = (event) => {
        const {target : {value},} = event;
        setDweet(value);
    };


    return (
        <div>
            <form onSubmit = {onSubmit}>
                <input value = {dweet} onChange={onChange} type='text' placeholder='What is on your mind?' maxLength={120} />
                <input type='submit' value="Dweet" />
            </form>
                <div>
                    {dweets.map(dweet => (
                    <Dweet key={dweet.id} dweetObj={dweet} isOwner={dweet.creatorId === userObj.uid} />
                    ))}
                </div>
        </div>

    )
}

export default Home;