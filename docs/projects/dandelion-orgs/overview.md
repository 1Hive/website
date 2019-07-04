---
id: dandelion-overview
sidebar_label: Overview
title: Dandelion Org Overview
---

1Hive's Dandelion Organization template is intended to help facilitate collaboration by providing an organization structure that makes it easy for contributors easily part ways when disagreements occur. By guaranteeing that participants can **exit** if they disagree with the decisions other members are making, dandelion organizations are more easily able to attract capital investment.

The dandelion organization template consists of the [Agent](https://github.com/aragon/aragon-apps/tree/master/apps/agent), [Finance](https://github.com/aragon/aragon-apps/tree/master/apps/finance), and [Token Manager](https://github.com/aragon/aragon-apps/tree/master/apps/token-manager) apps maintained by Aragon One. As well as the following applications developed and maintained by 1Hive:

* [Redemptions](projects/dandelion-orgs/redemptions-app): Allows users to manage a list of eligible assets held within an organizations Vault and allow members of the organization to redeem (burn) organization token in exchange for a proportional amount of the eligible assets.
* [Token Request](projects/dandelion-orgs/token-request-app): Allows users to propose minting tokens in exchange for a payment to the organization, subject to the approval of existing members.
* [Lock](projects/dandelion-orgs/lock-app): Allows an organization to require users to lock a configure amount of tokens for a configurable amount of time in order to forward an intent.
* [Delay](projects/dandelion-orgs/delay-app): Allows an organization to require a configurable delay before an action may be executed.
* [Voting with Dissent Oracle](projects/dandelion-orgs/voting-dissent-oracle): An enhanced version of Aragon One's voting app which implements an ACL Oracle which allows an organization to configure permissions that restrict actions based on whether an address has recently voted Yes.
