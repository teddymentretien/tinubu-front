import React, { useState } from 'react';
import { SelectField, Option } from "@/src/components/SelectField";
import Modal from '@/src/components/Modal';
import FormSubmitContext from '@/src/contexts/FormSubmitContext';
import { CustomForm as Form, FormValues } from '@/src/components/Form';

const BrokerSelectField: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  
  const options: Option[] = [
    { label: 'Robco Industries - 1785 Railway St, Kenora, ON P9N 0B5 - Canada', value: 'robco' },
  ];

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleOnChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleFormSubmit = (formData: FormValues) => {
    handleClose();
  };

  return (
    <FormSubmitContext.Provider value={{ submitForm: handleFormSubmit }}>
      <SelectField
        options={options}
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
        <Form includeAddress />
      </Modal>
    </FormSubmitContext.Provider>
  );
};

export default BrokerSelectField;