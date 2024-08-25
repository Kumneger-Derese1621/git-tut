const room = document.getElementById('room');
const setBtn = document.getElementById('set');
const clearBtn = document.getElementById('clear');

const data = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae architecto ipsa nihil, beatae dolorem odit debitis quasi laborum reprehenderit fugiat, ratione, assumenda amet minus quo ipsam quaerat repellat sequi. Delectus!`;

setBtn.addEventListener('click', () => {
  room.textContent = data;
  clearBtn.style.background = 'orangered';
  setBtn.style.background = 'grey';
});

clearBtn.addEventListener('click', () => {
  room.textContent = '';
  clearBtn.style.background = 'grey';
  setBtn.style.background = 'orangered';
});
