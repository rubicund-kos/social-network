import profileReducer from "./profile-Reducer";
import dialogsReducer from "./dialogs-Reducer";
import articlesReducer from "./articles-Reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
        _state: {
            profilePage: {
                posts: [
                    {id: 1, message: 'Hi, how are you?', likesCount: '0'},
                    {id: 2, message: 'It\'s my first post', likesCount: '23'},
                    {id: 3, message: 'That\'s great', likesCount: '2'},
                    {id: 4, message: 'Yes, I like this', likesCount: '12'}
                ],
                newPostText: ''
            },
            dialogsPage: {
                messages: [
                    {id: 1, message: 'Hi'},
                    {id: 2, message: 'Yo'},
                    {id: 3, message: 'How are you?'},
                    {id: 4, message: 'Im fine'}
                ],
                dialogs: [
                    {id: 1, name: 'Dima'},
                    {id: 2, name: 'Andrey'},
                    {id: 3, name: 'Sasha'},
                    {id: 4, name: 'Alex'},
                    {id: 5, name: 'Stas'},
                    {id: 6, name: 'Oleg'},
                ],
                newMessage: ''
            },
            articlesPage: {
                articles: [
                    {
                        id: 1,
                        article:
                            'Каждый идет своим путём. Но все дороги всё равно идут в никуда. Значит, весь смысл в ' +
                            'самой дороге, как по ней идти… Если идешь с удовольствием, значит, это твоя дорога. ' +
                            'Если тебе плохо – ' +
                            'в любой момент можешь сойти с нее, как бы далеко ни зашел. И это будет правильно.',
                        author: 'Karlos Kastaneda',
                        likesCount: '11',
                        comments: [
                            {id: 1, name: 'Dima', comment: 'Хорошая цитата'},
                            {id: 2, name: 'Oleg', comment: 'Да, согласен'}
                        ]
                    },
                    {
                        id: 2,
                        article:
                            'Единственный по-настоящему мудрый советчик, который у нас есть, – это смерть. ' +
                            'Каждый раз, когда ты чувствуешь, как это часто с тобой бывает, что всё складывается из рук ' +
                            'вон плохо и ты на грани полного краха, повернись налево и спроси у своей смерти, так ли ' +
                            'это. И твоя смерть ответит, что ты ошибаешься, и что кроме её прикосновения нет ничего,' +
                            ' что действительно имело бы значение. Твоя смерть скажет: «Но я же ещё не коснулась тебя!»,',
                        author: 'Karlos Kastaneda',
                        likesCount: '5',
                        comments: [
                            {id: 1, name: 'Dima', comment: 'Мне нравится эта идея'},
                            {id: 2, name: 'Oleg', comment: 'Дон Хуан, как всегд прав'}
                        ]
                    },
                    {
                        id: 3,
                        article:
                            'Чтобы извлечь из жизни максимум, человек должен уметь изменяться. К сожалению, ' +
                            'человек изменяется с большим трудом, и изменения эти происходят очень медленно. ' +
                            'Многие тратят на это годы. Самым трудным является по-настоящему захотеть измениться.',
                        author: 'Karlos Kastaneda',
                        likesCount: '8',
                        comments: [
                            {id: 1, name: 'Stas', comment: 'Я уже изменился'},
                            {id: 2, name: 'Karl', comment: 'Ага, верю:)'}
                        ]
                    },
                    {
                        id: 4,
                        article:
                            'Люби, и пусть любовь будет для тебя так же естественна, как и дыхание. Если ты любишь ' +
                            'человека, ничего от него не требуй; иначе ты в самом начале возведешь между вами стену. ' +
                            'Ничего не ожидай. Если что-то приходит к тебе, будь благодарен. Если ничего не приходит, ' +
                            'значит, этому и не нужно приходить, в этом нет необходимости. Ты не вправе ждать.',
                        author: 'Osho',
                        likesCount: '11',
                        comments: [
                            {id: 1, name: 'Dima', comment: 'Хорошая цитата'},
                            {id: 2, name: 'Uriy', comment: 'Да, согласен'}
                        ]
                    },
                    {
                        id: 5,
                        article:
                            'Попробуйте в течение двадцати четырёх часов принимать всё, что бы ни случилось. ' +
                            'Кто-то вас обидел — примите это, никак не реагируя, и наблюдайте, что происходит. ' +
                            'Внезапно вы почувствуете поток энергии, которой никогда раньше не чувствовали.',
                        author: 'Osho',
                        likesCount: '7',
                        comments: [
                            {id: 1, name: 'Dima', comment: 'Отлично'},
                            {id: 2, name: 'Uriy', comment: 'Я проникся:)'}
                        ]
                    }
                ],
                articlesOsho: [

                ]

            }
        },
        _callSubscriber() {
            console.log('State changed')
        },
        getState() {
            return this._state;
        },
        subscribe(observer) {
            this._callSubscriber = observer;
        },
        dispatch(action) {

            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
            this._state.articlesPage = articlesReducer(this._state.articlesPage, action);

            this._callSubscriber(this._state);

        }
    }
;

//ProfilePage AC
export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

//DialogsPage AC
export const onNewMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});
export const onNewMessageSendActionCreator = () => ({type: SEND_MESSAGE});



export default store;
window.store = store;