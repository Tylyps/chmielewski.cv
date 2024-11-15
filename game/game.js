const gameOverScreen = document.querySelector(".gameOverScreen");
const gameErrorScreen = document.querySelector(".gameErrorScreen");

const gamePuzzleElements = document.querySelectorAll(".gamePuzzle");
const gamePuzzlePlaceElements = document.querySelectorAll(".gamePuzzlePlace");
const gameContainer = document.querySelector(".gameContainer");

const helpGameButton = document.querySelector(".helpGameButton");

const gamePuzzles = [];
const gamePuzzlePlaces = [];
let isGameOver = false;
let isGamePlayable = false;
let movesCount = 0;
let isHelping = false;

const helpGame = () => {
  gamePuzzleElements.forEach((element, index) => {
    if (index >= 2) index++; //RIGHT-UP IS EMPTY

    if (!isHelping) {
      element.innerHTML = `${index + 1}`;
      helpGameButton.classList.remove("fa-comment-medical");
      helpGameButton.classList.add("fa-comment-slash");
    } else {
      element.innerHTML = "";
      helpGameButton.classList.add("fa-comment-medical");
      helpGameButton.classList.remove("fa-comment-slash");
    }
  });
  isHelping = !isHelping;
};

gamePuzzleElements.forEach((element, index) => {
  if (index >= 2) index++;
  // element.innerHTML = `${index + 1}`; //TO DEBUG TO SEE PUZZLE PART INDEX
  const rowIndex = Math.floor(index / 3);
  const columnIndex = index % 3;
  gamePuzzles.push({
    element,
    rowIndex,
    columnIndex,
    elementIndex: index,
    elementPositionIndex: 0,
  });
});

gamePuzzlePlaceElements.forEach((element, index) => {
  const rowIndex = Math.floor(index / 3);
  const columnIndex = index % 3;
  gamePuzzlePlaces.push({
    element,
    rowIndex,
    columnIndex,
    elementIndex: index,
  });
});

gameContainer.addEventListener("click", (e) => {
  if (!isGamePlayable) {
    return;
  }
  const clickTarget = e.target;

  const className = e.target.classList[0];
  switch (className) {
    case "gamePuzzle": {
      const selectedPuzzle = gamePuzzles.find(
        (puzzle) => puzzle.element === clickTarget
      );
      const emptyPlace = gamePuzzlePlaces.find(
        (puzzlePlace) =>
          !gamePuzzles.some(
            (puzzle) => puzzle.elementPositionIndex === puzzlePlace.elementIndex
          )
      );
      checkPuzzleToMove(selectedPuzzle, emptyPlace);
      return;
    }
    case "gamePuzzlePlace": {
      const activePuzzle = document.querySelector(".gamePuzzle.active");
      const selectedPuzzle = gamePuzzles.find(
        (puzzle) => puzzle.element === activePuzzle
      );
      const selectedPuzzlePlace = gamePuzzlePlaces.find(
        (place) => place.element === clickTarget
      );
      checkPuzzleToMove(selectedPuzzle, selectedPuzzlePlace);
      return;
    }
  }
});

const toggleSelectedPuzzle = (puzzleElement) => {
  const isSelected = puzzleElement?.classList.contains("active");
  gamePuzzles.forEach((puzzle) => {
    puzzle.element.classList.remove("active");
  });
  if (!!puzzleElement) {
    if (isSelected) {
      puzzleElement.classList.add("remove");
    } else {
      puzzleElement.classList.add("active");
    }
  }
};

const checkPuzzleToMove = (puzzleToMove, selectedPuzzlePlace) => {
  if (!puzzleToMove) return;

  const isEmpty = checkIfPlaceIsEmpty(selectedPuzzlePlace);
  const isNeighbour = checkIfIsNeighbour(puzzleToMove, selectedPuzzlePlace);
  const canMove = isEmpty && isNeighbour;
  !!puzzleToMove &&
    canMove &&
    handlePuzzleMove(puzzleToMove, selectedPuzzlePlace.elementIndex);
};

const checkIfPlaceIsEmpty = (puzzlePlace) => {
  return gamePuzzles.every(
    (gamePuzzle) =>
      gamePuzzle.rowIndex !== puzzlePlace.rowIndex ||
      gamePuzzle.columnIndex !== puzzlePlace.columnIndex
  );
};

const checkIfIsNeighbour = (puzzle, puzzlePlace) => {
  if (
    Math.abs(puzzle.rowIndex - puzzlePlace.rowIndex) === 1 &&
    puzzle.columnIndex === puzzlePlace.columnIndex
  ) {
    return true;
  }
  if (
    Math.abs(puzzle.columnIndex - puzzlePlace.columnIndex) === 1 &&
    puzzle.rowIndex === puzzlePlace.rowIndex
  ) {
    return true;
  }
  return false;
};

const handlePuzzleMove = (puzzleToMove, index) => {
  const top = Math.floor(index / 3);
  const left = index % 3;
  puzzleToMove.columnIndex = left;
  puzzleToMove.rowIndex = top;

  const topPosition = top * 33.33;
  const leftPosition = left * 33.33;

  puzzleToMove.element.style.top = `${topPosition}%`;
  puzzleToMove.element.style.left = `${leftPosition}%`;
  puzzleToMove.elementPositionIndex = index;
  toggleSelectedPuzzle();

  //CHECK IF EVERY PUZZLE IS IN CORRECT PLACE
  isGameOver = gamePuzzles.every(
    (puzzle) => puzzle.elementPositionIndex === puzzle.elementIndex
  );
  movesCount++;

  //IF EVERY PUZZLE IS IN CORRECT PLACE END THE GAME
  if (isGameOver) {
    isGamePlayable = false;
    displayInfoScreen("gameOver");
  }
};

const checkIfGameIsSolvable = () => {
  const puzzlesClone = Array(...gamePuzzles);
  puzzlesClone.sort(
    (puzzleA, puzzleB) =>
      puzzleA.elementPositionIndex - puzzleB.elementPositionIndex
  );
  let numberInverions = 0;
  for (let i = 0; i < puzzlesClone.length - 1; i++) {
    for (let j = i + 1; j < puzzlesClone.length; j++) {
      if (puzzlesClone[i].elementIndex > puzzlesClone[j].elementIndex) {
        numberInverions++;
      }
    }
  }
  // console.log(numberInverions);
  return numberInverions % 2 === 0;
};

const setupGame = async () => {
  movesCount = 0;
  hideScreens();
  const saveBreakpoint = 50;
  let i = 0;
  isGamePlayable = await new Promise((resolve, reject) => {
    let isGamePlayable;
    do {
      // console.log(`SHUFFLE NR: ${i}`);
      const puzzlePositions = [0, 1, 3, 4, 5, 6, 7, 8];
      // const puzzlePositions = [7, 6, 4, 0, 3, 5, 1, 2]; //TO DEBUG - UNSOLVABLE
      // const puzzlePositions = [6, 7, 4, 0, 3, 5, 1, 2] //TO DEBUG - SOLVABLE
      gamePuzzles.forEach((puzzle) => {
        const index = puzzlePositions.splice(
          Math.floor(Math.random() * puzzlePositions.length),
          1
        )[0];
        // const index = puzzlePositions.shift(); //TO DEBUG GET FROM START TO END
        puzzle.elementPositionIndex = index;
      });
      i++;
      isGamePlayable = checkIfGameIsSolvable();
    } while (!(isGamePlayable || i > saveBreakpoint));
    // } while (!isGamePlayable);
    return resolve(isGamePlayable);
  });

  // DISPLAY ERROR IF PUZZLE IS UNSOLVABLE
  if (!isGamePlayable) {
    displayInfoScreen("error");
    return;
  }

  gamePuzzles.forEach((puzzle) => {
    const index = puzzle.elementPositionIndex;
    const top = Math.floor(index / 3);
    const left = index % 3;
    puzzle.columnIndex = left;
    puzzle.rowIndex = top;

    const topPosition = top * 33.33;
    const leftPosition = left * 33.33;

    const { x, y } = getBackgroundPosition(puzzle.elementIndex);

    puzzle.element.style = `top: ${topPosition}%; left: ${leftPosition}%; background-position: ${x} ${y};`;
  });
};

const getBackgroundPosition = (containerIndex) => {
  const start = "0%";
  const middle = "50%";
  const end = "99.99%";
  switch (containerIndex) {
    case 0:
      return {
        x: start,
        y: start,
      };
    case 1:
      return {
        x: middle,
        y: start,
      };
    case 2:
      return {
        x: end,
        y: start,
      };
    case 3:
      return {
        x: start,
        y: middle,
      };
    case 4:
      return {
        x: middle,
        y: middle,
      };
    case 5:
      return {
        x: end,
        y: middle,
      };
    case 6:
      return {
        x: start,
        y: end,
      };
    case 7:
      return {
        x: middle,
        y: end,
      };
    case 8:
      return {
        x: end,
        y: end,
      };
    default:
      return {
        x: "",
        y: "",
      };
  }
};

const hideScreens = () => {
  gameOverScreen.classList.remove("active");
  gameErrorScreen.classList.remove("active");
};

const displayInfoScreen = (screenType) => {
  hideScreens();
  if (screenType === "error") {
    gameErrorScreen.classList.add("active");
  } else if (screenType === "gameOver") {
    gameOverScreen.querySelector("h2").innerHTML = "Dobra robota!";
    gameOverScreen.querySelector(
      "p"
    ).innerHTML = `Liczba ruchów: ${movesCount}`;
    gameOverScreen.classList.add("active");
  }
};

const restartGame = () => {
  window.location = window.location;
};

document.querySelector("#game").removeAttribute("style");
setupGame();
