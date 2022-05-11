import { storage } from "./firebase";
import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

////////////////////////////////////
/////////// Storage ////////////////
////////////////////////////////////
const [imgUrl, setImgUrl] = useState(null);
const [progresspercent, setProgresspercent] = useState(0);

const handleSubmit = (e) => {
  e.preventDefault();
  const file = e.target[0]?.files[0];

  if (!file) return;

  const storageRef = ref(storage, `files/${file.name}`);
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
        setImgUrl(downloadURL);
      });
    }
  );
};
