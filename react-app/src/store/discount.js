import { csrfFetch } from "../helpers";

const LOAD_DISCOUNTS = 'discounts/loadDiscounts';
const CREATE_DISCOUNT = 'discounts/createDiscount';
const EDIT_DISCOUNT = 'discounts/editDiscount';
const DELETE_DISCOUNT = 'discounts/deleteDiscount';

export const loadDiscounts = () => async (dispatch) => {
    const response = await csrfFetch('/api/discounts/');
    const allDiscounts = await response.json();
    dispatch(loadDiscountsAction(allDiscounts));
    return allDiscounts;
};

const loadDiscountsAction = (allDiscounts) => ({
    type: LOAD_DISCOUNTS,
    allDiscounts
});

export const createDiscount = ({
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
    isEmbroidery,
    discountCode,
    discountDetails
}) => async (dispatch) => {
    const response = await csrfFetch('/api/discounts/', {
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
            is_embroidery: isEmbroidery,
            discount_code: discountCode,
            discount_details: discountDetails
        })
    });

    if (response.ok) {
        const discount = await response.json();
        dispatch(createDiscountAction(discount));
        return discount;
    };
};

const createDiscountAction = (discount) => ({
    type: CREATE_DISCOUNT,
    discount
});

export const editDiscount = ({
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
    isEmbroidery,
    discountCode,
    discountDetails
}) => async (dispatch) => {
    const response = await csrfFetch('/api/discounts/', {
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
            is_embroidery: isEmbroidery,
            discount_code: discountCode,
            discount_details: discountDetails
        })
    });

    if (response.ok) {
        const discount = await response.json();
        dispatch(editDiscountAction(discount));
        return discount;
    };
};

const editDiscountAction = (discount) => ({
    type: EDIT_DISCOUNT,
    discount
});

export const deleteDiscount = (discountId) => async (dispatch) => {
    const response = await csrfFetch('/api/discounts/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: discountId })
    });
    const discount = await response.json();
    dispatch(deleteDiscountAction(discount, discountId));
};

const deleteDiscountAction = (discount, discountId) => {
    return {
        type: DELETE_DISCOUNT,
        discount,
        discountId
    };
};

const discountReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_DISCOUNTS:
            action.allDiscounts.forEach(discount => {
                newState[discount.id] = discount;
            });
            return newState;
        case CREATE_DISCOUNT:
        case EDIT_DISCOUNT:
            newState[action.discount.id] = action.discount;
            return newState;
        case DELETE_DISCOUNT:
            delete newState[action.discountId];
            return newState;

        default:
            return state;
    };
};

export default discountReducer;
