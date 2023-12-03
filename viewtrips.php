<?php

$servername = "mysql";
$username = "root";
$password = "password";
$dbname = "database";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$filt1 = $_POST['item1'];
$filt2 = $_POST['item2'];
$filt3 = $_POST['item3'];
$filt4 = $_POST['item4'];
$filt5 = $_POST['item5'];
$filt6 = $_POST['item6'];


$sql = "SELECT * FROM CreatedTrips";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    ?>
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Created trips</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
        <link rel="stylesheet" href="style_navbar.css">
        <link rel="stylesheet" href="style_vtr.css">
        <link rel="stylesheet" href="common.css">
    </head>
    <body>
    <header class="main_menu">
            <div class="container">
                <nav class="navbar">
                    <a href="index.html"> <img src="foldico/tmp_ico1.png"> </a>
                    <ul class="navbar_items">
                        <li class="navbar_item"><a class="navbar_item_btn" id="sbmo">Trips</a>
                            <div class="dropdown hide">
                                <ul class="nb_dropdown_menu">
                                    <li class="dropdown_item">
                                        <a href="CrTrips.html" class="dropdown_item_btn">Plan a trip</a></li>
                                    <li class="dropdown_item">
                                        <a href="" class="dropdown_item_btn">View preplaned trips</a></li>
                                </ul>
                            </div>

                        </li>
                        <li class="navbar_item"><a class="navbar_item_btn">More</a></li>
                    </ul>
                    <div>
                        <a href="Login.html" class="navbar_signin_btn" id="signin_btn" target="login_form">Sign in</a>
                        <img src="foldico/UnassignedUser.png" class="navbar_singin_user hide" id="sbmo">
                        <div class="dropdown_user hide">
                            <div>
                                <img src="foldico/UnassignedUser.png" class="dropdown_userico">
                                <h3 class="dropdown_username">User name</h3>
                            </div>
                            <hr>
                            <ul class="nb_dropdown_menu">
                                <li class="dropdown_item">
                                    <a href="" class="dropdown_item_btn">View profile</a></li>
                                <li class="dropdown_item">
                                    <a href="" class="dropdown_item_btn">My trips</a></li>
                                <li class="dropdown_item">
                                    <a href="" class="dropdown_item_btn">Log out</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <section id="banner">
            <h2 id="banner_slogan">Find carefully prepared Trips</h2>
            <input type="search" class="input_b" id="find_trip" placeholder="Seach by Trip name">
        </section>
        <section id="sec_sel_t">
            <div class="container" style="text-align: center;">
                <p id="title_banner">Want to plan your trip withount worries? We have what you need!</p>
                <ul id="waw">
                    <li class="waw_li">
                        <img src="foldico/info_tmp.png">
                        <p>We have all kinds of preplaned tours all around the world! Find what you like the most.</p>
                    </li>
                    <li class="waw_li">
                        <img src="foldico/info_tmp.png">
                        <p>No need in additional planning. We planed our trip with all sigtheseeing and transportation in mind.</p>
                    </li>
                    <li class="waw_li">
                        <img src="foldico/info_tmp.png">
                        <p>We tried to make our trips as affordable as possible so more people can afford it.</p>
                    </li>
                 </ul>
            </div>
        </section>
        <form action="viewtrips.php">
            <div class="container">
                <p id="poptr">Popular trips</p>
                <p>Filters</p>
                <details class="cust_sel">
                    <summary>
                        <p id="filt_sel" style="font-size: 0.9rem;">Selected everything</p>
                        <button type="submit">Apply</button>
                    </summary>
                    <ul id="filt_list">
                        <li class="item_sel" name="item1">Tag1</li>
                        <li class="item_sel" name="item2">Tag2</li>
                        <li class="item_sel" name="item3">Tag3</li>
                        <li class="item_sel" name="item4">Tag4</li>
                        <li class="item_sel" name="item5">Tag5</li>
                        <li class="item_sel" name="item6">Tag6</li>
                    </ul>
                </details>
            </div>
            
            <ul>
    <?php

    while($row = $result->fetch_assoc()) {
        $rowID = $row["ID"];
        ?>
                <li class="container_v">
                    <div class="trip_info">
                        <div>
                            <?php echo '<img src="data:image/png;base64, '.base64_encode($row["IconLoc"]).'" class="img_trip">'; ?>
                            <div class="star_bg">★★★★★</div>
                            <div class="star_bg star_rate"
                            <?php
                            switch ($row["Rating"]) {
                                case $row["Rating"]==5:
                                    ?>style="width: 100%;"<?php
                                    break;
                                case $row["Rating"]>=4.5:
                                    ?>style="width: 9.4rem;"<?php
                                    break;
                                case $row["Rating"]>=4:
                                    ?>style="width: 8.2rem;"<?php
                                    break;
                                case $row["Rating"]>=3.5:
                                    ?>style="width: 7.3rem;"<?php
                                    break;
                                case $row["Rating"]>=3:
                                    ?>style="width: 6.2rem;"<?php
                                    break;
                                case $row["Rating"]>=2.5:
                                    ?>style="width: 5.2rem;"<?php
                                    break;
                                case $row["Rating"]>=2:
                                    ?>style="width: 4rem;"<?php
                                    break;
                                case $row["Rating"]>=1.5:
                                    ?>style="width: 3.1rem;"<?php
                                    break;
                                case $row["Rating"]>=1:
                                    ?>style="width: 2rem;"<?php
                                    break;
                                case $row["Rating"]>=0.5:
                                    ?>style="width: 1rem;"<?php
                                    break;
                                case $row["Rating"]==0:
                                    ?>style="width: 0;"<?php
                                    break;
                                        
                            }
                            ?>
                            >★★★★★</div>
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <h3><?php echo $row["Name"]; ?></h3>
                            <?php echo $row["DescLoc"]; ?>
                            <div class="add_info">
                                <div class="info_items">
                                    Tags:
                                        <ul class="info_tags">
                                            <?php
                                            $sql2 = "SELECT Tag FROM CrTripsLoc WHERE ID_Trip = $rowID GROUP BY Tag";
                                            $result2 = $conn->query($sql2);
                                            if ($result2->num_rows > 0) {
                                                while($row2 = $result2->fetch_assoc()) {
                                                ?>
                                                    <li>
                                                        <?php echo $row2["Tag"]; ?>
                                                    </li>
                                                <?php
                                                }
                                            }
                                            else {
                                                ?>
                                                    <li>
                                                        No tags
                                                    </li>
                                                <?php
                                            }
                                            ?>
                                    </ul>
                                </div>
                                <div class="info_items">
                                    Location: 
                                    <?php 
                                    $sql3 = "SELECT Loc_T, Loc_C FROM CrTripsLoc WHERE ID_Trip = $rowID";
                                    $result3 = $conn->query($sql3);
                                    if ($result3->num_rows > 0) {
                                        $row3 = $result3->fetch_assoc();
                                        echo $row3["Loc_T"] . ", " . $row3["Loc_C"];
                                    }
                                    else {
                                        echo "No location";
                                    }
                                    ?>
                                </div>
                                <div class="info_items">
                                    Places:
                                        <ul class="info_tags">
                                            <?php
                                            $sql4 = "SELECT Loc FROM CrTripsLoc WHERE ID_Trip = $rowID";
                                            $result4 = $conn->query($sql4);
                                            if ($result4->num_rows > 0) {
                                                while($row4 = $result4->fetch_assoc()) {
                                                ?>
                                                    <li>
                                                        <?php echo $row4["Loc"]; ?>
                                                    </li>
                                                <?php
                                                }
                                            }
                                            else {
                                                ?>
                                                    <li>
                                                        No places
                                                    </li>
                                                <?php
                                            }
                                            ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="text-align: center;"><button class="btn_tr_i">Learn more</button></div>
                </li>
        <?php
    }
    ?>
    </ul>
    </form>
        
        <footer class="com_footer">
            <div class="container">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Odit nam doloribus soluta iusto cupiditate recusandae aut, 
                placeat quia quam animi voluptatum natus sequi aliquam ipsam 
                molestiae voluptas dolore illum quisquam?
            </div>
        </footer>
        
        <div class="screen_fixed hide"></div>
        <div class = "form_al cr_state hide">
            <div class="close_btn"></div>
            <iframe scrolling="no" name="login_form" scr="Login.html" class="iframe_login"></iframe>
        </div>

        <script src="scripts_lf.js"></script>
        <script src="scripts_vtr.js"></script>
        <script src="scripts_common.js"></script>
    </body>
</html>
    <?php
}
else {
    echo "Error 404";
}


$conn->close();
?>