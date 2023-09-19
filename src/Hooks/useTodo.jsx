import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../Providers/AuthProvider";

const useTodo = () => {
  const { user } = useContext(AuthContext);
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["myData", user?.email],
    queryFn: async () =>
      await fetch(
        `https://do-bot-done-server.vercel.app/todos?userEmail=${user?.email}`
      ).then((response) => response.json()),
  });
  return [data, isLoading, refetch];
};

export default useTodo;
