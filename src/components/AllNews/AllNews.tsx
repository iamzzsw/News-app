import React, { useEffect, useState } from "react";
import NewsPreviewList from "../NewsPreviewList/NewsPreviewList";
import { SelectOption } from "../Select/Select";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import Typography from "../Typography/Typography";

interface AllNews {
  sortValue: SelectOption | undefined;
  searchValue: string;
}

const AllNews: React.FC<AllNews> = ({ sortValue, searchValue }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState(9);
  let inc = 9;

  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=${
      searchValue === "" ? "bitcoin" : searchValue
    }&sortBy=${sortValue?.value}&apiKey=10028bf7b3f24344a115189fdf66d2b5`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          setArticles(data.articles);
          setLoading(false);
        }
      });
  }, [sortValue, searchValue]);

  if (!articles.length) return null;

  const handleClick = () => {
    setOffset(offset + inc);
    console.log(offset);
  };

  return (
    <>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <NewsPreviewList news={articles.slice(0, offset)} />
      )}
      {offset >= articles.length ? (
        ""
      ) : (
        <LoadMoreButton onClick={handleClick} />
      )}
    </>
  );
};
export default AllNews;
