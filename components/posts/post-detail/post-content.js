import ReactMarkDown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    // // Custom renderer for images
    // img: ({ node, ...props }) => (
    //   <div className={classes.image}>
    //     <Image
    //       src={`/images/posts/${post.slug}/${props.src}`}
    //       alt={props.alt}
    //       width={600}
    //       height={300}
    //     />
    //   </div>
    // ),
    // Custom renderer for paragraphs
    p: ({ node, children }) => {
      if (node.children[0].tagName === "img") {
        const image = node.children[0].properties;
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{children}</p>;
    },

    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={post.title} />
      <ReactMarkDown components={customRenderers}>{post.content}</ReactMarkDown>
    </article>
  );
}
