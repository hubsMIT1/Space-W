var w1 = window.innerWidth;
var h1 = window.innerHeight;
// var forchk = document.querySelector('h1');
var end = document.querySelector(".end")
var btns = document.querySelector(".btns")
var btn = document.querySelector(".btn")
var score = document.querySelector(".score")
var highS = document.querySelector(".highS")

var bg1 = document.querySelector(".bg1")
var st = document.querySelector(".start")
var lvl = document.querySelector(".lvl")
var bnsPt = document.querySelector(".bnsPt")
    // bg1.style.height = h1 + 'px'
bg1.style.width = w1 + 'px'
st.style.margin = h1 / 2 + 'px'

function start() {
    // var can = document.querySelector('canvas');

    bg1.remove();
    st.remove();
    var can = document.createElement('canvas');
    c = can.getContext('2d');
    var bd = document.querySelector('body');
    bd.insertBefore(can, bd.childNodes[0])
    can.width = innerWidth;
    can.height = innerHeight - 10;

    var highscore = localStorage.getItem("scr");
    var highLevel = localStorage.getItem("lvl");

    // var image = new Image();
    // image.src = './spc42.png';

    class ship {
        constructor(x, y, img, width, height, image, speed) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.img = img;
            this.image = new Image();
            this.image.src = img;

        }
        draw() {

            // requestAnimationFrame(draw);
            c.drawImage(this.image, this.x, this.y, this.width, this.height)
                // this.x += 1;  



        }
        update() {
            this.draw();
            addEventListener("keydown", function(e) {
                    // spcship.key = e.keyCode



                    if (e.key == "ArrowLeft" && spcship.x > -20) {
                        spcship.x -= 0.03;
                    }
                    if (e.key == "ArrowUp" && spcship.y > h1 - h1 / 2 + 70) {
                        spcship.y -= 0.03;
                    }
                    if (e.key == "ArrowDown" && spcship.y < h1 - 60) {
                        spcship.y += 0.03;
                    }
                    if (e.key == "ArrowRight" && spcship.x < w1 - 70) {
                        spcship.x += 0.03;
                    }
                })
                // addEventListener("keyup", function(e) {
                //     if (e.key == "ArrowLeft" && spcship.x > -20) {
                //         spcship.x = false
                //     }
                //     if (e.key == "ArrowUp" && spcship.y > h1 - h1 / 2) {
                //         spcship.y = false;
                //     }
                //     if (e.key == "ArrowDown" && spcship.y < h1 - 160) {
                //         spcship.y = false;
                //     }
                //     if (e.key == "ArrowRight" && spcship.x < w1 - 70) {
                //         spcship.x = false;
                //     }

            // })


        }
    }




    // console.log(spcship.x, spcship.y)
    const spcship = new ship(30, h1 - h1 / 2.6, '/Space-W/spc42.png', 80, 80, "image")
        // spcship.draw();
        // window.onload = function anim() {
        //         spcship.draw();
        //         spcship.update();1
        //     }
        //     // anim();


    class bulImages {
        constructor(x, y, img, width, height, image, speed) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.img = img;
            this.image = new Image();
            this.image.src = img;

            this.speed = speed //(Math.random() * 2) + 4;
        }
        draw() {

            // requestAnimationFrame(draw);
            c.drawImage(this.image, this.x, this.y, this.width, this.height)

        }

        update() {
            this.draw();
            this.x += 50; //this.speed //this.x + this.speed;
        }
    }

    const bullets = [];

    class alnImages {
        constructor(x, y, img, width, height, image, speed) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.img = img;
            this.image = new Image();
            this.image.src = img;

            this.speed = 3 //(Math.random() * 2) + 4;
        }
        draw() {

            // requestAnimationFrame(draw);
            c.drawImage(this.image, this.x, this.y, this.width, this.height)

        }

        update() {
            this.draw();
            this.x -= this.speed + level / 1.5 //this.x + this.speed;
                // console.log(level)

        }
    }
    alnPic = [];
    // var t = 2000 - 10 * level

    function aliens() {

        setInterval(() => {

            var alnArr = ['/Space-W/aln11.png', '/Space-W/aln22.png', '/Space-W/alien.png'];
            let n = Math.floor((Math.random() * 3));
            var alnImgs = alnArr[n];
            h2 = h1 - 10
            h3 = h2 - h2 / 2.6 - 165;
            h = (Math.floor(Math.random() * (h3 - 40)) + 40)
            alnW = (Math.floor(Math.random() * (61 - 35)) + 35)
                // var x;
                // var speed = {
                //     x: -3
                // }
            alnPic.push(new alnImages(w1, h2 - h, alnImgs, alnW, alnW, "image"));
            // console.log(h1, h3, h, h2 - h, alnW)
        }, 1200)
    }
    aliens();


    class firePic {
        constructor(x, y, img, width, height, image, speed) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.img = img;
            this.image = new Image();
            this.image.src = img;

            this.speed = speed //(Math.random() * 2) + 4;
            this.alpha = 1;
        }
        draw() {
            c.save();
            c.globalAlpha = this.alpha;
            // requestAnimationFrame(draw);
            c.drawImage(this.image, this.x, this.y, this.width, this.height)
            c.restore();
        }

        update() {
            this.draw();
            this.x += (Math.random() * 20) - 10;
            this.y += (Math.random() * 16) - 8;
            this.alpha -= 0.3;
            // this.x += 50; //this.speed //this.x + this.speed;
        }
    }
    // const fire = new firePic(10, 10, './fire11.png', 80, 80, "image")
    // const fire = new firePic(20, 20, './fire11.png', 100, 100, "image")
    fires = [];


    class Score {
        constructor(x, y, color, width, height, text) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            // this.img = img;
            // this.image = new Image();
            // this.image.src = img;
            // this.text = text;
            this.color = color
                // this.speed = speed //(Math.random() * 2) + 4;

        }
        draw() {
            c.font = '30px serif'
            c.font = this.width + " " + this.height;
            c.fillStyle = this.color;
            c.fillText(this.text, this.x, this.y);
            // requestAnimationFrame(draw);
            // c.drawImage(this.image, this.x, this.y, this.width, this.height)

        }

        update() {
            this.draw();
            // scr += level * 3

            // this.x += 50; //this.speed //this.x + this.speed;
        }
    }
    var scr = 0;
    var score = new Score(w1 - 200, 40, "white", "30px", "Consolas", "text");


    alnSpeed = 0
    class Lavels {
        constructor(x, y, color, width, height, text) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            // this.img = img;
            // this.image = new Image();
            // this.image.src = img;
            // this.text = text;
            this.color = color
            this.alpha = 1;
            // this.speed = speed //(Math.random() * 2) + 4;

        }
        draw() {
            c.save();
            c.globalAlpha = this.alpha;
            c.font = '30px serif'
            c.font = this.width + " " + this.height;
            c.fillStyle = this.color;
            c.fillText(this.text, this.x, this.y);
            c.restore();
            // requestAnimationFrame(draw);
            // c.drawImage(this.image, this.x, this.y, this.width, this.height)

        }

        update() {
            this.draw();
            this.alpha -= 0.05

            // this.x += 50; //this.speed //this.x + this.speed;
        }
    }
    var level = 0;
    var lvls = [];
    addEventListener("keydown", function(e) {
            if (e.key == " ") {
                // const bullet = new bulImages(30 + 70, h1 - h1 / 2.3 + 27, './bul13.png', 60, 20, "image")
                bullets.push(new bulImages(spcship.x + 70, spcship.y + 27, '/Space-W/bul13.png', 60, 20, "image"));

                // console.log(bullets);
            }
        })
        // window.onload = 






    var interval = setInterval(anim2, 1000 / 30);

    function anim2() {

        // bullet.update();
        c.clearRect(0, 0, can.width, can.height);
        spcship.draw();
        spcship.update();
        score.text = "Score : " + scr;
        score.update();

        lvls.forEach((Lavels, lvlINdex) => {
            // k = lvlINdex;

            if (Lavels.alpha <= 0) {
                lvls.splice(lvlINdex, 1);

                // k++;


            } else {
                // console.log(k)
                Lavels.text = "LEVEL : " + level;
                Lavels.text = "LEVEL : " + level + " \n" + " YOU GOT " + (level * 5) + " BONUS POINTS";
                Lavels.update();

            }
            // level++;
        })
        bullets.forEach((bulImages) => {


            bulImages.update();
        })
        fires.forEach((firePic, frIndex) => {
                if (firePic.alpha <= 0) {
                    fires.splice(frIndex, 1);
                } else {
                    firePic.update();
                }
            })
            // let d1 = Math.abs(spcship.x - alnImages.x);
            // let d2 = Math.abs(spcship.y - alnImages.y);
            // console.log(alnImages.x)
            // if (alnImages.x < 0) //&& d2 - spcship.height < 1) || (d1 - spcship.width < 1 && (d2 - alnImages.height < 5 && d2 - alnImages.height > -10))) {
            // {
            //     // clearInterval(interval)
            //     console.log(1)
            // }

        alnPic.forEach((alnImages, alnIndex) => {
                alnImages.update();

                // console.log(score.text)
                let d1 = Math.abs(spcship.x - alnImages.x);
                let d2 = alnImages.y - spcship.y;

                // if ((d1 - spcship.width < -20 && d2 - spcship.height < -10) || (d1 - spcship.width < -20 && (d2 - alnImages.height < -10 && d2 - alnImages.height < -20))) {



                //     clearInterval(interval)
                //     console.log(1)
                // }



                if ((d1 - spcship.width < -20 && (d2 > 9 && d2 < 45)) || (d1 - spcship.width < -70 && ((d2 < 10 && d2 > -40) || (d2 > 45 && d2 < 80)))) {
                    clearInterval(interval)
                    can.style.visibility = 'hidden'
                    end.style.visibility = 'visible';
                    end.style.position = 'absolute';
                    end.style.top = h1 / 4 + 'px'
                    end.style.left = w1 / 3 + "px"
                    end.style.width = w1 / 3 + 'px'
                    bd.style.height = h1 + 'px'
                        // bd.style.background = 'linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)'
                        // bd.style.backgroundRepeat = 'no-repeat'
                        // bd.style.animation = 'gradient 16s linear infinte'
                    bd.classList.add('anim');

                    // console.log(d2)
                }
                bullets.forEach((bulImages, bulIndex) => {
                    let d1 = Math.abs(bulImages.x - alnImages.x);
                    let d2 = Math.abs(bulImages.y - alnImages.y);
                    // let d2 = alnImages.y - bulImages.y;
                    // console.log(d2 - bulImages.height)
                    // console.log(d1 - bulImages.width)
                    // if (d2 > 0) { (d2 - bulImages.y < 1 || d2 - bulImages.y > -5))
                    if ((d1 - bulImages.width < 1 && d2 - bulImages.height < 1) || (d1 - bulImages.width < 1 && (d2 - alnImages.height < 5 && d2 - alnImages.height > -10))) {
                        // console.log(d1 - bulImages.width - alnImages.width, d2 - bulImages.width )
                        for (var i = 1; i <= 50; i++) {
                            fw = (Math.floor(Math.random() * (16 - 8)) + 8)
                            fires.push(new firePic(alnImages.x, alnImages.y, '/Space-W/fr66.png', fw, fw, "image"))
                        }


                        if (alnImages.width - 45 > 6) {
                            alnImages.width -= 6;
                            alnImages.height -= 6;


                            setTimeout(() => {
                                // alnPic.splice(alnIndex, 1);
                                bullets.splice(bulIndex, 1)

                                // fires.push(new firePic(alnImages.x, alnImages.y, './fr2.jpg', 1000, 1000, "image"))
                                // firePic.x = bulImages.x;
                                // firePic.y = bulImages.y;
                                // fire.update()
                            }, 0)
                        } else {
                            setTimeout(() => {

                                alnPic.splice(alnIndex, 1);

                                bullets.splice(bulIndex, 1);
                                // fire.update();
                            }, 0)
                        }
                        scr++;

                        // }, 1000);


                        // getscore(scr);
                    }




                })
                if (scr % 20 == 0 && scr > 0) {

                    // setTimeout(() => {
                    lvls.push(new Lavels(w1 / 3, h1 / 3, "red", 300, 300, "text"))
                        // var lvls = new Lavels(w1 / 2, 40, "red", 100, 100, "text")
                        // setInterval(() => {

                    level = scr / 20;





                }
                // for (var i = 1; i <= level; i++) {
                //     scr += i + scr;
                // }

                // if (level >= 1) {
                //     alnImages.x += -4;
                //     console.log(alnImages.x)
                // }

                // lvls.forEach((Lavels, lvlINdex) => {


                // if (Lavels.alpha <= 0) {
                //     lvls.splice(lvlINdex, 1);

                // } else {


                // }
                // level++;
                // })

                if (scr + level * 5 >= highscore) {

                    highscore = scr + level * 5;

                }
                localStorage.setItem("scr", highscore);


                if (level > highLevel) {
                    highLevel = level;
                }
                localStorage.setItem("lvl", highLevel);



                // }
                bnsPt.innerHTML = " BONUS POINTS : " + (level * 5);

                lvl.innerHTML = "MAX LEVEL : " + highLevel;

                document.querySelector('.score').innerHTML = "Your Score : " + scr;
                document.querySelector('.highS').innerHTML = " Best Score : " + highscore;

            })
            // console.log(spcship.y)
    }

}
window.addEventListener("resize", function() {
    can.width = innerWidth
    can.height = innerHeight
})
