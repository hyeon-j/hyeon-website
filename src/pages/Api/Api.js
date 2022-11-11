import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import ISO6391 from "iso-639-1";

import "./Api.css";

import { coronaOptions, getLanguageOptions } from "./apiFunctions";

export default function Api() {
    const languageForm = useRef();

    const [coronaData, setCoronaData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [translateLanguages, setTranslateLanguages] = useState([]);

    useEffect(() => {
        coronaDataFetch();
        translateLanguageFetch();

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

    const translateLanguageFetch = () => {
        axios
            .request(getLanguageOptions)
            .then(function (response) {
                const languages = [];
                for (let i = 0; i < response.data.data.languages.length; i++) {
                    const languageCode =
                        response.data.data.languages[i]["language"];
                    if (ISO6391.getName(languageCode) != "")
                        languages.push(languageCode);
                }

                setTranslateLanguages(languages);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    const translateText = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps["translate__input"]);

        const encodedParams = new URLSearchParams();
        encodedParams.append("q", formProps["translate__input"]);
        encodedParams.append("target", formProps["translate__lang"]);
        encodedParams.append("source", "en");

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "Accept-Encoding": "application/gzip",
                "X-RapidAPI-Key":
                    "8c9f96ab58mshad751c6174d50fap11163djsn6751e466b550",
                "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
            },
            body: encodedParams,
        };

        fetch(
            "https://google-translate1.p.rapidapi.com/language/translate/v2",
            options
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                // const translatedText =
                //     response.data.translations[0]["translatedText"];
                // document.getElementById("translate__response").textContent =
                //     translatedText;
            })
            .catch((err) => console.error(err));
    };

    if (isLoading) {
        return <h1>loading...</h1>;
    } else {
        return (
            <>
                <div className="api__container">
                    <div className="api__contents">
                        <div className="api__app__container">
                            <a
                                href="https://rapidapi.com/googlecloud/api/google-translate1"
                                className="api__app__title"
                            >
                                Language Traslation
                            </a>
                            <span className="api__app__description">
                                Placeholder for language translate
                            </span>
                            <form
                                ref={languageForm}
                                onSubmit={translateText}
                                className="translate__form"
                            >
                                <div className="main">
                                    <textarea
                                        type="text"
                                        rows="4"
                                        cols="100"
                                        name="translate__input"
                                        placeholder="Enter text - Language Auto Detected"
                                        className="translate__input"
                                    />
                                </div>

                                <div>
                                    <select
                                        name="translate__lang"
                                        id="translate__lang"
                                        className="translate__select"
                                    >
                                        {translateLanguages.map(
                                            (lang, index) => {
                                                return (
                                                    <option
                                                        value={lang}
                                                        key={index}
                                                    >
                                                        {ISO6391.getName(lang)}
                                                    </option>
                                                );
                                            }
                                        )}
                                    </select>

                                    <input
                                        className="translate__submit"
                                        type="submit"
                                        value="TRANSLATE"
                                    />
                                </div>
                            </form>
                            <span
                                id="translate__response"
                                className="translate__response"
                            >
                                Placeholder
                            </span>
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
