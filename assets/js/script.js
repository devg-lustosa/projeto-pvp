let log = new Log(document.querySelector(".log"));

let char = new Knight("Bárbaro");
let monster = new LitteMonster();

const stage = new Stage(
  char,
  monster,
  document.querySelector("#char"),
  document.querySelector("#monster"),
  log
);

stage.start();


