// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";

type Blog = {
  id:number,
  title:string,
  body:any
}

export default function Home({ blog }:{blog: Blog[]}) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};