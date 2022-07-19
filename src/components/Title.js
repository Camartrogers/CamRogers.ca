import { useState, useEffect } from "react";
const finalText = "Cam Rogers";
const characters =
  "!#$%&'()-/:;<=>?@[]^_{}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function Title() {
  const [title, setTitle] = useState("");

  //Produce a random character
  function randomChar() {
    let n = Math.random() * characters.length;
    n = Math.floor(n);
    let char = characters[n];
    return char;
  }
  //Create array of random strings, final addition is finalText
  let strArray = [];
  for (let i = 0; i < 20; i++) {
    let str = "";
    for (let j = 0; j < finalText.length; j++) {
      str = str + randomChar();
    }
    strArray.push(str);
  }
  // Add Cam Rogers as final array
  strArray.push(finalText);

  let counter = 0;
  useEffect(() => {
    //function to change site title with random string array
    function updateTitle(array) {
      setTitle(array[counter]);
      counter++;
      if (counter === 21) {
        clearInterval(interval);
        counter = 0;
      }
    }
    //Set interval for passing through the random string array
    let interval = setInterval(() => {
      updateTitle(strArray);
    }, 120);
  }, []);

  return <span>{title}</span>;
}

export default Title;
