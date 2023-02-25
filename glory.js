var  glory= "I am a boy";
console.log(glory);



var school = {
        name: "UNILAG",
        lecturersNumber: 105,
        location: "Yaba, Lagos.",
        honour: "Best in Nigeria",
        address: {
                streetName: "Oyegunwa",
                streetNunber: 24,
                apartment: "block c4"
        }
};

console.log(JSON.stringify(school));
console.log(school.name);
console.log(school.address.apartment) 

function openNav() {
        document.getElementById("nav").style.width = "100%";
        document.getElementById("content-4").style.opacity = "0"
}

function closeNav() {
        document.getElementById("nav").style.width = "0";
        document.getElementById("content-4").style.opacity = "1"
}