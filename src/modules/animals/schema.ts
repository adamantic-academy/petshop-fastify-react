export const animalSchema = {
	_id: { type: 'string', format: 'uuid' },
	name: { type: 'string' },
	unit: { type: 'number' },
	race: { type: 'string' },
	created_at: { type: 'string', format: 'date-time' },
	updated_at: { type: 'string', format: 'date-time' }
};

export const listAnimalsSchema = {
	summary: 'animals',
	description: 'animals',
	response: {
		200: {
			type: 'array',
			items: {
				properties: animalSchema
			}
		}
	}
};

export const deleteAnimalSchema = {
	summary: 'delete animal',
	description: 'delete animal',
	params: {
		type: 'object',
		required: ['_id'],
		properties: {
			_id: { type: 'string' }
		}
	},
	response: {
		200: {
			type: 'boolean'
		}
	}
};
