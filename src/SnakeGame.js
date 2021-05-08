//Render a game: 30 points
import React, { useState, useRef, useEffect } from "react";
import './SnakeGame.css';

const boardSize = [400, 400];
const startPoint = [[2,10],[2,11]];
const startBone = [10,5];
const direction = {37: [-1, 0], 38: [0, -1], 39: [1, 0], 40: [0, 1]};
const tileScale = 20;
const speeds = 110;

const SnakeGame = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(startPoint);
  const [bone, setBone] = useState(startBone);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useInterval(() => gameContinue(), speed);

  const moveSnake = ({ keyCode }) =>
  keyCode >= 37 && keyCode <= 40 && setDir(direction[keyCode]);
  const addBone=()=>bone.map((x, y) => Math.floor(Math.random() * (boardSize[y] / tileScale)));

  const startGame = () => {
    setSnake(startPoint);
    setBone(startBone);
    setDir([0, -1]);
    setSpeed(speeds);
    setGameOver(false);
  };

  const checkCollision = (tile, snakeArray = snake) => {
      if (tile[0]*tileScale>=boardSize[0]||tile[1] * tileScale >= boardSize[1]||tile[0] < 0|| tile[1] < 0){
            return true;
      }
        for (const piece of snakeArray) {
          if (tile[0] == piece[0] && tile[1] == piece[1]){
            return true;
              }
            }
          return false;
    };

    const checkEatBone = newSnake => {
      if (newSnake[0][0] == bone[0] && newSnake[0][1] == bone[1]) {
        let newBone = addBone();
        while (checkCollision(newBone, newSnake)) {
          newBone = addBone();
        }
      setBone(newBone);
        return true;
      }
      return false;
    };
    const endGame = () => {
      setSpeed(null);
      setGameOver(true);
      };

    const gameContinue = () => {
      const snake2 = JSON.parse(JSON.stringify(snake));
      const addSnakeBox = [snake2[0][0] + dir[0], snake2[0][1] + dir[1]];
      snake2.unshift(addSnakeBox);

      if (checkCollision(addSnakeBox)){
        endGame();
      } 
      if (!checkEatBone(snake2)){
         snake2.pop();
      }
      setSnake(snake2);
    };

    useEffect(() => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.setTransform(tileScale, 0, 0, tileScale, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = 'teal';
      snake.forEach(([x, y]) => ctx.fillRect(x, y, 1, 1));
      ctx.fillStyle = 'violet';
      ctx.fillRect(bone[0], bone[1], 1, 1);
    }, [snake, bone, gameOver]);

function useInterval(callback, delay) {
      const savedCallback = useRef();
      useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);
      useEffect(() => {
        function tick() {
          savedCallback.current();
        }
        if (delay !== null) {
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
        }
      }, [delay]);
    }
    return (
      <div onKeyDown={event => moveSnake(event)}>
        <h3 class="title">For when you need a break... Snake!</h3>
        <h2 class='elbuttons'>
          <button onClick={startGame} className = 'startbutton'>Start Game</button>
        </h2>
          {gameOver && <h1 class='restart'>Game Over! Keep Swiping or Start Over?</h1>}
        <canvas
          ref={canvasRef}
          width={`${boardSize[0]}px`}
          height={`${boardSize[1]}px`}
          style={{marginLeft: '6vw',backgroundImage: "url('https://i.pinimg.com/originals/01/e7/9d/01e79d3a525dcc91ab3c894615294233.jpg')", height: '100%', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize: 'cover', border: '1px solid black'}}
          />
      </div>
    );
   };
export default SnakeGame;