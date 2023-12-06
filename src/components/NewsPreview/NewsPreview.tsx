import React, { useState } from "react";

import styles from "./NewsPreview.module.css";
import Typography from "../Typography/Typography";
import image from "../../assets/news.jpg";
import Icons from "../Icons/Icons";
import News from "../News/News";
import Modal from "../Modal/Modal";

interface NewsPreviewProps {
  id: string | number;
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

const NewsPreview: React.FC<NewsPreviewProps> = (news) => {
  const [active, setActive] = useState(false);

  const openModal = () => {
    setActive(true);
  };

  const handleSubmit = () => {
    setActive(false);
  };

  const handleCancel = () => {
    setActive(false);
  };
  return (
    <a className={styles.link}>
      {/* <div className={styles.image}>
        {!isFav && (
          <div className={styles.favorite}>
            <button className={styles.likeButton} onClick={handleClick}>
              <Icons name="redLike"></Icons>
            </button>
          </div>
        )}
      </div> */}
      <div className={styles.wrapper} onClick={() => openModal()}>
        <img
          className={styles.img}
          loading="lazy"
          src={news.urlToImage ?? image}
          alt={news.title}
        />
        <div className={styles.info}>
          <Typography variant="h6" color="secondary" className={styles.date}>
            {news.publishedAt}
          </Typography>
          <Typography className={styles.title}>{news.title}</Typography>
        </div>
      </div>
      <Modal
        url={news.url}
        isOpen={active}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </a>
  );
};

export default NewsPreview;
