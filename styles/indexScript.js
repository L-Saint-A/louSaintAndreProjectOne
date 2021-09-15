const buttonOne = document.querySelector('.findOut')

buttonOne.addEventListener('click', function(event) {
    event.preventDefault()
    const learnMore = document.querySelector('.learnMore')
    learnMore.innerHTML = `<p class="learnMore">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus alias dolore quisquam! Alias tempora libero dolorem laboriosam nostrum. Eius perspiciatis odit laudantium hic ducimus, quaerat quasi molestiae alias in exercitationem ex cumque rem rerum assumenda sapiente commodi asperiores ipsa praesentium omnis quo ullam necessitatibus. Dignissimos quaerat inventore animi ratione facilis. Lorem ipsum dolor sit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus alias dolore quisquam! Alias tempora libero dolorem laboriosam nostrum. Eius perspiciatis odit laudantium hic ducimus, quaerat quasi molestiae alias in exercitationem ex cumque rem rerum assumenda sapiente commodi asperiores ipsa praesentium omnis quo ullam necessitatibus. Dignissimos quaerat inventore animi ratione facilis. Lorem ipsum dolor sit?</p>`
});

const buttonTwo = document.querySelector('.buttonTwo')

buttonTwo.addEventListener('click', function(event){
    event.preventDefault()
    const planAhead = document.querySelector('.planAhead')
    planAhead.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aut totam explicabo nostrum quas. Eaque, illum atque. Eveniet deleniti dignissimos facere. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aut totam explicabo nostrum quas. Eaque, illum atque. Eveniet deleniti dignissimos facere. Lorem ipsum dolor sit amet.</p>`
});