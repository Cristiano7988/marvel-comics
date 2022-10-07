import { useEffect, useState } from "react";
import { getData } from "../../services/functions";

const Page = ({ endpoint, defaultValue }) => {
  const [title, setTitle] = useState(endpoint);
  const [request, setRequest] = useState(defaultValue.request);
  const [list, setList] = useState(defaultValue.list);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (title === endpoint) return;

    setTitle(endpoint);
    setRequest(defaultValue.request);
    setList(defaultValue.list);
  });

  useEffect(() => {
    if (request.code === 200) return;
    if (list) return;

    getData(endpoint).then(({ data, results, message }) => {
      setRequest(data);
      setList(results);
      setMessage(message);
    });
  });
  return (
    <>
      <h1 style={{ textTransform: "capitalize" }}>{endpoint}</h1>
      {message && <p>{message}</p>}
      {list && (
        <ul>
          {list.map((item) => {
            const id = item.id;
            const title = item.name || item.title || item.fullName;
            const description = item.description || item.variantDescription;
            const thumbnail =
              item.thumbnail &&
              item.thumbnail.path + "." + item.thumbnail.extension;

            return (
              id && (
                <li key={id}>
                  {title && <p>{title}</p>}
                  {description && <p>{description}</p>}
                  {thumbnail && (
                    <img src={thumbnail} alt={title} title={title} />
                  )}
                </li>
              )
            );
          })}
        </ul>
      )}
      {request && (
        <button dangerouslySetInnerHTML={{ __html: request.attributionHTML }} />
      )}
    </>
  );
};

export default Page;
