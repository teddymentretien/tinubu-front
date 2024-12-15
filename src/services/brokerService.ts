import brokersData from "./brokers.json";
import { Broker } from "../types/broker.types";

export const fetchBrokers = async (): Promise<Broker[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(brokersData);
      }, 1000);
    });
};