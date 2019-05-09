/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

const React = require('react');

class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="splash">
          <div className="content">
            <h1>Cultivating Open Source Communities</h1>
            <h2>
              1Hive is a decentralized autonomous organization working to grow the open source commons and improve open source sustainability.
            </h2>
            <div className="row">
              <a
                className="landing-btn primary"
                href="https://rinkeby.aragon.org/#/0xe520428C232F6Da6f694b121181f907931fD2211/0xc2555abaed3797b52248e814172d2bea6728e542">
                Open 1Hive DAO
              </a>
              <a className="landing-btn" href="/docs/contribute/welcome">
                Learn more
              </a>
            </div>
            <div className="slideshow">
              <img src="img/slideshow/1_projects.png" className="splashScreen" />
              <img src="img/slideshow/2_projects.png" className="splashScreen" />
              <img src="img/slideshow/3_projects.png" className="splashScreen" />
              <img src="img/slideshow/4_members.png" className="splashScreen" />
            </div>
            <div className="shadow" />
          </div>
        </div>
        <div className="content row">
          <div className="col center">
            <img
              src="/img/051-sprout-1.png" width="250"
            />
          </div>
          <div className="col">
            <h4>Tools</h4>
            <h3>Accountable Crowdfunding</h3>
            <p>
              We are contributing to the research and development of <strong>Apiary</strong>, a crowdfunding platform for decentralized autonomous organizations. Open Source projects can use Apiary to grant patrons exclusive rights and privelleges within their community.
            </p>
            <a className="learnmore" href="/docs/projects/apiary">
              Learn more
            </a>
          </div>
        </div>
        <div className="content row">
          <div className="col">
            <h4>Licensing</h4>
            <h3>Hive Commons License</h3>
            <p>
              We believe that finding sustainable funding sources for open source projects is critical to growing the open source commons. To that end we are advocating for a novel open source license which combines the best aspects of <strong>copyleft</strong> and <strong>permissive</strong> style open source licensing.
            </p>
            <a className="learnmore" href="/docs/projects/commons-license">
              Learn more
            </a>
          </div>
          <div className="col center">
            <img
              src="/img/051-flower.png" width="250"
            />
          </div>
        </div>
        <div className="content row">
          <div className="col center">
            <img
              src="/img/051-gloves.png" width="250"
            />
          </div>
          <div className="col">
            <h4>Community Driven</h4>
            <h3>Contributing to 1Hive</h3>
            <p>
              We are an open and transparent organization. This enables you to see and understand how we
              operate, and of course join the community and help us improve. Many of our projects, both technical and non-technical, have <strong>open bounties</strong>.
            </p>
            <a
              className="learnmore"
              href="/docs/contribute/welcome">
              Learn more
            </a>
          </div>
        </div>
        <div className="wrapper landing-cta">
          <a href="/docs/projects/welcome" className="landing-btn primary">
            More projects
          </a>
        </div>
      </div>
    );
  }
}

module.exports = Index;
