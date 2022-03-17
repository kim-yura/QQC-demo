import { csrfFetch } from "../helpers";

const LOAD_MEMBERSHIPS = 'memberships/loadMemberships';
const CREATE_MEMBERSHIP = 'memberships/createMembership';
const DELETE_MEMBERSHIP = 'membership/deleteMembership';

export const loadMemberships = () => async (dispatch) => {
    const response = await csrfFetch('/api/memberships/');
    const allMemberships = await response.json();
    dispatch(loadMembershipsAction(allMemberships));
    return allMemberships;
};

const loadMembershipsAction = (allMemberships) => ({
    type: LOAD_MEMBERSHIPS,
    allMemberships
});

export const createMembership = ({
    groupId,
    memberId
}) => async (dispatch) => {
    const response = await csrfFetch('/api/memberships/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            group_id: groupId,
            member_id: memberId
        })
    });

    if (response.ok) {
        const membership = await response.json();
        dispatch(createMembershipAction(membership));
        return membership;
    };
};

const createMembershipAction = (membership) => ({
    type: CREATE_MEMBERSHIP,
    membership
});

export const deleteMembership = (membershipId) => async (dispatch) => {
    const response = await csrfFetch('/api/memberships/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: membershipId })
    });
    const membership = await response.json();
    dispatch(deleteMembershipAction(membership, membershipId));
};

const deleteMembershipAction = (membership, membershipId) => {
    return {
        type: DELETE_MEMBERSHIP,
        membership,
        membershipId
    };
};

const membershipReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_MEMBERSHIPS:
            action.allMemberships.forEach(membership => {
                newState[membership.id] = membership;
            });
            return newState;
        case CREATE_MEMBERSHIP:
        case DELETE_MEMBERSHIP:
            delete newState[action.membershipId];
            return newState;

        default:
            return state;
    }
};

export default membershipReducer;
