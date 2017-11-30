var canvas = document.getElementById('black-hole');
var btn = document.getElementById('into')
var cxt = canvas.getContext('2d');
var cWidth = document.documentElement.clientWidth;
var cHeight = document.documentElement.clientHeight;
canvas.style.width = cWidth + 'px';
canvas.style.height = cHeight + 'px';
canvas.setAttribute('width', cWidth);
canvas.setAttribute('height', cHeight);
var cs = 255;
var cw = cWidth / 2,
    ch = cHeight / 2;
var stars = [];
var collapse = false,
    expanse = false;
var Star = function () {
    this.x = cw;
    let h1 = Math.random() * (cs / 2) + 1;
    let h2 = Math.random() * (cs / 2) + cs;
    this.h = (h1 + h2) / 2
    this.y = ch + this.h;
    this.speed = (Math.floor(Math.random() * 1.5) + 0.5) * Math.PI / 180;
    this.rotation = Math.floor(Math.random() * 360 + 1) * Math.PI / 180;

    this.color = "rgba(255,255,255," + (1 - this.h / cs) + ")"
    this.id = stars.length;
    this.collapseBounce = (Math.random() * cs + 1) * 0.2
    stars.push(this)
}

Star.prototype.draw = function () {
    if (expanse == false) {
        this.rotation += this.speed;
        if (collapse == false) {
            if (this.y > ch + this.h) {
                this.y -= 2;
            }
            else if (this.y < ch + this.h - 4) {
                this.y += 2;
            }
        }
        else {
            if (this.y > ch + cs / 2 + this.collapseBounce) {
                this.y -= 2;
            }
            else if (this.y < ch + cs / 2 + this.collapseBounce - 4) {
                this.y += 2;
            }
        }
    } else {
        this.rotation += this.speed / 2;
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
}

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

btn.addEventListener('mouseover', function () {
    collapse = true;
})

btn.addEventListener('mouseout', function () {
    collapse = false;
})
btn.addEventListener('click', function () {
    collapse = false;
    expanse = true;
})
init();
