<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Updated Button Component</title>
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,300,700,500,400italic,500italic,700italic,300italic" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <style>
        body {
            font-family: 'Fira Sans', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #2C3940;
        }

        .button {
            position: relative;
            width: 200px;
            text-align: center;
        }

        .button h1 {
            font-weight: 300;
            color: white;
            font-size: 24px;
            margin: 0;
            text-transform: uppercase;
        }

        .button h2 {
            font-weight: 300;
            color: #00C4FF;
            font-size: 14px;
            margin: 4px 0;
        }

        .button a {
            color: white;
            text-decoration: none;
            font-size: 12px;
            margin-top: 10px;
            display: inline-block;
        }

        .button_inner {
            position: relative;
            width: 100%;
            height: 50px;
            background: linear-gradient(to right, #9333ea, #bfdbfe);
            border-radius: 8px;
            overflow: hidden;
            transition: all 0.3s;
            cursor: pointer;
            border: none;
            font-family: inherit;
        }

        .button_inner:hover {
            background: linear-gradient(to right, #a855f7, #93c5fd);
        }

        .button_inner span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 14px;
            font-weight: 500;
        }

        .button_spots {
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            animation: fizz 0.8s linear infinite;
        }

        @keyframes fizz {
            0% {
                transform: scale(0) translateY(0);
                opacity: 1;
            }
            100% {
                transform: scale(1.5) translateY(-20px);
                opacity: 0;
            }
        }

        /* Generate multiple spots */
        .button_inner::before,
        .button_inner::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
        }

        .button_inner::before {
            background: radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 10.01%) 50% 50% / 1em 1em;
        }

        .button_inner::after {
            background: radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 10.01%) 50% 50% / 2em 2em;
        }

        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(10);
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <div class="button">
        <h1>Fizzy CSS Button</h1>
        <h2>With super fizzy particle action</h2>
        <a href="https://www.codepen.io/jcoulterdesign">
            <i class="ion-social-codepen"></i>
            <span>More Codepen shenanigans</span>
        </a>
        <form>
            <button id="Go_to_feed" type="submit" class="button_inner">
                <span>Sign in</span>
            </button>
        </form>
    </div>

    <script>
        function createSpots() {
            const button = document.querySelector('.button_inner');
            for (let i = 0; i < 20; i++) {
                const spot = document.createElement('div');
                spot.classList.add('button_spots');
                spot.style.left = `${Math.random() * 100}%`;
                spot.style.top = `${Math.random() * 100}%`;
                spot.style.animationDelay = `${Math.random() * 2}s`;
                button.appendChild(spot);
            }
        }

        createSpots();

        document.querySelector('.button_inner').addEventListener('click', function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            let ripple = document.createElement('span');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => { ripple.remove() }, 600);
        });
    </script>
</body>
</html>
