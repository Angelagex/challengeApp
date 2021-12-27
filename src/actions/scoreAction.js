import Swal from 'sweetalert2'
import { db } from '../firebase/firebase-config'
import { types } from '../types/types'
import { loadScore } from '../helpers/loadScore'


export const UserNew = (user, acumulado, ganadas) => {
    return async (dispatch) => {
       
        const newUser = {
            name: user.displayName,
            acumulado: acumulado,
            ganandas: ganadas,
            uid: user.uid
        }
        const docRef = await db.collection(`challengeApp/Score/data`).add(newUser)
        dispatch(addNewUser(docRef.id, newUser))

    }
}

export const Edit = (question) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        

        const EditQuestion = {
            title: question.title,
            responsible: question.responsible,
            description: question.description,
            priority: question.priority,
        }

        const questionFire = { ...EditQuestion  }
        delete questionFire.id

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

           await db.doc(`${uid}/Question/data/${question.id}`).update(EditQuestion)
           console.log(EditQuestion)

        Swal.fire('Saved', question.title, 'success');
        dispatch(ListarQuestion(uid))
    }
}

export const Delete = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;

        await db.doc(`${uid}/Question/data/${id}`).delete();

        dispatch(deleteQuestion(id));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch(ListarQuestion(uid))
    }
}

export const deleteQuestion = (id) => ({
    type: types.questionDelete,
    payload: id
});


//FUNCIÓN SINCRÓNICA 

export const addNewUser = ( id, user ) => ({
    type: types.userAddNew,
    payload: {
        id, ...user
    }
})

export const ListarQuestion = () => {
    return async (dispatch) =>{
        const questions =  await loadQuestions()
        dispatch(setQuestions(questions))
    }
}

export const setQuestions = (questions) => {
    return {
        type: types.questionLoad,
        payload: questions
    }
}

export const activeQuestion = (id,question) => {
    return{
        type:types.questionActive,
        payload:{
            id,
            ...question
        }
    }
}


export const clearQuestion = () => {
    return {
        type: types.questionLogoutClean
    }
}

