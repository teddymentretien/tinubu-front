import React, { useState, useMemo } from 'react';
import { SelectField, Option } from "@/src/components/SelectField";
import Modal from '@/src/components/Modal';
import FormSubmitContext from '@/src/contexts/FormSubmitContext';
import { CustomForm as Form, FormValues } from '@/src/components/Form';
import { useBrokers } from '@/src/hooks/useBroker';

const BrokerSelectField: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const { brokers, loading, error } = useBrokers();

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
    setSelectedOption(value);
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
        value={selectedOption}
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