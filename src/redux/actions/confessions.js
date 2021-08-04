import {CREATE_CONFESSION_SUCCESS, CREATE_CONFESSION_ERROR, GET_CONFESSION, LIKE_CONFESSION } from '../constants/confession'

export const createConfession = (confession) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
        const firestore = getFirestore()

        if (confession.location === '/explore') {
            await firestore.collection('confessions').add({
                content: confession.content,
                createdAt: new Date(),
                username: 'anonymous',
                userFname: 'Anonymous',
                userLname: 'User',
                userId: 'XBODMyuxsjQCw7LDM6ivYt0Atqq1'
            })
        } else {
            const profile = getState().firebase.profile
            const uid = getState().firebase.auth.uid
            await firestore.collection('confessions').add({
                content: confession.content,
                createdAt: new Date(),
                username: profile.username,
                userFname: profile.fname,
                userLname: profile.lname,
                userId: uid
            })
        }

        dispatch({
            type: CREATE_CONFESSION_SUCCESS,
            confession
        })
    } catch (error) {
        dispatch({
            type: CREATE_CONFESSION_ERROR,
            error
        })
    }
}

export const getConfession = (id) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
        const firestore = getFirestore()
        const confession = await firestore.collection('confessions').doc(id).get()
        let views = confession.data().views
        if (!views) {
            views = 1
        } else {
            views++
        }
        await firestore.collection('confessions').doc(id).update({
            views: views
        })
        dispatch({
            type: GET_CONFESSION,
            confession
        })
    } catch (error) {
        console.log(error)
    }
}

export const likeConfession = (id) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
        const firestore = getFirestore()
        
        const uid = getState().firebase.auth.uid

        const confession = await firestore.collection('confessions').doc(id).get()
        let likes = confession.data().likes
        if (!likes) {
            likes = []
        }
        likes.push(uid)

        const user = await firestore.collection('profile').doc(uid).get()
        let likedConfessions = user.data().likedConfessions
        if (!likedConfessions) {
            likedConfessions = []
        }
        likedConfessions.push(id)

        likes = new Set(likes)
        likedConfessions = new Set(likedConfessions)

        likes = [...likes]
        likedConfessions = [...likedConfessions]

        await firestore.collection('confessions').doc(id).update({
            likes: likes
        })
        await firestore.collection('profile').doc(uid).update({
            likedConfessions: likedConfessions
        })

        dispatch({
            type: LIKE_CONFESSION
        })
    } catch (error) {
        console.log(error)
    }
}