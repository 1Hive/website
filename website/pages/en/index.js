/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */ 

const React = require('react');

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

const projects = [ 
  {
    name: 'Dandelion Voting',  
    icon: 'img/projects/dandelion-voting.svg',
    url: 'projects/dandelion-orgs/voting-dissent-oracle',
    description: 'Voting app used to create and participate in votes and enable an Organization to restrict voters from performing actions'
  },
  {
    name: 'Time Lock',
    icon: 'img/projects/time-lock.svg',
    url: 'projects/dandelion-orgs/time-lock-app',
    description: 'Require users to lock tokens for a configurable period of time in order to forward an intent'
  },
  { 
  name: 'Token Request',
  icon: 'img/projects/token-request.svg',
  url: 'projects/dandelion-orgs/token-request-app',
  description: "Allow users to create a request for Organization's tokens in exchange for payment"
  },
  {
    name: 'Redemptions',
    icon: 'img/projects/redemptions.svg',
    url: 'projects/dandelion-orgs/redemptions-app',
    description: "Redeem tokens in exchange for a proportional amount of the organization's eligible assets"
  },
  {
    name: 'Token Balance Oracle',
    icon: 'img/projects/token-oracle.svg',
    url: 'https://github.com/1Hive/token-oracle',
    description: 'ACL Oracle that checks if an address holds a minimum required balance of a certain token.'
  },
  {
    name: 'Dandelion Template',
    icon: 'img/projects/dandelion-template.svg',
    url: 'https://github.com/1Hive/dandelion-org',
    description: 'Facilitate collaboration by providing an organization structure that makes it easy for contributors to simply part ways when disagreements occur.'
  },
  {
  name: 'Conviction Voting',
  icon: 'img/projects/conviction-voting.svg',
  url: 'https://github.com/1Hive/conviction-voting-app',
  description: 'Allocate funds on proposals based on the conviction an entire organization has on them.'
  },
  {
    name: 'Apiary',
    icon: 'img/projects/apiary.svg',
    url: 'https://github.com/1Hive/apiary',
    description: 'Aragon DAO explorer. Discover, explore, and participate in Aragon organizations more effectively.'
  }
]


// The Main Component
class Index extends React.Component { 
  render() {

		// Splash Component
		function Splash() {
			return (
        <div className="splash">
          <div className="content">
            <img
                src="/img/bee.svg" width="200"
              />
            <h1>
              <b>1Hive</b> is creating tools and processes to improve online collaboration and help digital communities thrive.  
            </h1>
          </div>
        </div>
			)
    }
    
    // Projects Component
		function Posts() { 
			return (
        <section className='posts'>
          <div className="wrapper col">
            <div style={{ padding: '50px 0' }}>
              <h4>Recent posts</h4>
              <div>
                <div className='post'>
                  <div>
                    <img src='img/projects/apiary.png'/>
                  </div>
                  <div>
                    <h2>Introducing Apiary: an Aragon Network Explorer</h2>
                    <span>{description}</span>
                  </div>
                </div>
                <div className='post'>
                  <div>
                    <h2>Dandelion is now available on Rinkeby for testing</h2>
                    <span>{description}</span>
                  </div>
                  <div style={{textAlign: 'right'}}>
                    <img src='img/projects/template.svg'/>
                  </div>
                </div>
              </div>
              <div className='see-all'>
                <a href="blog">All posts</a>
              </div>
            </div>
          </div>
        </section>
      )
    }


		// First Content Component
		function Content1(){
			return (
        <div className="content row">
          <div className="col center">
            <img
              src="/img/garden/051-sun.png" width="200"
            />
          </div>
          <div className="col">
            <h4>Tools</h4>
            <h3>Digital Cooperatives</h3>
            <p>
              We are building applications which help communities securely and transparently operate digital cooperatives. These organizational tools can help open source projects attract and fairly reward contributors.
            </p>
            <a className="learnmore" href="/contribute/welcome">
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
            <h3>Growing the Commons</h3>
            <p>
              We believe that finding sustainable funding sources for open source projects is critical to growing the open source commons. To that end we are advocating for a novel open source license which combines the best aspects of <strong>copyleft</strong> and <strong>permissive</strong> style open source licensing.
            </p>
            <a className="learnmore" href="/projects/commons-license">
              Learn more
            </a>
          </div>
          <div className="col center">
            <img
              src="/img/garden/051-tree-1.png" width="200"
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
              src="/img/051-gloves.png" width="200"
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
    
		// Projects Component
		function Projects() { 
			return (
        <section className="projects">
          <div className='wrapper col'>
            <h4>Our projects</h4> 
            <ul className='grid'>
              {projects.map((project, index) => {
                return (
                  <li key={index}>
                    <a href={project.url}>
                    <div className={`project flex ${project.name.toLowerCase().split(' ').join('-')}`}>
                      <img src={project.icon} alt={project.name}/>
                      <div className='description'>
                        <h2>{project.name}</h2>
                        <span>{project.description}</span>
                      </div>
                    </div>
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className='see-all'>
              <a href="/projects/dandelion-orgs/dandelion-overview">All projects</a>
            </div>
          </div>
        </section>
			)
		}

		// Return The Components
    return (
      <div className='main'>
        <Splash />
        <Posts />
        <div>
          <Content1 />
          <Content2 />
          <Content3 />
        </div>
        <Projects />
      </div>
    );
  }
}

module.exports = Index;
