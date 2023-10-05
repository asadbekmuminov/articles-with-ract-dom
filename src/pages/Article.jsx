import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
function Article() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data: article, isPending, error } = useFetch(url);
  if (isPending) {
    return (
      <span className="loading loading-dots loading-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
    );
  }
  return (
    <div>
      {article && (
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={article.image}
              alt="Shoes"
              className="rounded-xl max-h-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl mb-5">{article.title}</h2>

            <p>{article.body}</p>
            <p
              className="text-2xl  ml-auto italic
            "
            >
              Author: {article.author}
            </p>
            <div className="card-actions">
              <Link to={"/"} className="btn btn-primary">
                Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Article;
