import { db } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';
export async function createOrder(order) {
  const col = collection(db, 'orders');
  const docRef = await addDoc(col, order);
  return docRef.id;
}