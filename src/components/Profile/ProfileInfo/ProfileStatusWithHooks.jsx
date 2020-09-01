import React, {useState, useEffect} from 'react';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activeteEditMode = () => {
            setEditMode(true);
    }
    const deactiveteEditMode = () => {
            setEditMode(false);
            props.updateStatus(status) //меняем глобальный статус
    }
    const onStatusChange = (event) => {
            setStatus(event.currentTarget.value)
    }
    return (
        <>
            {!editMode &&
                    <div>
                        <span onDoubleClick={activeteEditMode}>{props.status || '-----'}</span>
                    </div>
            }
            {editMode &&
                    <div>
                        <input
                            onChange={onStatusChange}
                            autoFocus={true}
                            onBlur={deactiveteEditMode}
                            value={status}
                        ></input>
                    </div>
            }
        </>

    )

};

export default ProfileStatusWithHooks;