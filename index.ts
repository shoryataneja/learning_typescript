// // // class Car{
// // //     model: string = "Nano";
// // //     color: string = "Orange";
// // //     wheel: number = 4;
// // //     capacity: number = 10;
// // // }


// // // const car1 = new Car();

// // // console.log(car1);




// // class Car{
// //     model: string;
// //     color: string;
// //     wheel: number;
// //     capacity: number;

// //     constructor(model : string, color : string , wheel : number , capacity : number) {
// //         this.model = model;
// //         this.color = color;
// //         this.wheel = wheel;
// //         this.capacity = capacity;
// //     }

// //     accelerate(){
// //         console.log("Running....")
// //     }
// // }




// // console.log(car1);


// class Vehicle{

//     seatingCapacity : number;

//     constructor(seatingCapacity : number){
//             this.seatingCapacity = seatingCapacity;
//     }

//     accelerate(){
//         console.log("This car is runing")
//     }
// }

// class Toyota extends Vehicle {
//     sunroof : boolean;

//     constructor(sunroof : boolean , capacity : number){
//         super(capacity)
//         this.sunroof = sunroof
//     }
// }

// class Nano extends Vehicle {}

// const car1 = new Toyota(true,7);
// console.log(car1);

// car1.accelerate();


class Calculator{
    sum(a : number , b : number): number;
    sum(a : number , b:number , c : number ): number;
    sum(a : string , b:string): string;

    sum (a : number | string , b : number | string , c ?: number) {
        if (typeof a === "number" && typeof b === "number") {
            if (typeof c === "number"){
                return a + b + c
            }
            return a + b
        }
        return String(a) + String(b)
    }

}