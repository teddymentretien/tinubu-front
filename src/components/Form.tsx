import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import FormSubmitContext from '@/src/contexts/FormSubmitContext';

interface FormFieldProps {
  includeLegalName?: boolean;
  includeAddress?: boolean;
  includeCity?: boolean;
  includeCountry?: boolean;
}

export interface FormValues {
  legalName?: string;
  address?: string;
  city?: string;
  country?: string;
}

const getInitialValues = (fields: FormFieldProps): FormValues => {
  return {
    legalName: fields.includeLegalName ? '' : undefined,
    address: fields.includeAddress ? '' : undefined,
    city: fields.includeCity ? '' : undefined,
    country: fields.includeCountry ? '' : undefined,
  };
};

const getValidationSchema = (fields: FormFieldProps) => {
  const schemaFields: any = {};
  if (fields.includeLegalName) {
    schemaFields.legalName = Yup.string().required('Legal name is required');
  }
  if (fields.includeAddress) {
    schemaFields.address = Yup.string().required('Address is required');
  }
  if (fields.includeCity) {
    schemaFields.city = Yup.string().required('City is required');
  }
  if (fields.includeCountry) {
    schemaFields.country = Yup.string().required('Country is required');
  }
  return Yup.object().shape(schemaFields);
};

export const CustomForm: React.FC<FormFieldProps> = (props) => {
  const { submitForm } = useContext(FormSubmitContext);
  const initialValues = getInitialValues(props);
  const validationSchema = getValidationSchema(props);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        submitForm(values);
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          {props.includeLegalName && (
            <Field name="legalName" as={TextField} label="Legal Name" required margin="dense" fullWidth helperText={<ErrorMessage className="ml-0" name="legalName" />} />
          )}
          {props.includeAddress && (
            <Field name="address" as={TextField} label="Address" required margin="dense" fullWidth helperText={<ErrorMessage className="ml-0" name="address" />} />
          )}
          {props.includeCity && (
            <Field name="city" as={TextField} label="City" required margin="dense" fullWidth helperText={<ErrorMessage className="ml-0" name="city" />} />
          )}
          {props.includeCountry && (
            <Field name="country" as={TextField} label="Country" required margin="dense" fullWidth helperText={<ErrorMessage className="ml-0" name="country" />} />
          )}
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outlined" color="primary" disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Save
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};