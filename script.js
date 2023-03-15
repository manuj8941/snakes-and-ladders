const boxes = document.querySelectorAll( ".column" );
for ( let i = 0; i < 100; i++ )
{
    let y = 9 - Math.floor( i / 10 );
    if ( y % 2 === 1 ) 
    {
        x = 9 - ( i % 10 );
    }
    else
    {
        x = i % 10;
    }
    let number = 10 * y + x + 1;
    boxes[ i ].setAttribute( "id", `box${ number }` );

}
const buttonDice = document.querySelector( "#buttonDice" );
const resetButton = document.querySelector( "#resetButton" );

const cap1 = document.querySelectorAll( "h1" )[ 1 ];
const cap2 = document.querySelectorAll( "h1" )[ 2 ];
const cap3 = document.querySelectorAll( "h1" )[ 3 ];
const piece = document.querySelector( "#piece" );
const sOl = document.querySelectorAll( "img" )[ 1 ];
let currentLocation = 0;
let targetDiv;
let diceOutput;
let alpha;
const diceDiv = document.querySelector( ".dice" );
const diceThrow = () => { return ( Math.floor( Math.random() * 6 ) + 1 ); };
var sEffect1 = new Audio( "tick.mp3" );
var sEffect2 = new Audio( "dicerole.mp3" );
var sEffect3 = new Audio( "gamestart.mp3" );
var sEffect4 = new Audio( "hiss.mp3" );
var sEffect5 = new Audio( "wow.mp3" );
var sEffect6 = new Audio( "yes.mp3" );


const movepiece = ( currentLocation ) =>
{
    targetDiv = document.querySelector( `#box${ currentLocation }` );
    piece.style.display = 'block';
    piece.style.position = "absolute";
    piece.style.left = `${ targetDiv.getBoundingClientRect().x }px`;
    piece.style.top = `${ targetDiv.getBoundingClientRect().y + 10 }px`;
    sEffect1.play();
};

const discreteMove = ( moves ) =>
{

    if ( moves > 0 )
    {

        for ( let count = 1; count <= moves; count++ )
        {
            setTimeout( () =>
            {
                currentLocation = currentLocation + 1;
                movepiece( currentLocation );

            }, count * 100 );
        }
    }
    else
    {
        for ( let count = 1; count <= ( ( -1 ) * moves ); count++ )
        {
            setTimeout( () =>
            {
                currentLocation = currentLocation - 1;
                movepiece( currentLocation );

            }, count * 100 );
        }
    };
};

buttonDice.addEventListener( "click", ( event ) =>
{
    diceDiv.style.visibility = "visible";
    cap1.innerText = "";
    cap2.innerText = "";
    cap3.innerText = "";
    sOl.src = "";

    sEffect2.play();

    const dice = [ ...document.querySelectorAll( ".die-list" ) ];
    dice.forEach( die =>
    {
        die.classList.toggle( "odd-roll" );
        die.classList.toggle( "even-roll" );
        alpha = diceThrow();
        die.dataset.roll = alpha;
    } );

    setTimeout( () =>
    {
        diceOutput = alpha;
        cap1.innerText = `ta-daa! you got, ${ diceOutput }`;

        if ( currentLocation + diceOutput <= 100 )
        {
            switch ( currentLocation + diceOutput )
            {
                case 30: discreteMove( diceOutput ); sEffect4.play(); cap2.innerText = "Oops! You've landed on a 🐍's head and have to move back to 7"; sOl.src = "snake.png"; discreteMove( 7 - 30 ); break;
                case 47: discreteMove( diceOutput ); sEffect4.play(); cap2.innerText = "Oops! You've landed on a 🐍's head and have to move back to 15"; sOl.src = "snake.png"; discreteMove( 15 - 47 ); break;
                case 56: discreteMove( diceOutput ); sEffect4.play(); cap2.innerText = "Oops! You've landed on a 🐍's head and have to move back to 19"; sOl.src = "snake.png"; discreteMove( 19 - 56 ); break;
                case 73: discreteMove( diceOutput ); sEffect4.play(); cap2.innerText = "Oops! You've landed on a 🐍's head and have to move back to 51"; sOl.src = "snake.png"; discreteMove( 51 - 73 ); break;
                case 82: discreteMove( diceOutput ); sEffect4.play(); cap2.innerText = "Oops! You've landed on a 🐍's head and have to move back to 42"; sOl.src = "snake.png"; discreteMove( 42 - 82 ); break;
                case 92: discreteMove( diceOutput ); sEffect4.play(); cap2.innerText = "Oops! You've landed on a 🐍's head and have to move back to 75"; sOl.src = "snake.png"; discreteMove( 75 - 92 ); break;
                case 98: discreteMove( diceOutput ); sEffect4.play(); cap2.innerText = "Oops! You've landed on a 🐍's head and have to move back to 55"; sOl.src = "snake.png"; discreteMove( 55 - 98 ); break;

                case 4: discreteMove( diceOutput ); sEffect5.play(); cap2.innerText = "Awesome! You found a 🪜 and climbed higher to 25!"; sOl.src = "ladder.png"; discreteMove( 25 - 4 ); break;
                case 21: discreteMove( diceOutput ); sEffect5.play(); cap2.innerText = "Awesome! You found a 🪜 and climbed higher to 39!"; sOl.src = "ladder.png"; discreteMove( 39 - 21 ); break;
                case 29: discreteMove( diceOutput ); sEffect5.play(); cap2.innerText = "Awesome! You found a 🪜 and climbed higher to 74!"; sOl.src = "ladder.png"; discreteMove( 74 - 29 ); break;
                case 43: discreteMove( diceOutput ); sEffect5.play(); cap2.innerText = "Awesome! You found a 🪜 and climbed higher to 76!"; sOl.src = "ladder.png"; discreteMove( 76 - 43 ); break;
                case 63: discreteMove( diceOutput ); sEffect5.play(); cap2.innerText = "Awesome! You found a 🪜 and climbed higher to 80!"; sOl.src = "ladder.png"; discreteMove( 80 - 63 ); break;
                case 71: discreteMove( diceOutput ); sEffect5.play(); cap2.innerText = "Awesome! You found a 🪜 and climbed higher to 89!"; sOl.src = "ladder.png"; discreteMove( 89 - 71 ); break;



                case 100: cap1.innerText = "YOU WON!"; sEffect6.play(); discreteMove( diceOutput ); buttonDice.style.visibility = "hidden";
                default: discreteMove( diceOutput ); break;

            }
        } else
        {
            cap1.innerText = "You are almost there!";
        }

    }, 1250 );






} );

resetButton.addEventListener( "click", ( event ) =>
{

    sEffect3.play();

    setTimeout( () =>
    {
        location.reload();
    }, 750 );

} );





















































// buttonDice.addEventListener( "click", () =>
// {
//     diceOutput = diceThrow();
//     cap1.innerText = `ta-daa! you got, ${ diceOutput }`;

//     for ( let count = 1; count <= diceOutput; count++ )
//     {
//         ( function ( count )
//         {
//             setTimeout( () =>
//             {
//                 currentLocation = currentLocation + 1;
//                 moveGoti( currentLocation );
//             }, 200 * count );
//         } )( count );
//     }
// } );
// function moveGoti (currentLocation)
// {
//     targetDiv = document.querySelector( `#box${ currentLocation }` );
//     rect = targetDiv.getBoundingClientRect();
//     goti.style.left = rect.x + 18 + "px";
//     goti.style.top = rect.y + 18 + "px";
// }

// buttonDice.addEventListener( "click", async () =>
// {
//     diceOutput = diceThrow();
//     cap1.innerText = `ta-daa! you got, ${ diceOutput }`;

//     for ( let count = 1; count <= diceOutput; count++ )
//     {
//         await new Promise( ( resolve ) => { return setTimeout( resolve, 150 ); } );
//         currentLocation = currentLocation + 1;
//         moveGoti( currentLocation );
//     }
// } );

// function moveGoti ( currentLocation )
// {
//     targetDiv = document.querySelector( `#box${ currentLocation }` );
//     rect = targetDiv.getBoundingClientRect();
//     goti.style.left = rect.x + 18 + "px";
//     goti.style.top = rect.y + 18 + "px";
// }