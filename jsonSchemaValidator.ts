import Ajv from 'ajv';

export const validateJsonSchema = (schema) => {
  const ajv = new Ajv({ allErrors: true });

  return ajv.compile(schema);
};
