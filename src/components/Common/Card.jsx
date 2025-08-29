import { NavLink } from "react-router-dom";

export default function Card({ blog }) {
  return (
    <NavLink to={`/blogdetails/${blog._id}`}>
      <div key={blog._id} className="border boder-gray-500  rounded-lg">
        <div className="aspect-[3/2]">
          <img
            src={blog.image}
            alt={blog.titre}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <p className="font-bold">{blog.titre}</p>
          <p>{blog.texte}</p>
          <p className="font-light">{blog.date}</p>
        </div>
      </div>
    </NavLink>
  );
}
