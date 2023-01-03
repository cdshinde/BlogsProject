import axios from "axios"
const apiBaseURL = "http://localhost:9000/blogs"
export const getMonthData =async ()=>{
    const {data} = await axios.get(`${apiBaseURL}/query=month`)
    const res = Object.keys(data).map((key)=>({
        month: key, count: data[key]
    }))
    return res
}
export const getCategoryData =async ()=>{
    const {data} = await axios.get(`${apiBaseURL}/query=category`)
    const res = Object.keys(data).map((key)=>({
        category: key, count: data[key]
    }))
    
    return res
}
export const getLanguageData =async ()=>{
    const {data} = await axios.get(`${apiBaseURL}/query=language`)
    const res = Object.keys(data).map((key)=>({
        language: key, count: data[key]
    }))
    
    return res
}

export const getHashtagData =async ()=>{
    const {data} = await axios.get(`${apiBaseURL}/query=hashtag`)
    const res = Object.keys(data).map((key)=>({
        hashtag: key, noOfPosts: data[key]
    }))
    
    return res
}