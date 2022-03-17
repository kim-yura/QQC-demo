import { csrfFetch } from "../helpers";

const LOAD_GROUPS = 'groups/loadGroups';
const CREATE_GROUP = 'groups/createGroup';
const EDIT_GROUP = 'groups/editGroup';
const DELETE_GROUP = 'groups/deleteGroup';

export const loadGroups = () => async (dispatch) => {
    const response = await csrfFetch('/api/groups/');
    const allGroups = await response.json();
    dispatch(loadGroupsAction(allGroups));
    return allGroups;
};

const loadGroupsAction = (allGroups) => ({
    type: LOAD_GROUPS,
    allGroups
});

export const createGroup = ({
    owner,
    name,
    description,
    bannerImage
}) => async (dispatch) => {
    const response = await csrfFetch('/api/groups/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            owner,
            name,
            description,
            banner_image: bannerImage
        })
    });

    if (response.ok) {
        const group = await response.json();
        dispatch(createGroupAction(group));
        return group;
    };
};

const createGroupAction = (group) => ({
    type: CREATE_GROUP,
    group
});

export const editGroup = ({
    name,
    description,
    bannerImage
}) => async (dispatch) => {
    const response = await csrfFetch('/api/groups/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            description,
            banner_image: bannerImage
        })
    });

    if (response.ok) {
        const group = await response.json();
        dispatch(editGroupAction(group));
        return group;
    };
};

const editGroupAction = (group) => ({
    type: EDIT_GROUP,
    group
});

export const deleteGroup = (groupId) => async (dispatch) => {
    const response = await csrfFetch('/api/groups/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: groupId })
    });
    const group = await response.json();
    dispatch(deleteGroupAction(group, groupId));
};

const deleteGroupAction = (group, groupId) => {
    return {
        type: DELETE_GROUP,
        group,
        groupId
    };
};

const groupReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_GROUPS:
            action.allGroups.forEach(group => {
                newState[group.id] = group;
            });
            return newState;
        case CREATE_GROUP:
        case EDIT_GROUP:
            newState[action.group.id] = action.group;
            return newState;
        case DELETE_GROUP:
            delete newState[action.groupId];
            return newState;

        default:
            return state;
    }
};

export default groupReducer;
