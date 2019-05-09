---
title: Introducing Hive Commons
author: Luke Duncan
authorURL: https://github.com/lkngtn
---

> ⚠️ This is a repost of the [Introducing Hive Commons](https://medium.com/hive-commons/introducing-hive-commons-95dad77814bb) post. While some of the details and references in the post are no longer relevant, the overall message is important. Hopefully this provides more insight into the foundation, intention, and goals of 1Hive.

<hr>

## Hive Commons

[Hive Commons](http://hivecommons.org/) is a grass roots movement intended to give the public a greater voice in industry and politics by using emerging technologies to enable new forms of collective activism.

The goal of Hive Commons is to enable a community of activists to pool their collective resources into a digital commons that is governed by a blockchain governance system based on the principles of Liquid Democracy. As the resources within the commons grow and become more valuable, the community will be able to offer access to the commons as leverage for collective bargaining.

Functionally, Hive Commons will act a bit like a public cartel, ensuring that the public goods within the commons are protected and grow overtime. If successful, this should offer a significantly more effective solution to Tragedy of the Commons challenges.

Imagine if Facebook was more accountable to the public than to its private shareholders and advertising partners? Imagine if collectively we could reward our political representatives contingent on their approval rating? The goal of Hive Commons is to provide a platform for collective activism that will make that a reality.

<img src='https://cdn-images-1.medium.com/max/1080/1*1gYJoTfi8cfqMLw5s4DV5g.png' />

## Why is it necessary?

Historically collective action has been a highly effective way for communities to bring about societal changes, however, large scale collective action has been elusive as it is incredibly challenging to pull off. Often, the only thing a large group of people can agree on is that they don’t really agree on anything, and without consensus, collective action falls apart because individuals do not have enough leverage to make change by themselves.

Representative Democracy is so far the most successful form of organized collective action, but there are significant flaws. The first of which is that it relies on violent coercion rather than voluntary association to maintain authority, the second is that by electing representatives, we centralize authority in a relatively small population that is motivated by their own self-interest and subject to economic capture by third-parties. The result is a structure that provides some public benefit, but balances that benefit with private-interests sub-optimally. Arguably, many democratically governed nations have already devolved into thinly veiled oligopolies, controlled primarily by the interests of a wealthy elite.

In an ideal world, collective action is voluntary, and consensus is reached without a central authority. Hive Commons enables this type of activist organization, and while not a substitute for traditional governments in the sense that there may always need to be a need for a forceful authority to act as peacekeeper, it does offer a less corruptible alternative to representing the desires of a community and a means to realize that desire within the bounds of existing economic systems.

<img src='https://cdn-images-1.medium.com/max/1080/1*Wa-7x3D06jFK4x9aUcZepA.png' />

## How will it work?

Participation in governance and dispute arbitration will require a new cryptographic token, at the time of writing Giveth’s MiniMe extension of the ERC20 Ethereum token standard seems like the best starting point. The token, currently called Honey (HNY), will be used in all voting activities within the community using a voting model based on liquid democracy. Research, discussion, and development of the voting system is being done in the Hive Democracy repository on Github.

This token must be widely distributed and checks must be put in place to prevent accumulation and centralization of power. There are a number of promising theoretical approaches to this, which should be explored in more detail, but initially the HNY token will have a significant hard-coded supply inflation that is distributed through faucets connected with uport for proof of individuality. This mechanism will work similar to basic income and ensure that the distribution of HNY will always trend towards public interest over time.

A user friendly interface for participating in the community is critical to the success of the project. The District0x project appears to be a promising start and much of the functionality they have already built, or plan to build, could serve as the foundation for the 1Hive community portal. The portal would provide a web3.0 enabled interface similar to Reddit.com, but allow novel interactions including funding and curation of initiatives, discussion, governance, and dispute resolution.

The 1Hive community and governance portal will be much more useful if there is some shared community commons to govern. There are a number of resources that would be a good fit for pooling within a commons — software, capital, patents, computation, storage, approval, and even attention. Each resource may require a unique approach to pooling. Hive Commons plans to focus on enabling pooling of software and capital first, but the infrastructure needed to support those should overlap significantly with other resources, making it simple to enable new resource types in the future.

## Pooling Software with Hive Commons

Open Source software is an example of a digital commons, but existing open source software licenses struggle to govern access to software effectively. In fact there is a significant divide within the Open Source software community on how access to the software should be controlled. Are Copyleft licenses better than Permissive licenses in achieving the community goal of providing a more free and open society?

A Copyleft style license like the GPL has a viral clause that requires user to license any derivative works under the same license, thereby growing the community commons. The problem is that this mechanism is inflexible and generally not compatible with any sort of commercial application whatsoever. If a company builds a product that is 99% new code, and 1% GPL licensed code, the GPL license would require that the 99% must be open sourced and also licensed on the GPL, there is no middle ground for the company to opt to open source 1% of the new code in exchange for usage of the 1% of the GPL code they are licensing it is an “All or Nothing” proposition. The result is that GPL and other Copyleft licensed projects typically are developed primarily by volunteers in their free time and the project often lack the funding, polish, and utility of more mainstream products.

In contrast, a Permissive style license like the Apache license, does not have any viral restriction. Users can use the software in commercial applications without worrying about having a specific requirement to give back to the community. Though in practice, its often the case that in using the application they make improvements and bug fixes as they encounter them.

The Hive Commons License (HCL) will be a novel open source license based on the GPL, the official legal license still needs to be written and reviewed by legal experts, however, the general idea is that HCL licenses will have two options for compliance. Either license any derivative works under the HCL as you would with the GPL, or give back to the community proportionally to value you received. The second option is intentionally ambiguous and allows for a wide range of interpretations and usage flexibility while still retaining a lesser viral quality. In the event that there is a license dispute over whether the user has met the requirement of giving back proportional the Hive Commons community will use liquid democratic voting implementation to serve as final arbitrator in the dispute.

This makes it so resources within the Hive Commons are more accessible to businesses than software licensed under the GPL, but gives activist contributors more assurance that their contributions will have a lasting positive impact on the community as a whole.

## Pooling Capital with Hive Commons

Ultimately there are far fewer people who can develop software then there are members of the public, so to maximize the network effect of the movement and allow more public participation its also important that everyone has a straightforward way to contribute to the commons. A good way to do that is by funding labor and development efforts of others in order to grow the commons.

The mechanism must be simple, standardized, and most importantly provide accountability to the community in order to be successful. The platform should enable funders to curate and fund projects, and provide an accountability guarantee in the form of milestone driven development and vesting schedules.

The 1Hive Funding Platform district proposal is a good first step towards this goal, with the notable lack of a way for project contributors to fund and vote on the release of additional milestone driven bounties. Once the Hive Democracy voting mechanism is ready, this can easily be added such that anyone may claim a bounty, and then the funders could vote to release the funds.

This funding platform would enable community members to provide an incentive for developers to initially contribute to the commons, bootstrapping the community until the viral aspect of the HCL licenses begins to take effect and create a positive feedback loop.

## Who can help?

You can. Hive Commons is a grass-roots organization and everyone who believes in the mission can and should participate in the realization of the communities shared goal. Whether that means joining the conversation and spreading the ideas, or getting more active in development and infrastructure. So whatever your skillset is, join the community and get involved. We are on [Github](https://github.com/1Hive), [Medium](https://medium.com/hive-commons), and [Reddit](https://www.reddit.com/r/HiveCommons/).

Let’s change the world, together.
