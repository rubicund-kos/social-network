import React from 'react';
import styles from './ProfileInfo.module.sass';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: false
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: true
        })
    };


    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>

                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></input>
                    </div>
                }




            </>

        )
    }

};

export default ProfileStatus;