import React from 'react';
import styles from './ProfileInfo.module.sass';


class ProfileStatus extends React.Component {

    state = {

        editMode: false,
        status: this.props.status
    };

    activeteEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactiveteEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status) //меняем глобальный статус
    }
    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value //меняем локальный статус
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                state: this.props.state
            })
        }
    }

    render() {
        console.log('render')
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeteEditMode}>{this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           autoFocus={true}
                           onBlur={this.deactiveteEditMode}
                           value={this.state.status}
                    ></input>

                </div>
                }
            </>

        )
    }

};

export default ProfileStatus;