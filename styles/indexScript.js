const buttonOne = document.querySelector('.findOut')

buttonOne.addEventListener('click', function(event) {
    event.preventDefault()
    const learnMore = document.querySelector('.learnMore').style.am
    learnMore.innerHTML = `<p class="learnMore">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus alias dolore quisquam! Alias tempora libero dolorem laboriosam nostrum. Eius perspiciatis odit laudantium hic ducimus, quaerat quasi molestiae alias in exercitationem ex cumque rem rerum assumenda sapiente commodi asperiores ipsa praesentium omnis quo ullam necessitatibus. Dignissimos quaerat inventore animi ratione facilis. Lorem ipsum dolor sit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus alias dolore quisquam! Alias tempora libero dolorem laboriosam nostrum. Eius perspiciatis odit laudantium hic ducimus, quaerat quasi molestiae alias in exercitationem ex cumque rem rerum assumenda sapiente commodi asperiores ipsa praesentium omnis quo ullam necessitatibus. Dignissimos quaerat inventore animi ratione facilis. Lorem ipsum dolor sit?</p>`
})