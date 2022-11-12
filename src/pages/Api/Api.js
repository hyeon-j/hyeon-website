import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import ISO6391 from "iso-639-1";

import "./Api.css";

import { coronaOptions, getLanguageOptions } from "./apiFunctions";

export default function Api() {
    const movieForm = useRef();

    const [coronaData, setCoronaData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        coronaDataFetch();

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

    const searchIMDB = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        const movieInput = formProps["movie__input"].split(" ").join("%20");

        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":
                    "8c9f96ab58mshad751c6174d50fap11163djsn6751e466b550",
                "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
            },
        };

        fetch(
            "https://imdb8.p.rapidapi.com/auto-complete?q=" + movieInput,
            options
        )
            .then((response) => response.json())
            .then((response) => {
                const resultArray = response["d"];

                const imdbURL = "https://www.imdb.com/";

                const totalResultsList = [];
                for (let i = 0; i < resultArray.length; i++) {
                    const result = resultArray[i];

                    const resultList = [];

                    if (result["id"][0] === "t") {
                        resultList.push(true);
                        resultList.push(imdbURL + "title/" + result["id"]);
                        resultList.push(result["l"]);
                        resultList.push(result["q"]);
                        resultList.push(result["rank"]);
                        resultList.push(result["s"]);
                        if ("i" in result) {
                            resultList.push([
                                result["i"]["width"],
                                result["i"]["height"],
                                result["i"]["imageUrl"],
                            ]);
                        }
                    } else {
                        resultList.push(false);
                        resultList.push(imdbURL + "name/" + result["id"]);
                        resultList.push(result["l"]);
                        resultList.push(result["rank"]);
                        resultList.push(result["s"]);
                        if ("i" in result) {
                            resultList.push([
                                result["i"]["width"],
                                result["i"]["height"],
                                result["i"]["imageUrl"],
                            ]);
                        }
                    }

                    totalResultsList.push(resultList);
                }

                setMovieList(totalResultsList);
            })
            .catch((err) => console.error(err));
    };

    const renderIMDB = (item, index) => {
        if (item[0]) {
            return (
                <>
                    <div key={index} className="movie__result">
                        {renderIMDBImage(item, 6)}
                        <div className="movie__result__info">
                            <a
                                href={item[1]}
                                className="movie__result__info__link"
                            >
                                {item[2]}
                            </a>
                            <span className="movie__result__info__sub">
                                Type: {item[3]}
                            </span>
                            <span className="movie__result__info__sub">
                                Rank: {item[4]}
                            </span>
                            <span className="movie__result__info__sub">
                                Main Actors: {item[5] === "" ? "N/A" : item[5]}
                            </span>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div key={index} className="movie__result">
                        {renderIMDBImage(item, 5)}
                        <div className="movie__result__info">
                            <a
                                href={item[1]}
                                className="movie__result__info__link"
                            >
                                {item[2]}
                            </a>
                            <span className="movie__result__info__sub">
                                Rank: {item[3]}
                            </span>
                            <span className="movie__result__info__sub">
                                Description: {item[4]}
                            </span>
                        </div>
                    </div>
                </>
            );
        }
    };

    const renderIMDBImage = (item, imageIndex) => {
        let imageLink =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
        let ratio = 1;
        let alt = "No Image";

        if (item.length > imageIndex) {
            imageLink = item[imageIndex][2];
            ratio = item[imageIndex][1] / item[imageIndex][0];
            alt = item[2];
        }

        return (
            <img
                src={imageLink}
                alt={alt}
                width={300}
                height={300 * ratio}
                className="movie__result__image"
            />
        );
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
                                IMDb Movie Search
                            </a>
                            <span className="api__app__description">
                                Enter keyword to search in IMDb. It provides
                                link, image and information about the
                                film/video.
                            </span>
                            <form
                                ref={movieForm}
                                onSubmit={searchIMDB}
                                className="movie__form"
                            >
                                <textarea
                                    type="text"
                                    rows="2"
                                    cols="50"
                                    name="movie__input"
                                    placeholder="Search IMDb"
                                    className="movie__input"
                                />

                                <input
                                    className="movie__submit"
                                    type="submit"
                                    value="Search"
                                />
                            </form>
                            <div className="movie__results__container">
                                {movieList.length < 1
                                    ? null
                                    : movieList.map((item, index) => {
                                          return renderIMDB(item, index);
                                      })}
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
