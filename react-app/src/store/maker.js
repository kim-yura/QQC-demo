import { csrfFetch } from '../helpers';

const LOAD_MAKERS = 'makers/loadMakers';
const CREATE_MAKER = 'makers/createMaker';
const EDIT_MAKER = 'makers/editMaker';
const DELETE_MAKER = 'makers/deleteMaker';

export const loadMakers = () => async (dispatch) => {
    const response = await csrfFetch('/api/makers/');
    const allMakers = await response.json();
    dispatch(loadMakersAction(allMakers));
    return allMakers;
};

const loadMakersAction = (allMakers) => ({
    type: LOAD_MAKERS,
    allMakers
});

export const createMaker = ({
    name,
    website,
    instagram,
    country,
    isYarn,
    isFiber,
    isNotions,
    isPattern,
    isKnitting,
    isCrochet,
    isEmbroidery
}) => async (dispatch) => {
    const response = await csrfFetch('/api/makers/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            website,
            instagram,
            country,
            is_yarn: isYarn,
            is_fiber: isFiber,
            is_notions: isNotions,
            is_pattern: isPattern,
            is_knitting: isKnitting,
            is_crochet: isCrochet,
            is_embroidery: isEmbroidery
        })
    });

    if (response.ok) {
        const maker = await response.json();
        dispatch(createMakerAction(maker));
        return maker;
    };
};

const createMakerAction = (maker) => ({
    type: CREATE_MAKER,
    maker
});

export const editMaker = ({
    id,
    name,
    website,
    instagram,
    country,
    isYarn,
    isFiber,
    isNotions,
    isPattern,
    isKnitting,
    isCrochet,
    isEmbroidery
}) => async (dispatch) => {
    const response = await csrfFetch('/api/makers/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id,
            name,
            website,
            instagram,
            country,
            is_yarn: isYarn,
            is_fiber: isFiber,
            is_notions: isNotions,
            is_pattern: isPattern,
            is_knitting: isKnitting,
            is_crochet: isCrochet,
            is_embroidery: isEmbroidery
        })
    });

    if (response.ok) {
        const maker = await response.json();
        dispatch(editMakerAction(maker));
        return maker;
    };
};

const editMakerAction = (maker) => ({
    type: EDIT_MAKER,
    maker
});

export const deleteMaker = (makerId) => async (dispatch) => {
    const response = await csrfFetch('/api/makers/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: makerId })
    });
    const maker = await response.json();
    dispatch(deleteMakerAction(maker, makerId));
};

const deleteMakerAction = (maker, makerId) => {
    return {
        type: DELETE_MAKER,
        maker,
        makerId
    };
};

const makerReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_MAKERS:
            action.allMakers.forEach(maker => {
                newState[maker.id] = maker;
            });
            return newState;
        case CREATE_MAKER:
        case EDIT_MAKER:
            newState[action.maker.id] = action.maker;
            return newState;
        case DELETE_MAKER:
            delete newState[action.makerId];
            return newState;

        default:
            return state;
    };
};

export default makerReducer;
