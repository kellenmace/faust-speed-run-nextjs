import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }) {
  const { uri, title, excerpt, featuredImage } = post;

  return (
    <article className="card">
      {featuredImage ? (
        <Link href={uri}>
          <a>
            <Image
              src={featuredImage.node.sourceUrl}
              alt={featuredImage.node.altText}
              width={featuredImage.node.mediaDetails.width}
              height={featuredImage.node.mediaDetails.height}
            />
          </a>
        </Link>
      ) : null}
      <Link href={uri}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    </article>
  );
}
