import { useContext, useEffect, useState } from "react";
import Content from "../../contexts/Content";
import useContent from "../../hooks/useContent";
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
  Loading,
} from "../Styles/Styles";

const Page = ({ endpoint, defaultValue }) => {
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const newContent = useContext(Content);
  const [content, setContent] = useContent(newContent);

  const handlePageClick = ({selected}) => {
    content[endpoint].results = [];
    setContent(content);
    setLoading(true);

    getData(endpoint, selected * content[endpoint].data.data.limit)
    .then(({ data, results, message }) => {
      content[endpoint] = {
        results,
        data
      };
      setContent(content);
      setMessage(message);
    })
    .then(()=> setLoading(false));
  };

  

  return (
    <>
      <H1>{endpoint}</H1>
      {message && <Message succes={false} children={message} />}
      {loading && <Loading />}
      {content[endpoint]?.results && (
        <Grid>
          {content[endpoint].results.map((item) => {
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
                    
                    <ContainerTitle positionAbsolute={endpoint !== "stories"}>
                      <H2>{title}</H2>
                    </ContainerTitle>
                  </Card>
                </GridItem>
              )
            );
          })}
        </Grid>
      )}
      {content[endpoint]?.data && <Paginate
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        marginPagesDisplayed={1}
        pageCount={Math.ceil(content[endpoint].data.data.total / content[endpoint].data.data.limit)}
      />}
      {content[endpoint]?.data?.attributionHTML && <Button dangerouslySetInnerHTML={{ __html: content[endpoint].data.attributionHTML }} />}
    </>
  );
};

export default Page;
