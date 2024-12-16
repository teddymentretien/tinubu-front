import React from "react";
import BrokerCard from "./components/BrokerCard";
import { BrokerProvider } from "@/src/contexts/BrokerContext";

const Brokers: React.FC = () => {
    return (
        <BrokerProvider>
            <div className="container mx-auto p-4">
                <BrokerCard />
            </div>
        </BrokerProvider>
    )
}

export default Brokers;