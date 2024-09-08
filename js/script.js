// ***** ебля

const click = document.querySelector('.click');
let mammoth = document.querySelector('.click-img');
const score = document.querySelector('.score');

// ?стоимость улучшений
const doubleClickItem = document.querySelector('._double-click');
const passiveScoreItem = document.querySelector('._passive-score');
const plantItem = document.querySelector('._plant-mammoth');

// ?уровень прокачки улучшений
let passiveLvl = 0;
let doubleLvl = 0;
let plantLvl = 0;

const countClickText = document.querySelector('.count-click');

let scoreValue = 0;

let doubleClick = 1;
let passiveScore = 0;
// Количество кликов по мамонту
let countClick = 0;
let lvlUp = 30;
let lvl = 1;

let priceShopDoubleClick = 20;
let pricePassiveScore = 30;
let pricePlant = 100;

click.addEventListener('click', function() {
   scoreValue += doubleClick * lvl;
   score.textContent = scoreValue;
   // 
   countClick += 1;
   countClickText.textContent = countClick;
   if (countClick >= lvlUp) {
      lvlUp *= 3;
      lvl += 1;
      document.querySelector('.lvl-click').textContent = lvlUp;
      document.getElementById('lvl').textContent = lvl;
      if (lvl == 2) {
         mammoth.src = "img/lvl2.jpg";
      } else if (lvl == 3) {
         mammoth.src = "img/lvl3.jpg";
      } else if (lvl == 4) {
         mammoth.src = "img/lvl4.jpg";
      } else if (lvl == 5) {
         mammoth.src = "img/lvl5.jpg";
      } else if (lvl == 6) {
         mammoth.src = "img/lvl6.jpg";
      }
   }
});

// двойной клик
doubleClickItem.addEventListener('click', function() {
   if (scoreValue >= priceShopDoubleClick) {
      doubleLvl += 1;
      doubleClick += doubleLvl;
      scoreValue -= priceShopDoubleClick;
      score.textContent = scoreValue;
      priceShopDoubleClick *= 3;
      document.querySelector('._shop-two').textContent = priceShopDoubleClick;
      document.getElementById('double').textContent = doubleLvl;
      document.getElementById('pumping-click').textContent = doubleClick * lvl;
   }
});

// пассивный заработок
passiveScoreItem.addEventListener('click', function () {
   if (scoreValue >= pricePassiveScore) {
      passiveLvl += 1;
      passiveScore += passiveLvl * lvl;
      scoreValue -= pricePassiveScore;
      score.textContent = scoreValue;
      pricePassiveScore *= 3;
      document.querySelector('._shop-one').textContent = pricePassiveScore;
      document.getElementById('passive').textContent = passiveLvl;
      document.getElementById('pumping-passive').textContent = passiveScore * lvl;
   }
});

// растишка для мамонта
plantItem.addEventListener('click', function () {
   if (scoreValue >= pricePlant) {
      // !!! ЗДЕСЬ НУЖНО ДОДЕЛАТЬ ПРАВИЛНУЮ РАБОТУ ЭТОГО ВСЕГО
      plantLvl += 1;
      passiveScore *= plantLvl + lvl;
      scoreValue -= pricePlant;
      pricePlant *= 3;
      document.querySelector('._shop-three').textContent = pricePlant;
      document.getElementById('plant').textContent = plantLvl;
      document.getElementById('pumping-passive').textContent = passiveScore * lvl;
   }
});

setInterval (function () {
   scoreValue += passiveScore * lvl;
   score.textContent = scoreValue;
}, 1000);

// меню 
document.querySelector('.button-shop').addEventListener('click', function () {
   if(document.querySelector('.button-shop').classList.contains('_active')) {
      document.querySelector('.button-shop').classList.remove('_active')
      document.querySelector('.shop').classList.remove('_active')
   } else {
      document.querySelector('.button-shop').classList.add('_active')
      document.querySelector('.shop').classList.add('_active')
   }
});
