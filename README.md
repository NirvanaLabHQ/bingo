# Script for season jackpot raffle

Follows the following steps:

- Determine the block height for a snapshot in advance.
- Obtain the corresponding stake data for the snapshot block and calculate the tokenId to be drawn.
- Using block hash as a random seed, a specific script is used to perform the random number selection.

# Run the demo

Install dependencies

```
pnpm install
```


```
pnpm run start
```