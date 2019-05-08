---
id: docs 
sidebar_label: Docs 🦕  
title: Documenting with Docusaurus 🦕
---

## This website is built with [Docusaurus](https://docusaurus.io)! 🦕

This means that unless you want to change the architecture of the site (adding/removing sections, reorganizing, etc) you should be able to just create and edit [Markdown](https://guides.github.com/features/mastering-markdown/) docs. 

<br>

## Examples 👀

If you want an example of what Docusaurus can do, look no further than the official [Docusaurus website](https://docusaurus.io/). Another great example is [hack.aragon](https://hack.aragon.org/). Since Docusaurus is based on [React](https://reactjs.org), you can extend and customize it as little or as much as you'd like. 

<br>

## Docusaurus Docs 📚

Docusaurus has great docs. Rather than recreating them, I'll just link to the most useful ones for editing this site.
- [Markdown Guide](https://docusaurus.io/docs/en/doc-markdown) - how to use Markdown in Docusaurus
- [Navigation and Sidebars](https://docusaurus.io/docs/en/navigation) - this explains how to link a new Markdown document to the rest of the website.
- [Publishing Your Site](https://docusaurus.io/docs/en/publishing) - this explains how to publish the work you do locally to the actual website.

<br>

## Hacking On Docusaurus 💻


### TL;DR: to hack

~ Everything that is a String can be edited via Markdown. The hot-reload server will show these changes if you refresh the local build in the browser.

If you change anything using Javascript, you're probably going to need to disengage `yarn` then run `yarn start` again to see changes

Good luck! 🍀


### TL;DR: to publish

Uncomment some stuff in `siteConfig.js`

Then navigate to the `website` directory

Then run the script below:

`GIT_USER=your-username CURRENT_BRANCH=master yarn run publish-gh-pages`

When you're done publishing, remember to go back to `siteConfig.js` and uncomment the publish params and go back to the local dev build!

<br>

Here's the long form of what that all looks like...

### Prerequisites

Developing the website locally requires a few things:
- Git (`sudo apt-get install git` on linux)
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

If these are not enough, you can check out my [Linux Dev Env](https://github.com/burrrata/linux-dev-env) quickstart guide to see what I'm running locally. If you discover a required dependency that is not in the list above, please open an issue to let me know! :)

### Pulling the master branch

You'll then go to whatever directory you want to work on the project in and run
- `git clone https://github.com/1Hive/mvp.git`

This will pull all the data to your local environment.

### Configuring siteConfig.js

Run `cd mvp/website/` to go to the directory that serves the Docusaurus website

Open `siteConfig.js` and check that the correct stuff is commented/uncommented for local development vs publishing
- https://github.com/1Hive/mvp/blob/master/website/siteConfig.js#L27

### Building Locally

Make sure that you're still in the website directory (`~/mvp/website/`)
- `yarn` (to init stuff)
- `yarn start` (to serve stuff locally)

If `yarn start` is successful you will see the following output

    LiveReload server started on port 35729
    Docusaurus server started on port 3000

To see the website open `localhost:3000` in your browser.

If you do not see the site, please go back to the beginning of this doc and try again following all the steps. If that still does not work please open an issue or comment and I'll help however I can.
- note: I work on a remote VM that I ssh into so I won't know much about developing this on a laptop like Macbook.
- another note: I don't like npm because it's slow and lame, so I'm using Yarn. Happy to help troubleshoot Yarn, but not npm

If everything is working, you can expect changes to the UI or Markdown to hot reload with a refresh of the page. Changes to Javascript related things will require you to disengage `yarn start` using `ctrl C`, then re-engage by running `yarn start` again. This causes Yarn to reload the whole thing ensuring that your JS changes show up.

### Publishing

To publish you'll need to navigate to the `website` directory (`~mvp/website/`) and change the parameters in `siteConfig.js` to comment out local development and enable publishing.
- https://github.com/1Hive/mvp/blob/master/website/siteConfig.js#L27

Then you'll need to make sure that you're signed into GitHub on your local device. I do this with the following command so that I don't have to login for every push

`git config --global credential.helper cache`

- note: if you have 2FA enabled on your GitHub profile (and you would be wise to do so), you'll need to provide your GitHub API access token rather than your account password. You can learn about how to do that [here](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)
- test that it's working by creating a small change to the README.md, going to the root directory of the project (`~/mvp/`) and pushing it to the repo

    git add .
    git commit -m "testing git login"
    git push

Once you've got that figured out... navigate to the `website` directory (`~/mvp/website/`) and run the following command to publish:

`GIT_USER=your-username CURRENT_BRANCH=master yarn run publish-gh-pages`

After about a minute it should populate to the actual website URL. The latest website URL can be found on the README.md of this repo.

### ❗ You're not done!

Now you need to reset the parameters in `siteConfig.js` so that the next person who pulls the repo to work on it doesn't get get hit with a snafu first thing.

Make sure that you're still in the `website` directory (`~mvp/website/`) and change the parameters in `siteConfig.js` to comment out publishing and enable local development.
- https://github.com/1Hive/mvp/blob/master/website/siteConfig.js#L27

Then run it locally to make sure that it's working

    cd ~/mvp/website
    yarn start

If you check localhost:3000 and it's working and you haven't broken anything, then push it to the repo

    git add .
    git commit -m "insightful message goes here"
    git push

### Hope that helps! :)

<br>

## Notes 📝

If you want the fun minimap to show up on the left side of the screen you need to use \#\# before each title.

Remember, that for the website to actually display stuff in `docs` or `blog`, you need to link them
- [Navigation and Sidebars](https://docusaurus.io/docs/en/navigation) - this explains how to link a new Markdown document to the rest of the webiste.

<br>



