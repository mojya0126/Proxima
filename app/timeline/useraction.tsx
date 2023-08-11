'use client'
import { Contenttype } from "../types"
import { addtimelinecontents } from "../dataaccess"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Useractionbutton() {
    let [isOpen, setisOpen] = useState(false);
    let [inputValue, setInputValue] = useState("Hello!");

    function isopenclick() {
        setisOpen(!isOpen);
    };

    async function sendclick(inputValue: string) {
        let addcontent: Contenttype = {
            "id": uuidv4(),
            "userid": "guest",
            "username": "GUEST",
            "content": inputValue,
            "timestamp": "----------"
        };
        await addtimelinecontents(addcontent);
    };

    return (
        <div>
            <div className={isOpen ?
                "w-[58vw] bg-black rounded-lg mb-2 mx-[1vw] duration-500 absolute bottom-0 right-0" :
                "w-[58vw] bg-black rounded-lg mb-2 mx-[1vw] duration-500 absolute bottom-0 right-[-100%]"
            }>
                <div>
                    <div className="p-4">
                        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                    </div>
                    <button onClick={() => sendclick(inputValue)} className="w-28 p-5 rounded-lg border border-white text-white mb-2 ml-[1vw] relative">
                        <span className="absolute translate-x-[-50%] translate-y-[-50%]">Send</span>
                    </button>
                </div>
            </div>
            <div className="fixed bottom-4 right-[2vw]">
                <button onClick={isopenclick} className={isOpen ?
                    "w-28 p-5 rounded-lg border bg-white border-white text-black duration-500 overflow-hidden relative" :
                    "w-28 p-5 rounded-lg border bg-black border-white text-white duration-500 overflow-hidden relative"
                }>
                    <span className={isOpen ?
                        "text-white duration-500 absolute left-[-100%] translate-x-[-50%] translate-y-[-50%]" :
                        "text-white duration-500 absolute left-[50%] translate-x-[-50%] translate-y-[-50%]"
                    }>
                        Open
                    </span>
                    <span className={isOpen ?
                        "text-black duration-500 absolute right-[50%] translate-x-1/2 translate-y-[-50%]" :
                        "text-black duration-500 absolute right-[-100%] translate-x-1/2 translate-y-[-50%]"
                    }>
                        Close
                    </span>
                </button>
            </div>
        </div >
    );
};