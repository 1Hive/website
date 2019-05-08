---
id: membership
sidebar_label: Membership and Participation
title: Membership and Participation
---

After joining keybase and becoming an established community member individuals can request formal membership in the 1Hive organization that is currently [deployed on rinkeby](https://rinkeby.aragon.org/#/0xe520428C232F6Da6f694b121181f907931fD2211).

Formal members are identified by a non-transferrable `Bee` token, which grants them various rights related to the governance of the 1Hive organization.

### Membership guidelines

- Members are expected to remain actively engaged and are **required** to participate in governance decisions.

- If a member becomes inactive, the remaining members should vote to remove them.

- Members are responsible for minting and budgeting `Honey`, a separate transferrable token issued by the organization.

### Why `Honey`?

- `Honey` is used to coordinate contributions.

- Members can earn `Honey` by contributing to 1Hive *projects*, by being nominated for a *community allocation*, or by being added to *payroll*.

- `Honey` is used to govern the organizations treasury and is *redeemable* for a proportional share of treasury assets.

> ⚠️ The configuration of the organization is still being tested and many of the applications being utilized have not been audited or officially released. The organization will be migrated to mainnet when the process and applications are considered stable. Membership and balances of Honey will be moved to the new organization when this happens.

## Projects and Tasks 🤹‍♂️

The organization works on various projects: Each project is represented by a github repo and each project task is represented by a github issue.

Each task needs to be funded, assigned, and reviewed. We use the **Projects** application manage this.

To minimize the need to vote on every stage of this workflow, we've also created two roles: *curator* and *reviewer*:

- *Curators* look after the funding of issues (project tasks). They help create, refine, and prioritize them (you can think of curators as product managers of sorts).

- *Reviewers* approve task assignments and review work. You can think of them as mentors.

A `Honey`-based vote is required to add or remove someone from the *curator* or *reviewer* role.

### Expectations of Curators

Curators are responsible for:

- Refining tasks to ensure that they are well specified and can be scoped accurately.

- Funding high priority issues (based on their estimate of the amount of time and level of experience required to complete a task).

- Soliciting feedback from other members of the organization (but the final decision and responsibility is theirs alone).

All tasks are funded with `Honey` and all projects share the same budget of `Honey`, which is periodically minted by vote of `Bee` token holders.

This is done for the sake of simplicity. However, it's obvious that some projects will need more (or less) funding than others. To handle this, the organization is expected to coordinate offline to strategically allocate budgets between projects.

### Expectations of Reviewers

Reviewers are experienced members of the community responsible for approving task assignments and reviewing completed work.

There is only one reviewer role for all types of projects, and any reviewer can approve and review work on any task. However, reviewers are expected to coordinate with Workers and Curators to only approve and review work in their areas of expertise.

The reviewer acts as mentor both when choosing whether to approve a worker for a task and when reviewing completed work. If a worker is not a good fit for a task, the reviewer can suggest a more appropriate one.

If submitted work needs improvement, the reviewer should provide guidance.

### Expectations of Workers

Workers are expected to review tasks and ask any questions they may have about the requirements and scope before accepting to work on an issue.

Once accepted they should keep track of time spent and report this time when submitting their work.

While we all know time tracking is tedious, we insist on it because it allows curators and reviewers to more accurately scope and assign tasks. And the more accurately they can scope and assign tasks, the more fairly we can compensate workers for their effort.

## Community Allocation and Payroll 💸

Many types of contributions don't fit well into the task model.

For example, the efforts of Curators and Reviewers, the deployment and operational costs of maintaining infrastructure (such as the website or Ethereum node), or the ad-hoc nature of community and social engagement.

These types of contributions are critical to the success of 1Hive and must also be rewarded. We use two different mechanisms to compensate members for them : **Allocations** and **Payroll**.

On a weekly basis, we use the **Allocations** application to distribute a fixed amount of `Honey` between a set of nominated recipients.

The weekly allocations amount is determined by `Bee` vote, and then split between nominees using the **Dot Voting** application.

Any member of the organization can nominate any other member for an allocation period simply by saying so in the keybase #nominations channel.

An *Allocations Admin* is responsible for creating the weekly allocations vote and including all nominees each Monday.

Allocations are useful for rewarding ad-hoc contributions or exemplary behavior above and beyond normal expectations. However, those with longer-term roles -- Curators, Reviewers, and members who maintain the organization's infrastructure -- are best compensated with recurring payments through the **Payroll** application.

### Expectations for Nomination
Members should nominate other members and provide an anecdote for why they are making the nomination.

A nomination is like saying "thank you" for going above and beyond in some way.

There is no minimum or maximum number of nominations you can make in a given week, but they should be sincere. It should feel good and somewhat unexpected to be nominated.

### Expectations for Payroll
Payroll is intended to provide a baseline compensation level for consistent contributors.

Payroll is calculated separately from any compensation earned through tasks or allocations, so it shouldn't be compared to an equivalent salary.

Members who are added to payroll should have a clearly defined scope of recurring work. A member who has been added to Payroll can choose to claim their allotment in any treasury asset, including `Honey`.

## Long-term Rewards 🍯

1Hive may pursue projects which have the potential to generate future revenue. These revenue streams will be directed to the treasury.

At any time, `Honey` can be redeemed for a proportional share of the current treasury assets.

If there is consensus among members treasury assets can also be distributed proportionally to `Honey` holders using the **Rewards** application. The idea is to encourage members to seek sustainable revenue streams and grow the project over a long time horizon.
