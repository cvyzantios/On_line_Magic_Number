
 //    https://jsfiddle.net/7yh93xmj/
 <!DOCTYPE html>
<html lang="en">

<head>
<script src="script.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A simple online Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #add8e6; /* Μπλε ανοιχτό */
        }

        header h1 {
            font-size: 15px;
        }

        #numberInput {
            margin-top: 10px;
        }
    </style>
</head>

<body>

    <header>
        <h1>A simple online Game</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">This is a simple online Game</a></li>
            <li><a href="#">Find the magic number</a></li>
        </ul>
    </nav>

    <section>
        <h2>Please insert a number !!!</h2>
        <label for="numberInput">Enter a number:</label>
        <input type="number" id="numberInput" name="numberInput">
        <button onclick="submitNumber()">Submit</button>
        <button onclick="resetForm()">Reset</button>
    </section>

    <footer>
        <p>&copy; 2023 by CV</p>
    </footer>

    <script>
        function submitNumber() {
            // Εδώ μπορείτε να προσθέσετε τον κώδικα που θέλετε για την επεξεργασία του αριθμού
            alert('Number submitted!');
        }

        function resetForm() {
            document.getElementById('numberInput').value = '';
        }
    </script>

</body>
</html>

//--------------------------------------------------------------------------------------------------------------
css

/* We configure background colour */
body {
    background-color: #add8e6; /* Μπλε ανοιχτό */
}

/* We configure the title */
header h1 {
    font-size: 15px;  /* We configure the letter size */

} 
//-------------------------------------------------------------------------------------------------------------
js

// script.js

function submitNumber() {
  var userNumber = document.getElementById('numberInput').value;
  var randomNumber = Math.floor(Math.random() * 10) + 1;

  if (userNumber == randomNumber) {
    alert('Congratulation!! Play it to a lottery!!!');
  } else {
    alert('Try again! The correct number was ' + randomNumber);
  }
}

function resetForm() {
  document.getElementById('numberInput').value = '';
}





Magic Number Online
