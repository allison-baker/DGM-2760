document.querySelector("#title").innerText = "Nonsense Story";
document.querySelector("#subtitle").innerText = "String Manipulation";

function tellStory() {
  nounArray = document.querySelector("#nouns").value.toLowerCase().split(/\s+/);
  adjArray = document.querySelector("#adjectives").value.toLowerCase().split(/\s+/);
  verbArray = document.querySelector("#verbs").value.toLowerCase().split(/\s+/);

  const myStory = `Once upon a time, there was a <span>${nounArray[0]}</span> named Bertholdt. He was a <span>${adjArray[0]}</span> guy with a
  <span>${adjArray[1]}</span> <span>${nounArray[1]}</span>. One day, he wanted to <span>${verbArray[0]}</span> to his <span>${nounArray[2]}</span> so he could have some
  relaxing time to himself. Instead, he saw that a <span>${adjArray[2]}</span> villian used their <span>${nounArray[3]}</span> to steal his
  <span>${nounArray[4]}</span>! He went home to <span>${verbArray[1]}</span>. But luckily, in his <span>${nounArray[5]}</span>, Bertholdt found a <span>${nounArray[6]}</span>.
  He could use it to <span>${verbArray[2]}</span>, so the day ended up okay.`;

  document.querySelector("#story").innerHTML = myStory;
}
