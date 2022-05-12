import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  //sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBomVYN9jTinQ_SGSpIMTFrafO-P3k5foQ",
  authDomain: "react-school-projects.firebaseapp.com",
  projectId: "react-school-projects",
  storageBucket: "react-school-projects.appspot.com",
  messagingSenderId: "545846768787",
  appId: "1:545846768787:web:3ca797cebee1ccc4564966",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

////////////////////////////////////
///////////// Recipe ///////////////
const recipesCollection = collection(db, "recipes");

////// Create Recipe function //////
function createRecipe(myRecipe) {
  console.log(myRecipe);
  addDoc(recipesCollection, myRecipe);
}

//// Read Recipe List function /////
function useShowRecipeList(setMyRecipes) {
  useEffect(() => {
    onSnapshot(query(recipesCollection), (snapshot) => {
      const data = snapshot.docs
        .map((doc) => {
          return { recipeId: doc.id, ...doc.data() };
        })
        .sort((a, b) => {
          if (a.doc.data.recipeName < b.doc.data.recipeName) return -1;
          else if (a.doc.data.recipeName > b.doc.data.recipeName) return 1;
          else return 0;
        });
      setMyRecipes(data);
    });
  }, [setMyRecipes]);
}

/////// Read Recipe function ///////
const readRecipe = async (recipeId) => {
  const docRef = doc(db, "recipes", recipeId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    //     setMyRecipe({
    //     recipeId: id,
    //     recipeName: recipe.recipeName,
    //     description: recipe.description,
    //     img: recipe.img,
    //     type: recipe.type,
    //   });
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

///// Delete Recipe function //////
////////////////////////////////////

////////////////////////////////////
//////////// Login /////////////////
////////////////////////////////////
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      username,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  storage,
  readRecipe,
  createRecipe,
  useShowRecipeList,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};

// login tutorial from https://blog.logrocket.com/user-authentication-firebase-react-apps/
// REMEMBER useNavigate instead of useHistory and navigate instead of history.push or history.replace
// with navigate = useNavigate instead of history = useHistory
