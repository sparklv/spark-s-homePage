<template>
  <section>
    <div id="into" v-if="!isClick" @click="firstClick()">
      <div>
        <i class="iconfont icon-dianji"></i>
      </div>
    </div>
    <div id="into2" v-else @click="secondClick()">
      <div>
        <span style="font-size:40px;color:#ccc">Entry HomePage</span>
      </div>
    </div>
    <canvas id="black-hole"></canvas>
  </section>
</template>

<script>
export default {
  name: "welcomePage",
  data() {
    return {
      isClick: false
    };
  },
  mounted() {
    var canvas = document.getElementById("black-hole");
    var btn = document.getElementById("into");
    var cxt = canvas.getContext("2d");
    var cWidth = document.documentElement.clientWidth;
    var cHeight = document.documentElement.clientHeight - 5;
    canvas.style.width = cWidth + "px";
    canvas.style.height = cHeight + "px";
    canvas.setAttribute("width", cWidth);
    canvas.setAttribute("height", cHeight);
    var cs = 255;
    var cw = cWidth / 2,
      ch = cHeight / 2;
    var stars = [];
    var collapse = false,
      expanse = false;
    var Star = function() {
      this.x = cw;
      let h1 = Math.random() * (cs / 2) + 1;
      let h2 = Math.random() * (cs / 2) + cs;
      this.h = (h1 + h2) / 2;
      this.y = ch + this.h;
      this.speed = (Math.floor(Math.random() * 1.5) + 0.5) * Math.PI / 180;
      this.rotation = Math.floor(Math.random() * 360 + 1) * Math.PI / 180;

      this.color = "rgba(255,255,255," + (1 - this.h / cs) + ")";
      this.id = stars.length;
      this.collapseBounce = (Math.random() * cs + 1) * 0.2;
      stars.push(this);
    };

    Star.prototype.draw = function() {
      if (expanse == false) {
        this.rotation += this.speed;
        if (collapse == false) {
          if (this.y > ch + this.h) {
            this.y -= 2;
          } else if (this.y < ch + this.h - 4) {
            this.y += 2;
          }
        } else {
          if (this.y > ch + cs / 2 + this.collapseBounce) {
            this.y -= 2;
          } else if (this.y < ch + cs / 2 + this.collapseBounce - 4) {
            this.y += 2;
          }
        }
      } else {
        this.rotation += this.speed / 4;
        if (this.y > ch - (this.id % 100) * 10) {
          this.y -= 4;
        }
      }
      cxt.save();
      cxt.fillStyle = this.color;
      cxt.translate(cw, ch);
      cxt.rotate(this.rotation);
      cxt.translate(-cw, -ch);
      cxt.fillRect(this.x, this.y, 1, 1);
      cxt.fill();
      cxt.restore();
    };

    function loop() {
      cxt.fillStyle = "rgba(25,25,25,0.1)";
      cxt.fillRect(0, 0, cWidth, cHeight);
      for (let i = 0; i < stars.length; i++) {
        stars[i].draw();
      }
    }

    function init() {
      cxt.fillStyle = "rgba(25,25,25,1)";
      cxt.fillRect(0, 0, cWidth, cHeight);
      for (let i = 0; i < 999; i++) {
        new Star();
      }
      setInterval(loop, 10);
    }

    btn.addEventListener("mouseover", function() {
      collapse = true;
    });

    btn.addEventListener("mouseout", function() {
      collapse = false;
    });
    btn.addEventListener("click", function() {
      collapse = false;
      expanse = true;
    });
    init();
  },
  methods: {
    firstClick() {
      this.isClick = true;
    },
    secondClick() {
      this.$router.push("/Intro");
    }
  }
};
</script>


<style scoped lang="scss">
section {
  background-color: #000;
  overflow: hidden;
}
canvas {
  position: relative;
  padding: 0;
  margin: 0;
}
@keyframes scaleshow {
  from {
    transform: scale(1, 1) translateY(-40px);
  }
  to {
    transform: scale(1.3, 1.3) translateY(-40px);
  }
}
.icon-dianji {
  font-size: 80px;
  margin-top: 50%;
  color: #ccc;
}
#into {
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  background-color: #fff;
  z-index: 1;
  margin-top: -100px;
  margin-left: -100px;
  background-color: #333;
  div {
    margin-top: 50%;
    animation: scaleshow 2s infinite linear alternate;
  }
  div:hover {
    margin-top: 50%;
    transform: translateY(-40px);
    animation: none;
  }
}
@keyframes slowshow {
  0% {
    opacity: 0;
    filter: alpha(opacity=0);
  }
  50% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  100% {
    opacity: 0.8;
    filter: alpha(opacity=50);
  }
}
#into2 {
  @extend #into;
  opacity: 0;
  filter: alpha(opacity=0);
  animation: slowshow 2s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  background: transparent;
  overflow: visible;
}
</style>
