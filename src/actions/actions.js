export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export function addFeature(feature) {
    console.log(feature);
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export function removeFeature(feature) {
    console.log(feature);
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}