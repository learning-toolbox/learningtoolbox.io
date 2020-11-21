const markdownFootnotes = require('markdown-it-footnote')
const markdownItAttrs = require('markdown-it-attrs')

module.exports = {
	title: 'The Learning Toolbox',
	description: 'A set of mental and technological tools to help you learn better!',
	lang: 'en-US',
	head: [
		['link', { rel: 'preload', href: '/fonts/Crimson-Pro-vf.ttf', as: 'font', type: 'font/ttf', crossorigin: true }],
		['meta', { name: 'author', content: 'Chris Shank' }],
		['link', { rel: 'icon', href: 'favicon.png' }],
	],
	markdown: {
		config(app) {
			app.use(markdownFootnotes)
			app.use(markdownItAttrs)
		},
		anchor: {
			permalink: false,
		},
	}
}