import React, { useEffect, useState } from "react";
import { getData } from "../../services/functions";

const Stories = () => {
  const [request, setRequest] = useState(false);
  const [list, setList] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (request.code === 200) return;
    if (list) return;

    getData('stories').then(({ data, results, message }) => {
      setRequest(data);
      setList(results);
      setMessage(message);
    });
  });

  return (
    <>
      <h1>Stories</h1>
      {message && <p>{message}</p>}
      {list && (
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
      {request && (
        <button dangerouslySetInnerHTML={{ __html: request.attributionHTML }} />
      )}
    </>
  );
};

export default Stories;
