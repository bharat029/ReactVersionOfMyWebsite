export const addProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('projects').add({
      ...project
    }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteProject = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('projects').doc(id).delete()
  }
}

export const updateProject = (project, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('projects').doc(id).update({ ...project })
  }
}
