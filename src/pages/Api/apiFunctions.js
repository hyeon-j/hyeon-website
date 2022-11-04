import axios from "axios";

// API functions

export const coronaOptions = {
    method: "GET",
    url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",
    params: { country: "USA" },
    headers: {
        "X-RapidAPI-Key": "8c9f96ab58mshad751c6174d50fap11163djsn6751e466b550",
        "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    },
};

export const getLanguageOptions = {
    method: "GET",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    headers: {
        "X-RapidAPI-Key": "8c9f96ab58mshad751c6174d50fap11163djsn6751e466b550",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
};

// export const translateOptions = {
//     method: "POST",
//     url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
//     headers: {
//         "content-type": "application/x-www-form-urlencoded",
//         "Accept-Encoding": "application/gzip",
//         "X-RapidAPI-Key": "8c9f96ab58mshad751c6174d50fap11163djsn6751e466b550",
//         "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
//     },
//     data: encodedParams,
// };

// API HTML Rendering Descriptions
export const apiList = [
    {
        title: "US Corona Virus Statistics",
        description:
            "Real time update on the progress of COVID-19 virus in the United States. Statistics include: number of people recovered, number of death, number of confirmed cases, last reported time/date.",
    },
];
