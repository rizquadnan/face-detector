import { useContext, useEffect, useState } from "react";
import TokenContext from "../components/TokenProvider/TokenProvider";
import { useFetch } from "./useFetch";

function useClarifaiFaceBoundingBoxes(imageUrl, afterSuccessCallback) {
  const [boundingBoxes, setBoundingBoxes] = useState(null);
  const [state, setState] = useState("IDLE");

  const token = useContext(TokenContext);
  
  const fetch = useFetch();

  useEffect(() => {
    if (imageUrl) {
      setState("LOADING");

      fetch("detect-face", {
        method: 'POST',
        body: JSON.stringify({
          imageUrl
        }),
        headers: {
          authorization: token
        }
      })
      .then(res => res.json())
      .then(response => {
        setState("SUCCESS");

        setBoundingBoxes(response.data);

        afterSuccessCallback()
      })
      .catch((error) => {
        setState("ERROR");

        console.log('error', error)
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl]);

  return [boundingBoxes, state];
};  

export { useClarifaiFaceBoundingBoxes };