/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

const React = require('react');


// The Main Component
class Index extends React.Component {
  render() {

		// Splash Component
		function Splash() {
			return (
        <div className="splash">
          <div className="content">
            <h1>Helping Open Source Communities Thrive</h1>
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
			)	
		}


		// First Content Component
		function Content1(){
			return (
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
			)
		}

		// Second Content Component
		function Content2() {
			return (
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
			)
		}

		// Third Content Component
		function Content3() {
			return (
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
			)
		}

		// Fourth Content Component
		function Content4() {
			return (
        <div className="content row">
          <div className="col center">
            <img
              src="/img/051-gloves.png" width="250"
            />
          </div>
          <div className="col">
            <h4>Get Some Honey</h4>
            <h3>How to get HONEY</h3>
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
			)
		}

		// Projects Component
		function Projects() {
			return (
        <div className="landing-cta center">
					<img
						src='img/crops.svg'
						width="250"
						className='padding'
					/>
					<a 
						href="/docs/projects/projects-welcome" 
						className="landing-btn primary"
					>
            More projects
          </a>
        </div>
			)
		}

		// Return The Components
    return (
      <div>
				<Splash />
				<Content1 />
				<Content2 />
				<Content3 />
				<Projects />
      </div>
    );
  }
}

module.exports = Index;
