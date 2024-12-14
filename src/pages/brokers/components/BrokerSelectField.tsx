import React, { useState } from 'react';
import { SelectField, Option } from "../../../components/SelectField";

const ModalPlaceholder: React.FC = () => {
  return <div>Modal Placeholder</div>;
};

const BrokerSelectField: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const options: Option[] = [
    { label: 'Robco Industries - 1785 Railway St, Kenora, ON P9N 0B5 - Canada', value: 'robco' },
  ];

  const handleOnChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <SelectField
        options={options}
        label="Managing broker"
        value={selectedOption}
        onChange={handleOnChange}
        actionLabel="Add manualy"
        actionOnClick={() => setModalOpen(true)}
      />

      {isModalOpen && <ModalPlaceholder />}
    </div>
  );
};

export default BrokerSelectField;