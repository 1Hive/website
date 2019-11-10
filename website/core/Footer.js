/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="wrapper sitemap">
          <div>
            <a href={this.props.config.baseUrl} className="nav-home">
              {this.props.config.footerIcon && (
                <img
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                  width="66"
                  height="58"
                />
              )}
            </a>
          </div>
          <div> 
            <h5>Community</h5>
            <a href="https://keybase.io/team/1hive">Keybase</a>
            <a href="https://github.com/1hive">GitHub</a>
            <a href="https://twitter.com/1HiveOrg">Twitter</a>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            {/* <a href={this.docUrl('contribute/welcome', this.props.language)}>
              Contributors Guide
            </a>
            <a href={this.docUrl('contribute/keybase', this.props.language)}>Project Chat</a>
            <a href="https://github.com/1hive">GitHub</a> */}
          </div>
          <div>
            <h5>Contributors</h5>
            <a href={this.docUrl('projects/dandelion-orgs/dandelion-overview', this.props.language)}>
              Dandelion Orgs
            </a>
            <a href={this.docUrl('projects/commons-license', this.props.language)}>
              Governance
            </a>
          </div>
          <div>
            <h5>Tools</h5>
            <a href="https://github.com/1Hive/apiary">Apiary</a>
          </div>
          <div>
            <h5>Sponsors</h5>
            <a href="https://aragon.org/">Aragon</a>
          </div>
        </section>

        {/* <section className="copyright">{this.props.config.copyright}</section> */}
      </footer>
    );
  }
}

module.exports = Footer;
