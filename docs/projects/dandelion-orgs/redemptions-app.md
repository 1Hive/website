---
id: redemptions-app
sidebar_label: Redemptions
title: Redemptions
---

> ⚠ This app has **not** been professionally audited.

Allows an Aragon organization to manage a list of eligible assets held within a `Vault` and allow members of the organization to redeem (burn) organization tokens in exchange for a proportional amount of the eligible assets.


## Status

The Redemptions app has been published to `open.aragonpm.eth` on the Rinkeby test network. If you experience any issues or are interested in contributing please review our [open issues](https://github.com/1hive/redemptions/issues).



## How to deploy to an organization

Redemptions has been published to APM on rinkeby at `redemptions.open.aragonpm.eth`

To deploy to an organization you can use the [Aragon CLI](https://hack.aragon.org/docs/cli-intro.html).

```sh
aragon dao install <dao-address> redemptions.open.aragonpm.eth --app-init-args <vault-address> <token-manager-address>
```

The Redemptions app must have the `TRANSFER_ROLE` permission on `Vault` and the `BURN_ROLE` permission on the `Token Manager`.

## Using redemptions

The redemptions app allows organizations to add and remove tokens from a list of eligible tokens. When a user choses to redeem tokens they will receive a proportional share of all eligible tokens in the `Vault`.

### Redeeming tokens:
To redeem tokens, click on the redeem then use the slider to select how many tokens you would like to redeem. When satified with the amount, click redeem to confirm. You will be prompted to sign a message, then you will be able to confirm the transaction.

<p align="center">
    <img src="https://raw.githubusercontent.com/1Hive/redemptions-app/master/docs/resources/redeem.gif" width="600" />
</p>


### Adding eligible vault token:
To add an eligble token click "Add Token", then enter the address of the token contract you would like to add.

### Removing eligible vault token:
To remove an eligble token, hover over the token you want to remove and click "Remove Token", then enter the address of the token contract you would like to remove.
