import { useFetch } from "../hooks/useFetch";
import ArticlesList from "../components/ArticlesList";

function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");
  if (isPending) {
    return (
      <span className="loading loading-dots loading-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
    );
  }
  return <div>{articles && <ArticlesList articles={articles} />}</div>;
}

export default Home;
