import Ajv from 'ajv';

const ajv = new Ajv();

const schema = {
  type: 'array',
  items: [
    {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
      },
      required: ['id', 'name'],
      additionalProperties: false,
    },
  ],
};

export const validate = ajv.compile(schema);
