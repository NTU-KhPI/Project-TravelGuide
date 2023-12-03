<?php
/*$password_hash = password_hash($_POST["log_password"], PASSWORD_DEFAULT);
print_r($_POST);
var_dump($password_hash);*/
$servername = "mysql";
$username = "root";
$password = "password";
$dbname = "database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$inputmail = $_POST['log_mail'];
$inputpass = $_POST['log_password'];

$sql = "SELECT  1stname, 2ndname, email, passw FROM Users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $sql_c = "SELECT * FROM Users WHERE email = '$inputmail'";
  $ch_res_m = $conn->query($sql_c);
  
  if($ch_res_m->num_rows > 0) {

    $sql_c = "SELECT * FROM Users WHERE email = '$inputmail' AND passw = '$inputpass'";
    $ch_res_m = $conn->query($sql_c);

    if($ch_res_m->num_rows > 0) {
      echo "Successful entry";
    }
    else {
      echo "Wrong password";
    }
  }
  else {
    echo "Such email does not exist";
  }
  /*
  while($row = $result->fetch_assoc()) {
    if($sql = "SELECT EXISTS(SELECT email FROM Users WHERE email = '$inputmail')") {

    }
    echo "id: " . $row["ID"]. " - Name: " . $row["1stname"]. " " . $row["2ndname"]. "<br>";
  }
  echo "Name: " . $inputmail. "; Password: " . $inputpass. "<br>";
  */
} else {
  echo "0 results";
}
$conn->close();
?>
