module functions {
  var hello: (name?: string) => void;

  hello = (name?: string) => {
    console.log(`Hello, ${name} !`);
  }

  hello("Nick");
}