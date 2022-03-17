import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { loadMemberships } from '../../store/membership';
import { editUser } from '../../store/session';

import './UserProfile.css';

function UserProfile() {
    const [user, setUser] = useState({});
    const { userId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if (!userId) {
            return;
        }
        (async () => {
            const response = await fetch(`/api/users/${userId}`);
            if (response.ok) {
                const user = await response.json();
                setUser(user);
            } else {
                setUser(false);
            }
        })();
    }, [userId]);

    useEffect(() => {
        dispatch(loadMemberships());
    }, [dispatch]);

    const sessionUser = useSelector(state => {
        return state.session.user
    });

    const allMemberships = useSelector(state => {
        return state.memberships
    });

    const membershipArr = [];
    Object.values(allMemberships).forEach(membership => {
        if (parseInt(membership.memberId) === parseInt(userId)) {
            membershipArr.push(membership);
        };
    });

    const [usersMemberships, setUsersMemberships] = useState([]);
    useEffect(() => {
        setUsersMemberships(membershipArr);
    }, [allMemberships]);

    const toggleEdit = (e) => {
        setNewBio(user.bio);
        setEditing(true);
    };

    const toggleCancel = (e) => {
        setEditing(false);
    };

    const toggleSubmit = async (e) => {
        e.preventDefault();

        const editedUser = {
            id: sessionUser.id,
            profilePicURL,
            bio: newBio
        };

        const errors = [];

        setValidationErrors(errors);

        if (!errors.length) {
            const updatedUser = await dispatch(editUser(editedUser));
            (async () => {
                const response = await fetch(`/api/users/${userId}`);
                const user = await response.json();
                setUser(user);
            })();
            setEditing(false);
        };
    };

    const uploadImage = async (e, image, setter, statusSetter) => {
        e.preventDefault();
        statusSetter("Loading...");
        const formData = new FormData();
        formData.append("image", image);
        const res = await fetch('/api/images', {
            method: "POST",
            body: formData
        });
        if (res.ok) {
            let data = await res.json();
            setter(data.url);
            statusSetter("Uploaded!");
        } else {
            statusSetter("Image not found / Invalid Image!");
        }
    };

    const [newBio, setNewBio] = useState(user.bio);
    const [profilePicURL, setProfilePicURL] = useState(sessionUser ? sessionUser.profile_pic_url : '');
    const [image, setImage] = useState(null);
    const [imageStatus, setImageStatus] = useState('Upload');
    const [validationErrors, setValidationErrors] = useState([]);

    return (
        <>
            {user ?
                <div className='site-body'>
                    <div className='user-container'>
                        <div className='user-left'>
                            {editing ?
                                <div className='user-image-inputs'>
                                    {profilePicURL ? <img className='user-page-pic' src={profilePicURL} alt='Scrap' /> : ''}
                                    <input
                                        type='file'
                                        accept='image/*'
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />
                                    <button id='image-upload-button' onClick={(e) => uploadImage(e, image, setProfilePicURL, setImageStatus)}>
                                        {imageStatus}
                                    </button>
                                </div>
                                : <img className='user-page-pic'
                                    src={user.profile_pic_url}
                                    alt='user profile' />
                            }
                            <h4>{user.username}</h4>
                            {editing ?
                                <textarea
                                    value={newBio}
                                    placeholder='Introduce yourself!'
                                    id='bio-textarea'
                                    onChange={(e) => setNewBio(e.target.value)} />
                                : user.bio?.length > 0 ?
                                    <p id='profile-bio'>{user.bio}</p>
                                    : ''}
                            {user.id === sessionUser.id ?

                                editing ?
                                    <div id='profile-submit-cancel'>
                                        <button
                                            onClick={toggleSubmit}>Submit</button>
                                        <button
                                            onClick={toggleCancel}>Cancel</button>
                                    </div>
                                    : <button
                                        id='profile-edit-button'
                                        onClick={toggleEdit}>Edit Profile</button>

                                : ''}
                        </div>
                        <div className='user-right'>
                            <h3>{user.username}'s Groups</h3>
                            {usersMemberships.length > 0 ?
                                usersMemberships.map(membership => {
                                    return (
                                        <>{membership.group.name}</>
                                    )
                                })
                                : <p>{user.username} is not in any groups</p>}
                        </div>
                    </div>
                </div>

                : <Redirect to='/404' />}
        </>
    );
}
export default UserProfile;
