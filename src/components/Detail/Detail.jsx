import moment from "moment";

const Detail = ({ item, product, possibilities, thumbnail }) => {
  // Get the value of the property
  let treatedData = product[possibilities.filter((possibility) => product[possibility])];

  // For values that are Objects
  if (typeof treatedData === "object") {
    // Treatment for values that don't have array in the First Layer
    if (!treatedData?.length) treatedData = [{ createList: treatedData.items?.length, items: treatedData.items }];

    return treatedData ? (
      treatedData.map(({ price, url, type, extension, path, createList, items }, index) =>
        (price && type === "printPrice") || (url && type) || (path && extension) || createList ? (
          <p style={path && extension && {display: "inline-block"}} key={index}>
            {item && <b>{item}: </b>}
            
            {items
              // When the array is not in the First Layer we will show his content in some sort of an array format
              ? <span>{items.map(item => item.name || item.type).join(", ") + "." }</span>
              // Otherwise we wil display each item with his value
              : <span children={
                price
                  ? "$" + price
                  : (extension
                    ? (path !== thumbnail) && <picture><img style={{width: "200px", margin: "10px" }} alt={item} src={path.replace("http", "https") + "." + extension} /></picture>
                    : <a href={url} target="_blank" rel="noreferrer" children={type} />
                  )
              }/>
            }
          </p>
        ) : (
          <></>
        )
      )
    ) : (
      <></>
    );
  }

  // For values that are Strings
  if (treatedData && /-/.test(treatedData) && ["Start", "End"].includes(item)) treatedData = moment(new Date(treatedData)).format("L");

  return treatedData ? (
    <p>
      {item && <b>{item}: </b>}
      <span dangerouslySetInnerHTML={{ __html: treatedData }}/>
    </p>
  ) : (
    <></>
  );
};

export default Detail;
