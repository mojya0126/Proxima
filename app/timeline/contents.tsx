'use client'
import { useEffect, useState } from "react";
import { Contenttype } from "../types"
import { gettimelinecontents } from "../dataaccess"

export default function Contents() {
    let [contentdata, setContentData] = useState<Contenttype[]>([]);
    async function fetchData() {
        let data: Contenttype[] = await gettimelinecontents();
        data.reverse();
        setContentData(data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <div className="mt-3 mx-2 grid grid-cols-1 gap-3">
                <div>
                    <button onClick={fetchData} className="border border-gray-300 py-2 px-8">更新</button>
                </div>
                {contentdata.map((content: Contenttype) => (
                    <div key={content.id} className="">
                        <div className="" key={content.id}>
                            <div className="content-item">
                                <div className="border-y border-gray-300 p-4 hover:border-gray-500 transition duration-500">
                                    <div className="">
                                        <a className="">{content.username}</a>
                                        <span className="text-xs ml-2">-{content.userid}-</span>
                                    </div>
                                    <div className="break-words whitespace-pre-wrap text-left">{content.content}</div>
                                    <div className="text-gray-500 text-sm mt-2">{content.timestamp}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </div >
    );
};