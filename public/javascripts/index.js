document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

const joke = document.querySelector("#joke");
const btn = document.querySelector("#btnJoke");

const getDadJoke = async () => {
    try {
        const headerConfig = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", headerConfig);
        return res.data.joke;
    }
    catch (e) {
        return "DadJoker is currently out of jokes. :("
    }
}

const generateDadJoke = async () => {
    const getJoke = await getDadJoke();
    joke.innerHTML = getJoke;
}

btn.addEventListener("click", generateDadJoke);