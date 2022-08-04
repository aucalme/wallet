<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="walletChart.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/413d20c4d7.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script> 
    <script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>

    <script src="walletChart-income.js"></script>
    <title>walletChart</title>
</head>
<body>
    <div id="wrap">
    <header>
        <div class="header">
            <h1 class="logo"><i class="fas fa-wallet"></i>WALLET</h1> 
            <ul class="sign">
                <li><a href="">회원가입</a></li>
                <li><a href="">로그인</a></li>
            </ul>
        </div>
    </header>
    <content>
        <a id="left" href=""><i class="fas fa-angle-left"></i></a><h2 class="month">2월</h2><a id="right" href=""><i class="fas fa-angle-right"></i></a>
        <div class="right">
            <div class="btn">
                <button onclick="change()" class="btnPage" id="btnPage">지출</button>
            </div>
            <form class="form">
            <select class="select" >
                <option value="month">월별</option>
                <option value="day">일별</option>
            </select>
            </form>
        </div>
        <section class="income">
            <div class="chartArea">
            <div>
                <div class="chart-div">
                    <form>
                        <select name="category" id="category">
                            <option selected disabled>choose Chart</option>
                            <option value="pie">pie</option>
                            <option value="bar">bar</option>
                            <option value="line">line</option>
                            <option value="lader">lader</option>
                            <option value="polar">polar</option>
                            <option value="doughnut">doughnut</option>
                            <option value="horizontal">horizontal</option>
                        </select>
                    </form>
                    <div id="chartdiv">
                    <canvas id="chart" ></canvas>
                    </div>
                </div>
            </div>
            </div>
                <nav class="listArea">
                    <div>
                        <ul class="chartList">
                            <li class="work"><i class="fas fa-money-check-alt"></i> 근로소득 : <span></span></li>
                            <li class="financial"><i class="fas fa-coins"></i> 금융소득 : <span></span></li>
                            <li class="etcIncome"><i class="fas fa-won-sign"></i> 기타소득 : <span></span></li>
                        </ul>
                    </div>
                    <ul class="total">
                        <li>수입 <span></span>\</li>
                    </ul>
                </nav>
        </section>
    </content>
    <footer>
        <div class="footer">
            <p class="copyright">copyright. All rights Reserved.</p>
            <ul class="footerList">
                <li><a href="">이용약관</a></li>
                <li><a href="">고객센터</a></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
    </footer>
    </div>
    <div class="topbtn"><a href="#wrap"><i class="fas fa-chevron-circle-up"></i></a></div>

</body>
</html>