const APP_CHANGE_NAME = "APP_CHANGE_NAME";
const APP_CHANGE_ADRESS = "APP_CHANGE_ADRESS";
const APP_DELETE_SKILL = "APP_DELETE_SKILL";
const APP_ADD_SKILL = "APP_ADD_SKILL";
const APP_CHANGE_EXP = "APP_CHANGE_EXP";
const APP_CHANGE_COORDS = "APP_CHANGE_COORDS";

const initState = {
    name: "John Smith",
    adress: "portland, oregon, USA",
    coords: {
        lat: 0,
        lng: 0,
    },
    skills: [
        {
            id: 1,
            skill: "PHP",
            experience: 7,
        },
        {
            id: 2,
            skill: "Ruby",
            experience: 6,
        },
        {
            id: 3,
            skill: "Java Script",
            experience: 4,
        },
    ],
};

const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case APP_CHANGE_NAME:
            return { ...state, name: action.name };
        case APP_CHANGE_ADRESS:
            return { ...state, adress: action.adress };
        case APP_DELETE_SKILL:
            const newSkills = JSON.parse(JSON.stringify(state.skills));
            const index = newSkills.findIndex((el) => el.id === action.id);
            if (index !== -1) newSkills.splice(index, 1);
            newSkills.sort((a, b) => b.experience - a.experience);
            return { ...state, skills: newSkills };
        case APP_ADD_SKILL:
            let newArray = [];
            const skill = {};
            skill.id = Date.now();
            skill.skill = action.value;
            skill.experience = 1;
            newArray = [...state.skills, skill];
            newArray.sort((a, b) => b.experience - a.experience);
            return { ...state, skills: newArray };
        case APP_CHANGE_EXP:
            const newExp = JSON.parse(JSON.stringify(state.skills));
            const indexExp = newExp.findIndex((el) => el.id === action.id);
            if (indexExp !== -1) newExp[indexExp].experience = action.value;
            newExp.sort((a, b) => b.experience - a.experience);
            return { ...state, skills: newExp };
        case APP_CHANGE_COORDS:
            const newCoords = {
                lat: action.lat,
                lng: action.lng,
            };
            return { ...state, coords: newCoords };
        default:
            return state;
    }
};

export const appChangeName = (name) => ({ type: APP_CHANGE_NAME, name });
export const appChangeAdress = (adress) => ({ type: APP_CHANGE_ADRESS, adress });
export const appDeleteSkill = (id) => ({ type: APP_DELETE_SKILL, id });
export const appAddSkill = (value) => ({ type: APP_ADD_SKILL, value });
export const appChangeExp = (id, value) => ({ type: APP_CHANGE_EXP, id, value });
export const appChangeCoords = (lat, lng) => ({ type: APP_CHANGE_COORDS, lat, lng });

export default AppReducer;
