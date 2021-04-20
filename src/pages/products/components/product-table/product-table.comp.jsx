import React from 'react';
import ProductsCategoryRow from '../products-category-row/products-category-row.comp';
import ProductRow from '../product-row/product-row.comp';
import './product-table.style.css';
import ProductBaseball from '../product-baseball/product-baseball.comp';
import ProductBasketball from '../product-basketball/product-basketball.comp';

const ProductTable = () => {
    return (
        <div className="product-table-container">
            name price
            <ProductsCategoryRow/>
            <ProductRow/>
            <ProductBaseball/>
            <ProductBasketball/>
            

        
        </div>
    );
}

export default ProductTable;