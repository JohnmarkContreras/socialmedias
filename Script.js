const d = new Date("November 11, 18:40:00").getHours();
let timehour = d;


switch(true){
    case(timehour >= 0 && timehour <= 11):
    console.log("It is morning");
    break;
    case(timehour >= 12 && timehour <= 17):
    console.log("It is afternoon");
    break;
    default:
        console.log("It is night");
}
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
}
else{
    console.log("You are on the server")
}