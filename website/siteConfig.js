/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.


const repoUrl = 'https://github.com/1hive/website';

const siteConfig = {
  title: '1Hive' /* title for your website */,
  tagline: 'Helping open source communities thrive',

	// PUBLISHING PARAMS
	/////////////////////////////////////////////////////////////////////////
	
	// EXAMPLE
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

	// (no longer needed, but keep just in case)
	// UNCOMMENT FOR LOCAL DEVELOPMENT
	//url: 'https://your-docusaurus-test-site.com', // Your website URL
	//baseUrl: '/', // Base URL for your project 
	
	// (no longer needed, but keep just in case)
	// UNCOMMENT FOR PUBLISHING TO GH-PAGES 
	//url: 'https://1hive.github.io', // Your website URL
	//baseUrl: '/website/', // Base URL for your project 

	// UNCOMMENT FOR PUBLISHING TO THE WEBSITE 
	url: 'http://1hive.org', // your website url 
	baseUrl: '/', // base url for your project 
	cname: '1hive.org', // custome domain file for gh pages
	
	/////////////////////////////////////////////////////////////////////////

  projectName: '1Hive',
  organizationName: '1Hive',

  headerLinks: [
    {doc: 'contribute/welcome', label: 'Contribute'},
    {doc: 'projects/projects-welcome', label: 'Projects'},
    {doc: 'wiki/guides/getting-started', label: 'Wiki'},
    {blog: true, label: 'Blog'},
  ],

  editUrl: 'https://github.com/1Hive/website/blob/master/docs/',

  /* path to images for header/footer */
  headerIcon: 'img/bee.png',
  footerIcon: 'img/bee.png',
  favicon: 'img/bee.png',

  /* colors for website */
  colors: {
    primaryColor: '#6da9e2',
    secondaryColor: '#c7def4',
    accentColor: '#785BA3',
    actionColor: '#008cf2',
  },
  copyright: 'Copyright © ' + new Date().getFullYear() + ' 1Hive',
  highlight: {
    theme: 'default',
  },
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-blocks-buttons.js',
  ],
  repoUrl,
  stylesheets: [],
  onPageNav: 'separate',
};

module.exports = siteConfig;
