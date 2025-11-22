const noteBlocks1 = document.querySelectorAll(".notes");

noteBlocks1.forEach((noteBlock) => {
  for (let i = 0; i < 8; i++) {
    const line = document.createElement("div");
    line.className = "note-line";
    noteBlock.appendChild(line);
  }
});

const backpageContainer = document.querySelectorAll(".backpage-container");
backpageContainer.forEach((container) => {
  for (let i = 0; i < 17; i++) {
    const div = document.createElement("div");
    div.className = "line";
    container.appendChild(div);
  }
});
