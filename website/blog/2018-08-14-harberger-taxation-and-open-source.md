---
title: Harberger Taxation and Open Source
author: Luke Duncan
authorURL: https://github.com/lkngtn
---

> ⚠️ This is a repost of the [Harberger Taxation and Open Source](https://medium.com/hive-commons/harberger-taxation-and-open-source-58dcdbab140d) post. While some of the details and references in the post are no longer relevant, the overall message is important. Hopefully this provides more insight into the foundation, intention, and goals of 1Hive.

<hr>

This is a refinement of my [proposal for a new open source license](https://medium.com/hive-commons/introducing-hive-commons-95dad77814bb) intended to provide a practical alternative to strict copyleft or permissive style open source licensing. This post discusses how such a license could use a self-assessed tax as a means to self-regulate and grow a digital commons. This idea was inspired by Posner and Weyl’s excellent book Radical Markets, and helps to simplify how the license would work and resolve some legitimate concerns about uncertainty risks in the initial proposal.

## Permissive and Copyleft Licenses

The critical difference between permissive and copyleft style licenses is their approach to growing the value of the their respective commons. Advocates of permissive licensing argue that by making the software more accessible to commercial applications you attract wider adoption and through wider adoption attract more resources, attention, and ultimately more voluntary code contributions. In contrast, advocates of copyleft style licenses argue that without strictly enforcing that derivative works also remain open source, only a subset of application functionality remains open, and this subset tends to be commercial infrastructure rather than complete end-user applications. As a result, copyleft advocates believe that the creation of proprietary derivative works actively devalues the work’s original public source.

This tactical distinction has polarized the open source community into two ideological groups and resulted in software that is under-utilized due to license compatibility issues. In an ideal world, both groups could reach consensus and benefit from increased compatibility and a richer pool of open source software.

The introduction of a novel license could help bridge this ideological gap by providing a more balanced way to enforce on-going contributions to the commons than the all or nothing approaches of copyleft and permissive licensing respectively.

## Finding a middle ground (Harberger Taxes 🎉)

In order to provide a practical middle ground between copyleft and permissive licenses we need a legitimate way to assess the value of proprietary derivative works and provide compensation for any negative impact the work may have on the commons. The challenge is that it can be difficult to assess the value of something like intellectual property, which is non-fungible and rarely changes hands, in both a fair and efficient manner.

An elegant solution to this challenge was proposed in the context of property taxes by the economist Arnold Harberger. Harberger’s model for a self-assessed tax required individuals to set the value of their property and pay taxes based on their self-assessed valuation. To ensure that it is in the interest of the individual to self-assess accurately, they are required to sell their property at their self-assessed valuation if they are approached by a buyer. This mechanism generalizes well and is the basis of Posner and Weyl’s proposed common ownership self-assessed tax or COST that they describe in detail in their paper [“Property is only another form of monopoly.”](https://academic.oup.com/jla/article/9/1/51/3572441)

If we apply this type of self-assessed taxation in the context of an open source license we might end up with a license with the following basic provisions:

1. Software under this license can be used freely so long as any derivative works are provided open source and under the same license.
2. Software under this license can be used while keeping derivative works proprietary, but such derivative works are subjected to a self-assessed tax so long as they remain proprietary.
3. If a proprietary derivative work’s owner is paid their self-assessed valuation they must immediately open source the propriertary derivative work.

(For clarity throughout the rest of this post we can call this hypothetical license the Hive Commons License or HCL)

The first provision would create a viral quality to the license similar to existing copyleft licenses, while the second and third provisions provide an alternative means of compliance that allows for use of the software for proprietary commercial applications while still ensuring that such uses fairly and consistently grow the commons.

Even if the revenue from such taxes are completely ignored, the cost of keeping works proprietary as opposed to releasing them open source would incent users of the license to include their derivative works in the commons rather than keeping the work proprietary. Or at least provide an accurate valuation that allows interested parties to pull the work into the commons if they desire. However, as the commons grows the revenue generated from taxes may become significant, and so its important to consider how such revenue would be allocated.

At this point I’m not sure what the best approach is and would be interested in what others think (hop on the [1Hive Keybase chat!](https://keybase.io/team/1hive)), but the following approaches seem like they would be worth considering:

### 1. Self-directed donations towards charitable causes

A non-profit foundation could be charted to create a whitelist of approved charitable organizations that meet some yet to be defined criteria (perhaps organizations which are charted to grow the commons, or perhaps any organization that serves a charitable purpose), then when a user is required to pay a tax they can self-direct their tax liability as a donation towards an approved charitable organization.

### 2. A social dividend

Another approach would be to have all funds donated to a single non-profit organization chartered to simply provide a social dividend to all individuals globally. Such a dividend could become significant over time and have a huge impact, most noticieably in the poorest parts of the world.

By ensuring that the value of the commons is routed directly to the public in a straighforward and fair way, individuals could use their dividend for any purpose. While this would not necessarilly mean the funds would directly grow the commons, it would strongly align growth of the commons with the interests of the public and would likely result in difficult to quantify but significant contributions.

### 3. A public commonwealth

The third, and perhaps most interesting approach, is to use the funds to create a publicly governed digital commonwealth. This would have many of the same benefits that a social dividend would have, but could also ensure that all revenue generated by proprietary usage of HCL licensed software would be used to further grow the commons.

**A non-profit entity would be chartered to facilitate identity verification and grant all unique individuals governance shares in the commonwealth.** These shares could be provided on a rolling basis and freely traded, providing recipients something very similiar to a social dividend. Governance shares would allow users to propose and vote on how funds should be used to grow the commons. Since users would already have verified identies, this application may be well suited for another proposal talked about in Radical Markets —  [Quadratic Voting](https://en.wikipedia.org/wiki/Quadratic_voting).

Having the funds be controlled by an on-chain entity would simplify the implementation and administration requirements for the foundation significantly, as it would only be necessarily for them to provide identity attestions for unique individuals. Everything else could be administered reliably and autonomously using smart contracts. By leveraging existing infrastructure provided [Ethereum](https://ethereum.org/), [Aragon](https://aragon.org/), and [Uport](https://www.uport.me/) much of the technical implementation would be integrating existing components into a practical application.

Sound Interesting? Let’s chat! [Keybase](https://keybase.io/team/1hive) ~ [Github](https://github.com/1Hive) 
