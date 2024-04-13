console.log("Hello, World!");

const button = document.querySelector("button")!;
button.addEventListener("click", () => {
  console.log("clicked");
});

function add(a: number, b: number) {
  if (a + b > 0) {
    return a + b;
  }
  return ;
}

