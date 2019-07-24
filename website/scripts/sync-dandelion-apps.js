const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = '1hive/redemptions-app'

/*
NOTE! 
- the contentLocation fields are CASE SENSITIVE
- there needs to be placeholder content in the sync directory before you can run the sync scripts (because the way they're written they overwrite old versions of the docs in that location)
- you need to tell package.json to clear out the old sync directory and run the sync scripts to add new content
- you need to link to the synced docs in sidebars.js
*/

const pages = [

	/* Redemptions Overview */
	{
		destination: 'docs/sync/dandelion/redemptions-overview.md',
		id: 'redemptions-overview',
		sidebarLabel: 'Redemptions',
		title: '1Hive Redemptions App',
		contentLocation: 'docs/overview.md',
	}
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)
