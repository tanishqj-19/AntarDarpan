import { questionAnswer } from "./ai"

const createURL = (path: string) => {
    return window.location.origin + path
}


export const createNewEntry =  async () => {

    const res = await fetch(new Request(createURL('/api/journal')), {
        method: 'POST',
    })
    
    if(res.ok){
        const data = await res.json()
        return data.data
    }
}


export const updateEntry = async (id: any, content: any) => {

    const res = await fetch(new Request(createURL(`/api/journal/${id}`), {
        method: 'PATCH', 
        body: JSON.stringify({ content  })
    }))

    if(res.ok){
        const data = await res.json()
        return data.data;
    }


    return {error: true, messageForUI: 'Your entry is not updated!!'}
    
}

export const askQuestion = async question => {
    const res = await fetch(new Request(createURL(`/api/question`), {
        method: 'POST', 
        body: JSON.stringify({ question })
    }))

    if(res.ok){
        const info = await res.json()
        return info.data;
    }


    return {error: true, messageForUI: 'Your entry is not updated!!'}
}