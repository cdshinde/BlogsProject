import axios from "axios";
export const apiBaseURL = "https://CHETANSHIND-W10:8000/blogs";
export const getMonthData = async () => {
  const { data } = await axios.get(`${apiBaseURL}/queryByMonth`);
  return Object.keys(data).map((key) => ({
    month: key,
    count: data[key],
  }));
};
export const getCategoryData = async () => {
  const { data } = await axios.get(`${apiBaseURL}/queryByCategory`);
  return Object.keys(data).map((key) => ({
    category: key,
    count: data[key],
  }));
};
export const getLanguageData = async () => {
  const { data } = await axios.get(`${apiBaseURL}/queryByLanguage`);
  return Object.keys(data).map((key) => ({
    language: key,
    count: data[key],
  }));
};

export const getHashtagData = async () => {
  const { data } = await axios.get(`${apiBaseURL}/queryByHashtag`);
  return Object.keys(data).map((key) => ({
    hashtag: key,
    noOfPosts: data[key],
  }));
};
