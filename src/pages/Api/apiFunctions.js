import axios from "axios";

// API functions

const options = {
    method: "GET",
    url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",
    params: { country: "USA" },
    headers: {
        "X-RapidAPI-Key": "8c9f96ab58mshad751c6174d50fap11163djsn6751e466b550",
        "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    },
};

export const fetchCoronaData = () => {
    return axios
        .request(options)
        .then(function (response) {
            console.log(response);

            const arr = [];
            for (var data in response["data"]["data"])
                arr.push(response["data"]["data"][data]);

            return arr;
        })
        .catch(function (error) {
            console.error(error);
        });
};

// API HTML Rendering Descriptions

export const apiList = [
    {
        title: "US Corona Virus Statistics",
        description:
            "Real time update on the progress of COVID-19 virus in the United States. Statistics include: number of people recovered, number of death, number of confirmed cases, last reported time/date.",
    },
];
