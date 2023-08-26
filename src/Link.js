import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { db } from "./firebase";

export default function Link() {
  const { code } = useParams();
  const history = useHistory();
  const [url, setUrl] = useState("");

  useEffect(() => {
    let query = db.collection("urls").where("code", "==", code);
    query.onSnapshot((data) => {
      if (data.empty) {
        return history.push("/");
      }
      let finalData = data.docs[0].data();

      setUrl(finalData.url);
      window.location.replace(url);
    });
  }, []);

  return <div></div>;
}


