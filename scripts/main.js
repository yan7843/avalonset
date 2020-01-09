var array10 = ["梅林","派西維爾","魔甘娜","刺客","莫德雷德","奧伯倫","忠臣","忠臣","忠臣","忠臣"]
var array9 = ["梅林","派西維爾","魔甘娜","刺客","莫德雷德","奧伯倫","忠臣","忠臣","忠臣"]
var array8 = ["梅林","派西維爾","魔甘娜","刺客","莫德雷德","忠臣","忠臣","忠臣"]

  function runover() {
    window.location.replace("over.html");
}

  function runindex() {
    window.location.replace("index.html");
}

  function run1() {
    window.location.replace("p1.html");    
}

  function run2() {
    window.location.replace("p2.html");    
}

  function run3() {
    window.location.replace("p3.html");    
}

  function run4() {
    window.location.replace("p4.html");    
}

  function run5() {
    window.location.replace("p5.html");    
}

  function run6() {
    window.location.replace("p6.html");    
}

  function run7() {
    window.location.replace("p7.html");    
}

  function run8() {
    window.location.replace("p8.html");    
}

  function run9() {
    window.location.replace("p9.html");    
}

  function run10() {
    window.location.replace("p10.html");    
}


  function back8(){
    var user = JSON.parse(localStorage.getItem("userInfo"))
    if (user[8] === undefined){
      window.location.replace("over.html");
    }
    else{
        window.location.replace("p9.html");
      }
  }

  function back9(){
    var user = JSON.parse(localStorage.getItem("userInfo"))
    if (user[9] === undefined){
      window.location.replace("over.html");
    }
    else{
        window.location.replace("p10.html");
      }
  }

  function shuffle10(){
    var m = array10.length,
      t, i;
      while (m) {
      i = Math.floor(Math.random() * m--);
      t = array10[m];
      array10[m] = array10[i];
      array10[i] = t;
    }
    return array10;
  }

  function save10(){
    var obj = array10
    localStorage.setItem("userInfo",JSON.stringify(obj));
  }

    function shuffle9(){
    var m = array9.length,
      t, i;
      while (m) {
      i = Math.floor(Math.random() * m--);
      t = array9[m];
      array9[m] = array9[i];
      array9[i] = t;
    }
    return array9;
  }

  function save9(){
    var obj = array9
    localStorage.setItem("userInfo",JSON.stringify(obj));
  }

  function shuffle8(){
    var m = array8.length,
      t, i;
      while (m) {
      i = Math.floor(Math.random() * m--);
      t = array8[m];
      array8[m] = array8[i];
      array8[i] = t;
    }
    return array8;
  }

  function save8(){
    var obj = array8
    localStorage.setItem("userInfo",JSON.stringify(obj));
  }

  function see(){
    var user = JSON.parse(localStorage.getItem("userInfo"))     
     alert("1家 "+user[0]+"\r"+"2家 "+user[1]+"\r"+"3家 "+user[2]+"\r"+"4家 "+user[3]+"\r"+"5家 "+user[4]+"\r"+"6家 "+user[5]+"\r"+"7家 "+user[6]+"\r"+"8家 "+user[7]+"\r"+"9家 "+user[8]+"\r"+"10家 "+user[9]);
  }


//================================================================================


  function set1() {
      var user = JSON.parse(localStorage.getItem("userInfo"))
      var text = document.getElementById("text");
      if (user[0] === "忠臣"){
        text.innerHTML = "你是忠臣";
      }
      if (user[0] === "刺客"){
        var 拇指 = []
        if (user[1] === "莫德雷德" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是刺客"+"\r"+"隊友在"+拇指;
      }

      if (user[0] === "梅林"){
        var 拇指 = []
        if (user[1] === "魔甘娜" || user[1] === "刺客" || user[1] === "奧伯倫"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客" || user[2] === "奧伯倫"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客" || user[3] === "奧伯倫"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客" || user[4] === "奧伯倫"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客" || user[5] === "奧伯倫"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客" || user[6] === "奧伯倫"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客" || user[7] === "奧伯倫"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客" || user[8] === "奧伯倫"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客" || user[9] === "奧伯倫"){
          拇指.push("10號")
        }
        text.innerHTML = "你是梅林"+"\r"+"拇指在"+拇指;
      }

      if (user[0] === "魔甘娜"){
        var 拇指 = []
        if (user[1] === "莫德雷德" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是魔甘娜"+"\r"+"隊友在"+拇指;
      }

      if (user[0] === "莫德雷德"){
        var 拇指 = []
        if (user[1] === "魔甘娜" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是莫德雷德"+"\r"+"隊友在"+拇指;
      }

      if (user[0] === "奧伯倫"){
        text.innerHTML = "你是奧伯倫";
      }

      if (user[0] === "派西維爾"){
        var 拇指 = []
        if (user[1] === "梅林" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "梅林" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "梅林" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "梅林" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "梅林" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "梅林" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "梅林" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "梅林" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "梅林" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是派西維爾"+"\r"+"拇指在"+拇指;
      }
    }

//================================================================================

    function set2() {
      var user = JSON.parse(localStorage.getItem("userInfo"))
      var text = document.getElementById("text");
      if (user[1] === "忠臣"){
        text.innerHTML = "你是忠臣";
      }
      if (user[1] === "刺客"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[2] === "莫德雷德" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是刺客"+"\r"+"隊友在"+拇指;
      }

      if (user[1] === "梅林"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客" || user[0] === "奧伯倫"){
          拇指.push("1號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客" || user[2] === "奧伯倫"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客" || user[3] === "奧伯倫"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客" || user[4] === "奧伯倫"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客" || user[5] === "奧伯倫"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客" || user[6] === "奧伯倫"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客" || user[7] === "奧伯倫"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客" || user[8] === "奧伯倫"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客" || user[9] === "奧伯倫"){
          拇指.push("10號")
        }
        text.innerHTML = "你是梅林"+"\r"+"拇指在"+拇指;
      }

      if (user[1] === "魔甘娜"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[2] === "莫德雷德" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是魔甘娜"+"\r"+"隊友在"+拇指;
      }

      if (user[1] === "莫德雷德"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是莫德雷德"+"\r"+"隊友在"+拇指;
      }

      if (user[1] === "奧伯倫"){
        text.innerHTML = "你是奧伯倫";
      }

      if (user[1] === "派西維爾"){
        var 拇指 = []
        if (user[0] === "梅林" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[2] === "梅林" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "梅林" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "梅林" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "梅林" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "梅林" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "梅林" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "梅林" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "梅林" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是派西維爾"+"\r"+"拇指在"+拇指;
      }
    }

//================================================================================

    function set3() {
      var user = JSON.parse(localStorage.getItem("userInfo"))
      var text = document.getElementById("text");
      if (user[2] === "忠臣"){
        text.innerHTML = "你是忠臣";
      }
      if (user[2] === "刺客"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[3] === "莫德雷德" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是刺客"+"\r"+"隊友在"+拇指;
      }

      if (user[2] === "梅林"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客" || user[0] === "奧伯倫"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客" || user[1] === "奧伯倫"){
          拇指.push("2號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客" || user[3] === "奧伯倫"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客" || user[4] === "奧伯倫"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客" || user[5] === "奧伯倫"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客" || user[6] === "奧伯倫"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客" || user[7] === "奧伯倫"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客" || user[8] === "奧伯倫"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客" || user[9] === "奧伯倫"){
          拇指.push("10號")
        }
        text.innerHTML = "你是梅林"+"\r"+"拇指在"+拇指;
      }

      if (user[2] === "魔甘娜"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[3] === "莫德雷德" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是魔甘娜"+"\r"+"隊友在"+拇指;
      }

      if (user[2] === "莫德雷德"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是莫德雷德"+"\r"+"隊友在"+拇指;
      }

      if (user[2] === "奧伯倫"){
        text.innerHTML = "你是奧伯倫";
      }

      if (user[2] === "派西維爾"){
        var 拇指 = []
        if (user[0] === "梅林" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "梅林" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[3] === "梅林" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "梅林" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "梅林" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "梅林" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "梅林" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "梅林" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "梅林" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是派西維爾"+"\r"+"拇指在"+拇指;
      }
    }

//================================================================================

    function set4() {
      var user = JSON.parse(localStorage.getItem("userInfo"))
      var text = document.getElementById("text");
      if (user[3] === "忠臣"){
        text.innerHTML = "你是忠臣";
      }
      if (user[3] === "刺客"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[4] === "莫德雷德" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是刺客"+"\r"+"隊友在"+拇指;
      }

      if (user[3] === "梅林"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客" || user[0] === "奧伯倫"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客" || user[1] === "奧伯倫"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客" || user[2] === "奧伯倫"){
          拇指.push("3號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客" || user[4] === "奧伯倫"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客" || user[5] === "奧伯倫"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客" || user[6] === "奧伯倫"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客" || user[7] === "奧伯倫"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客" || user[8] === "奧伯倫"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客" || user[9] === "奧伯倫"){
          拇指.push("10號")
        }
        text.innerHTML = "你是梅林"+"\r"+"拇指在"+拇指;
      }

      if (user[3] === "魔甘娜"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[4] === "莫德雷德" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是魔甘娜"+"\r"+"隊友在"+拇指;
      }

      if (user[3] === "莫德雷德"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是莫德雷德"+"\r"+"隊友在"+拇指;
      }

      if (user[3] === "奧伯倫"){
        text.innerHTML = "你是奧伯倫";
      }

      if (user[3] === "派西維爾"){
        var 拇指 = []
        if (user[0] === "梅林" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "梅林" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "梅林" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[4] === "梅林" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "梅林" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "梅林" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "梅林" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "梅林" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "梅林" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是派西維爾"+"\r"+"拇指在"+拇指;
      }
    }    


//================================================================================

    function set5() {
      var user = JSON.parse(localStorage.getItem("userInfo"))
      var text = document.getElementById("text");
      if (user[4] === "忠臣"){
        text.innerHTML = "你是忠臣";
      }
      if (user[4] === "刺客"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[5] === "莫德雷德" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是刺客"+"\r"+"隊友在"+拇指;
      }

      if (user[4] === "梅林"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客" || user[0] === "奧伯倫"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客" || user[1] === "奧伯倫"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客" || user[2] === "奧伯倫"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客" || user[3] === "奧伯倫"){
          拇指.push("4號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客" || user[5] === "奧伯倫"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客" || user[6] === "奧伯倫"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客" || user[7] === "奧伯倫"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客" || user[8] === "奧伯倫"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客" || user[9] === "奧伯倫"){
          拇指.push("10號")
        }
        text.innerHTML = "你是梅林"+"\r"+"拇指在"+拇指;
      }

      if (user[4] === "魔甘娜"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[5] === "莫德雷德" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是魔甘娜"+"\r"+"隊友在"+拇指;
      }

      if (user[4] === "莫德雷德"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是莫德雷德"+"\r"+"隊友在"+拇指;
      }

      if (user[4] === "奧伯倫"){
        text.innerHTML = "你是奧伯倫";
      }

      if (user[4] === "派西維爾"){
        var 拇指 = []
        if (user[0] === "梅林" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "梅林" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "梅林" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "梅林" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[5] === "梅林" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "梅林" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "梅林" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "梅林" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "梅林" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是派西維爾"+"\r"+"拇指在"+拇指;
      }
    }    


//================================================================================

    function set6() {
      var user = JSON.parse(localStorage.getItem("userInfo"))
      var text = document.getElementById("text");
      if (user[5] === "忠臣"){
        text.innerHTML = "你是忠臣";
      }
      if (user[5] === "刺客"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[6] === "莫德雷德" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是刺客"+"\r"+"隊友在"+拇指;
      }

      if (user[5] === "梅林"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客" || user[0] === "奧伯倫"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客" || user[1] === "奧伯倫"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客" || user[2] === "奧伯倫"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客" || user[3] === "奧伯倫"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客" || user[4] === "奧伯倫"){
          拇指.push("5號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客" || user[6] === "奧伯倫"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客" || user[7] === "奧伯倫"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客" || user[8] === "奧伯倫"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客" || user[9] === "奧伯倫"){
          拇指.push("10號")
        }
        text.innerHTML = "你是梅林"+"\r"+"拇指在"+拇指;
      }

      if (user[5] === "魔甘娜"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[6] === "莫德雷德" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是魔甘娜"+"\r"+"隊友在"+拇指;
      }

      if (user[5] === "莫德雷德"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是莫德雷德"+"\r"+"隊友在"+拇指;
      }

      if (user[5] === "奧伯倫"){
        text.innerHTML = "你是奧伯倫";
      }

      if (user[5] === "派西維爾"){
        var 拇指 = []
        if (user[0] === "梅林" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "梅林" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "梅林" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "梅林" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "梅林" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[6] === "梅林" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "梅林" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "梅林" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "梅林" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是派西維爾"+"\r"+"拇指在"+拇指;
      }
    }  

//================================================================================

    function set7() {
      var user = JSON.parse(localStorage.getItem("userInfo"))
      var text = document.getElementById("text");
      if (user[6] === "忠臣"){
        text.innerHTML = "你是忠臣";
      }
      if (user[6] === "刺客"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[7] === "莫德雷德" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是刺客"+"\r"+"隊友在"+拇指;
      }

      if (user[6] === "梅林"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客" || user[0] === "奧伯倫"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客" || user[1] === "奧伯倫"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客" || user[2] === "奧伯倫"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客" || user[3] === "奧伯倫"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客" || user[4] === "奧伯倫"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客" || user[5] === "奧伯倫"){
          拇指.push("6號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客" || user[7] === "奧伯倫"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客" || user[8] === "奧伯倫"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客" || user[9] === "奧伯倫"){
          拇指.push("10號")
        }
        text.innerHTML = "你是梅林"+"\r"+"拇指在"+拇指;
      }

      if (user[6] === "魔甘娜"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[7] === "莫德雷德" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是魔甘娜"+"\r"+"隊友在"+拇指;
      }

      if (user[6] === "莫德雷德"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是莫德雷德"+"\r"+"隊友在"+拇指;
      }

      if (user[6] === "奧伯倫"){
        text.innerHTML = "你是奧伯倫";
      }

      if (user[6] === "派西維爾"){
        var 拇指 = []
        if (user[0] === "梅林" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "梅林" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "梅林" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "梅林" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "梅林" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "梅林" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[7] === "梅林" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "梅林" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "梅林" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是派西維爾"+"\r"+"拇指在"+拇指;
      }
    }  

//================================================================================

    function set8() {
      var user = JSON.parse(localStorage.getItem("userInfo"))
      var text = document.getElementById("text");
      if (user[7] === "忠臣"){
        text.innerHTML = "你是忠臣";
      }
      if (user[7] === "刺客"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[8] === "莫德雷德" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是刺客"+"\r"+"隊友在"+拇指;
      }

      if (user[7] === "梅林"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客" || user[0] === "奧伯倫"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客" || user[1] === "奧伯倫"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客" || user[2] === "奧伯倫"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客" || user[3] === "奧伯倫"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客" || user[4] === "奧伯倫"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客" || user[5] === "奧伯倫"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客" || user[6] === "奧伯倫"){
          拇指.push("7號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客" || user[8] === "奧伯倫"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客" || user[9] === "奧伯倫"){
          拇指.push("10號")
        }
        text.innerHTML = "你是梅林"+"\r"+"拇指在"+拇指;
      }

      if (user[7] === "魔甘娜"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[8] === "莫德雷德" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "莫德雷德" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是魔甘娜"+"\r"+"隊友在"+拇指;
      }

      if (user[7] === "莫德雷德"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客"){
          拇指.push("9號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是莫德雷德"+"\r"+"隊友在"+拇指;
      }

      if (user[7] === "奧伯倫"){
        text.innerHTML = "你是奧伯倫";
      }

      if (user[7] === "派西維爾"){
        var 拇指 = []
        if (user[0] === "梅林" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "梅林" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "梅林" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "梅林" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "梅林" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "梅林" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "梅林" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[8] === "梅林" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        if (user[9] === "梅林" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是派西維爾"+"\r"+"拇指在"+拇指;
      }
    }  

//================================================================================

    function set9() {
      var user = JSON.parse(localStorage.getItem("userInfo"))
      var text = document.getElementById("text");
      if (user[8] === "忠臣"){
        text.innerHTML = "你是忠臣";
      }
      if (user[8] === "刺客"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[9] === "莫德雷德" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是刺客"+"\r"+"隊友在"+拇指;
      }

      if (user[8] === "梅林"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客" || user[0] === "奧伯倫"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客" || user[1] === "奧伯倫"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客" || user[2] === "奧伯倫"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客" || user[3] === "奧伯倫"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客" || user[4] === "奧伯倫"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客" || user[5] === "奧伯倫"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客" || user[6] === "奧伯倫"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客" || user[7] === "奧伯倫"){
          拇指.push("8號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客" || user[9] === "奧伯倫"){
          拇指.push("10號")
        }
        text.innerHTML = "你是梅林"+"\r"+"拇指在"+拇指;
      }

      if (user[8] === "魔甘娜"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[9] === "莫德雷德" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是魔甘娜"+"\r"+"隊友在"+拇指;
      }

      if (user[8] === "莫德雷德"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[9] === "魔甘娜" || user[9] === "刺客"){
          拇指.push("10號")
        }
        text.innerHTML = "你是莫德雷德"+"\r"+"隊友在"+拇指;
      }

      if (user[8] === "奧伯倫"){
        text.innerHTML = "你是奧伯倫";
      }

      if (user[8] === "派西維爾"){
        var 拇指 = []
        if (user[0] === "梅林" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "梅林" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "梅林" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "梅林" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "梅林" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "梅林" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "梅林" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "梅林" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[9] === "梅林" || user[9] === "魔甘娜"){
          拇指.push("10號")
        }
        text.innerHTML = "你是派西維爾"+"\r"+"拇指在"+拇指;
      }
    }  

//================================================================================

    function set10() {
      var user = JSON.parse(localStorage.getItem("userInfo"))
      var text = document.getElementById("text");
      if (user[9] === "忠臣"){
        text.innerHTML = "你是忠臣";
      }
      if (user[9] === "刺客"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        text.innerHTML = "你是刺客"+"\r"+"隊友在"+拇指;
      }

      if (user[9] === "梅林"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客" || user[0] === "奧伯倫"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客" || user[1] === "奧伯倫"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客" || user[2] === "奧伯倫"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客" || user[3] === "奧伯倫"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客" || user[4] === "奧伯倫"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客" || user[5] === "奧伯倫"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客" || user[6] === "奧伯倫"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客" || user[7] === "奧伯倫"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客" || user[8] === "奧伯倫"){
          拇指.push("9號")
        }
        text.innerHTML = "你是梅林"+"\r"+"拇指在"+拇指;
      }

      if (user[9] === "魔甘娜"){
        var 拇指 = []
        if (user[0] === "莫德雷德" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "莫德雷德" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "莫德雷德" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "莫德雷德" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "莫德雷德" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "莫德雷德" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "莫德雷德" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "莫德雷德" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "莫德雷德" || user[8] === "刺客"){
          拇指.push("9號")
        }
        text.innerHTML = "你是魔甘娜"+"\r"+"隊友在"+拇指;
      }

      if (user[9] === "莫德雷德"){
        var 拇指 = []
        if (user[0] === "魔甘娜" || user[0] === "刺客"){
          拇指.push("1號")
        }
        if (user[1] === "魔甘娜" || user[1] === "刺客"){
          拇指.push("2號")
        }
        if (user[2] === "魔甘娜" || user[2] === "刺客"){
          拇指.push("3號")
        }
        if (user[3] === "魔甘娜" || user[3] === "刺客"){
          拇指.push("4號")
        }
        if (user[4] === "魔甘娜" || user[4] === "刺客"){
          拇指.push("5號")
        }
        if (user[5] === "魔甘娜" || user[5] === "刺客"){
          拇指.push("6號")
        }
        if (user[6] === "魔甘娜" || user[6] === "刺客"){
          拇指.push("7號")
        }
        if (user[7] === "魔甘娜" || user[7] === "刺客"){
          拇指.push("8號")
        }
        if (user[8] === "魔甘娜" || user[8] === "刺客"){
          拇指.push("9號")
        }
        text.innerHTML = "你是莫德雷德"+"\r"+"隊友在"+拇指;
      }

      if (user[9] === "奧伯倫"){
        text.innerHTML = "你是奧伯倫";
      }

      if (user[9] === "派西維爾"){
        var 拇指 = []
        if (user[0] === "梅林" || user[0] === "魔甘娜"){
          拇指.push("1號")
        }
        if (user[1] === "梅林" || user[1] === "魔甘娜"){
          拇指.push("2號")
        }
        if (user[2] === "梅林" || user[2] === "魔甘娜"){
          拇指.push("3號")
        }
        if (user[3] === "梅林" || user[3] === "魔甘娜"){
          拇指.push("4號")
        }
        if (user[4] === "梅林" || user[4] === "魔甘娜"){
          拇指.push("5號")
        }
        if (user[5] === "梅林" || user[5] === "魔甘娜"){
          拇指.push("6號")
        }
        if (user[6] === "梅林" || user[6] === "魔甘娜"){
          拇指.push("7號")
        }
        if (user[7] === "梅林" || user[7] === "魔甘娜"){
          拇指.push("8號")
        }
        if (user[8] === "梅林" || user[8] === "魔甘娜"){
          拇指.push("9號")
        }
        text.innerHTML = "你是派西維爾"+"\r"+"拇指在"+拇指;
      }
    }  