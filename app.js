const allRanges = document.querySelectorAll(".range-wrap");
const ranges = document.querySelectorAll('input[type="range"]');
const sampleBox = document.querySelector(".sample");

allRanges.forEach((wrap) => {
  //get the input and bubble of each range wrap
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);

    sampleBox.style.borderRadius = `${ranges[0].value}% ${ranges[1].value}%${ranges[2].value}%${ranges[3].value}% / ${ranges[4].value}%${ranges[5].value}%${ranges[6].value}%${ranges[7].value}%`;

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
      //Get the text field
      let copyCss =
        `border-radius:` +
        (sampleBox.style.borderRadius = `${ranges[0].value}% ${ranges[1].value}%${ranges[2].value}%${ranges[3].value}% / ${ranges[4].value}%${ranges[5].value}%${ranges[6].value}%${ranges[7].value}%`) +
        ";";

      // Copy the Css
      document.execCommand("copy");

      setTimeout(() => {
        const copyAlert = document.querySelector(".copy-alert");
        copyAlert.style.visibility = "visible";
        copyAlert.innerText = `Css rule have been copied to the clipboard`;
        setTimeout(() => (copyAlert.style.visibility = "hidden"), 2000);
      }, 0);
    });
  });

  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
