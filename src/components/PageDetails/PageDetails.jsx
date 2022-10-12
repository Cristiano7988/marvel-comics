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
  Message,
} from "../Styles/Styles";

const PageDetails = ({ endpoint }) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [request, setRequest] = useState(false);
  const [product, setProduct] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (request.code === 200) return;
    if (product) return;

    getData(endpoint + "/" + id).then(
      ({ data, results, message }) => {
        setRequest(data);
        setProduct(results[0]);
        setTitle(results && (results[0].name || results[0].title || results[0].fullName));
        if (results && results[0].thumbnail) setThumbnail(results[0].thumbnail.path.replace("http", "https") + "." + results[0].thumbnail.extension);
        setMessage(message);
      }
    );
  }, [endpoint, product, request.code]);

  return (
    <>
      {title && <h1>{title}</h1>}
      {message && <Message success={false} children={message} />}
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
                key={index}
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
      {request && (
        <Button dangerouslySetInnerHTML={{ __html: request.attributionHTML }} />
      )}
    </>
  );
};

export default PageDetails;
