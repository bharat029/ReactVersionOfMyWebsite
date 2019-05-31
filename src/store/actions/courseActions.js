export const addCourse = (course) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('courses').add({
      ...course
    }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteCourse = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('courses').doc(id).delete()
  }
}

export const updateCourse = (course, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('courses').doc(id).update({ ...course })
  }
}

export const addSCourse = (course) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('scourses').add({
      ...course
    }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteSCourse = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('scourses').doc(id).delete()
  }
}

export const updateSCourse = (course, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('scourses').doc(id).update({ ...course })
  }
}

export const addSpecialization = (spec) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('specializations').add({
      ...spec
    }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteSpecialization = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('specializations').doc(id).delete()
  }
}

export const updateSpecialization = (spec, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('specializations').doc(id).update({ ...spec })
  }
}
