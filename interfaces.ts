module interfaces {
  
  // sample interface demo
  interface Man {
    name: string;
    surname: string;
  }

  var greetingString: (dad: Man) => void;

  var myDad = {
    name: "Oleg",
    surname: "Ignatyev"
  }

  greetingString = (man) => {
    console.log (` Hi, ${man.name} ${man.surname}!`);
  }

  greetingString(myDad);

}