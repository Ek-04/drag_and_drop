const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage); // Add event listener for file input change

function uploadImage() {
    // Check if a file is selected
    if (inputFile.files && inputFile.files[0]) {
        // Create an image link
        let imgLink = URL.createObjectURL(inputFile.files[0]);
        
        // Set the background image of the image view element
        imageView.style.backgroundImage = `url(${imgLink})`;
        imageView.style.backgroundSize = "cover";
        imageView.style.backgroundPosition = "center";
        imageView.style.border = 0;
        
        // Clear any existing content in the image view element
        imageView.innerHTML = "";
    }
}
