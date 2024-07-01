import React from "react";
async function fetchBlogData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data as any;
}
async function Blog() {
  const blogData = await fetchBlogData();
  return (
    <div>
      {blogData.map((post) => (
        <div key={post.id}>
          <h3 className="font-bold my-3">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
