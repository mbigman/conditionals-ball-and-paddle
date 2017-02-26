# Conditionals: Ball and Paddle

![breakout](https://s3.amazonaws.com/upperline/curriculum-assets/p5js/labs/breakout.gif)

Back when Atari's "Pong" video game was all the rage, Atari wanted to make a single player version so people could enjoy the pleasures of bouncing a ball around a screen even when they were by themselves!

Steve Jobs and Steve Wozniak, the co-founders of Apple, were hired to do just that. The game, called "Breakout", was the first project they worked together on.  

We're going to create the basic mechanisms of that game here.  By breaking the game down into small parts, it shouldn't be too overwhelming

## Step 1: Bouncing Ball

First, a quick exercise. Take this starter code which shoots a ball from the center of the screen in a random direction.

```javascript
var ellipseX, ellipseY, xSpeed, ySpeed;

function setup() {
  createCanvas(200, 200);
  ellipseX = width/2;
  ellipseY = height/2;
  xSpeed = random(-5, 5);
  ySpeed = random(-5, 5);
}


function draw() {
  background(250);
  ellipse(ellipseX, ellipseY, 30, 30);

  ellipseX += xSpeed;
  ellipseY += ySpeed;
}
```

**YOUR TASK:** Use *conditionals* to get the ball to bounce off of all 4 edges of the small canvas.  When it's `x` or `y` coordinate is beyond the canvas edge, it's speed should reverse direction. If it hits the top or bottom it's `ySpeed` should flip direction and if it hits the left or right edges, it's `xSpeed` should flip.

You may notice that on your first attempt the code basically works but the ball goes a little past the edge before reversing.  This is probably because you are checking if `ellipseX` or `ellipseY` are off the canvas, but those coordinates refer to the **center** of the ball.  

Instead, to see if the **edge** of the ball hits the edge of the canvas you could add or subtract the *distance from the ball's center to the ball's edge* (this is simply it's radius, or it's size divided by 2).

For the top edge this might look like:

`if (ellipseY - the ball's radius <= 0)`

## Step 2: Click to Start

Here's the starter code for Breakout:

```javascript
var ellipseX, ellipseY, xSpeed;

var ySpeed = 5;

var paddleWidth = 80;
var paddleHeight = 15;
var bottomGap = 40;


function setup() {
  createCanvas(400, 600);
  ellipseX = width/2;
  ellipseY = height/2;
  xSpeed = random(-5, 5);
}


function draw() {
  background(250);

  fill(0);
  ellipse(ellipseX, ellipseY, 30, 30);

  rect(width/2 - paddleWidth/2, height - bottomGap - paddleHeight, paddleWidth, paddleHeight);

  ellipseX += xSpeed;
  ellipseY += ySpeed;
}
```

You'll notice that the ball shoots downward from the center as soon as the page loads before you even have a chance to get settled. Also, once the ball is off the screen, there is no way to reset the game. Let's solve these problems.

**YOUR TASK:** Make the ball stay still in the center until you click the mouse.

To do this let's make a *Boolean variable* called `playing`. It should have an *initial value* of `false` set at the top of the file.  It should change to true when the mouse is clicked using the `mouseClicked()` function. You should only increment the speeds when it's `true`.

Inside of `draw`, your should have code similar to:

```javascript
if (playing == true) {
  ellipseX += xSpeed;
  ellipseY += ySpeed;
}
```
Remember that the code inside the conditional's parentheses gets *evaluated* by the computer. You could also write simply:

```javascript
if (playing) {
  ellipseX += xSpeed;
  ellipseY += ySpeed;
}
```

That works because the variable `playing` will be evaluated to be `true` or `false`.

**YOUR TASK:** The ball should reset to the center if a click happens while `playing` is true.

Currently the `mouseClicked()` function probably just says if there is a click make `playing` true.

Change `mouseClicked()` so that
```
if (playing is already true) {

  - playing is reset to false
  - ellipseX and ellipseY are reset to the center
  - To solve some problems down the road also add these 2 lines of code to reset the speed:
    xSpeed = random(-5, 5);
    ySpeed = 5;

} otherwise when playing is false {

  -  toggle playing to true
}
```
Try using the `!` operator to flip between `true` and `false`. `playing = !playing`

## Step 3: The Paddle

**YOUR TASK:** Make the paddle move along the `x` axis as you move your mouse using `mouseX`.

Make sure the **center of the paddle** is where your mouse is.  To do this, the first argument to `rect` should be `mouseX` minus half the `paddleWidth`.

**YOUR TASK:** The ball should bounce off of the paddle. It's

This is going to be a little tricky.  

I would start by sort of ignoring where the paddle is and just change the direction of the `x` and `y` speeds if the `y ` coordinate  of the ellipse is greater than the `y` coordinate of top of the paddle like so:

![y bounce](https://s3.amazonaws.com/upperline/curriculum-assets/p5js/labs/y-bounce.gif)

Once you get that, the next step is to say if the ball is past the paddle vertically AND it's where the paddle is horizontally. We can use the logical operator `&&`.

Translate this into real code, it's totally ok to write the conditional across multiple lines:
```
if (the ball's y is greater than the paddle &&
    the ball's x is greater than the left paddle edge &&
    the ball's x is less that the right paddle edge ) {

      reverse the ball's direction
    }

```

After that works you just need to add in the logic for bouncing off the TOP, LEFT, and RIGHT walls (not the bottom) and you're good to go!

## Additional Challenges

There are many things we could do to make the gameplay more fun and have a better feel.

- Fix the glitch:
 ![glitch](https://s3.amazonaws.com/upperline/curriculum-assets/p5js/labs/glitch.gif)

 Can you add another `&&` statement to the conditional that reads: `AND the ball is not too far below the paddle`. That conditional has probably gotten really long and unwieldy. Can you use some variables to make it look nicer?

- In the real Breakout game you have some control over how you redirect the ball with your paddle, if you hit it with the left third of the paddle you can direct the ball leftwards, if you hit with the right third you can make sure it travels to the right. Try to implement this.

- The player could get points every time they hit the ball with the paddle. Look up the `text()` function to use to display the score.

- Once we cover loops we'll be able to do a much better job of adding multiple bricks that the player can break with the ball. For now you could try adding a single brick that breaks if the ball hits it.

Good luck!
