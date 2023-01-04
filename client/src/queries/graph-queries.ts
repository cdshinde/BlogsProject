import axios from "axios"
const apiBaseURL = "http://CHETANSHIND-W10:8000/blogs"
export const getMonthData =async ()=>{
    const {data} = await axios.get(`${apiBaseURL}/queryByMonth`)
    const res = Object.keys(data).map((key)=>({
        month: key, count: data[key]
    }))
    return res
}
export const getCategoryData =async ()=>{
    const {data} = await axios.get(`${apiBaseURL}/queryByCategory`)
    const res = Object.keys(data).map((key)=>({
        category: key, count: data[key]
    }))
    
    return res
}
export const getLanguageData =async ()=>{
    const {data} = await axios.get(`${apiBaseURL}/queryByLanguage`)
    const res = Object.keys(data).map((key)=>({
        language: key, count: data[key]
    }))
    
    return res
}

export const getHashtagData =async ()=>{
    const {data} = await axios.get(`${apiBaseURL}/queryByHashtag`)
    const res = Object.keys(data).map((key)=>({
        hashtag: key, noOfPosts: data[key]
    }))
    
    return res
}