import brokersData from "./brokers.json";
import { Broker } from "../types/broker.types";

export const fetchBrokers = async (): Promise<Broker[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(brokersData);
      }, 1000);
    });
};

export const addBroker = async (newBroker: Broker): Promise<Broker> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // if (!brokersData.find((brokerData) => brokerData.legalName === newBroker.legalName)) {
      //   brokersData.push(newBroker);
      // }
      resolve(newBroker);
    }, 1000);
  });
};