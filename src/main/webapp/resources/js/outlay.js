$(document).ready (function () {

    var page = document.getElementById('btnPage');
    var canvas=document.getElementById("chart");


    // canvas 리셋해서 드롭다운박스 선택시 새로고침하는 함수
    var resetCanvas= function(){
      canvas.remove();
      $("#chartdiv").append('<canvas id="chart"></canvas>');
      canvas=document.getElementById("chart");
    };

    // 수입,지출 페이지 변경 버튼 클릭이벤트
    console.log($('#category'));
    page.addEventListener("click", function(){
      if(page.innerText == '수입') {
          page.innerText = '지출';
          location.href="walletChart-outlay.html";
      } else page.innerText = '수입';
            location.href="walletChart-income.html"
      }
    );

     // outlay pie-chart 만들기 
     new Chart(document.getElementById("chart"), {
        type: 'pie',
        data: {
          labels: ["식비", "문화생활비", "금융보험비","교통비","주거생활비","건강관리비","기타"],
          datasets: [{
            label: "만원",
            backgroundColor: ["#C9707E","#E48E58","#5AA08D","#4C92B1","#ABC879","#AC99C1","#96B1D0"],
            data: [50,10,30,10,40,20,5]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Monthly Outlay'
          }
        }
    });
    // 차트 종류별 드롭박스 체인지 이벤트
  $('#category').change(function () { 
    if(this.value == 'pie') {
      resetCanvas();
      new Chart(document.getElementById("chart"), {
        type: 'pie',
        data: {
          labels: ["식비", "문화생활비", "금융보험비","교통비","주거생활비","건강관리비","기타"],
          datasets: [{
            label: "만원",
            backgroundColor: ["#C9707E","#E48E58","#5AA08D","#4C92B1","#ABC879","#AC99C1","#96B1D0"],
            data: [50,10,30,10,40,20,5]
            }]
          },
          options: {
             title: {
              display: true,
              text: 'Monthly Outlay'
              }
            }
          });
    } 
    console.log(this);
    if(this.value == 'bar') {
  //  outlay bar-chart 만들기
  resetCanvas();
   new Chart(document.getElementById("chart"), {
    type: 'bar',
    data: {
      labels: ["식비", "문화생활비", "금융보험비","교통비","주거생활비","건강관리비","기타"],
      datasets: [{
        label: "만원",
        backgroundColor: ["#C9707E","#E48E58","#5AA08D","#4C92B1","#ABC879","#AC99C1","#96B1D0"],
        data: [50,10,30,10,40,20,5]
      }]
    },
    options: {
      legend: {display: false },
      title: {
        display: true,
        text: 'Monthly Outlay'
        }
      }
    });
    
  } if (this.value == 'line') {
    // outlay line-chart 만들기
    resetCanvas();
  new Chart(document.getElementById("chart"), {
    type: 'line',
    data: {
      labels: [1,5,10,15,20,25,28,30,31],
      datasets: [{ 
          data: [2,6,4,3,7,4,2,1,1,0],
          label: "식비",
          borderColor: "#C9707E",
          fill: false
        }, { 
          data: [0,3,0,5,0,2,0,0,0,0],
          label: "문화생활비",
          borderColor: "#E48E58",
          fill: false
        }, { 
          data: [0,15,0,0,0,5,0,10,0,0],
          label: "금융보험비",
          borderColor: "#5AA08D",
          fill: false
        }, { 
            data: [0,10,0,0,0,0,0,0,0,0],
            label: "교통비",
            borderColor: "#4C92B1",
            fill: false
          }, { 
            data: [20,0,0,20,0,0,0,0,0,0],
            label: "주거생활비",
            borderColor: "#ABC879",
            fill: false
          }, { 
            data: [0,15,0,0,0,5,0,0,0,0],
            label: "건강관리비",
            borderColor: "#AC99C1",
            fill: false
          }, { 
            data: [0,5,0,0,0,5,0,0,0,0],
            label: "기타",
            borderColor: "#96B1D0",
            fill: false
          }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Monthly Outlay'
      }
    }
  });
  // outlay lader chart 만들기
} if(this.value == 'lader') {
  resetCanvas();
  new Chart(document.getElementById("chart"), {
    type: 'radar',
    data: {
      labels: ["식비", "문화생활비", "금융보험비","교통비","주거생활비","건강관리비","기타"],
      datasets: [
        {
          label: "식비",
          fill: true,
          backgroundColor: "#C9707E",
          borderColor: "#C9707E",
          pointBorderColor: "#C9707E",
          pointBackgroundColor: "#C9707E",
          data: [8,12,15,6,19]
        },
        {
          label: "문화생활비",
          fill: true,
          backgroundColor: "#E48E58",
          borderColor: "#E48E58",
          pointBorderColor: "#E48E58",
          pointBackgroundColor: "#E48E58",
          pointBorderColor: "#E48E58",
          data: [1,2,3,4,5]
        },
        {
          label: "금융보험비",
          fill: true,
          backgroundColor: "#5AA08D",
          borderColor: "#5AA08D",
          pointBorderColor: "#5AA08D",
          pointBackgroundColor: "#5AA08D",
          pointBorderColor: "#5AA08D",
          data: [2,3,5,12,8]
        },
        {
          label: "교통비",
          fill: true,
          backgroundColor: "#4C92B1",
          borderColor: "#4C92B1",
          pointBorderColor: "#4C92B1",
          pointBackgroundColor: "#4C92B1",
          pointBorderColor: "#4C92B1",
          data: [2,2,2,2,2]
        },
        {
          label: "주거생활비",
          fill: true,
          backgroundColor: "#ABC879",
          borderColor: "#ABC879",
          pointBorderColor: "#ABC879",
          pointBackgroundColor: "#ABC879",
          pointBorderColor: "#ABC879",
          data: [10,10,10,0,10]
        },
        {
          label: "건강관리비",
          fill: true,
          backgroundColor: "#AC99C1",
          borderColor: "#AC99C1",
          pointBorderColor: "#AC99C1",
          pointBackgroundColor: "#AC99C1",
          pointBorderColor: "#AC99C1",
          data: [6,5,9,0,0]
        },
        {
          label: "기타",
          fill: true,
          backgroundColor: "#96B1D0",
          borderColor: "#96B1D0",
          pointBorderColor: "#96B1D0",
          pointBackgroundColor: "#96B1D0",
          pointBorderColor: "#96B1D0",
          data: [0,0,0,0,10]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Monthly Outlay'
      }
    }
});
// outlay polar-area-chart 만들기
} if(this.value == 'polar') {
  resetCanvas();
  new Chart(document.getElementById("chart"), {
    type: 'polarArea',
    data: {
      labels: ["식비", "문화생활비", "금융보험비","교통비","주거생활비","건강관리비","기타"],
      datasets: [
        {
          label: "만원",
          backgroundColor: ["#C9707E","#E48E58","#5AA08D","#4C92B1","#ABC879","#AC99C1","#96B1D0"],
          data: [50,10,30,10,40,20,5]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Monthly outlay'
      }
    }
});

// income dougnut-chart 만들기
} 

if(this.value == 'doughnut') {
  resetCanvas();
  new Chart(document.getElementById("chart"), {
    type: 'doughnut',
    data: {
      labels: ["식비", "문화생활비", "금융보험비","교통비","주거생활비","건강관리비","기타"],
      datasets: [
        {
          label: "만원",
          backgroundColor: ["#C9707E","#E48E58","#5AA08D","#4C92B1","#ABC879","#AC99C1","#96B1D0"],
          data: [50,10,30,10,40,20,5]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Monthly Outlay'
      }
    } 
});
// income horizontal-bar-chart 만들기
} if(this.value == 'horizontal') {
  resetCanvas();
  new Chart(document.getElementById("chart"), {
    type: 'horizontalBar',
    data: {
      labels: ["식비", "문화생활비", "금융보험비","교통비","주거생활비","건강관리비","기타"],
      datasets: [
        {
          label: "만원",
          backgroundColor: ["#C9707E","#E48E58","#5AA08D","#4C92B1","#ABC879","#AC99C1","#96B1D0"],
          data: [50,10,30,10,40,20,5]
        }
      ]
    },
    options: {
      risponsive: false,
      legend: { display: false },
      title: {
        display: true,
        text: 'Monthly Income'
      }
    }
});
} 
          
  }); // end change 함수 

}); // end $(document).ready 
