import _ from "lodash";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./product.model";

console.log(_.shuffle([5,6,7,8]));

// typescriptに対して、GLOBALという変数が存在することを宣言
declare var GLOBAL: string;
console.log(GLOBAL);

// Mockデータ
const products = [{title: "A", price: 1000}, {title: "B", price: 2000}];

// Mockデータをすべてパースする (ライブラリなし)
// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// });

// Mockデータをすべてパースする (ライブラリあり)
const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}

const newProd = new Product("", -123);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log(errors);
    } else {
        console.log(newProd.getInformation());
    }
});

