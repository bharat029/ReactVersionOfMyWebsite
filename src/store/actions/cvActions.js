export const addEducation = (edu) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('education').add({ ...edu }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteEducation = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('education').doc(id).delete()
  }
}

export const updateEducation = (edu, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('education').doc(id).update({ ...edu })
  }
}

export const addPI = (pinterest) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('pinterest').add({ ...pinterest }).catch(err => {
      console.log(err)
    })
  }
}

export const deletePI = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('pinterest').doc(id).delete()
  }
}

export const updatePI = (pinterest, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('pinterest').doc(id).update({ ...pinterest })
  }
}

export const addCS = (skills) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('skills').add({ ...skills }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteCS = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('skills').doc(id).delete()
  }
}

export const updateCS = (skills, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('skills').doc(id).update({ ...skills })
  }
}

export const addInterest = (inte) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('hobbies').add({ ...inte }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteInterest = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('hobbies').doc(id).delete()
  }
}

export const updateInterest = (inte, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('hobbies').doc(id).update({ ...inte })
  }
}

export const addPOR = (por) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('por').add({ ...por }).catch(err => {
      console.log(err)
    })
  }
}

export const deletePOR = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('por').doc(id).delete()
  }
}

export const updatePOR = (por, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('por').doc(id).update({ ...por })
  }
}

export const addHackathon = (hackathon) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('hackathon').add({ ...hackathon }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteHackathon = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('hackathon').doc(id).delete()
  }
}

export const updateHackathon = (hackathon, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('hackathon').doc(id).update({ ...hackathon })
  }
}

export const addVE = (ve) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('ve').add({ ...ve }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteVE = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('ve').doc(id).delete()
  }
}

export const updateVE = (ve, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('ve').doc(id).update({ ...ve })
  }
}
