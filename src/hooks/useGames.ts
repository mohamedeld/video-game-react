import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { AxiosError } from "axios";
interface Game {
  id: number;
  name: string;
}
interface FetchGameResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof AxiosError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return { games, error, loading };
};
export default useGames;
