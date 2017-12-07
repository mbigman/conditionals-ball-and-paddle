# Conditionals: Ball and Paddle

![breakout](https://s3.amazonaws.com/upperline/curriculum-assets/p5js/labs/breakout.gif)

Back when Atari's "Pong" video game was all the rage, Atari wanted to make a single player version so people could enjoy the pleasures of bouncing a ball around a screen even when they were by themselves!

Steve Jobs and Steve Wozniak, the co-founders of Apple, were hired to do just that. The game, called "Breakout", was the first project they worked together on.  

We're going to create the basic mechanisms of that game here.  By breaking the game down into small parts, it shouldn't be too overwhelming

## Step 1: Bouncing Ball

**YOUR TASK:** Use *conditionals* to get the ball to bounce off of all 4 edges of the small canvas. (This should seem familiar!)  

## Step 2: Click to Start

**YOUR TASK:** Make the ball stay still in the center until you click the mouse.

To do this let's make a *Boolean variable* called `playing`. It should have an *initial value* of `false` set at the top of the file.  It should change to true when the mouse is clicked using the `mouseIsPressed` built in variable. You should only increment the speeds when it's `true`.

## Step 3: The Paddle

**YOUR TASK #1** Make the paddle move along the `x` axis as you move your mouse using `mouseX`.

Make sure the **center of the paddle** is where your mouse is.  

## Step 4: Bounce the Ball of the Paddle

**YOUR TASK:** The ball should bounce off of the paddle. 

This is going to be a little tricky.  

I would start by sort of ignoring where the paddle is and just change the direction of the `x` and `y` speeds if the `y ` coordinate  of the ellipse is greater than the `y` coordinate of top of the paddle like so:

![y bounce](https://s3.amazonaws.com/upperline/curriculum-assets/p5js/labs/y-bounce.gif)

Once you get that, the next step is to say the ball should reverse if it's is past the paddle vertically **AND** *it's where the paddle is horizontally*. We can use the logical operator `&&`.

Translate this into real code, it's totally ok to write the conditional across multiple lines:
```
if (the ball's y is greater than the paddle &&
    the ball's x is greater than the left paddle edge &&
    the ball's x is less that the right paddle edge ) {

      reverse the ball's direction
    }

```

A tip: The paddle's right edge would be wherever `mouseX` is plus half the paddle's width.

After that works you just need to add in the logic for bouncing off the TOP, LEFT, and RIGHT walls (not the bottom) and you're good to go!

## Step 5: Reset

**YOUR TASK:** The ball should reset to the center if it goes off the bottom of the screen and misses the paddle. 

## Additional Challenges

There are many things we could do to make the gameplay more fun and have a better feel.

- In the real Breakout game you have some control over how you redirect the ball with your paddle, if you hit it with the left third of the paddle you can direct the ball leftwards, if you hit with the right third you can make sure it travels to the right. Try to implement this.

- The player could get points every time they hit the ball with the paddle. Look up the `text()` function to use to display the score.

- What if you could increase the difficulty of the game. What if the ball moved faster every time it hit the paddle? Or after every 10 hits it increased by a lot?

- Once we cover loops we'll be able to do a much better job of adding multiple bricks that the player can break with the ball. For now you could try adding a single brick that breaks if the ball hits it.

Good luck!
