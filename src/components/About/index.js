import React from 'react';

function About() {
    return (
        <section className='my-3' id="about">
            <h2 id="about-header" className='text-dark bg-primary p-2 display-inline-block'>About Me</h2>
            <div className='about-container'>
                <img id="about-image" src={require(`../../assets/images/patrick.jpg`)} alt="Patrick Regan" />
                <p>I grew up in Louisiana so I have an instinctual love of cajun food. One of my favorites is boudin, pronounced "BOO-dan", a spicy pork, rice and vegtable mixture stuffed into a sausage casing. The links are easy to eat and great for breakfast or a late night snack. It's definately cajun comfort food and if you drive from Beaumont to New Orleans, every gas station in between will probably have great tasting boudin.</p>
                <p>I'm half Korean so I love Korean food too, especially Korean BBQ. The BBQ is great, but what I love most are the small side dishes of vegetables called Banchan. They come out at the start of the meal and give you something to munch on before the main course. Marinated cucumbers, bean sprouts, and seaweed salad are some examples and you eat them with steamed rice. There are many more types of banchan and each restaurant may serve something different depending on what vegetables are in season.</p>
                <p>I have been working in Information Technology for over 20 years. I have experience in several roles such as Developer, Database Administrator, Application Support and Management. Recently I started refreshing my skillset in Cloud Computing and Web Development. I have enjoyed learning about AWS, Azure, HTML, CSS, JavaScript, Node, Express, MySQL, Sequelize, MongoDB, Mongoose and React.</p>
                
            </div>
        </section>
    )
}

export default About;