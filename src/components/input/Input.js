import React, { useState } from "react";
import RedAlert from "../alertIcons/RedAlert";
import GreenAlert from "../alertIcons/GreenAlert";

const Input = ({ upper, value, changeInfo, fz = 16, alert = true, type = "text" }) => {
    const [isError, setIsErros] = useState(false);
    const [input, setInput] = useState(value ? value : "");
    const change = (e) => {
        const value = e.target.value;
        const valid = value.match("^[а-яА-Яa-zA-Z0-9, ]+$");
        if (valid) setIsErros(false);
        else setIsErros(true);
        setInput(value);
    };
    const completeChange = () => {
        if (!isError) changeInfo(input);
        else changeInfo(value);
    };
    const unBlur = (value) => {
        if (value.key === "Enter") value.target.blur();
    };
    return (
        <div className=" input">
            <input
                type={type}
                autoFocus
                style={{ fontSize: fz }}
                className={`input__text ${upper && "input__textUpper"} ${isError && "input__text--error"}`}
                onChange={change}
                onBlur={completeChange}
                onKeyPress={unBlur}
                value={input}
            />
            {alert && input !== "" ? (
                isError ? (
                    <>
                        <div className="input__alert">
                            <RedAlert />
                        </div>
                        <span className="input__textAlert">Error Description</span>
                    </>
                ) : (
                    <div className="input__alert">
                        <GreenAlert />
                    </div>
                )
            ) : (
                ""
            )}
        </div>
    );
};

export default Input;
