/*# STORY

Abdulkareem is a 35 year old man, that lives in Riyadh. He has a wife and 3 children. As a day job he's a construction worker, that makes houses. He likes to eat dates and smoke water pipe.

Abdulkareem has a horse, named Adel. The horse is 15 years old and has the color brown. Usually the horse eats grass or helps transport materials for Abdulkareem.

And they lived happily ever after!*/

class Person {
    constructor(name, location, age, maritalStatus, children, job, interests,) {
        this.name = name,
        this.location = location,
        this.age = age,
        this.maritalStatus = maritalStatus;
        this.children = children;
        this.job = job;
        this.interests = interests;
    }
}

class Horse {
    constructor(name, age, color, hobby) {
        this.name = name,
        this.age = age,
        this.color = color;
        this.hobby = hobby;
    }
}

const abdulkareem = Person('Abdulkareem', 35, 'Riyadh', 'married', '3 children', 'construction worker', ['dates', 'smoke water pipe'] );
const adel = Horse('Adel', 15, 'brown', ['eat grasses', 'transport materials']);
