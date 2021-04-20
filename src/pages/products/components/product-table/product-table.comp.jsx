import React from 'react';
import ProductsCategoryRow from '../products-category-row/products-category-row.comp';
import ProductRow from '../product-row/product-row.comp';
import './product-table.style.css';
import ProductBaseball from '../product-baseball/product-baseball.comp';
import ProductBasketball from '../product-basketball/product-basketball.comp';
import ProductElectronics from '../product-electronics/product-electronics.comp';
import ProductIPod from '../product-iPod/product-iPod.comp';
import ProductIphone from '../product-iphone/product-iphone.comp';
import ProductNexus from '../product-nexus/product-nexus.comp';

const ProductTable = () => {
    return (
        <div className="product-table-container">
                 Name  Price
            <ProductsCategoryRow/>
            <ProductRow/>
            <ProductBaseball/>
            <ProductBasketball/>
            <ProductElectronics/>
            <ProductIPod/>
            <ProductIphone/>
            <ProductNexus/>
            

        
        </div>
    );
}

export default ProductTable;