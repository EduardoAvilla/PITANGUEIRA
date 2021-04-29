 <?php

  function Cadastrar(){
$servername = "localhost";
$database = "projeto";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
 
echo "Connected successfully";

$sql = "INSERT INTO projeto (Tecnico, Gestor, Tecnico) VALUES ('Test', 'Testing', 'Testing@tesing.com')";
if (mysqli_query($conn, $sql)) {
      echo "New record c
  reated successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
}
 











?>