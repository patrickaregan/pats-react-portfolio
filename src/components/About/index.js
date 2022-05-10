import React from 'react';

function About() {
    return (
        <section className='my-3' id="about">
            <h2 id="about-me-header" className='text-dark bg-primary p-2 display-inline-block'>About Me</h2>
            <div>
                <img id="about-me-image" src={require(`../../assets/images/patrick.jpg`)} alt="Patrick Regan" />
                <p>I grew up in Louisiana so I have an instinctual love for cajun food. One of my favorites is boudin, pronounced "BOO-dan", a spicy pork, rice and vegtable mixture stuffed into a sausage casing. The links are easy to eat and great for breakfast or a late night snack. It's definately cajun comfort food and every small town between Beaumont and New Orleans will have boudin.</p>
                <p>I'm half Korean so I naturally love Korean food, especially Korean BBQ. What I love most about Korean BBQ, besides the marinated meats grilled at the table, are the small side dishes of vegetables called Banchan. They come out at the start of the meal and give you something to munch on before the main course. Marinated cucumbers, bean sprouts, and seaweed salad are some examples and most people eat them with a bit of steamed rice that normally comes out with the banchan. There are many more types of banchan and each restaurant may be different depending on what vegetables are in season.</p>
            </div>
        </section>
    )
}

export default About;