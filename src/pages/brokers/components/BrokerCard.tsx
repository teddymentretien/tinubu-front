import React, { Fragment } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BrokerSelectField from './BrokerSelectField';
import { useBrokerContext } from "@/src/contexts/BrokerContext";

const BrokerCard: React.FC = () => {
  const { selectedBroker, loading, error } = useBrokerContext();
  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Managing Broker
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <BrokerSelectField />
        <div className="mt-3">  
          { selectedBroker && (
              <Fragment>
                <Typography variant="subtitle2" className="">
                  Address : <br/> {selectedBroker?.address}
                </Typography>
                <Typography variant="subtitle2">
                  Country : <br/> {selectedBroker?.country}
                </Typography>
              </Fragment>
            )}
        </div>
      </CardContent>
    </Card>
  );
}

export default BrokerCard;