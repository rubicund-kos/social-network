import React from 'react';
import styles from './ProfileInfo.module.sass';
import Preloader from '../../common/Preloader/Preloader';
import fakeUserPhoto from './../../../assets/images/fakeUserPhoto.png'


const ProfileInfo = (props) => {
    let profile = props.profile;
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.profileContent}>
            <div className={styles.photoBlock}>
                <img src={profile.photos.large || fakeUserPhoto} alt="profilePhoto" className={styles.photoBlock_img}/>
            </div>
            <div className={styles.description}>

                <h2 className={styles.fullName}>{profile.fullName}</h2>
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

                <div className={styles.status}>Статус:&nbsp;
                    <span>{profile.lookingForAJobDescription}</span>
                </div>
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

export default ProfileInfo;