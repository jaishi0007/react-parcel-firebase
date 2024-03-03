import { getFirestore, addDoc, collection } from 'firebase/firestore';
import app from '../../../db/firebase';
const db = getFirestore(app);

export const writeDataToFirebase = (data) => new Promise((resolve, reject) => {
    addDoc(collection(db, 'country_fact'), data)
        .then((documentReference) => resolve(documentReference.id))
        .catch(e => reject(e.message));
});
