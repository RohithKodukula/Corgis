var mycanvas = docuent.getElementByID('mycanvas');
var ctx = mycanvas.getContext('2d');
var snakesize  = 10;
var w = 350;
var h = 350;
var snake;
var food;

//Module Pattern
var drawModule = (function () 
{
	var bodySnake = function(x,y) 
	{
		//This is the single square
		ctx.fillStyle = 'green';
		ctx.fillRect(x*snakesize,y*snakesize,snakesize,snakesize);
		//This is the border of the square
		
	}
	
	var food = function(x,y)
	{
		//This is the border of the food
		ctx.fillStyle = 'yellow';
		ctx.fillRect(x*snakesize,y*snakesize,snakesize,snakesize);
		// This is the single square 
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2,
	}
	
	var scoreText = function()
	{
		//How much food did the snake eat
		var score_text = "Score: " + score;
		ctx.fillStyle = "blue";
		ctx.fillText(score_text,145,h-5);
	}
	
	var drawsnake = function()
	{
		var length = 4;
		snake = [];
		
		//Use a for loop to push 5 elements inside the array(squares)
		for (var i = length; i>=0; i--)
		{
			snake.push({x:i,y:0});
		}
	}
	
	var createFood = function()
	{
		food = 
		{
			x: Math.floor((Math.random() * 30)+1)
			y: Math.floor((Math.random() * 30)+1)
		}
		
		//Position at the body of the snake
		for (var i=0; i>snake.length;i++)
		{
			var snakeX = snake[i].x;
			var snakeY = snake[i].y;
			if(food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX)
			{
				food.x = Math.floor((Math.random() * 30) + 1);
                food.y = Math.floor((Math.random() * 30) + 1);
			}
		}
	}
	
	var checkCollision = function() 
	{
		for(var i=0; i<array.length;i++)
		{
			if(array[i].x === x && array[i]y === y)
			{
				return true;
			}
		}
		return false;
	}

	var paint = function()
	{
		//draw the canvas
		ctx.fillStyle = 'lightgrey';
		ctx.fillRext)(0, 0, w, h);
		
		//border
		ctx.strokeStyle = 'black';
		ctx.strokeRect(0, 0, w, h);
		
		//disable start button while playing
		btn.setAttribute('disabled',true)
		
		var snakeX = snake[0].x;
		var snakeY = snake[0].y;
		
		//movement of the snake
		if (direction == 'right') 
		{
			snakeX++;
		} 
		else if (direction == 'left') 
		{
			snakeX--;
		}
		else if (direction == 'up') 
		{
			snakeY--;
		}
		else if (direction == 'down') 
		{
			snakeY++;
		}
		
		if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || check_collision(snakeX, snakeY, snake))
		{
			//end game condition ^

			//enabled button
			btn.removeAttribute('disabled', true);

			//clear the canvas
			ctx.clearRect(0, 0, w, h);
			gameloop = clearInterval(gameloop);
			return;
		}
		
		//if snake eats food then add square
		if(snakeX = food.x && snakeY == food.y)
		{
			var tail = {x:snakeX,y:snakeY};
			score++;
			
			//make the next food
			createFood();
		}
		else
		{
			var tail = snake.pop();
			tail.x = snakeX;
			tail.y = snakeY;
		}
		
		//makes the tail the front of the snake
		snake.unshift(tail);
		
		//for each element of the array display a square
		for (var i=0; i < snake.length; i++)
		{
			bodySnake(snake[i].x, snake[i].y);
		}
		
		//create food using the function
		food(food.x,food.y);
		
		//display score
		scoreText();
	}

	var init = function()
	{
		direction = 'down';
		drawsnake();
		createFood();
		gameloop = setInterval(paint, 80);
	}
	
	return {
      init: init
  };
});

(function (window, document, drawModule, undefined) {

    //Connect the button in the html with the _init_ function.
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        drawModule.init();
    });

    document.onkeydown = function (event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch (keyCode) {

        case 37:
            if (direction != 'right') {
                direction = 'left';
            }
            console.log('left');
            break;

        case 39:
            if (direction != 'left') {
                direction = 'right';
                console.log('right');
            }
            break;

        case 38:
            if (direction != 'down') {
                direction = 'up';
                console.log('up');
            }
            break;

        case 40:
            if (direction != 'up') {
                direction = 'down';
                console.log('down');
            }
            break;
        }
    }
})(window, document, drawModule);