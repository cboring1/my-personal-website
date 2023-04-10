const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const work = document.getElementById('Work experience')
work.addEventListener('click' , function() {
    alert('I was clicked');
})  /* working to add function to do dropdown on Work experience */
