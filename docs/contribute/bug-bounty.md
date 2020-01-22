---
id: bug-bounty
sidebar_label: Bug Bounty
title: 1Hive Bug Bounty
---

A bug bounty for 1Hive apps is now live. We intend for hackers to look for smart contract vulnerabilities in our system that can lead to a loss of funds, locked DAOs, or a degraded user experience.

## Rewards

Vulnerability reports will be scored using the  [CVSS v3](https://www.first.org/cvss/) standard. The reward amounts for different types of vulnerabilities are:

| Severity    | CVSS            | Bounty        |
| :----:      | :----:          | :----:        |
| Critical    | CVSS 9.0 - 10.0 | 500 - 5000    |
| Major       | CVSS 7.0 - 8.9  | 250 - 500     |
| Medium      | CVSS 4.0 - 6.9  | 100 - 250     |
| Low         | CVSS 1.0 - 3.9  | 50 - 100      |

Rewards will be awarded at the sole discretion of the [1Hive BEEs](https://mainnet.aragon.org/#/beehive/0xc893a50f947bdacb4ed66c895cdf545dedb93a9f/). Quality of the report and reproduction instructions can impact the reward. Rewards will be paid out in HONEY.

For this initial bug bounty program, there is a **maximum bounty pool of TBD**.

The bug bounty program is ongoing.

## Reporting

Please responsibly disclose any findings to the development team. The best way to reach us immediately is on the `#dev` channel of our [Keybase chat](https://1hive.org/contribute/keybase). Simply say that you found a potential vulnerability and would like to discuss it with the dev team. We will then reach out to discuss details in private.

> DO NOT post the exploit directly to the #dev channel!

If your discovery qualifies for the bug bounty we will work with you to get it patched and issue your reward within 24hrs of initiating the patch. We will then give you credit (assuming you want that) by creating a blog post detailing the vulnerability, how we fixed it, and how you helped.

Failure to follow this reporting protocol will result in a finding being ineligible for any bounties.

## Scope

In scope for the bug bounty are all the smart contract components of the 1Hive apps. These can be found in the following repositories:

### [Redemptions](https://github.com/1Hive/redemptions-app/tree/master/contracts)

All solidity code in the `contracts` directory is eligible for the bug bounty, with a few exceptions:
- excluding `contracts/lib/`
- excluding `contracts/misc/`
- excluding `contracts/test/`

This includes the current as well as [future patch versions](https://github.com/1hive/redemptions-app/releases).

## Out of scope

What we consider out of scope for this bug bounty
- Side-effects of properly authenticated smart contract upgrades or contract upgrades that change the storage layout of a contract.
- Revocation of permissions or completely changing how a DAO operates due to important permission being granted through the proper processes.
- Any frontend applications or client-side code interacting with the contracts, as well as testing code.
- Mismatch of the functionality of the contracts and outdated spec documents.

## Areas of interest

These are some examples of vulnerabilities that would be interesting
- Bypassing ACL rules to get unauthorized access to an app.
- A user of an app performing an action that could freeze or lock the contract.
- Being able to escalate permissions using the Voting app or Token Manager without a proper vote being successful.

## Resources

Documentation and resources for hackers
- [Reference and documentation for aragonOS 4](https://hack.aragon.org/docs/aragonos-ref.html) as well as a [list of the changes that have been made for aragonOS 4 from aragonOS 3](https://github.com/aragon/aragonOS/wiki/aragonOS-4:-Updates-to-aragonOS-and-aragon-apps).
- [Documentation on how aragonOS apps should be developed](https://hack.aragon.org/docs/aragonos-building.html).
- [Documentation for our smart contract deployments to live networks](https://github.com/aragon/deployments).

## Eligibility

Terms for eligible bounties
- Only unknown vulnerabilities will be awarded a bounty; in case of duplicate reports, the first report will be awarded the bounty.
- Public disclosure of the vulnerability, before explicit consent from 1Hive to do so, will make the vulnerability ineligible for a bounty.
- Attempting to exploit the vulnerability in a public Ethereum network will also make it ineligible for a bounty.
