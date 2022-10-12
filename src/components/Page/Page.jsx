import { useEffect, useState } from "react";
import { getData } from "../../services/functions";
import {
  Card,
  Grid,
  GridItem,
  Picture,
  Image,
  ContainerTitle,
  H2,
  H1,
  Paginate,
  Message,
  Button,
} from "../Styles/Styles";

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
  }, [title, endpoint, defaultValue.request, defaultValue.list]);

  useEffect(() => {
    if (request.code === 200) return;
    if (list) return;

    if(!list) getData(endpoint).then(({ data, results, message }) => {
      setRequest(data);
      setList(results);
      setMessage(message);
    });
  }, [endpoint, list, request.code]);

  const handlePageClick = ({selected}) => {
    setList([]);

    getData(endpoint, selected * request.data.limit).then(({ data, results, message }) => {
      setRequest(data);
      setList(results);
      setMessage(message);
    });
  };

  

  return (
    <>
      <H1>{endpoint}</H1>
      {message && <Message succes={false} children={message} />}
      {list && (
        <Grid>
          {list.map((item) => {
            const id = item.id;
            const title = item.name || item.title || item.fullName;
            const thumbnail =
              item.thumbnail &&
              item.thumbnail.path.replace("http", "https") + "." + item.thumbnail.extension;

            return (
              id && (
                <GridItem key={id}>
                  <Card to={ "/" + endpoint + "/" + id }>
                    {thumbnail && (
                      <Picture>
                        <Image src={thumbnail} alt={title} title={title} />
                      </Picture>
                    )}
                    {title && (
                      <ContainerTitle positionAbsolute={endpoint !== "stories"}>
                        <H2>{title}</H2>
                      </ContainerTitle>
                    )}
                  </Card>
                </GridItem>
              )
            );
          })}
        </Grid>
      )}
      {request && <Paginate
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        marginPagesDisplayed={1}
        pageCount={Math.ceil(request.data.total / request.data.limit)}
      />}
      {request && <Button dangerouslySetInnerHTML={{ __html: request.attributionHTML }} />}
    </>
  );
};

export default Page;
