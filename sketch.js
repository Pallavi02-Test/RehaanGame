var wall1, wall2, wall3, wall4, maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8 , maze9, maze10, maze11, maze12, maze13,
    maze14, maze15, maze16, maze17, maze18, maze19, maze20, maze21, maze22, maze23, maze24, maze25, maze26, maze27, maze28, maze29,
    maze30, maze31, maze32, maze33, maze34, maze35, maze36, maze37, maze38, maze39, maze40, maze41, maze42;

function preload(){
    
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    wall1 = createSprite(100,400, 10, 550);
    wall1.shapeColor = "brown";

    wall2 = createSprite(748,125, 1300, 10);
    wall2.shapeColor = "brown";

    wall3 = createSprite(1395,400, 10, 550);
    wall3.shapeColor = "brown";

    wall4 = createSprite(748, 675, 1300, 10);
    wall4.shapeColor = "brown";

    maze1 = createSprite(200, 200, 10, 150);
    maze1.shapeColor = "brown";

    maze2 = createSprite(300, 300, 10, 150);
    maze2.shapeColor = "brown";

    maze3 = createSprite(400, 200, 10, 150);
    maze3.shapeColor = "brown";

    maze4 = createSprite(500, 300, 10, 150);
    maze4.shapeColor = "brown";

    maze5 = createSprite(348, 378, 500, 10);
    maze5.shapeColor = "brown";

    maze6 = createSprite(200, 450, 100, 10);
    maze6.shapeColor = "brown";

    maze7 = createSprite(152, 525, 10, 150);
    maze7.shapeColor = "brown";

    maze8 = createSprite(200, 600, 100, 10);
    maze8.shapeColor = "brown";

    maze9 = createSprite(300, 525, 10, 150);
    maze9.shapeColor = "brown";

    maze10 = createSprite(350, 540, 100 ,10);
    maze10.shapeColor = "brown";

    maze11 = createSprite(400, 525, 10, 150);
    maze11.shapeColor = "brown";

    maze12 = createSprite(500, 525, 10, 150);
    maze12.shapeColor = "brown";

    maze13 = createSprite(550, 452, 100, 10);
    maze13.shapeColor = "brown";

    maze14 = createSprite(550, 530, 100, 10);
    maze14.shapeColor = "brown";

    maze15 = createSprite(550, 598, 100, 10);
    maze15.shapeColor = "brown";

    maze16 = createSprite(680, 525, 10, 150);
    maze16.shapeColor = "brown";

    maze17 = createSprite(730, 452, 100 , 10);
    maze17.shapeColor = "brown";

    maze18 = createSprite(730, 530, 100, 10);
    maze18.shapeColor = "brown";

    maze19 = createSprite(730, 598, 100, 10);
    maze19.shapeColor = "brown";

    maze20 = createSprite(900, 450, 100, 10);
    maze20.shapeColor = "brown";

    maze21 = createSprite(850, 486, 10, 75);
    maze21.shapeColor = "brown";

    maze22 = createSprite(900, 522, 100, 10);
    maze22.shapeColor = "brown";

    maze23 = createSprite(948, 560, 10, 75);
    maze23.shapeColor = "brown";

    maze24 = createSprite(900, 598, 100, 10);
    maze24.shapeColor = "brown";

    maze25 = createSprite(1000, 525, 10, 150);
    maze25.shapeColor = "brown";

    maze26 = createSprite(1050, 452, 100 , 10);
    maze26.shapeColor = "brown";

    maze27 = createSprite(1050, 530, 100, 10);
    maze27.shapeColor = "brown";

    maze28 = createSprite(1050, 598, 100, 10);
    maze28.shapeColor = "brown";

    maze29 = createSprite(700, 200, 150, 10);
    maze29.shapeColor = "brown";

    maze30 = createSprite(700, 278, 10, 150);
    maze30.shapeColor = "brown";

    maze31 = createSprite(830, 278, 10, 150);
    maze31.shapeColor = "brown";

    maze32 = createSprite(880, 278, 100, 10);
    maze32.shapeColor = "brown";

    maze33 = createSprite(928, 278, 10, 150);
    maze33.shapeColor = "brown";

    maze34 = createSprite(1000, 278, 10, 150);
    maze34.shapeColor = "brown";

    maze35 = createSprite(1048, 205, 100, 10);
    maze35.shapeColor = "brown";

    maze36 = createSprite(1048, 278, 100, 10);
    maze36.shapeColor = "brown";

    maze37 = createSprite(1048, 354, 100, 10);
    maze37.shapeColor = "brown";

    maze38 = createSprite(1170, 278, 10, 150);
    maze38.shapeColor = "brown";

    maze39 = createSprite(1250, 278, 10, 150);
    maze39.shapeColor = "brown";

    maze40 = createSprite(1300, 205, 100, 10);
    maze40.shapeColor = "brown";

    maze41 = createSprite(1300, 278, 100, 10);
    maze41.shapeColor = "brown";

    maze42 = createSprite(1290, 500, 200, 10);
    maze42.shapeColor = "brown";

}
function draw(){
    background("#FFFACD");
    drawSprites();

}