import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";
import { useDispatch, useSelector } from "react-redux";
import About from "../../components/about/About";
import Map from "../../components/map/Map";
import Input from "../../components/input/Input";
import { appChangeCoords, appChangeExp } from "../../redux/AppReducer";
const Body = () => {
    const dispatch = useDispatch();
    const skills = useSelector((state) => state.AppReducer.skills);
    const adress = useSelector((state) => state.AppReducer.adress);
    const { lat, lng } = useSelector((state) => state.AppReducer.coords);
    Geocode.setApiKey("AIzaSyDhZHCb7vFwVvXAjiBGvFPMBFZzCrSCMfc");
    Geocode.setLanguage("en");
    Geocode.setLocationType("ROOFTOP");
    useEffect(() => {
        Geocode.fromAddress(adress).then((response) => {
            const data = response.results[0].geometry.location;

            dispatch(appChangeCoords(data.lat, data.lng));
        });
    }, [adress]);
    return (
        <>
            <section className="workInfo">
                <div className="container">
                    <div className="workInfo__wrapper">
                        <div className="workInfo__item">
                            <h2 className="workInfo__title">Portfolio</h2>
                            <div className="workInfo__itemBody">
                                <ul className="portfolio">
                                    <PortfItem>Bootstrap 4 Material Design (Sample Link)</PortfItem>
                                    <PortfItem>Modern JavaScript stack</PortfItem>
                                    <PortfItem>Datepicker for twitter bootstrap</PortfItem>
                                    <PortfItem>Fast and reliable Bootstrap widgets in Angular </PortfItem>
                                </ul>
                            </div>
                        </div>
                        <div className="workInfo__item">
                            <h2 className="workInfo__title">Experience</h2>
                            <div className="workInfo__itemBody">
                                <ul className="portfolio">
                                    {skills.map((el) => (
                                        <ExpItem key={el.id} name={el.skill} id={el.id} year={el.experience} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="workInfo__item">
                            <h2 className="workInfo__title">Sample code</h2>
                            <div className="workInfo__itemBody">
                                <code className="code">
                                    <ul className="code__wrapper">
                                        <li className="code__item">
                                            1. &lt;<span className="code__div">div</span> <span className="code__attr">class</span>='<span className="code__val">golden-grid</span>
                                            '&gt;
                                        </li>
                                        <li className="code__item">
                                            2. &nbsp;&nbsp;&lt;<span className="code__div">div</span> <span className="code__attr">style</span>='
                                            <span className="code__val">grid-area:</span>
                                        </li>
                                        <li className="code__item">
                                            3. &nbsp;&nbsp;&nbsp;&nbsp;<span className="code__val">11 / 1 / span 10 / span</span>
                                        </li>
                                        <li className="code__item">
                                            4. &nbsp;&nbsp;&nbsp;&nbsp;<span className="code__val">12;</span>'&gt;
                                        </li>
                                        <li className="code__item">
                                            5. &nbsp;&lt;/<span className="code__div">div</span>&gt;
                                        </li>
                                        <li className="code__item">
                                            6. &lt;/<span className="code__div">div</span>&gt;
                                        </li>
                                    </ul>
                                </code>
                            </div>
                        </div>
                        <div className="workInfo__item">
                            <div className="workInfo__itemUpper">
                                <h2 className="workInfo__title">Availability</h2>
                                <span className="workInfo__text">Full-time</span>
                            </div>
                            <div className="workInfo__itemDown">
                                <h2 className="workInfo__title">Preferred Environment</h2>
                                <span className="workInfo__text">GitHub, Mac OSX</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="otherInf">
                <div className="container">
                    <div className="otherInf__wrapper">
                        <About title="The Most Amaizing...">The only true wisdom is in knowing you know nothing...</About>
                        <About title="In clients I look for...">There is only one good, knowledge, and one evil, ignorance.</About>
                        <Map lat={lat} lng={lng} />
                    </div>
                </div>
            </section>
        </>
    );
};

const ExpItem = ({ id, name, year }) => {
    const dispatch = useDispatch();
    const [isInput, setIsInput] = useState(false);
    const chnageYear = (value) => {
        if (value && value !== "") dispatch(appChangeExp(id, value));
        setIsInput(false);
    };
    return (
        <li className="portfolio__item">
            <strong>{name}</strong>
            {isInput ? (
                <div className="portfolio__inputWrapper">
                    <Input fz={16} changeInfo={chnageYear} value={year} alert={false} type={"number"} />
                </div>
            ) : (
                <span className="portfolio__years" onClick={() => setIsInput(true)}>
                    {year} years
                </span>
            )}
        </li>
    );
};

const PortfItem = ({ children }) => {
    return (
        <li className="portfolio__item">
            <a href="#" className="portfolio__link">
                {children}
            </a>
        </li>
    );
};

export default Body;
