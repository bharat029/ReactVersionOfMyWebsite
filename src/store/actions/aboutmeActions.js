export const addAboutMe = (abtme) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('aboutme').add({ ...abtme }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteAboutMe = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('aboutme').doc(id).delete()
  }
}

export const updateAboutMe = (abtme, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('aboutme').doc(id).update({ ...abtme })
  }
}
