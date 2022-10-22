import React, { useState, useEffect } from "react";

import "./Api.css";

import { fetchCoronaData, apiList } from "./apiFunctions";

export default function Api() {
    const [coronaData, setCoronaData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const coronaResponse = await fetchCoronaData();
            setCoronaData(coronaResponse);

            setLoading(false);
        })();
    }, [coronaData]);

    const fetchCoronaDataAndUpdate = () => {
        fetchCoronaData().then((data) => {
            setCoronaData(data);
        });
    };

    if (isLoading) {
        return <h1>loading</h1>;
    } else {
        return (
            <>
                <div className="api__container">
                    <div className="api__contents">
                        <div className="api__app__container">
                            <h1 className="api__app__title">
                                US Corona Virus Statistics
                            </h1>
                            <div className="api__app__contents">
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
                                        Statistic Reported Time: {coronaData[4]}
                                    </div>
                                </div>
                            </div>
                            <button onClick={fetchCoronaDataAndUpdate()}>
                                Refresh
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
