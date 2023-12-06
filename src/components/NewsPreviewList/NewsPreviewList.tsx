import React from "react";

import styles from "./NewsPreviewList.module.css";
import NewsPreview from "../NewsPreview/NewsPreview";
import { News } from "../../api/types";

interface NewsPreviewListProps {
  news: News[];
}

const NewsPreviewList: React.FC<NewsPreviewListProps> = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((news) => (
        <li className={styles.listItem} key={news.title}>
          <NewsPreview
            url={news.url}
            urlToImage={news.urlToImage}
            id={news.title}
            title={news.title}
            publishedAt={news.publishedAt}
          />
        </li>
      ))}
    </ul>
  );
};

export default NewsPreviewList;
