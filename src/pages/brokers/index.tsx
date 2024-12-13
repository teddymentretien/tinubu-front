import React from "react";
import BrokerSelectField from "./components/BrokerSelectField";

const Brokers: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <BrokerSelectField />
        </div>
    )
}

export default Brokers;