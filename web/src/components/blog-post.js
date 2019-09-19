import { format, distanceInWords, differenceInDays } from "date-fns";
import React, { useRef } from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import Container from "./container";
import AuthorList from "./author-list";
import ReactDOM from "react-dom";
// import { Button } from 'react-bootstrap'
import styles from "./blog-post.module.css";

const scrollToRef = ref =>
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth"
  });

function BlogPost(props) {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props;
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
            style={{ opacity: 0.7 }}
          />
          <div className={styles.centered}>
            <h1 className={styles.title_header} style={{ color: "white" }}>
              {title}
            </h1>
            <div style={{ textAlign: "center" }}>
              <button onClick={executeScroll} className="btn btn-primary btn-large">
                Read More
              </button>
            </div>
          </div>
        </div>
      )}
      <Container>
        <div className={styles.grid} ref={myRef}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Do, YYYY")}
              </div>
            )}
            {authors && <AuthorList items={authors} title="Authors" />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
