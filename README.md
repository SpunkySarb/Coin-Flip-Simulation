# 🪙 Coin Flip Simulation

[Click here to try the Coin Flip Simulation](https://coin-flip-simulation.onrender.com)

## Introduction

This web app allows you to simulate flipping a thousand coins. It's a simple yet powerful tool to understand probability and randomness.

## How It Works

The app simulates flipping a coin multiple times using a random number generator. Each flip has an equal chance of landing on heads or tails.

### Detailed Explanation

1. **Random Number Generation**: For each coin flip, the app generates a random number. If the number is within a certain range, it is considered a "heads"; otherwise, it's a "tails".
2. **Memory Management**: The app efficiently manages memory to handle large numbers of flips. Arrays are used to store the results, and as more flips are performed, the array dynamically resizes to accommodate the data.
3. **Displaying Results**: After all flips are completed, the results are displayed, showing the distribution of heads and tails. This visual representation helps users understand the randomness and probability involved.

## Why I Created This

I was inspired by a video of Neil Ashton Gossam, where he mentioned an experiment involving flipping a coin a thousand times. In the experiment, if a thousand people each flip a coin, those who get tails have to sit down. This process is repeated ten times, and theoretically, one person should be left standing at the end. However, this seemed to contradict probability laws, so I decided to create this simulation to test the hypothesis.

### Experiment Findings

Through the simulation, I discovered that the results vary:
- Sometimes two people are left standing at the end.
- Sometimes only one person remains standing.
- Occasionally, no one is left standing after the tenth iteration.
- In rare cases, three people might still be standing.

This variability demonstrates that the outcome isn't as predictable as suggested, and the probability laws still hold true. The simulation shows that while it's possible for one person to remain standing, it isn't guaranteed and depends on random chance.

### Educational Value

- **Interactive Learning**: The web app offers an interactive way to learn about probability. Instead of just reading about the theory, users can see it in action.
- **Visual Representation**: Visualizing the results helps in comprehending how random events distribute over many trials, reinforcing the theoretical knowledge with practical observation.

### Practical Applications

- **Statistical Analysis**: This simulation can be a stepping stone for more complex statistical analyses and experiments.
- **Algorithm Testing**: It also serves as a basic example of how algorithms can be used to solve real-world problems.

## Conclusion

By using this web app, you can get a better understanding of randomness and probability in a fun and interactive way. Enjoy exploring and learning!
