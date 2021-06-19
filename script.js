document.addEventListener('DOMContentLoaded',() =>{
let isgameOver = false
function control(e){
   if(e.keyCode === 13){
    const dino = document.querySelector('.dino')
    dino.classList.add('animateDino');
    setTimeout(() => {
      dino.classList.remove('animateDino');
    },700);

   }

}
document.addEventListener('keyup',control)


function generateObstacles(){
   const images = ["cactus1.jpg","cactus2.jpg","cactus3.jpg"];
   const random = Math.floor(Math.random() * images.length);
   console.log(images[random])
   let randomTime = Math.random() * 4000
   
   let obstaclePosition = 200 
   const obstacle = document.createElement('div')
   if(!isgameOver){
   obstacle.classList.add('obstacle')
 }
   document.getElementById("gamecontainer").appendChild(obstacle);
   if(random === 0){
   obstacle.style.backgroundImage = ' url(" ' +
                                     images[random] +
                                     '")'; 
   obstacle.style.width ='10vw';
   obstacle.style.height ='20vh';
   obstacle.style.bottom = '-77vh';


   }
   if(random === 1){
   obstacle.style.backgroundImage = ' url(" ' +
                                     images[random] +
                                     '")'; 
   obstacle.style.width ='15vw';
   obstacle.style.height ='22vh';
   obstacle.style.bottom = '-78vh';


   }
   if(random === 2){
   obstacle.style.backgroundImage = ' url(" ' +
                                     images[random] +
                                     '")'; 
   obstacle.style.width ='15vw';
   obstacle.style.height ='20vh';
   obstacle.style.bottom = '-78vh';


   }

   obstacle.style.left = obstaclePosition + 'vh'
   
   let timerId = setInterval(function(){

   
  
 
   const height = document.querySelector('.obstacle')
   const dino = document.querySelector('.dino')
  
   dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
   oy= parseInt(window.getComputedStyle(height,null).getPropertyValue('top'));
   offsetY = Math.abs(dy-oy);
   if(obstaclePosition > 0 && obstaclePosition < 20 &&  offsetY < 72  ){
      const road = document.querySelector('#road')
      road.classList.remove('roadAni');
      gameover = document.querySelector('.gameover')
      gameover.style.visibility ='visible'
      isgameOver = true
      obstacle.remove()
      
      clearInterval(timerId)
     
     
   }
     
      obstaclePosition -= 4
      obstacle.style.left = obstaclePosition + 'vh'

},20)
   
 if(!isgameOver){
   if(randomTime < 800){
    randomTime = 1000
   setTimeout(generateObstacles , randomTime)
 }else{
  setTimeout(generateObstacles , randomTime)
 }
   
}
   
}


generateObstacles()
   

})


