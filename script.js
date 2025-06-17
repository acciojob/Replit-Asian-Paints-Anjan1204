document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  // Reset all grid item background colors
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  // Change color of selected grid
  const targetBlock = document.getElementById(blockId);
  if (targetBlock) {
    targetBlock.style.backgroundColor = color;
  } else {
    alert("Invalid Block ID. Please enter a number between 1 and 9.");
  }
});

// Reset button functionality
document.getElementById("Reset").addEventListener("click", function () {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  // Clear input fields
  document.getElementById("block_id").value = "";
  document.getElementById("colour_id").value = "";
});
