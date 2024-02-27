const tagOptions = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"];

const optionsContainer = document.querySelector(".options");

const outputContainer = document.querySelector(".output");

const tagsSelect = document.getElementById("tags");

const paragraphSlider = document.getElementById("paragraphs");

const wordSlider = document.getElementById("words");

const paragraphsValue = document.getElementById("paragraphs-value");

const wordsValue = document.getElementById("words-value");



// Create Options UI
function createOptionsUI () {

    tagOptions.forEach((tag) => {
        const option = document.createElement("option");

        option.value = tag;
        option.textContent = `<${tag}>`;
        tagsSelect.appendChild(option);
    });


    // Event Listeners for sliders
    paragraphSlider.addEventListener("input", updateParagraphsValue);

    wordSlider.addEventListener("input", updateWordsValue);

    const generateButton = document.getElementById("generate");

    generateButton.addEventListener("click", generateLoremIpsum);
}

// To Update displayed value for paragraphs

function updateParagraphsValue() {
    paragraphsValue.textContent = paragraphSlider.value;
}

//words per paragraph have to be updated on the display

function updateWordsValue() {
    wordsValue.textContent = wordSlider.value;
}

//To Generate the Lorem Ipsum Text
function generateLoremIpsum() {
    const paragraphs = parseInt(paragraphSlider.value);

    const tag = document.getElementById("tags").value;

    const includeHtml = document.getElementById("include").value;

    const wordsPerParagraph = parseInt(wordSlider.value);

    const loremIpsumText = generateText(paragraphs, tag, includeHtml, wordsPerParagraph);

    displayLoremIpsum(loremIpsumText);
}

function generateText(paragraphs, tag, includeHtml, wordsPerParagraph) {

    //An example for illustration
    const placeholderText = `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

    //create an array of paragraphs
    const loremIpsumArray = new Array(paragraphs).fill("");

    //to generate words for each paragraph
    for (let i = 0; i < paragraphs; i++) {
        const words = generateWords(wordsPerParagraph);

        loremIpsumArray[i] = includeHtml === "Yes"? `<${tag}>${words}</${tag}>`: words;
    }

    //join paragraphs into a single string
    return loremIpsumArray.join("\n");  

}

//function to create a specified number of words
function generateWords(numWords) {

    //Lorem Ipsum text for demonstration
    const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur  
    adipiscing elit, sed do eiusmod tempor  
    incididunt ut labore et dolore magna  
    aliqua. Diam in arcu cursus euismod  
    quis viverra nibh. Nunc aliquet bibendum 
    enim facilisis gravida neque convallis  
    a cras. Sagittis purus sit amet volutpat 
    Consequat mauris. Duis ultricies lacus  
    sed turpis tincidunt id. Consequat interdum 
    varius sit amet mattis vulputate. Enim sed 
    faucibus turpis in eu. Ridiculus mus mauris 
    vitae ultricies leo integer malesuada nunc vel. 
    Nulla pharetra diam sit amet nisl suscipit. 
    Lobortis elementum nibh tellus molestie nunc 
    non blandit massa enim. Dis parturient montes 
    nascetur ridiculus mus. Justo nec ultrices dui 
    sapien eget. Enim tortor at auctor urna nunc. 
    Dictumst quisque sagittis purus sit amet volutpat 
    consequat mauris nunc.`;

    //to split the lorem ipsum into words
    const words = loremIpsumText.split(" ");

    //to ensure the number of words requested is within the bounds of the available words

    if (numWords <= words.length) {
        return words.slice(0, numWords).join(" ");
    } else {
        return words.join(" ");
    }
}

// to display the lorem ipsum text
function displayLoremIpsum(text) {
    outputContainer.innerHTML = text;
}

//Initialize the app

createOptionsUI();