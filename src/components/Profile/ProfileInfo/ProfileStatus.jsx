import React from 'react';
import styles from './ProfileInfo.module.sass';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    //123123123123

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <div>
                        <input autoFocus={true} onBlur={this.toggleEditMode} value={this.props.status}></input>
                    </div>
                    : <div>
                        <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
                    </div>
                }


            </>

        )
    }

}

export default ProfileStatus;