import { useEffect, useState } from "react";
import { fetchBrokers } from "../services/brokerService";
import { Broker } from "../types/broker.types";

export const useBrokers = () => {
  const [brokers, setBrokers] = useState<Broker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBrokers = async () => {
      try {
        const data = await fetchBrokers();
        setBrokers(data);
      } catch (err) {
        setError("Failed to fetch brokers");
      } finally {
        setLoading(false);
      }
    };

    loadBrokers();
  }, []);

  return { brokers, loading, error };
};