import { Contenttype } from "./types"

export async function gettimelinecontents(): Promise<Contenttype[]> {
    let response = await fetch('http://172.30.25.67:3001/contents', {
        cache: "no-store" 
    });
    let contents = await response.json();
    return contents;
}

export async function addtimelinecontents(addcontent:Contenttype): Promise<Contenttype> {
    let response = await fetch('http://172.30.25.67:3001/contents', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' } ,
        body: JSON.stringify(addcontent)
    });
    let newcontent = await response.json();
    return newcontent;
}