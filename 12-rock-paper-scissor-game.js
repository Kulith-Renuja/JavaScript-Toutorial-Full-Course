// Object to calculate score
        let score = {
            wins: 0,
            losses: 0,
            draws: 0
        };

        // Load score from local storage when the page loads
        loadScoreFromLocalStorage();

        // Function to load score from local storage
        function loadScoreFromLocalStorage() {
            const scoreFromStorage = localStorage.getItem('score'); // Retrieve score from local storage
            if (scoreFromStorage) {
                score = JSON.parse(scoreFromStorage); // Convert string back to object
                updateScoreDisplay(); // Update the score display
            }
        }

        // Function to save score to local storage
        function saveScoreToLocalStorage() {
            localStorage.setItem('score', JSON.stringify(score)); // Save score as a string
        }

        // Function to update the score display
        function updateScoreDisplay() {
            document.getElementById('score').textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
        }

        // Function to get computer's random choice
        function getrandom() {
            const random = Math.random();
            let game;

            if (random >= 0.0 && random < 0.3) {
                game = 'rock';
            } else if (random >= 0.3 && random < 0.6) {
                game = 'paper';
            } else {
                game = 'scissor';
            }

            return game;
        }

        // Function to determine the result and update the UI
        function fulloutput(game, person) {
            document.getElementById('computer-choice').textContent = `Computer chose: ${game} & you chose: ${person}`;
            //document.querySelector('#result').innerHTML = `<img src="${game}.png" alt="${game}" style="width: 100px; height: 100px;">`;
            if (game === 'rock') {
                document.getElementById('result').innerHTML = `<img src="rock.png" alt="rock" style="width: 100px; height: 100px;">`;
            } else if (game === 'paper') {
                document.getElementById('result').innerHTML = `<img src="paper.png" alt="paper" style="width: 100px; height: 100px;">`;
            } else if (game === 'scissor') {
                document.getElementById('result').innerHTML = `<img src="scissors.png" alt="scissor" style="width: 100px; height: 100px;">`;
            }

            if (game === person) {
                document.getElementById('result-text').textContent = `It's a draw!`;
                score.draws++;
            } else if (person === 'rock') {
                if (game === 'scissor') {
                    document.getElementById('result-text').textContent = `You win!`;
                    score.wins++;
                } else if (game === 'paper') {
                    document.getElementById('result-text').textContent = `You lose!`;
                    score.losses++;
                }
            } else if (person === 'paper') {
                if (game === 'rock') {
                    document.getElementById('result-text').textContent = `You win!`;
                    score.wins++;
                } else if (game === 'scissor') {
                    document.getElementById('result-text').textContent = `You lose!`;
                    score.losses++;
                }
            } else if (person === 'scissor') {
                if (game === 'paper') {
                    document.getElementById('result-text').textContent = `You win!`;
                    score.wins++;
                } else if (game === 'rock') {
                    document.getElementById('result-text').textContent = `You lose!`;
                    score.losses++;
                }
            }

            updateScoreDisplay(); // Update the score display
            saveScoreToLocalStorage(); // Save the updated score to local storage
        }