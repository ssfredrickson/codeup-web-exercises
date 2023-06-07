(() =>{
"use strict"
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    const usersWithThree = users.filter((person) => person.languages.length >= 3)
    console.log(usersWithThree);

// ---------------------------------------

    const userEmail = users.map((person) => person.email)
    console.log(userEmail);

    // ---------------------------------------

    const totalExperience = users.reduce((total, person) => {
        return total + person.yearsOfExperience
    }, 0)

    let averageExperience = totalExperience / users.length
    console.log(`Average user experience is ${averageExperience} years`);


    // -----------------------------------------


    const longestEmail = users.reduce((tempEmail, person) => {
        console.log(person.name);
        if (person.email.length > tempEmail.length) {
            tempEmail = person.email
        }
            return (tempEmail)
    }, " ")
    console.log(longestEmail);

    // -----------------------------------------

    const instructors = users.reduce((count, person, i) => {
        if (i === users.length - 2) {
            return `${count + person.name}${' and '}`
        } else {
            return `${count + person.name}${', '}`
        }
    }, " ").slice(0, -2)


    console.log(`Your instructors are${instructors}`);

})()