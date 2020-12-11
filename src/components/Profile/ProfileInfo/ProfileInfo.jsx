import React from 'react';
import styles from './ProfileInfo.module.sass';
import Preloader from '../../common/Preloader/Preloader';
import fakeUserPhoto from './../../../assets/images/fakeUserPhoto.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, savePhoto, isOwner, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }
    return (
        <div className={styles.profileContent}>
            <div className={styles.photoBlock}>
                <img src={profile.photos.large || fakeUserPhoto} alt="profilePhoto" className={styles.photoBlock_img}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
            <div className={styles.description}>

                <h2 className={styles.fullName}>{profile.fullName}</h2>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <p className={styles.aboutMe}>Обо мне:&nbsp;
                    <span>
                        {profile.aboutMe}
                    </span>
                </p>

                <div className={styles.lookingForAJob}>
                    <p className={styles.jobsQuestion}>В поиске работы:</p>&nbsp;
                    {profile.lookingForAJob
                        ? <i className="fas fa-check-circle" style={{color: 'green'}}></i>
                        : <i className="far fa-times-circle" style={{color: 'red'}}></i>}
                </div>
                {profile.lookingForAJob &&
                    <div className={styles.status}>Статус:&nbsp;
                        <span>{profile.lookingForAJobDescription}</span>
                    </div>
                }

                <div className={styles.socialLink}>
                    <a href={profile.contacts.facebook || 'http://facebook.com'}><i
                        className="fab fa-facebook-f"></i></a>
                    <a href={profile.contacts.vk || 'http://vk.com'}><i className="fab fa-vk"></i></a>
                    <a href={profile.contacts.github || 'http://github.com'}><i className="fab fa-github"></i></a>
                    <a href={profile.contacts.instagram || 'http://instagram.com'}><i className="fab fa-instagram"></i></a>
                    <a href={profile.contacts.twitter || 'http://twitter.com'}><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    )
}

// const Contact = ({contactTitle, contactValue}) = {
//     return
// }

export default ProfileInfo;