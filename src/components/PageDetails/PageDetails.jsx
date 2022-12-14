import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../services/functions";
import Detail from "../Detail/Detail";
import {
  Button,
  GiantCard,
  GiantCardContent,
  GiantPicture,
  Image,
  Loading,
  Message,
} from "../Styles/Styles";

const PageDetails = ({ endpoint }) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [request, setRequest] = useState(false);
  const [product, setProduct] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (request.code === 200) return;
    if (product) return;
    setLoading(true);

    getData(endpoint + "/" + id)
    .then(({ data, results, error }) => {
      setRequest(data);
      setProduct(results[0]);
      setError(error);
      setTitle(results && (results[0].name || results[0].title || results[0].fullName));
      if (results && results[0].thumbnail) setThumbnail(results[0].thumbnail.path.replace("http", "https") + "." + results[0].thumbnail.extension);
    })
    .then(()=> setLoading(false));
  }, [endpoint, product, request.code]);

  return (
    <section>
      {title && <h1>{title}</h1>}
      {error && <Message success={false} children={error.message} />}
      {loading && <Loading />}
      {product && <GiantCard>
        <div>
          {thumbnail && (
            <GiantPicture>
              <Image src={thumbnail} alt={title} title={title} />
            </GiantPicture>
          )}

          <GiantCardContent fullSize={!thumbnail}>
            {[
              { possibilities: ["variantDescription"] },
              { item: "Description", possibilities: ["description"] },
              { item: "Characters", possibilities: ["characters"] },
              { item: "Creators", possibilities: ["creators"] },
              { item: "Stories", possibilities: ["stories"] },
              { item: "Series", possibilities: ["series"] },
              { item: "Comics", possibilities: ["comics"] },
              { item: "More Info", possibilities: ["urls"] },
              { item: "Pages", possibilities: ["pageCount"] },
              { item: "Price", possibilities: ["prices"] },
              { item: "Rating", possibilities: ["rating"] },
              { item: "Format", possibilities: ["format"] },
              { item: "Type", possibilities: ["type"] },
              { item: "Start", possibilities: ["start", "startYear"] },
              { item: "End", possibilities: ["end", "endYear"] }
            ].map(({ item, possibilities }, index) => (
              <Detail
                key={"detail"+index}
                product={product}
                item={item}
                possibilities={possibilities}
                thumbnail={product && product.thumbnail?.path}
              />
            ))}
          </GiantCardContent>
          <Detail
            product={product}
            possibilities={["images"]}
            thumbnail={product && product.thumbnail?.path}
          />
        </div>
      </GiantCard>}
      {request?.attributionHTML && <Button dangerouslySetInnerHTML={{ __html: request.attributionHTML }} />}
    </section>
  );
};

export default PageDetails;
