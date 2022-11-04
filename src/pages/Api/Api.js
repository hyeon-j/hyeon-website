import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import ISO6391 from "iso-639-1";

import "./Api.css";

import { coronaOptions, getLanguageOptions } from "./apiFunctions";

export default function Api() {
    const currencyForm = useRef();

    const [coronaData, setCoronaData] = useState([]);
    const [currencyList, setCurrencyList] = useState([]);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        coronaDataFetch();
        currencyListFetch();
        setLoading(false);
    }, [isLoading]);

    const coronaDataFetch = () => {
        axios
            .request(coronaOptions)
            .then(function (response) {
                const arr = [];
                for (var data in response["data"]["data"])
                    arr.push(response["data"]["data"][data]);

                setCoronaData(arr);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    const currencyListFetch = () => {
        const response = axios.get(
            "https://www.amdoren.com/api/currency_list.php?api_key=SNpi29cakbTtjVy4AKW7zk6XUJWitn"
        );
        console.log(response);
    };

    // const getCurrencyExchange = (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);
    //     const formProps = Object.fromEntries(formData);
    //     console.log(formProps["translate__input"]);

    //     axios.get(
    //         "https://www.amdoren.com/api/currency.php?api_key=SNpi29cakbTtjVy4AKW7zk6XUJWitn&from=USD&to=EUR"
    //     );
    // };

    if (isLoading) {
        return <h1>loading...</h1>;
    } else {
        return (
            <>
                <div className="api__container">
                    <div className="api__contents">
                        <div className="api__app__container">
                            <div className="api__app__title">
                                Currency Exchange
                            </div>
                            <div>
                                Powered by{" "}
                                <a href="https://www.amdoren.com">Amdoren</a>
                            </div>
                            <div className="api__currency__contents">
                                <span className="api__app__description">
                                    Placeholder for language translate
                                </span>
                                <div>
                                    <form
                                        ref={currencyForm}
                                        onSubmit={() => {}}
                                        className="translate__form"
                                    >
                                        <select
                                            name="translate__lang"
                                            id="translate__lang"
                                            className="translate__select"
                                        >
                                            {/* {translateLanguages.map(
                                                (lang, index) => {
                                                    return (
                                                        <option
                                                            value={lang}
                                                            key={index}
                                                        >
                                                            {ISO6391.getName(
                                                                lang
                                                            )}
                                                        </option>
                                                    );
                                                }
                                            )} */}
                                        </select>
                                    </form>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="api__app__container">
                            <a
                                href="https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics"
                                className="api__app__title"
                            >
                                US Corona Virus Statistics
                            </a>
                            <div className="api__corona__contents">
                                <span className="api__app__description">
                                    Real time update on the progress of COVID-19
                                    virus in the United States. Statistics
                                    include: number of people recovered, number
                                    of death, number of confirmed cases, last
                                    reported time/date.
                                </span>
                                <div className="api__app__corona">
                                    <div className="api__app__corona__data">
                                        Confirmed Cases: {coronaData[2]}
                                    </div>
                                    <div className="api__app__corona__data">
                                        Death: {coronaData[1]}
                                    </div>
                                    <div className="api__app__corona__data">
                                        Recovered:{" "}
                                        {coronaData[2] - coronaData[1]}
                                    </div>
                                    <div className="api__app__corona__data">
                                        Reported Time: {coronaData[4]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
