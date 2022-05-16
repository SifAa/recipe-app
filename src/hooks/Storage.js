import { storage } from "./firebase";
import { useEffect } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const useFileUpload = (file, setMyRecipe, setProgresspercent) => {
  useEffect(() => {
    const uploadFile = () => {
      const uniqName = new Date().getTime() + file.name;
      const storageRef = ref(storage, uniqName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMyRecipe((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file, setMyRecipe, setProgresspercent]);
};

export { useFileUpload };
