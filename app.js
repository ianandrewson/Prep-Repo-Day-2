const dog = {
    name: 'fido',
    color: 'brown',
    weight: '100'
};

dog.name = 'spot';

if (dog.name === 'fido'){
    console.log('who\'s a good boy');
} else {
    console.log('you\'re not my dog');
};

let dogName = function(dog) {
    console.log(dog.name);
};

dogName(dog);

let dogColor = dog => {
    console.log(dog.color);
};

dogColor(dog);

function showAlert() {
    alert('You clicked the button');
};

function logHello() {
    console.log('Hello world');
}