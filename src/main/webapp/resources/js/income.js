$(document).ready (function() {


  var canvas=document.getElementById("chart");


  // canvas 리셋해서 드롭다운박스 선택시 새로고침하는 함수
  var resetCanvas= function(){
    canvas.remove();
    $("#chartdiv").append('<canvas id="chart"></canvas>');
    canvas=document.getElementById("chart");
  };

  // 수입,지출 페이지 변경 버튼 클릭이벤트
  var page = document.getElementById('btnPage');
  page.addEventListener("click", function(){
    if(page.innerText == '지출') {
        page.innerText = '수입';
        location.href="walletChart-income.html";
    } else page.innerText = '지출';
          location.href="walletChart-outlay.html"
    }
  );
  
   // income pie-chart 만들기 
  new Chart(document.getElementById("chart"), {
    type: 'pie',
    data: {
      labels: ["근로소득", "금융소득", "기타소득"],
      datasets: [{
        label: "만원",
        backgroundColor: ["#65A8C4","#929292","#0052A5"],
        data: [300,30,15]
        }]
      },
      options: {
         title: {
          display: true,
          text: 'Monthly Income'
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
          labels: ["근로소득", "금융소득", "기타소득"],
          datasets: [{
            label: "만원",
            backgroundColor: ["#65A8C4","#929292","#0052A5"],
            data: [300,30,15]
            }]
          },
          options: {
             title: {
              display: true,
              text: 'Monthly Income'
              }
            }
          });
    } 
    if(this.value == 'bar') {
      resetCanvas();
  //  income bar-chart 만들기
   new Chart(document.getElementById("chart"), {
    type: 'bar',
    data: {
      labels: ["근로소득", "금융소득", "기타소득"],
      datasets: [{
        label: "만원",
        backgroundColor: ["#65A8C4","#929292","#0052A5"],
        data: [300,30,15]
      }]
    },
    options: {
      legend: {display: false },
      title: {
        display: true,
        text: 'Monthly Income'
        }
      }
    });
    
  } if (this.value == 'line') {
    resetCanvas();
    // income line-chart 만들기
  new Chart(document.getElementById("chart"), {
    
    type: 'line',
    data: {
      labels: [1,5,10,15,20,25,28,30,31],
      datasets: [{ 
          data: [18,83,134,188,221,261,292,344,379,392],
          label: "근로소득",
          borderColor: "#65A8C4",
          fill: false
        }, { 
          data: [0,0,0,30,0,0,0,0,0,0],
          label: "금융소득",
          borderColor: "##929292",
          fill: false
        }, { 
          data: [0,15,0,0,0,0,0,0,0,0],
          label: "기타소득",
          borderColor: "#0052A5",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Monthly Income'
      }
    }
  });
  // income lader chart 만들기
} if(this.value == 'lader') {
  resetCanvas();
  new Chart(document.getElementById("chart"), {
    type: 'radar',
    data: {
      labels: ["근로소득", "금융소득", "기타소득"],
      datasets: [
        {
          label: "근로소득",
          fill: true,
          backgroundColor: "#65A8C4",
          borderColor: "#65A8C4",
          pointBorderColor: "#65A8C4",
          pointBackgroundColor: "#65A8C4",
          data: [8.77,55.61,21.69,6.62,6.82]
        },
        {
          label: "금융소득",
          fill: true,
          backgroundColor: "#929292",
          borderColor: "#929292",
          pointBorderColor: "#929292",
          pointBackgroundColor: "#929292",
          pointBorderColor: "#929292",
          data: [25.48,54.16,7.61,8.06,4.45]
        },
        {
          label: "기타소득",
          fill: true,
          backgroundColor: "#0052A5",
          borderColor: "#0052A5",
          pointBorderColor: "##0052A5",
          pointBackgroundColor: "##0052A5",
          pointBorderColor: "##0052A5",
          data: [15,63,22,8,31,49]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Monthly Income'
      }
    }
});
// income polar-area-chart 만들기
} if(this.value == 'polar') {
  resetCanvas();
  new Chart(document.getElementById("chart"), {
    type: 'polarArea',
    data: {
      labels: ["근로소득", "금융소득", "기타소득"],
      datasets: [
        {
          label: "만원",
          backgroundColor: ["#65A8C4","#929292","#0052A5"],
          data: [300,30,15]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Monthly Income'
      }
    }
});
// income dougnut-chart 만들기
} if(this.value == 'doughnut') {
  resetCanvas();
  new Chart(document.getElementById("chart"), {
    type: 'doughnut',
    data: {
      labels: ["근로소득", "금융소득", "기타소득"],
      datasets: [
        {
          label: "만원",
          backgroundColor: ["#65A8C4","#929292","#0052A5"],
          data: [300,30,15]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Monthly Income'
      }
    } 
});
// income horizontal-bar-chart 만들기
} if(this.value == 'horizontal') {
  resetCanvas();
  new Chart(document.getElementById("chart"), {
    type: 'horizontalBar',
    data: {
      labels: ["근로소득", "금융소득", "기타소득"],
      datasets: [
        {
          label: "만원",
          backgroundColor: ["#65A8C4","#929292","#0052A5"],
          data: [300,30,15]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Monthly Income'
      }
    }
});
} 
          
  }); // end change 함수 

}); // end document ready 
