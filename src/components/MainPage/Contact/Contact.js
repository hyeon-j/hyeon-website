import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { AiFillGithub, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./Contact.css";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_kx6zr9b",
                "template_hzw0l65",
                form.current,
                "szQ2-WNanNHtpxOpg"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <div className="contact__container" id="contact">
                <div className="contact__contents">
                    <h1 className="contact__banner">Get In Touch</h1>

                    <div className="contact__contents__wrapper">
                        <div className="contact__info__container">
                            <div className="contact__info">
                                <AiOutlinePhone className="contact__icon" />
                                (907) 343 - 9161
                            </div>
                            <div className="contact__info">
                                <AiOutlineMail className="contact__icon" />
                                hyeon071799@gmail.com
                            </div>
                            <a
                                href="https://www.github.com/hyeon-j"
                                className="contact__info"
                            >
                                <AiFillGithub className="contact__icon" />
                                github.com/hyeon-j
                            </a>
                            <div className="contact__info">
                                <HiOutlineLocationMarker className="contact__icon" />
                                Bloomfield Hills, Michigan
                            </div>
                        </div>
                        <div className="contact__form__container">
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="contact__form"
                            >
                                <div className="contact__section">
                                    <label className="contact__form__label">
                                        NAME:
                                    </label>
                                    <input
                                        className="contact__input__normal"
                                        type="text"
                                        name="name"
                                    />
                                </div>
                                <div className="contact__section">
                                    <label className="contact__form__label">
                                        EMAIL:
                                    </label>
                                    <input
                                        className="contact__input__normal"
                                        type="text"
                                        name="email"
                                    />
                                </div>
                                <div className="contact__section">
                                    <label className="contact__form__label">
                                        MESSAGE:
                                    </label>
                                    <textarea
                                        type="text"
                                        rows="4"
                                        name="message"
                                        className="contact__input__big"
                                    />
                                </div>

                                <input
                                    className="contact__form__submit"
                                    type="submit"
                                    value="SEND EMAIL"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
