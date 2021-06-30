import React, { useState } from "react";
import RedAlert from "../alertIcons/RedAlert";
import Input from "../../components/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { appAddSkill, appDeleteSkill } from "../../redux/AppReducer";
const Skills = () => {
    const dispatch = useDispatch();
    const skills = useSelector((state) => state.AppReducer.skills);
    const [isInput, setIsInput] = useState(false);
    const addSkill = (value) => {
        if (value && value !== "") dispatch(appAddSkill(value));
        setIsInput(false);
    };

    return (
        <div className="person__skillsWrapper skills">
            <div className="skills__wrapper">
                <ul className="skills__list">
                    {skills.map((el) => (
                        <Item key={el.id} id={el.id}>
                            {el.skill}
                        </Item>
                    ))}
                    <li className="skills__itemWrapper">
                        {isInput ? (
                            <div className="skills__inputWrapper">
                                <Input fz={14} changeInfo={addSkill} />
                            </div>
                        ) : (
                            <button className="skills__btn" onClick={() => setIsInput(true)}>
                                <span className="skills__btnLine"></span>
                                <span className="skills__btnLine"></span>
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;

const Item = ({ children, id }) => {
    const dispatch = useDispatch();
    return (
        <li className="skills__itemWrapper">
            <span className="skills__item">{children}</span>
            <button className="skills__btnDelete" onClick={() => dispatch(appDeleteSkill(id))}>
                <RedAlert />
            </button>
        </li>
    );
};
