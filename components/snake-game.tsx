"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, RotateCcw, Trophy, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Position = { x: number; y: number };

export function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const gridSize = 20;
  const tileSize = 20;
  const gameSpeed = 100;

  const snake = useRef<Position[]>([{ x: 10, y: 10 }]);
  const direction = useRef<Direction>("RIGHT");
  const nextDirection = useRef<Direction>("RIGHT");
  const food = useRef<Position>({ x: 15, y: 15 });
  const gameLoop = useRef<NodeJS.Timeout | null>(null);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
    // Make sure food doesn't spawn on snake
    const onSnake = snake.current.some(
      (segment) => segment.x === newFood.x && segment.y === newFood.y
    );
    if (onSnake) {
      return generateFood();
    }
    return newFood;
  }, []);

  const resetGame = useCallback(() => {
    snake.current = [{ x: 10, y: 10 }];
    direction.current = "RIGHT";
    nextDirection.current = "RIGHT";
    food.current = generateFood();
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
  }, [generateFood]);

  const drawGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 1;
    for (let i = 0; i <= gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(i * tileSize, 0);
      ctx.lineTo(i * tileSize, gridSize * tileSize);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * tileSize);
      ctx.lineTo(gridSize * tileSize, i * tileSize);
      ctx.stroke();
    }

    // Draw snake
    snake.current.forEach((segment, index) => {
      const gradient = ctx.createLinearGradient(
        segment.x * tileSize,
        segment.y * tileSize,
        (segment.x + 1) * tileSize,
        (segment.y + 1) * tileSize
      );
      if (index === 0) {
        gradient.addColorStop(0, "#3b82f6");
        gradient.addColorStop(1, "#2563eb");
      } else {
        gradient.addColorStop(0, "#60a5fa");
        gradient.addColorStop(1, "#3b82f6");
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(
        segment.x * tileSize + 1,
        segment.y * tileSize + 1,
        tileSize - 2,
        tileSize - 2
      );
      
      // Draw eyes on head
      if (index === 0) {
        ctx.fillStyle = "#ffffff";
        const eyeSize = 3;
        const eyeOffset = 6;
        if (direction.current === "RIGHT") {
          ctx.fillRect(segment.x * tileSize + eyeOffset, segment.y * tileSize + 5, eyeSize, eyeSize);
          ctx.fillRect(segment.x * tileSize + eyeOffset, segment.y * tileSize + 12, eyeSize, eyeSize);
        } else if (direction.current === "LEFT") {
          ctx.fillRect(segment.x * tileSize + 11, segment.y * tileSize + 5, eyeSize, eyeSize);
          ctx.fillRect(segment.x * tileSize + 11, segment.y * tileSize + 12, eyeSize, eyeSize);
        } else if (direction.current === "UP") {
          ctx.fillRect(segment.x * tileSize + 5, segment.y * tileSize + 11, eyeSize, eyeSize);
          ctx.fillRect(segment.x * tileSize + 12, segment.y * tileSize + 11, eyeSize, eyeSize);
        } else {
          ctx.fillRect(segment.x * tileSize + 5, segment.y * tileSize + 6, eyeSize, eyeSize);
          ctx.fillRect(segment.x * tileSize + 12, segment.y * tileSize + 6, eyeSize, eyeSize);
        }
      }
    });

    // Draw food with glow effect
    const foodGradient = ctx.createRadialGradient(
      food.current.x * tileSize + tileSize / 2,
      food.current.y * tileSize + tileSize / 2,
      0,
      food.current.x * tileSize + tileSize / 2,
      food.current.y * tileSize + tileSize / 2,
      tileSize
    );
    foodGradient.addColorStop(0, "#ef4444");
    foodGradient.addColorStop(0.5, "#dc2626");
    foodGradient.addColorStop(1, "#991b1b");
    ctx.fillStyle = foodGradient;
    ctx.beginPath();
    ctx.arc(
      food.current.x * tileSize + tileSize / 2,
      food.current.y * tileSize + tileSize / 2,
      tileSize / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }, []);

  const updateGame = useCallback(() => {
    if (gameOver || isPaused) return;

    direction.current = nextDirection.current;
    const head = { ...snake.current[0] };

    // Move head
    switch (direction.current) {
      case "UP":
        head.y -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "RIGHT":
        head.x += 1;
        break;
    }

    // Check wall collision
    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
      setGameOver(true);
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("snakeHighScore", score.toString());
      }
      return;
    }

    // Check self collision
    if (snake.current.some((segment) => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("snakeHighScore", score.toString());
      }
      return;
    }

    snake.current.unshift(head);

    // Check food collision
    if (head.x === food.current.x && head.y === food.current.y) {
      setScore((prev) => prev + 10);
      food.current = generateFood();
    } else {
      snake.current.pop();
    }

    drawGame();
  }, [gameOver, isPaused, score, highScore, drawGame, generateFood]);

  useEffect(() => {
    const savedHighScore = localStorage.getItem("snakeHighScore");
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      gameLoop.current = setInterval(updateGame, gameSpeed);
      return () => {
        if (gameLoop.current) clearInterval(gameLoop.current);
      };
    }
  }, [gameStarted, gameOver, updateGame]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return;

      if (e.key === " ") {
        e.preventDefault();
        setIsPaused((prev) => !prev);
        return;
      }

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          e.preventDefault();
          if (direction.current !== "DOWN") nextDirection.current = "UP";
          break;
        case "ArrowDown":
        case "s":
        case "S":
          e.preventDefault();
          if (direction.current !== "UP") nextDirection.current = "DOWN";
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          e.preventDefault();
          if (direction.current !== "RIGHT") nextDirection.current = "LEFT";
          break;
        case "ArrowRight":
        case "d":
        case "D":
          e.preventDefault();
          if (direction.current !== "LEFT") nextDirection.current = "RIGHT";
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (gameStarted) {
      drawGame();
    }
  }, [gameStarted, drawGame]);

  const startGame = () => {
    resetGame();
    setGameStarted(true);
  };

  const handleDirectionChange = (newDirection: Direction) => {
    if (!gameStarted || gameOver || isPaused) return;
    
    switch (newDirection) {
      case "UP":
        if (direction.current !== "DOWN") nextDirection.current = "UP";
        break;
      case "DOWN":
        if (direction.current !== "UP") nextDirection.current = "DOWN";
        break;
      case "LEFT":
        if (direction.current !== "RIGHT") nextDirection.current = "LEFT";
        break;
      case "RIGHT":
        if (direction.current !== "LEFT") nextDirection.current = "RIGHT";
        break;
    }
  };

  return (
    <section id="game" className="py-24 relative overflow-hidden">
      {/* Background effects - Static for performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/8 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-pink-500/8 to-transparent rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              🎮 Interactive Fun
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Play Snake Game
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a break and enjoy a classic game! Use arrow keys or WASD to control the snake
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/50 bg-card/50 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Score</p>
                    <p className="text-2xl font-bold text-primary">{score}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                      <Trophy className="h-4 w-4" />
                      High Score
                    </p>
                    <p className="text-2xl font-bold text-amber-500">{highScore}</p>
                  </div>
                </div>
                {gameStarted && (
                  <Badge variant={isPaused ? "secondary" : "default"}>
                    {isPaused ? "Paused" : "Playing"}
                  </Badge>
                )}
              </div>

              <div className="relative">
                <canvas
                  ref={canvasRef}
                  width={gridSize * tileSize}
                  height={gridSize * tileSize}
                  className="border-2 border-border rounded-lg w-full bg-black"
                />
                
                {!gameStarted && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-lg backdrop-blur-sm">
                    <div className="text-center">
                      <Gamepad2 className="h-16 w-16 text-primary mx-auto mb-4" />
                      <Button onClick={startGame} size="lg" className="shadow-lg">
                        Start Game
                      </Button>
                    </div>
                  </div>
                )}

                {gameOver && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/90 rounded-lg backdrop-blur-sm">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-white mb-2">Game Over!</h3>
                      <p className="text-xl text-muted-foreground mb-4">
                        Final Score: <span className="text-primary font-bold">{score}</span>
                      </p>
                      {score === highScore && score > 0 && (
                        <p className="text-amber-500 font-semibold mb-4 flex items-center justify-center gap-2">
                          <Trophy className="h-5 w-5" />
                          New High Score!
                        </p>
                      )}
                      <Button onClick={startGame} size="lg" className="shadow-lg">
                        <RotateCcw className="mr-2 h-5 w-5" />
                        Play Again
                      </Button>
                    </div>
                  </div>
                )}

                {isPaused && !gameOver && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-lg backdrop-blur-sm">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-white mb-4">Paused</h3>
                      <p className="text-muted-foreground">Press Space to continue</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Controls */}
              {gameStarted && !gameOver && (
                <div className="mt-6 md:hidden">
                  <div className="flex flex-col items-center gap-2">
                    <Button
                      onClick={() => handleDirectionChange("UP")}
                      size="lg"
                      variant="outline"
                      className="w-16 h-16 p-0 bg-primary/10 hover:bg-primary/20 border-primary/50"
                    >
                      <ChevronUp className="h-8 w-8" />
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleDirectionChange("LEFT")}
                        size="lg"
                        variant="outline"
                        className="w-16 h-16 p-0 bg-primary/10 hover:bg-primary/20 border-primary/50"
                      >
                        <ChevronLeft className="h-8 w-8" />
                      </Button>
                      <Button
                        onClick={() => handleDirectionChange("DOWN")}
                        size="lg"
                        variant="outline"
                        className="w-16 h-16 p-0 bg-primary/10 hover:bg-primary/20 border-primary/50"
                      >
                        <ChevronDown className="h-8 w-8" />
                      </Button>
                      <Button
                        onClick={() => handleDirectionChange("RIGHT")}
                        size="lg"
                        variant="outline"
                        className="w-16 h-16 p-0 bg-primary/10 hover:bg-primary/20 border-primary/50"
                      >
                        <ChevronRight className="h-8 w-8" />
                      </Button>
                    </div>
                    <Button
                      onClick={() => setIsPaused((prev) => !prev)}
                      variant="secondary"
                      className="mt-2 w-32"
                    >
                      {isPaused ? "Resume" : "Pause"}
                    </Button>
                  </div>
                </div>
              )}

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-primary" />
                  Controls
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">↑ ↓ ← →</Badge>
                    <span className="text-muted-foreground">Arrow Keys</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">W A S D</Badge>
                    <span className="text-muted-foreground">Alternative</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Space</Badge>
                    <span className="text-muted-foreground">Pause/Resume</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">🍎</Badge>
                    <span className="text-muted-foreground">+10 Points</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 md:hidden">
                  💡 Use the buttons above to control the snake on mobile
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
