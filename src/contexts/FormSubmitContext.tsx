import React from 'react';

const FormSubmitContext = React.createContext({
  submitForm: (values: any) => {}
});

export default FormSubmitContext;
