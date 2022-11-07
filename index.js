module.exports = {
	extends: [
		'eslint:recommended',
		'airbnb-base',
		'./rules/eslint/possible-problems.js',
		'./rules/eslint/suggestions.js',
		'./rules/eslint/layout&formatting.js',
		'./rules/import.js',
		'./rules/jsdoc.js',
	],
	plugins: ['jsdoc'],
	overrides: [
		{
			files: ['*.ts'],
			extends: ['plugin:@typescript-eslint/recommended'],
		},
	],
};
