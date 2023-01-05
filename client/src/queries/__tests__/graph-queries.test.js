import axios from "axios";
import {
  apiBaseURL,
  getMonthData,
  getCategoryData,
  getLanguageData,
  getHashtagData,
} from "../graph-queries";

jest.mock("axios");

describe("getMonthData", () => {
  it("should return count per month", async () => {
    const data = [
      {
        month: "January",
        count: 10,
      },
      {
        month: "February",
        count: 6,
      },
    ];
    const res = [
      {
        count: {
          count: 10,
          month: "January",
        },
        month: "0",
      },
      {
        count: {
          count: 6,
          month: "February",
        },
        month: "1",
      },
    ];

    const mockedResponse = {
      data: data,
    };

    axios.get.mockResolvedValue(mockedResponse);

    const result = await getMonthData();
    expect(axios.get).toHaveBeenCalledWith(`${apiBaseURL}/queryByMonth`);

    expect(result).toEqual(res);
  });
});
describe("getCategoryData", () => {
  it("should return count per month", async () => {
    const data = [
      {
        technology: 13,
        national: 4,
        religion: 21,
      },
    ];
    const res = [
      {
        category: "0",
        count: {
          national: 4,
          religion: 21,
          technology: 13,
        },
      },
    ];

    const mockedResponse = {
      data: data,
    };

    axios.get.mockResolvedValue(mockedResponse);

    const result = await getCategoryData();
    expect(axios.get).toHaveBeenCalledWith(`${apiBaseURL}/queryByCategory`);

    expect(result).toEqual(res);
  });
});
describe("getLanguageData", () => {
  it("should return count per month", async () => {
    const data = [
      {
        en: 22,
        fr: 4,
        es: 6,
        de: 6,
      },
    ];
    const res = [
      {
        count: {
          de: 6,
          en: 22,
          es: 6,
          fr: 4,
        },
        language: "0",
      },
    ];

    const mockedResponse = {
      data: data,
    };

    axios.get.mockResolvedValue(mockedResponse);

    const result = await getLanguageData();
    expect(axios.get).toHaveBeenCalledWith(`${apiBaseURL}/queryByLanguage`);

    expect(result).toEqual(res);
  });
});
describe("getHashtagData", () => {
  it("should return count per month", async () => {
    const data = [
      {
        "#tech": 13,
        "#national": 4,
        "#religion": 21,
      },
    ];
    const res = [
      {
        hashtag: "0",
        noOfPosts: {
          "#national": 4,
          "#religion": 21,
          "#tech": 13,
        },
      },
    ];

    const mockedResponse = {
      data: data,
    };

    axios.get.mockResolvedValue(mockedResponse);

    const result = await getHashtagData();
    expect(axios.get).toHaveBeenCalledWith(`${apiBaseURL}/queryByHashtag`);

    expect(result).toEqual(res);
  });
});
