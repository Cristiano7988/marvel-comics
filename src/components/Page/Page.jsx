import { useContext, useState } from "react";
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

const Page = ({ endpoint }) => {
  const [loading, setLoading] = useState(false);
  const newContent = useContext(Content);
  const [content, setContent] = useContent(newContent);

  const handlePageClick = ({selected}) => {
    content[endpoint].results = [];
    content[endpoint].offSet = selected * content[endpoint].data.data.limit;
    setContent(content);
    setLoading(true);

    getData(endpoint, selected * content[endpoint].data.data.limit)
    .then(({ data, results, error }) => {
      content[endpoint] = {
        results,
        data,
        error
      };
      setContent(content);
    })
    .then(()=> setLoading(false));
  };

  

  return (
    <section>
      <H1>{endpoint} {content[endpoint]?.selected}</H1>
      {content[endpoint]?.error && <Message succes={false} children={content[endpoint].error.message} />}
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
      {!!content[endpoint]?.results?.length && content[endpoint]?.data?.attributionHTML && <Button dangerouslySetInnerHTML={{ __html: content[endpoint].data.attributionHTML }} />}
    </section>
  );
};

export default Page;
