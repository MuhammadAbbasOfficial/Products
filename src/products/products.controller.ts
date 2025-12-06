import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {



    @Get()
    getAllProducts() {
        return [
            { id: 1, name: 'Product A', price: 100 },
            { id: 2, name: 'Product B', price: 150 },
        ];
    }


}
