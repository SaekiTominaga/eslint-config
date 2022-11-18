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
		{
			files: ['*.d.ts'],
			rules: {
				'no-use-before-define': 'off',
				'no-var': 'off',
				'vars-on-top': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
			},
		},
		{
			files: ['*.test.ts', '*.test.js'],
			rules: {
				'no-new': 'off',
				'@typescript-eslint/ban-ts-comment': 'off',
			},
		},
	],
};
