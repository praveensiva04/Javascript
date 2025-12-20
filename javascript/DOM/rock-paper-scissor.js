let score = JSON.parse(localStorage.getItem('score')) ||{
                wins:0,
                losses:0,
                ties:0  

            };

        updateScoreElem();
            
        // console.log(docScore);
        
        // console.log();
        /*
        if (score === null) {
            score ={
                wins:0,
                losses:0,
                ties:0  

            };
        }
        */

        function playerMove(playermove)
        {
            

            const computerMove= computerPickedMove();

            let result = '';
   

            if (playermove==='Scissors') 
            {
                if(computerMove ==='Rock')
                {
                    result = 'You Loss!';
                }
                else if(computerMove === 'Paper')
                {
                    result = 'You Win!';
                }
                else if(computerMove === 'Scissors')
                {
                    result = 'tie!';
                }
            }

            else if (playermove==='Paper') 
            {
                if(computerMove ==='Rock')
                {
                    result = 'You Win!';
                }
                else if(computerMove === 'Paper')
                {
                    result = 'tie!';
                }
                else if(computerMove === 'Scissors')
                {
                    result = 'You Loss!';
                }
            }

            else if(playermove==='Rock')
            {
                if(computerMove ==='Rock')
                {
                    result = 'tie!';
                }
                else if(computerMove === 'Paper')
                {
                    result = 'You Loss!';
                }
                else if(computerMove === 'Scissors')
                {
                    result = 'You Win!';
                }
            }

            if (result==='You Win!') 
            {
                score.wins+=1;
            }
            
            else if (result === 'You Loss!') 
            {
                score.losses+=1;
            }
            else if (result === 'tie!') {
                score.ties+=1;
            }
            localStorage.setItem('score',JSON.stringify(score));



            updateScoreElem();
            
            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-move').innerHTML = `you
        <img src="images/${playermove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        computer`;
            
            // alert(`you chose ${playermove}. Computer chose ${computerMove}. ${result} \n
            //     Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties}`)
        }

        function updateScoreElem()
        {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties}`;

        }

        function computerPickedMove()
        {
            const randomNumber = Math.random();
            
            let computerMove = '';
        
            if(randomNumber >=0 && randomNumber<1/3)
            {
                computerMove='Rock';
            }

            else if(randomNumber>=1/3 && randomNumber<2/3)
            {
                computerMove='Paper';
                
            }

            else if(randomNumber>=2/3 && randomNumber<1)
            {
                computerMove='Scissors'
            }

            return computerMove;
        }