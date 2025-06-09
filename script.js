document.getElementById("change_button").addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  // Reset all blocks to transparent
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }

  // Change color of the selected block if valid
  if (blockId >= 1 && blockId <= 9) {
    document.getElementById(blockId).style.backgroundColor = color;
  } else {
    alert("Please enter a valid Block ID (1 to 9)");
  }
});

document.getElementById("Reset").addEventListener("click", () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }
});
