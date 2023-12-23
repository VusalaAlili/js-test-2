const car ={
    speed:60,
    hours:3,
    distance: function(){
        console.log(this.speed * this.hours + "km");
    },
};
car.distance();