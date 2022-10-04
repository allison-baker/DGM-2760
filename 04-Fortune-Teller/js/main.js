document.querySelector("#title").innerText = "Fortune Teller";
document.querySelector("#subtitle").innerText = "Switch Statements";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getMonthName(month) {
  let name;
  switch (month) {
    case 1:
      name = "January";
      break;
    case 2:
      name = "February";
      break;
    case 3:
      name = "March";
      break;
    case 4:
      name = "April";
      break;
    case 5:
      name = "May";
      break;
    case 6:
      name = "June";
      break;
    case 7:
      name = "July";
      break;
    case 8:
      name = "August";
      break;
    case 9:
      name = "September";
      break;
    case 10:
      name = "October";
      break;
    case 11:
      name = "November";
      break;
    case 12:
      name = "December";
      break;
    default:
      name = "Not a month";
      break;
  }

  return name;
}

function getFortune(fate) {
  let message;
  switch (fate) {
    case 1:
      message = "be featured in the news for an achievement you're very proud of.";
      break;
    case 2:
      message = "have a sudden breakthrough of financial success, through a promotion or winning the lottery!";
      break;
    case 3:
      message = "find the love you've been searching for and make a commitement to your soul mate.";
      break;
    case 4:
      message = "suffer a great tragedy and lose what you hold most dear to your heart.";
      break;
    case 5:
      message = "be stricken with a terrible and fatal illness, and your days on this Earth are now numbered.";
      break;
    default:
      message = "have no fortune.";
      break;
  }

  return message;
}

function tellFortune() {
  let monthNum = getRandomIntInclusive(1, 12);
  let fateNum = getRandomIntInclusive(1, 5);
  let day = getRandomIntInclusive(1, 30);

  const monthName = getMonthName(monthNum);
  const fateMessage = getFortune(fateNum);

  const fortuneRevealed = `On ${monthName} ${day}, you will ${fateMessage}`;
  document.querySelector("#fortune").innerText = fortuneRevealed;
}
