import React, { useState } from "react";
import Skills from "../../components/skills/Skills";
import Input from "../../components/input/Input";
import userPic from "../../img/Userpic.png";
import refresh from "../../img/refresh.svg";
import country from "../../img/country.png";
import { useDispatch, useSelector } from "react-redux";
import { appChangeAdress, appChangeName } from "../../redux/AppReducer";

const Header = () => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.AppReducer.name);
    const adress = useSelector((state) => state.AppReducer.adress);
    const [isNameInp, setIsNameInp] = useState(false);
    const [isAdressInp, setIsAdressInp] = useState(false);

    const changeName = (name) => {
        if (name && name !== "") dispatch(appChangeName(name));
        setIsNameInp(false);
    };
    const changeAdress = (adress) => {
        if (adress && adress !== "") dispatch(appChangeAdress(adress));
        setIsAdressInp(false);
    };
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__info">
                        <div className="header__avatarWrapper avtar">
                            <img src={userPic} alt="Аватарка" className="avtar__img" />
                            <button className="avtar__btn">
                                <img src={refresh} alt="Изменить фото" className="avtar__btnImg" />
                            </button>
                        </div>
                        <div className="header__personWrapper person">
                            {isNameInp ? (
                                <div className="person__input">
                                    <Input value={name} changeInfo={changeName} upper fz={40} />
                                </div>
                            ) : (
                                <h1 className="person__name" onClick={() => setIsNameInp(true)}>
                                    {name}
                                </h1>
                            )}
                            {isAdressInp ? (
                                <div className="person__input">
                                    <Input value={adress} changeInfo={changeAdress} />
                                </div>
                            ) : (
                                <span className="person__adress" onClick={() => setIsAdressInp(true)}>
                                    {adress}
                                </span>
                            )}

                            <span className="person__country">
                                <img src={country} alt="Страна" /> English
                            </span>
                            <Skills />
                        </div>
                    </div>
                    <div className="header__print print">
                        <div className="print__wrapper">
                            <svg className="print__icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 20H8V19H14V20ZM24 5V18H20V24H4V18H0V5H4V0H20V5H24ZM18 15H6V22H18V15ZM18 2H6V5H18V2ZM22 7.5C22 7.224 21.776 7 21.5 7C21.224 7 21 7.224 21 7.5C21 7.776 21.224 8 21.5 8C21.776 8 22 7.776 22 7.5ZM16 17H8V18H16V17Z" />
                            </svg>
                            <button className="print__btn">Print this page</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
