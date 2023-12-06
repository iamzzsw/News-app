import React, { useEffect, useState } from "react";
import NewsPreviewList from "../NewsPreviewList/NewsPreviewList";
import styles from "./News.module.css";
import Button from "../Button/Button";
import { SelectOption } from "../Select/Select";
import Typography from "../Typography/Typography";

interface NewsProps {
  category: string;
  setCategory: any;
  sortValueCounty: SelectOption | undefined;
}

const categoryList = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const News: React.FC<NewsProps> = ({
  category,
  setCategory,
  sortValueCounty,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${sortValueCounty?.value}&category=${category}&apiKey=10028bf7b3f24344a115189fdf66d2b5`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          setArticles(data.articles);
          setLoading(false);
        }
      });
  }, [category, sortValueCounty]);

  if (!articles.length) return null;

  return (
    <>
      <div className={styles.filterButtons}>
        {categoryList.map((categoryBtn) => (
          <Button
            key={categoryBtn}
            color={categoryBtn === category ? "primary" : "secondary"}
            className={styles.filterButton}
            onClick={() => setCategory(categoryBtn)}
          >
            {categoryBtn}
          </Button>
        ))}
      </div>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <NewsPreviewList news={articles} />
      )}
    </>
  );
};
export default News;
