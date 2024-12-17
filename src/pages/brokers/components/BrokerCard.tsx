import React, { Fragment } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BrokerSelectField from './BrokerSelectField';
import { useBrokerContext } from "@/src/contexts/BrokerContext";
import { useTranslation } from 'next-i18next';

const BrokerCard: React.FC = () => {
  const { selectedBroker, loading, error } = useBrokerContext();
  const { t } = useTranslation("common");
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          {t("broker_title")}
        </Typography>
        <Typography className="pb-7 text-gray-600">
          {t("broker_description")}
        </Typography>
        <BrokerSelectField />
          { selectedBroker && !loading && (
            <div className="mt-3">  
              <Fragment>
                <Typography variant="subtitle2" color="textDisabled" className="pb-3" sx={{ fontSize: 12 }}>
                  {t("broker_address")} : <br/> <Typography color="textPrimary">{selectedBroker?.address}</Typography>
                </Typography>
                <Typography variant="subtitle2" color="textDisabled" sx={{ fontSize: 12 }}>
                {t("broker_country")} : <br/> <Typography color="textPrimary">{selectedBroker?.country}</Typography>
                </Typography>
              </Fragment>
            </div>
          )}
      </CardContent>
    </Card>
  );
}

export default BrokerCard;