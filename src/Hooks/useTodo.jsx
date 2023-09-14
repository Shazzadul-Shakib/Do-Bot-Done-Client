import { useQuery } from "react-query";

const useTodo = () => {
  const { data, error, isLoading, refetch } = useQuery("myData", () =>
    fetch("http://localhost:5000/todos").then((response) => response.json())
  );
  return [data, isLoading, refetch];
};

export default useTodo;
