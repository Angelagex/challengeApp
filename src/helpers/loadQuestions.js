import { db } from '../firebase/firebase-config'

export const loadQuestions = async () => {

    const questionStore = await db.collection(`challengeApp/question/data`).get()
    const questionsList = [];

    questionStore.forEach(hijo=>{
        questionsList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return questionsList
}
