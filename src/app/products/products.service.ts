import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private productsList: Product[];

    constructor() {
        this.productsList = [
            {
              id: 1,
              name: "Smartphone",
              description: "Latest model with high performance",
              price: 699.99,
              imageUrl:
                "https://images-cdn.ubuy.co.in/633a87dfd6b53a07f76e043c-ip12-pro-max-unlocked-smartphone-for.jpg",
            },
            {
              id: 2,
              name: "Laptop",
              description: "Lightweight and powerful",
              price: 999.99,
              imageUrl:
                "https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg",
            },
            {
              id: 3,
              name: "Headphones",
              description: "Noise-cancelling over-ear headphones",
              price: 199.99,
              imageUrl:
                "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363",
            },
            {
              id: 4,
              name: "Smartwatch",
              description: "Track your fitness and notifications",
              price: 249.99,
              imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskp7sz9kFzhNdR3sBQ1ZSy3vWzgHpwbyEeg&s",
            },
            {
              id: 5,
              name: "Tablet",
              description: "Portable and versatile",
              price: 499.99,
              imageUrl:
                "https://m.media-amazon.com/images/I/715Dsu2jxWL.jpg",
            },
            {
              id: 6,
              name: "Bluetooth Speaker",
              description: "High-quality sound on the go",
              price: 149.99,
              imageUrl:
                "https://x.imastudent.com/content/0024227_jbl-partybox-310-portable-bluetooth-speaker-with-party-lights_500.jpeg",
            },
          ];
    }

    getProducts(): Product[]{
        return this.productsList;
    }
}