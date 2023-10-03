import { useFetch } from "../hooks/useFetch";
import ArticlesList from "../components/ArticlesList";

function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");
  return <div>{articles && <ArticlesList articles={articles} />}</div>;
}

export default Home;
