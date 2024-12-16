import React, { useState, useMemo, useEffect } from 'react';
import { SelectField, Option } from "@/src/components/SelectField";
import Modal from '@/src/components/Modal';
import FormSubmitContext from '@/src/contexts/FormSubmitContext';
import { CustomForm as Form, FormValues } from '@/src/components/Form';
import { useBrokerContext } from "@/src/contexts/BrokerContext";
import { Broker } from '@/src/types/broker.types';

const BrokerSelectField: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { brokers, selectedBroker, setSelectedBroker, loading, error } = useBrokerContext();

  const formattedBrokers: Option[] = useMemo(
    () =>
      brokers.map((broker) => ({
        label: `${broker.legalName} ${broker.address} ${broker.city} ${broker.country}`,
        value: broker.legalName,
      })),
    [brokers]
  );

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleOnChange = (value: string) => {
    const selected: Broker|null = brokers.find((broker) => broker.legalName === value) || null;
    setSelectedBroker(selected);
  };

  const handleFormSubmit = (formData: FormValues) => {
    handleClose();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <FormSubmitContext.Provider value={{ submitForm: handleFormSubmit }}>
      <SelectField
        options={formattedBrokers}
        label="Managing broker"
        value={selectedBroker?.legalName || ""}
        onChange={handleOnChange}
        actionLabel="Add manually"
        actionOnClick={handleOpen}
      />
      <Modal
        open={modalOpen}
        title="Add manually"
        onClose={handleClose}
      >
        <Form
          includeAddress
          includeCity
          includeCountry
          includeLegalName
        />
      </Modal>
    </FormSubmitContext.Provider>
  );
};

export default BrokerSelectField;