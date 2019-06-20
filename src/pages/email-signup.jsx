import React from "react";
import { navigate } from "gatsby";

import SEO from "../components/SEO.jsx"
import Layout from "../components/Layout.jsx";
import Card from "../components/Card.jsx";

const EmailSignupPage = () => {
    return (
        <>
        <SEO title={"Sähköpostilista"} />
        <Layout>
            <div className="container mw-16">
                <Card>
                    <form
                        style={{maxWidth: "32rem", margin: "auto"}}
                        name="signup"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="signup" />
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">
                                Nimi
                            </label>
                            <input
                                className="text-dark-800 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="Name"
                                type="name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-grey-dark text-sm font-bold mb-2">
                                Sähköpostiosoite
                            </label>
                            <input
                                className="text-dark-800 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="Email"
                                type="email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block">
                                <input
                                    name="Agreement"
                                    className="mr-2 leading-tight"
                                    type="checkbox"
                                />
                                <span className="text-sm">
                                    Ymmärrän, että ÖRMY:n sähköpostilista on
                                    rekisteri, joka sisältää henkilötietojani
                                    eli etu- ja sukunimeni sekä
                                    sähköpostiosoitteeni.
                                </span>
                            </label>
                        </div>
                        <div>
                            <button className="btn">
                                Tallenna
                            </button>
                            <button
                                type="button"
                                className="btn btn--text hover:underline"
                                onClick={() => navigate("/")}
                            >
                                Peru
                            </button>
                        </div>
                    </form>
                </Card>
            </div>
        </Layout>
        </>
    );
};

export default EmailSignupPage;
