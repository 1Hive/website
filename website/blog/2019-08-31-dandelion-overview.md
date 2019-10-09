---
title: 🌼 Dandelion Orgs: 👹 MolochDAO + 🦅 Aragon
author: 1Hive team
authorURL: https://github.com/1hive
---

1Hive recently received an [Aragon Nest grant](https://github.com/aragon/nest/issues/168) to build Dandelion Orgs. What are Dandelion Orgs you might ask? Dandelion Orgs are a suite of Aragon apps that, when combined, create an Aragon DAO that is functionally similar to [MolochDAO](https://molochdao.com). Unlike MolochDAO, however, each app can be used on it's own. If you're building an Aragon DAO and want one of the features from Dandelion Orgs you can install our apps with a few lines of code. You'll also be able to augment Dandelion Orgs with new Aragon apps as they are released.

Why did we take this approach? MolochDAO was developed with a philosophy of minimizing complexity and code footprint. The organization does not try and do everything, but what it does do it does very well. In contrast, Aragon has been built with a philosophy of modularity and code-reuse. The Aragon ecosystem is growing a library of useful, audited, off-the-shelf apps that can be used in any Aragon DAO. After reviewing the [MolochDAO specification](https://github.com/MolochDAOVentures/MolochDAO) we determined the key features of MolochDAO that we wanted to replicate and set out to build them as Aragon apps. This would allow any Aragon organization to adopt similar mechanisms while also staying true to the Aragon development philosophy of creating modular and re-usable components.

The fundamental mechanism that defines MolochDAO is the ability for members to exit the organization with a proportional share of the organization's assets, so long as they have not recently voted to approve a pending proposal. This creates a *loose partnership* where members can exit before a bad or otherwise controversial decision is made. This guarantee reduces friction for collaboration in the first place.

In addition to providing this core feature, we wanted to meet the following requirements:

1) Members can redeem tokens for a proportional share of the organizations assets.
2) It is possible to restrict exit actions based on whether a member has voted yes in a pending proposal.
3) New members are able to propose a payment to the DAO in exchange for the DAO's native tokens.
4) Proposals require the proposer to lock tokens in order to ensure that the incentives of voters are aligned with their votes.
5) Users who vote no, or do not vote, can see whether a proposal has passed before deciding to exit.

We expected this to be fairly straightforward. Turns out it's not. In order to make Dandelion Orgs work we dug into some of the lesser known features of the aragonOS like [ACL Oracles](https://hack.aragon.org/docs/acl_IACLOracle). ACL Oracles are small helper functions that plug in to Aragon's  access control list (ACL) to do more sophisticated permission evaluation. ACL Oracles are a complex and powerful feature of aragonOS. In the future we plan to write a more thorough post about how we used them and how others might do the same. This post, however, will will be a high level overview of the apps that combine to make the Dandelion Org template.
- Redemptions
- Token Request
- Time Lock
- Delay
- Dissent Voting

These apps will be released individually for any Aragon DAO to use. We will also ship an easy to deploy template that combines all of these apps to create a Moloch like DAO on Aragon.

<img src='https://i.imgur.com/iWz0CR7.png' alt='Dandelion Org Overview' />

### Redemptions:
>Allows users to manage a list of eligible assets held within an organization's Vault and allows members of the organization to redeem (burn) organization token in exchange for a proportional amount of the eligible assets.

The Redemptions app is similar in purpose to that of MolochDAO's ragequit function. To accomplish this the logic of whether or not a member can redeem their token is externalized using Aragon's permission system.

Unlike the ragequit mechanism in MolochDAO, Redemptions works with both ETH and ERC20 tokens. An organization can manage an array of eligible tokens for members to offer in exchange for Dandelion Org tokens and/or to redeem from the vault. Like MolochDAO, members still receive a share of the DAO's assets proportional the amount of Dandelion Org tokens they are redeeming.

This allows Dandelion Orgs to hold a strategic portfolio of liquid assets as opposed to only ETH.

We started working on Redemptions before our [Aragon Nest](https://github.com/aragon/nest/) grant was approved and it is currently available on Rinkeby. The [Redemptions app Github Repo](https://github.com/1Hive/redemptions-app) has details and deployment instructions.

If you don't want to deploy Redemptions yourself you can [demo the functionality on rinkeby](https://rinkeby.aragon.org/#/tryredemptions/0x18a9713625256548670ad979d51a6b9fad5b6c45). You'll then be able to mint yourself some Dandelion Org tokens and deem them for a portion of the DAO's assets.

### Token Request:
> Allows users to propose minting tokens in exchange for a payment to the organization, subject to the approval of existing members.

MolochDAO has two proposal types: one where shares are minted in exchange for tribute and another to allocate funds towards proposals.

We created the Token Request app to allow addresses to create a request for a Dandelion Org's membership tokens in exchange for any other ERC-20 tokens. Dandelion Org members can then choose to accept or deny the address's request. Dandelion Orgs will also be able to create proposals to allocate funds via the voting and finance apps. In addition, Dandelion Orgs also allow members to create many more types of proposals depending on how permissions are set and which apps are installed. With an app like [Aragon Agent](https://twitter.com/lkngtn/status/1147237525150425089) Dandelion Orgs can create proposals that interact with any external contract.

We anticipate that the Token Request app will be of benefit, not just to Dandelion Orgs, but the wider Aragon ecosystem. One use case would be a form of permissioned fundraising. The Token Request app allows for selective and negotiated token sales. This is somewhat similar to the venture model where startups and investors negotiate, agree on a price, and then investors get voting rights and a share of the company in exchange for cash.

### Lock:

> Allows an organization to require users to lock a configurable amount of tokens for a configurable amount of time in order to forward an intent.

In MolochDAO, members who submit a proposal are also required to place a deposit of 10 ETH. This deposit is held by the DAO until the proposal is resolved and then return to the member who submitted the proposal regardless of the vote outcome. Since proposals in MolochDAO are queued and processed one at a time, the amount of time the funds will be locked depends on the number of proposals currently in the queue. This discourages people from extending the proposal queue.

In a Dandelion organization, to avoid coupling the lock app to the voting app we have diverged a bit from MolochDAO's deposit mechanism. With the lock app the amount of time funds must be locked when submitting a proposal is dependent on the number of actions that particular address has submitted within a given time; not on the current number of pending proposals. So the more proposals an individual member submits, the more opportunity cost they face. We think this will work well despite the lock mechanism itself not being sybil resistant, because proposal submission is restricted to existing members and membership is permissioned.

It's worth noting that the lock app could be designed to more closely resemble MolochDAO's deposit mechanism. To do this we would need to initialize  it with a voting app address and have the lock time be based on the number of pending proposals in the queue at the time the proposal is submitted. We felt that the lock app would be more broadly useful if its anti-spam mechanism was not dependent on a specific voting app implementation so we opted against this path. If there is demand for this specific implementation, we would consider creating a variation on our lock app to support this behavior.

### Delay:

> Allows an organization to require a configurable delay before an action may be executed.

In MolochDAO, after a proposal passes it does not execute for an additional grace period. This period allows for members to become aware of a proposal passing and ragequit.

In both mechanisms the delay does not increase the amount of time when members are actually eligible to redeem, if someone voted yes they are only guaranteed the ability to exit for a window of time between the proposal they most recently voted yes on and the time of the proposal that triggered their desire to rage quit. This window will always be at the very end of the delay/grace period, so the delay or grace period should be thought of as a way to ensure that there is adequate awareness of proposals passing before they are actually executed, but users will need to plan to send a transaction within that window.

In our delay app we are also implementing pause/unpause and cancel permissions, which can be useful for supporting other processes. For example an ACL oracle could be used to allow cancelling proposals if the token supply has decreased by a configurable percentage. This pattern of implementing roles to pause/unpause and cancel pending actions will likely be implemented in other  voting and approval related Aragon apps to accommodate dispute resolution processes.

An example of a configuration which creates an internal dispute resolution process is as follows: Some permission can be granted to the delay app, and then the ability to forward an intent and pause can be granted to the lock app. Users can perform actions unilaterally by locking tokens, but anyone can pause the intent, and then a vote would only be required to unpause or cancel the action.

### Voting and Dissent Oracle:

> Tracks and returns whether a user should be able to perform an action based on their recent voting behavior.

In order to effectively address our requirements we will need to fork the existing voting app provided by Aragon One and add some additional functionality. Specifically we need to keep a mapping between an address and the most recent proposal start time where the user voted `yes`. We also need to ensure that votes cannot be executed early and that proposal start times can be consistently spaced apart.

We can use the mapping to create a separate app, the **Dissent Oracle** that implements the ACL Oracle interface. The Dissent Oracle essentially returns true or false and can be referenced in Permissions. The Dissent oracle is initialized with the Voting app addresses and uses the new mapping to evaluate if the user has voted `Yes` on a proposal within a configurable time frame (for the dandelion template this will be the `voteDuration` + `delayDuration`, if they have then oracle returns false. We can use this to restrict the `redeem` function in redemptions, so that anyone who has voted `yes` within that time frame cannot exit.

This mechanism is quite a bit different than how `ragequit` is implemented in MolochDAO. In MolochDAO the voting and grace period are connected, and the voting app can track what the highest index of a vote a user has voted `yes` on and evaluate whether a proposal has been fully processed based on its index value. In a Dandelion org the voting app is connected to the delay app to create the voting and grace period and these apps are not aware of one another. So instead of relying on index values, the dissent oracle uses time since the last yes vote so that the creator can account for additional processes that happen after the vote passes (like the delay).

The main trade-off here is that in MolochDAO if someone votes yes on a proposal and it doesn't pass then it is considered immediately processed. With a Dandelion Org the user would not be eligible to rage quit again until after the proposals delay period. Both implementations ensure that if a user does not vote yes on a proposal that was created after a proposal which (if passed) would trigger them to exit, they will have an opportunity to exit.

### Summary

We believe the proposed Dandelion organization template does a good job of replicating the core properties of MolochDAO. In addition, Dandelion organizations can easily incorporate apps like Agent and Payroll to extend their functionality beyond the original MolochDAO implementation.

Many of the individual Dandelion Org apps will be useful outside the context of MolochDAO-like organizations. This increases the overall value of Aragon as platform. Any existing DAO can install one or many Dandelion apps with just a few lines of code.

All this being said, the one area we cannot replicate is the simplicity and reduced code footprint of MolochDAO. By implementing MolochDAO's features as modular components on Aragon, we are explicitly sacrificing simplicity in favor of flexibility and extensibility. If you are looking to deploy an instance of MolochDAO exactly as it was originally designed, that will always be the better choice. If, however, you like the game theory of MolochDAO, but would also like to have access to the growing library of Aragon apps to extend your organization's functionality, the Dandelion template will serve you well.

