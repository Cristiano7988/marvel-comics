import { useEffect, useState } from "react";
import { getData } from "../services/functions";
import data from "../static/tabs.json";

const useContent = (newContent = []) => {
  const [content, setContent] = useState(newContent);

  useEffect(() => {
    if (!content.length) {
      data.map((item) =>
        getData(item)
        .then(({ results, data, error }) => {
          newContent[item] = {
            results,
            data,
            error
          };
          setContent({ ...newContent });
        })
      );
    }
  }, []);

  return [content, setContent];
};

export default useContent;
