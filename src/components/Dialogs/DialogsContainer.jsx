import {connect} from "react-redux";
import {onNewMessageSendActionCreator} from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        clickSendMessage: (newMessage) => {
            dispatch(onNewMessageSendActionCreator(newMessage))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogs);