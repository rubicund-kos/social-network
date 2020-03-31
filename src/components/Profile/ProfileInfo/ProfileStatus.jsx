import React from 'react';
import styles from './ProfileInfo.module.sass';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    //123123123123

    activeteEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    deactiveteEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateStatus()
    }

    render() {
        debugger;
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeteEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactiveteEditMode} value={this.props.status}></input>
                    </div>
                }



                }


            </>

        )
    }

}

export default ProfileStatus;