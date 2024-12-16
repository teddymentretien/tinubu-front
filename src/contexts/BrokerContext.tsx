import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { fetchBrokers } from "../services/brokerService";
import { Broker } from "../types/broker.types";

interface BrokerContextType {
  brokers: Broker[];
  selectedBroker: Broker | null;
  setSelectedBroker: (broker: Broker | null) => void;
  loading: boolean;
  error: string | null;
}

const BrokerContext = createContext<BrokerContextType | undefined>(undefined);

export const BrokerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [brokers, setBrokers] = useState<Broker[]>([]);
  const [selectedBroker, setSelectedBroker] = useState<Broker | null>(null);
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

  return (
    <BrokerContext.Provider value={{ brokers, selectedBroker, setSelectedBroker, loading, error }}>
      {children}
    </BrokerContext.Provider>
  );
};

export const useBrokerContext = () => {
  const context = useContext(BrokerContext);
  if (!context) {
    throw new Error("useBrokerContext must be used within a BrokerProvider");
  }
  return context;
};
