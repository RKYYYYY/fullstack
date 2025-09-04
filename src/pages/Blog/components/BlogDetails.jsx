import { useParams } from "react-router-dom";
import { useBlog } from "../../../context/BlogContext";
import { useEffect, useState } from "react";

export default function BlogDetails() {
  const { id } = useParams();
  //   console.log(id);
  const { blogs } = useBlog();
  //   console.log(blogs);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const detailBlog = blogs.find((e) => e._id === id);
    setDetails(detailBlog);
  }, [id, blogs]);

  if (!details) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold">{details.titre}</h3>
      <p>{details.texte}</p>
      <img className="w-[500px]" src={details.image} alt={details.titre} />
      <p>{details.date}</p>
    </div>
  );
}
