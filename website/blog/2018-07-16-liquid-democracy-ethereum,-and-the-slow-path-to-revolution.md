---
title: Liquid Democracy, Ethereum, and the slow path to revolution
author: Luke Duncan
authorURL: https://github.com/lkngtn
---

Liquid Democracy is a more direct form of democracy which would not be feasible without an infrastructure that enables rapid, secure, transparent, and trusted continuous voting. Ethereum’s smart contracts, despite some currently unresolved scaling issues, provide a promising foundation for building that infrastructure. This post can be broken up into 3 functional areas that essentially explain what Liquid Democracy is, how Hive Commons is approaching implementing it on Ethereum, and how we anticipate using it to bring about social change.

## A Quick Primer on Liquid Democracy

There are many ways to implement a democratic process, but if we were to put the two most well known forms on a spectrum you would have Direct Democracy on one side, and Representative Democracy on the other. Liquid Democracy would fall somewhere in the middle.

<img src='https://cdn-images-1.medium.com/max/1440/1*vMFloIdXWyCLYKvwj8eU8Q.png' />

Direct Democracy works well in situations where you have relatively few but incredibly important issues to decide on, but does not scale well when there are many issues, or issues which require expertise in a specific field. In these cases it is impractical for everyone to be well informed and make an educated choice about each issue. Representative Democracy resolves this problem by allowing the population to vote less frequently. Instead of directly voting on issues, voters elect representatives who specializes in the governance of the community — freeing up everyone else to focus on other things. Unfortunately, the economic incentives of representatives are only loosely tied to the best interest of the public, so the result is sub-optimal for the group.

Both Direct Democracy and Representative Democracy have their problems, but can Liquid Democracy really do a better job?

Yes, Instead of always voting directly, or electing representatives that vote on your behalf for a set period of time, Liquid Democracy enables voters to fluidly delegate their vote or override their delegates position as they see fit. In some forms of liquid democracy, voters are even able to delegate their vote to multiple people based on the type of issue in question. It is essentially the best parts of both systems without any obvious trade-offs. The result is a system that, at its core, is less susceptible to economic capture and more likely to reach outcomes that benefit the general voting population.

That’s the basics, but for a more thorough examination of Liquid Democracy compared to other forms, I highly recommend <a href='https://medium.com/organizer-sandbox/liquid-democracy-true-democracy-for-the-21st-century-7c66f5e53b6f'>Dominik Schiener’s 2015 post on the subject</a>.

Historically, the biggest problem was that it was not possible to implement until now. The good news is that with ubiquitous access to the internet and significant innovations in modern cryptography a functional liquid democracy is totally feasible. In fact, there is quite a bit of active research and development in progress… In addition to our project, the team at <a href='http://giveth.io/'>Giveth</a> is working on an implementation of delegated governance to direct charitable donations and is encouraging other developers to build and adapt it for other use cases. <a href='https://aragon.network/'>Aragon</a> , a blockchain governance startup that recently raised 24 Million Dollars, is actively pursuing Liquid Democracy as a core governance model for DAO entities on their network. In addition, <a href='https://commiteth.com/'>CommitETH</a>, the ,a href='https://status.im/'>Status</a> backed project, is working on integrating liquid democracy based governance directly into Github to enable SNT holders to direct the larger open source project. As much as we can (and they are willing) we’d like to collaborate to build out a general purpose implementation of liquid democracy that can be adopted in a wide range of decentralized community governance applications.

In the spirit of that, I’d like to share our thoughts on the user requirements and technical implementation choices we are considering for <a href='https://github.com/HiveCommons/Hive-Democracy'>Hive Commons’ implementation of Liquid Democracy</a>.

<hr>

### Implementation on Ethereum

Developing software is all about finding the right balance utility, feasibility, and cost. Hive Commons has been exploring the following users stories as a foundation for an ideal liquid democracy implementation, while balancing and assessing implementation tradeoffs to ensure that the end result is technically feasible and reasonably cost efficient.

### Ability to delegate your vote

This is the core property of delegative democratic voting and is a must have. It is important to note that in this minimal case delegates must volunteer and commit to casting a direct vote, and a user will only be able to delegate their vote to a delegate not another regular voter.

### Ability to also delegate any votes that have been delegated to you

This would allow voters to delegate their vote to any other voter. Generally this is preferable as it allows users to form delegate chains where they trust another user to pick a delegate (or at least pick another user who will pick a delegate). This creates a strong chain of trust that flows through voters to the correct decision, and should be considered the ideal form of truly liquid democracy. However, these chains introduce significant complexity which generally boils down to:
- What depth can chains go before it becomes computationally infeasible to tabulate votes?
- How do we prevent infinite delegation loops?

As we experiment with our designs we will be attempting to get as close to the ideal form of liquid democracy, while working within the constraint of limited and expensive computation. We are exploring state-channels and/or computation courts as a way to get closer to this ideal.

### Ability to conditionally delegate your vote based on the type of issue

Another component of an ideal liquid democracy is the ability to conditionally delegate certain types of issues to different delegates based on your trust in their specific domain expertise or value structure. You may trust someone to make decisions on your behave about your financial well being but not your military. Or in the case of Hive Commons, you may trust your say in dispute resolution with oil companies with your friend who is deeply passionate about the environment.

We are exploring ways that this could be feasible on chain, as well as what it might look like as a client side application.

### Ability to change your delegate or vote directly anytime before the votes are officially tallied

A critical property of liquid democracy is the ability for voters to constantly monitor the status their trusted delegate as the current standing of the vote and decide to step in and override their delegates decision. This is a significant check against any powerful delegate from defecting from the public interest for private gain.

### Ability to display the users current position based on their, or their delegates current vote

A user could choose to override or change their delegates because the have strong feelings about an issue, however, to reinforce the trust between voters and their delegate chain all voters should be able to see their delegates current position on an issue.

### Ability to display the current tally of votes for an issue

This may help facilitate productive discussions by allowing strong chains of trust to form dynamically. These chains represent the various sides of an issue and facilitate the formation coalitions in order to reach an agreement. Its also important to note that if voter has the ability to see their delegates votes, it would be difficult to avoid voters having visibility of the current tally.

### Ability to tally the votes either within a smart contract, or return them to a smart contract in a secure and trusted way

Systems like <a href='http://carbonvote.com/'>CarbonVote</a> make it easy to read the results of a vote off-chain, but to get those same results on the chain (or back on the chain) in a trustless fashion may be challenging.

Currently our implementation tallies all votes on chain, however, in our attempt to support more complex delegation arrangements and minimize computational cost we may need to move the tallying of votes into state-channels and/or offload computation using <a href='http://www.oraclize.it/'>Oraclize</a>’s TLSNotary function, or a computation court like <a href='http://iex.ec/'>iex.ec</a> or <a href='https://golem.network/'>Golem</a> when they start to come online.

Regardless of the tactic used, it is important that we are able to return a secure and trusted result back to the blockchain.

### Ability to vote for multiple different issues simultaneously

There maybe several issues which are presented for discussion and voting simultaneously, it is important that participation in one vote doesn’t preclude participation in a separate vote even if their voting and discussion periods overlap.

### Ability to store vote tokens in a secure cold wallet during voting

To reduce security risk, and maintain voter trust, it is important that votes can be cast from whatever wallet the user is comfortable with. In addition allowing multiple levels of delegation would enable users to not just have their wallets

### Ability to transfer tokens even during a voting period

Since votes are tabulated all at once based on the amount of tokens in a given wallet, there is no issue with double spending tokens.

<hr>

A big shoutout to <a href='https://github.com/3esmit'>Ricardo Guilherme Schmidt</a>, for his help on this project so far. He has contributed our first implementation of delegative democracy to the <a href='https://github.com/HiveCommons/Hive-Democracy'>Hive Democracy repo</a> and has bee a huge part of the research and discussion of Hive Commons’ implementation of liquid democracy.

Our current code does not meet all of our requirements, but it is an excellent starting point. Currently it only supports a single delegation link rather than more complex delegate chaining scenarios, it does not yet support conditional delegation based on types of issues, or have any practical user experience designed to make voting more user-friendly and accessible — but we are making great progress!

As we continue towards this goal we welcome any and all feedback and collaboration. The more people thinking and working on this the more likely we are to reach an optimal solution. If you’d like to get involved the best place is on our <a href='https://github.com/HiveCommons'>Github</a> or on <a href='https://hivecommons.herokuapp.com/'>Slack</a>.

<hr>

## Looking forward: the slow path to revolution.

A friend of mine recently told me something that really stuck with me, he said, “Technology itself is rarely disruptive, instead it’s the economic consequences of technologies that have a transformative effect on the world.” In the context of Liquid Democracy that means that just because it is technically possible, does not mean it will have a significant impact unless it has a dramatic effect on our economic situation. I hadn’t thought about it in those terms before, but when I first heard about Liquid Democracy I had thought that it was a neat idea, but there wasn’t any reason that an established government would transition to this system because it resulted in a significantly worse economic position for the current leadership.

### So how do we get from here to there?

In short, we need to align the economic interests of those in power with our own goals before we can expect them to cooperate with us. Historically, the best approach seems to be to accumulate wealth and influence and then use that to lobby the government to implement those changes — and the most reliable way to accumulate wealth and influence is through compounding interest.

Compounding Interest occurs when the interest on a loan or deposit is added to the principal amount and begins to also earn interest. In other words, interest on interest.

This process is fairly straightforward to understand when the deposit or loan is an easily quantifiable resource such as a currency, but the positive feedback loop of compounding interest applies equally well to any resource which has value and can be accumulated.

Hive Commons will use Liquid Democracy to enable a community of activists to pool their resources into a commons, and collectively govern access to the commons to ensuring that the usage of the resources has a positive impact on the community, either by the user providing a general public service or directly contributing back to the commons. The result won’t always be quantifiable, but the wealth and influence of the community will exhibit the same growth patterns as compounding interest.

Eventually the community will be able to leverage this influence to bring about significant social and political changes, perhaps even lobbying for the adoption of Liquid Democracy by traditional governments. That won’t happen over night, compounding takes time, and there are many other technical and social hurdles before we even start that journey, but, it’s clear that there is potential for the technology to have dramatic economic consequences and a transformative impact on the world.



