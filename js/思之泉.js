


window.onload = function () {
    var script1=function(){
            var showcase = document.getElementById('showcase');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len = 3;
            var animated = false;
            var interval = 3000;
            var timer;
            var move=1099;

            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(list.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-move){
                            list.style.left = (-move) * len + 'px';
                        }
                        if(left<((-move) * len)) {
                            list.style.left = -move+'px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 3) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-move);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 3;
                }
                else {
                    index -= 1;
                }
                animate(move);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = (-move) * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            showcase.onmouseover = stop;
            showcase.onmouseout = play;

            play();







        }
        script1();

        var script2= function (){

    var _prev = document.getElementById('_prev');
    var _next = document.getElementById('_next');
    var designer_list=document.getElementById('designer_list');
    var name_list=document.getElementById('name_list');
    var animated = false;
    var name_move=216;
    var move=280;
    var name_initial=648;
    var initial=725;
    var len=3;
    var designers = designer_list.getElementsByTagName('img');
    var index=5;
    var scale=1.2;
    var initialW=parseFloat(designers[index-1].style.width);
    var initialH=parseFloat(designers[index-1].style.height);
    var goalW=initialW*scale;
    var goalH=initialH*scale;
    var flag1=false;
    var flag2=false;
    designers[index-1].style.width=goalW+ 'px';
    designers[index-1].style.height=goalH+ 'px';
//  第一个参数是图片每次移动的宽度  第二个参数是名字每次移动的宽度
    function animate (offset,name_offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                
                
                
                var time = 300;
                var inteval = 10;
                var speedW=(goalW-initialW)/(time/inteval);
                var speedH=(goalH-initialH)/(time/inteval);
                var name_speed= name_offset/(time/inteval);
                var speed = offset/(time/inteval);
                var name_left = parseFloat(name_list.style.left) + name_offset;
                var left = parseFloat(designer_list.style.left) + offset;
                var a=null;
                // 判断哪一张图处于放大状态
                for (var i = 0; i < designers.length; i++) {
                        if(parseFloat(designers[i].style.width)>180){
                            a=i;

                        

                        }
                    }

                var go = function (){
                    //判断是否移动到目标位置
                    if ( (speed > 0 && parseFloat(designer_list.style.left) < left) || (speed < 0 && parseFloat(designer_list.style.left) > left)
                         ) 
                        // 图片和名字进行移动
        {               name_list.style.left = parseFloat(name_list.style.left) + name_speed + 'px';
                        designer_list.style.left = parseFloat(designer_list.style.left) + speed + 'px';
                        // 将放大状态的图片缩小
                        designers[a].style.width=parseFloat(designers[a].style.width)-speedW+ 'px';
                        designers[a].style.height=parseFloat(designers[a].style.height)-speedH+ 'px';
                       //如果要进行重置  把最两侧的图片进行放大 替代真正图片显示宽高变大的动画效果
                    if (flag1||flag2) { 
                            if (flag1) {
                                designers[7].style.width=parseFloat(designers[7].style.width)+speedW+ 'px';
                            designers[7].style.height=parseFloat(designers[7].style.height)+speedH+ 'px';
                            }
                            if (flag2) {
                                designers[1].style.width=parseFloat(designers[1].style.width)+speedW+ 'px';
                            designers[1].style.height=parseFloat(designers[1].style.height)+speedH+ 'px';
                                
                            }
                        }
                   else {
                        //真正显示在正中央的图片进行放大
                        designers[index-1].style.width=parseFloat(designers[index-1].style.width)+speedW+ 'px';
                        designers[index-1].style.height=parseFloat(designers[index-1].style.height)+speedH+ 'px';
                        }
                        setTimeout(go, inteval);
        }else{
                    //移动完毕以后
                    // 把假装变大的图片变回原形 此举有两个好处 
                    // 一是防止左侧变大的图片占据多余的位置  二是使得每次移动结束后放大的图片只有一个
                        designer_list.style.left = left + 'px';
                        name_list.style.left = name_left+ 'px';
                       if (flag1) {
                            designers[7].style.width=initialW+ 'px';
                        designers[7].style.height=initialH+ 'px';
                        designers[index-1].style.width=goalW+ 'px';
                        designers[index-1].style.height=goalH+ 'px';
                        }
                        if (flag2) {
                            designers[1].style.width=initialW+ 'px';
                        designers[1].style.height=initialH+ 'px';
                        designers[index-1].style.width=goalW+ 'px';
                        designers[index-1].style.height=goalH+ 'px';
                            
                        }

                        //如果没移动到位  强行移动到目标位置
                        
                        //如果目标位置已经进行了一个轮回  将left重置为起始位置
                        if ((left<-initial-(move*2))|| (left>-initial+(move*2))) {
                            designer_list.style.left=-initial+'px';
                            name_list.style.left=-name_initial+'px';

                        }
                        
                        // 移动结束后 把标志重置的变量置为false
                        flag1=false;
                        flag2=false;

                       
                        animated = false;
                    }
                }
                go();
            }



            _next.onclick = function () {
                if (animated) {
                    return;
                }
                //如果处于临界点  将序号重置  重置标志置为true
                if (index == 7) {
                    index = 5;
                    flag1=true;
                }
                else {
                    index += 1;
                }
                
                animate(-move,-name_move);
                
            }
            _prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 3) {
                    index = 5;
                    flag2=true;
                }
                else {
                    index -= 1;
                }
               
                animate(move,name_move);
                
            }

        }
        script2();





    }