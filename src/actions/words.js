

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';


///////////Fetch My-List
export const FETCH_MY_LIST_SUCCESS = 'FETCH_MY_LIST_SUCCESS';
export const fetchMyListSuccess = words => ({
    type: FETCH_MY_LIST_SUCCESS,
    words
});

export const FETCH_MY_LIST_ERROR = 'FETCH_MY_LIST_ERROR';
export const fetchMyListError = error => ({
    type: FETCH_MY_LIST_ERROR,
    error
});

export const fetchMyList = () => (dispatch, getState) => {
    const authToken = getState().authReducer.authToken;
    return fetch(`${API_BASE_URL}/words/my-list`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((words) => {

            dispatch(fetchMyListSuccess(words))
        })
        .catch(err => {
            dispatch(fetchMyListError(err));
        });
};

/////Fetch Global
export const FETCH_GLOBAL_SUCCESS = 'FETCH_GLOBAL_SUCCESS';
export const fetchGlobalSuccess = words => ({
    type: FETCH_GLOBAL_SUCCESS,
    words
});

export const FETCH_GLOBAL_ERROR = 'FETCH_GLOBAL_ERROR';
export const fetchGlobalError = error => ({
    type: FETCH_GLOBAL_ERROR,
    error
});

export const fetchGlobal = () => (dispatch, getState) => {

    const authToken = getState().authReducer.authToken;
    return fetch(`${API_BASE_URL}/words/global`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchGlobalSuccess(data)))
        .catch(err => {
            dispatch(fetchGlobalError(err));
        });
};

///////////Flush Global

export const flushBrowse = () => ({
    type: 'FLUSH_BROWSE_SUCCESS'
});

///////////Fetch Browse
export const FETCH_BROWSE_SUCCESS = 'FETCH_BROWSE_SUCCESS';
export const fetchBrowseSuccess = words => ({
    type: FETCH_BROWSE_SUCCESS,
    words
});

export const FETCH_BROWSE_ERROR = 'FETCH_BROWSE_ERROR';
export const fetchBrowseError = error => ({
    type: FETCH_BROWSE_ERROR,
    error
});

export const fetchBrowse = (language) => (dispatch, getState) => {

    const authToken = getState().authReducer.authToken;
    return fetch(`${API_BASE_URL}/words/browse/${language}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchBrowseSuccess(data)))
        .catch(err => {
            dispatch(fetchBrowseError(err));
        });
};
/////////Add Word Post
const addWordSuccess = (newWord) => ({
    type: 'ADD_WORD_SUCCESS',
    newWord
})

export const addWord = (name, language, definition, global) => {
    return (dispatch, getState) => {
        const authToken = getState().authReducer.authToken;
        return fetch(`${API_BASE_URL}/words`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authToken}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                language,
                definition,
                global,
            })
        })
            .then(res => res.json())
            .then(json => dispatch(addWordSuccess(json)))
            .catch(error => console.log(error))
    }
}

///////////Delete word DELETE
export const DELETE_WORD_SUCCESS = 'DELETE_WORD_SUCCESS';
export const deleteWordSuccess = id => ({
    type: DELETE_WORD_SUCCESS,
    id
});

export const DELETE_WORD_ERROR = 'DELETE_WORD_ERROR';
export const deleteWordError = error => ({
    type: DELETE_WORD_ERROR,
    error
});

export const deleteWord = (id) => (dispatch, getState) => {

    const authToken = getState().authReducer.authToken;
    return fetch(`${API_BASE_URL}/words/delete/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(() => dispatch(deleteWordSuccess(id)))
        .catch(err => {
            dispatch(fetchBrowseError(err));
        });
};