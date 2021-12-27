import { db } from '../firebase/firebase-config'

export const loadScore = async () => {

    const scoreStore = await db.collection(`challengeApp/score/data`).get()
    const scoreList = [];

    questionStore.forEach(hijo=>{
        questionsList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return questionsList
}