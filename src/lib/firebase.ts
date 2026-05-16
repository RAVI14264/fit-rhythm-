import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

// We use a dynamic import or safe check for the config to avoid build errors if it's missing.
// Users must run the set_up_firebase tool to generate this file.
let firebaseApp: FirebaseApp | null = null;

function getFirebaseApp() {
  if (getApps().length > 0) return getApp();
  
  try {
    // Note: In some environments, JSON might be missing during first build
    // @ts-ignore
    const config = import.meta.glob('../firebase-applet-config.json', { eager: true, import: 'default' })['../firebase-applet-config.json'];
    if (config) {
      firebaseApp = initializeApp(config as any);
      return firebaseApp;
    }
  } catch (e) {
    console.warn("Firebase config missing. Run set_up_firebase tool.");
  }
  return null;
}

export const getDb = (): Firestore | null => {
  const app = getFirebaseApp();
  return app ? getFirestore(app) : null;
};

export const getFirebaseAuth = (): Auth | null => {
  const app = getFirebaseApp();
  return app ? getAuth(app) : null;
};
