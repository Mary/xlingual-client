const initialState = {
myList: [],
globalList: [],
error: null
}
 
// const initialState = {

//     words: [{
//         name: 'word name',
//          language: 'language'
//     }]
// };



//name: action.word.name 


const word = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WORD_SUCCESS':
            return {
                ...state,
                data: action.newWord
            }
            case 'FETCH_MY_LIST_SUCCESS':
            return {
                ...state,
                myList: action.words
            }
            case 'FETCH_BROWSE_SUCCESS':
            return {
                ...state,
                globalList: action.words
            }
            case 'FETCH_GLOBAL_SUCCESS':
            return {
                ...state,
                globalList: action.words
            }
            case 'FLUSH_BROWSE_SUCCESS':
            return {
                ...state,
                globalList: []
            }
            case 'WORD_DELETE_SUCCESS':
            return {
                ...state,
                myList: state.myList.filter(word=>{
                    return word.id !== action.id
                }),
                globalList: state.globalList.filter(word=>{
                    return word.id !== action.id
                })
            }
        default:
            return state
    }
}





export default word