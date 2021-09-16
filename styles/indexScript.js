const buttonOne = document.querySelector('.findOut')

buttonOne.addEventListener('click', function(event) {
    event.preventDefault()
    const learnMore = document.querySelector('.learnMore')
    learnMore.innerHTML = `<p class="learnMore">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus alias dolore quisquam! Alias tempora libero dolorem laboriosam nostrum. Eius perspiciatis odit laudantium hic ducimus, quaerat quasi molestiae alias in exercitationem ex cumque rem rerum assumenda sapiente commodi asperiores ipsa praesentium omnis quo ullam necessitatibus. Dignissimos quaerat inventore animi ratione facilis. Lorem ipsum dolor sit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus alias dolore quisquam! Alias tempora libero dolorem laboriosam nostrum. Eius perspiciatis odit laudantium hic ducimus, quaerat quasi molestiae alias in exercitationem ex cumque rem rerum assumenda sapiente commodi asperiores ipsa praesentium omnis quo ullam necessitatibus. Dignissimos quaerat inventore animi ratione facilis. Lorem ipsum dolor sit?</p>`
});

const buttonTwo = document.querySelector('.buttonTwo');

buttonTwo.addEventListener('click', function(event){
    event.preventDefault();
    const planAhead = document.querySelector('.planAhead');
    const newP = ('YOU CANNOT READ MORE AT THIS TIME. MOVE ALONG');
    planAhead.replaceWith(newP);
});

const buttonThree = document.querySelector('.buttonThree');

buttonThree.addEventListener('click', function(event){
    event.preventDefault();
    const disclaimer = document.querySelector('.disclaimer');
    const newContain = document.createElement("h2");
    newContain.innerText = "***NOTHING IS FREE, ALWAYS READ THE FINE PRINT!***"
    disclaimer.appendChild(newContain)
});