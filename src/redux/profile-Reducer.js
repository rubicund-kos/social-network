const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '0'},
        {id: 2, message: 'It\'s my first post', likesCount: '23'},
        {id: 3, message: 'That\'s great', likesCount: '2'},
        {id: 4, message: 'Yes, I like this', likesCount: '12'}
    ],
    newPostText: ''
};

let profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST: {
                return {
                    ...state,
                    posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}],
                    newPostText: ''
                }
            }
            case UPDATE_NEW_POST_TEXT: {
                return {
                    ...state,
                    newPostText: action.newText
                }
            }
            default:
                return state;
        }
};

//ProfilePage AC
export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;