let string = "";
let hist = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      string = eval(string);
      document.querySelector('input').value = string;
      hist = string;
    } else if (e.target.innerHTML === 'ans') {
      string += hist;
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'clr') {
      hist = hist;
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'del') {
      string = eval(string).toString().slice(0, -1);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === '√') {
      string += "Math.sqrt(";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === '±') {
      // Change sign
      string = (-1 * eval(string)).toString();
      document.querySelector('input').value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
