import React from 'react';
import { FormValues } from "@/src/components/Form";

const FormSubmitContext = React.createContext({
  submitForm: (values: FormValues) => {}
});

export default FormSubmitContext;
