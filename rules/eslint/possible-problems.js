module.exports = {
	rules: {
		'no-await-in-loop': 'warn', // TODO: Change to 'error' in the future
		'no-irregular-whitespace': [
			'error',
			{
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true,
			},
		],
	},
};
