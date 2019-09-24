import React from "react";
import { Transition } from "react-transition-group";
import throttle from "lodash.throttle";

import Logo from "../images/logo.svg";
import SEO from "../components/SEO.jsx";
import Layout from "../components/Layout.jsx";
import HeroHeader from "../components/HeroHeader.jsx";
import AboutCard from "../components/AboutCard.jsx";
import ContactCard from "../components/ContactCard.jsx";
import FutureEventsOverview from "../components/FutureEventsOverview";
import NewsOverview from "../components/NewsOverview";

const headerSize = "60vh";

const transition = 500;

const scrollThreshold = 150;

const defaultStyle = {
    transition: `opacity ${transition}ms ease-in-out`,
    opacity: 1,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrolled: false,
            listener: null,
        };
    }

    onScroll = throttle(() => {
        this.setState({ scrolled: window.scrollY > scrollThreshold });
    }, 150);

    componentDidMount() {
        document.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.onScroll);
    }

    render() {
        return (
            <>
                <SEO title="Etusivu"></SEO>
                <Layout>
                    <Transition in={!this.state.scrolled} timeout={transition}>
                        {state => (
                            <div
                                className="bg-inherit relative"
                                style={{
                                    position: "fixed",
                                    height: headerSize,
                                    width: "100%",
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                }}
                            >
                                <HeroHeader></HeroHeader>
                                <div
                                    className="absolute flex items-center justify-center inset-0 text-white h-full w-full"
                                    style={{
                                        boxShadow:
                                            "inset 0px -50px 40px -35px rgba(18,18,18,1)",
                                    }}
                                >
                                    <Logo
                                        style={{
                                            height: "60%",
                                            width: "90%",
                                            margin: "auto",
                                        }}
                                    ></Logo>
                                </div>
                            </div>
                        )}
                    </Transition>
                    <div
                        className="container pb-0 z-20"
                        style={{ marginTop: headerSize }}
                    >
                        <div className="bg-dark-900 pb-12 rounded">
                            <AboutCard />
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2">
                                    <FutureEventsOverview />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <NewsOverview />
                                    <ContactCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}

export default IndexPage;
