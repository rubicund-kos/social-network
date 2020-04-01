import React from 'react';
import styles from './ProfileInfo.module.sass';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
<<<<<<< HEAD
    };

    activateEditMode = () => {
=======
    }
    //123123123123

    activeteEditMode = () => {
>>>>>>> 9fdca518a7a7e88ce43b2057c9bde4e7711c6d48
        this.setState({
            editMode: false
        })
<<<<<<< HEAD
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

=======
    }
    deactiveteEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateStatus()
    }
>>>>>>> 9fdca518a7a7e88ce43b2057c9bde4e7711c6d48

    render() {
        debugger;
        return (
            <>
                {!this.state.editMode &&
                    <div>
<<<<<<< HEAD
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
=======
                        <span onDoubleClick={this.activeteEditMode}>{this.props.status}</span>
>>>>>>> 9fdca518a7a7e88ce43b2057c9bde4e7711c6d48
                    </div>
                }
                {this.state.editMode &&
                    <div>
<<<<<<< HEAD

                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></input>
=======
                        <input autoFocus={true} onBlur={this.deactiveteEditMode} value={this.props.status}></input>
>>>>>>> 9fdca518a7a7e88ce43b2057c9bde4e7711c6d48
                    </div>
                }



<<<<<<< HEAD
=======
                }

>>>>>>> 9fdca518a7a7e88ce43b2057c9bde4e7711c6d48

            </>

        )
    }

};

export default ProfileStatus;