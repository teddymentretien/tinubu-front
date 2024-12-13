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
    { label: 'Add manually', value: 'add-manually' },
  ];

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    if (value === 'add-manually') {
      setModalOpen(true);
    }
  };

  return (
    <div>
      <SelectField
        options={options}
        label="Managing broker"
        value={selectedOption}
        onChange={handleOptionChange}
      />

      {isModalOpen && <ModalPlaceholder />}
    </div>
  );
};

export default BrokerSelectField;