//原子构造函数
function DrawAtom(root, opt) {
    /*可以传入一个配置对象opt
    *pointColor为原子颜色
    *lineColor为线的颜色
    *pointNum为原子个数
    */
    let options = opt || {};
    this.dom = root;
    this.cDom = this.dom.getContext('2d');
    this.domHeight = root.height;
    this.domWidth = root.width;
    this.pointColor = options.pointColor || "#ECEEEF";
    this.lineColor = options.lineColor || "#F5EEFA";
    this.pointNum = options.num || 25;
    this.pointArr = [];
    this.nowColorIndex = 0;
    this.colorArr = ['#E0EEEE', '#ECEEEF', '#E8E8E8', '#E6E6FA', '#EED2EE', '#B0E2FF',
        '#A4D3EE', '#B0E2FF', '#EED2EE', '#E6E6FA', '#E8E8E8', '#ECEEEF',
    ]
}
//绑定鼠标移动事件，启动绘图
DrawAtom.prototype.run = function () {
    this.dom.addEventListener('mousemove', this.moveDraw.bind(this))
    this.dom.addEventListener('mouseout', this.moveoutDraw.bind(this))
    this.makePoint();
    setInterval(function () {
        this.pointColor = this.colorArr[this.nowColorIndex];
        this.lineColor = this.colorArr[this.nowColorIndex];
        if (this.nowColorIndex == this.colorArr.length) {
            this.nowColorIndex = 0;
        } else {
            this.nowColorIndex++;
        }
    }.bind(this), 2000)
}
//鼠标移动函数
DrawAtom.prototype.moveDraw = function (event) {
    event.stopPropagation();
    event.preventDefault();
    let obj = {};
    //-5为使原子中心位于光标中心
    obj.x = event.clientX - 5;
    obj.y = event.clientY - 5;
    obj.r = 5;
    //flag为判断原子是否为光标原子
    obj.flag = "move"
    if (this.pointArr[this.pointArr.length - 1].flag) {
        this.pointArr.pop()
    }
    this.pointArr.push(obj)
}
//鼠标移开函数
DrawAtom.prototype.moveoutDraw = function (event) {
    event.stopPropagation();
    event.preventDefault();
    this.pointArr.pop();
}
//根据num构造原子
DrawAtom.prototype.makePoint = function () {
    for (let i = 0; i < this.pointNum; i++) {
        let obj = {};
        obj.x = parseInt(Math.random() * this.domWidth);
        obj.y = parseInt(Math.random() * this.domHeight);
        obj.r = parseInt(Math.random() * 10) + 5;
        obj.directionX = Math.random() > 0.5 ? "left" : "right";
        obj.directionY = Math.random() > 0.5 ? "up" : "down";
        this.pointArr.push(obj);
    }
    this.drawPoint();
}
//处理原子位置坐标，和方向
DrawAtom.prototype.dealData = function () {
    let arr = [];
    this.pointArr.map((item, index) => {
        if (!item.flag) {
            if (item.directionX == "right") {
                item.x++;
            }
            else {
                item.x--;
            }
            if (item.directionY == "down") {
                item.y++;
            }
            else {
                item.y--;
            }
            if (item.x < item.r) {
                item.directionX = "right";
            }
            else if (item.x > (this.domWidth - item.r)) {
                item.directionX = "left";
            }
            if (item.y < item.r) {
                item.directionY = "down";
            }
            else if (item.y > (this.domHeight - item.r)) {
                item.directionY = "up";
            }
        }
        arr.push(item);
    })
    this.pointArr = arr;
    return arr
}
//画原子
DrawAtom.prototype.drawPoint = function () {
    let arr = this.dealData();
    this.drawLine(arr);
    arr.map((item, index) => {
        let { x, y, r } = item;
        this.cDom.beginPath();
        this.cDom.arc(x, y, r, 0, 2 * Math.PI);
        this.cDom.fillStyle = this.pointColor;
        this.cDom.fill();
        this.cDom.closePath();
    });
    setTimeout(() => (this.circulate()), 50);
}
//当原子间距离小于100时，画线
DrawAtom.prototype.drawLine = function (val) {
    let arr = val;
    arr.map((item1, index1) => {
        arr.map((item2, index2) => {
            if (item1 != item2) {
                let rangeX = Math.abs(item1.x - item2.x);
                let rangeY = Math.abs(item1.y - item2.y);
                if (rangeX < 200 && rangeY < 200) {
                    this.cDom.beginPath();
                    this.cDom.moveTo(item1.x, item1.y);
                    this.cDom.lineTo(item2.x, item2.y);
                    this.cDom.lineWidth = 1;
                    this.cDom.strokeStyle = this.lineColor;
                    this.cDom.stroke();
                    this.cDom.closePath();
                }
            }
        })
    })
}
//清除画布，重新渲染，动起来
DrawAtom.prototype.circulate = function () {
    this.cDom.clearRect(0, 0, this.domWidth, this.domHeight);
    this.drawPoint()
}

export default DrawAtom
// var atom = document.getElementById('atom');
// //铺满全屏
// var cheight = document.documentElement.clientHeight - 30;
// var cwidth = document.body.clientWidth - 10;
// atom.setAttribute('width', cwidth);
// atom.setAttribute('height', cheight);
// var obj = new DrawAtom(atom);
// obj.run()