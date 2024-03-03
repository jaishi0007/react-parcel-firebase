import { getFirestore, addDoc, collection, getDocs, doc } from 'firebase/firestore';
import app from '../../../db/firebase';
const db = getFirestore(app);


//Add data to firestore
export const writeDataToFirestore = (data) => new Promise((resolve, reject) => {
    addDoc(collection(db, 'country_fact'), data)
        .then((documentReference) => resolve(documentReference.id))
        .catch(e => reject(e.message));
});

//Retrieve data from firestore
export const fetchDataFromFirestore = () => new Promise(async (resolve, reject) => {
    try {
        const querySnapshot = await getDocs(collection(db, 'country_fact'));
        const data = [];

        querySnapshot.forEach(doc => {
            data.push({ data: doc.data(), id: doc.id });
        });
        resolve(data);

    } catch (e) {
        reject(e.message);
    }
});
