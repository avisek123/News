import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { database } from "../Configs";
import { useAppContext } from "../Hooks";

const useStory = () => {
  const [data, setData] = useState("");
  const { user } = useAppContext();
  const fetchData = async () => {
    try {
      await database.ref(`Stories/${user.uid}`).on(`value`, (snap) => {
        const storyArray = [];
        if (snap.exists()) {
          const obj = snap.val();

          for (const storyID in obj) {
            const story = { storyID, ...obj[storyID] };
            storyArray.push(story);
          }
        }
        setData(storyArray);
      });
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
  };
};

export default useStory;
