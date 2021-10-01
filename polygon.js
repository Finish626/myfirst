class polygon{
    
    constructor(name ,num){
        this.name = name;
        this.num = num;
    }
    show(){
        document.write(this.name);
        document.write(this.num);
    }
    // perimeterCalculation();
    // areaCalculation();

}


function next(){
    document.write("yiq");
}


// //矩形形
// class rectangle extends polygon{
//     constructor(Length ,Bottom){
//         super();
//         this.Length = Length;
//         this.Bottom = Bottom;
//     }
//     perimeterCalculation(){
//         return (this.Length + this.Bottom)*2;
//     }
//     areaCalculation(){
//         return this.Length*this.Bottom;
//     }
// }

// //三角形
// class triangle extends polygon{
//     constructor(edge1,edge2,edge3){
//         super();
//         this.edge1 = edge1;
//         this.edge2 = edge2;
//         this.edge3 = edge3;
//         this.p = (edge1+edge2+edge3)/2;
//     }
//     perimeterCalculation(){
//         return (this.edge1 + this.edge2 + this.edge3);
//     }
//     areaCalculation(){
//         return Math.sqrt(this.p*(this.p-this.edge1)*(this.p-this.edge2)*(this.p-this.edge3));
//     }
// }

// //圆形
// class circular extends polygon{
//     constructor(R){
//         super();
//         this.R = R;
//     }
//     perimeterCalculation(){
//         return 2*3.14*this.R;
//     }
//     areaCalculation(){
//         return this.R*this.R;
//     }
// }
