var response = [{
    "ProductID" : 1,
    "ProductName" : "Chai",
    "SupplierID" : 1,
    "CategoryID" : 1,
    "QuantityPerUnit" : "10 boxes x 20 bags",
    "UnitPrice" : 18.0000,
    "UnitsInStock" : 39,
    "UnitsOnOrder" : 0,
    "ReorderLevel" : 10,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 1,
        "CategoryName" : "Beverages",
        "Description" : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID" : 2,
    "ProductName" : "Chang",
    "SupplierID" : 1,
    "CategoryID" : 1,
    "QuantityPerUnit" : "24 - 12 oz bottles",
    "UnitPrice" : 19.0000,
    "UnitsInStock" : 17,
    "UnitsOnOrder" : 40,
    "ReorderLevel" : 25,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 1,
        "CategoryName" : "Beverages",
        "Description" : "Soft drinks, coffees, teas, beers, and ales"
    }
}]

/*********tumahare api ke response ki jagah ye response check karo 'response' *******/


And Tumhare column comment karke Ye Column use karke dekho 

<Column field="ProductID" />
<Column field="ProductName" title="Product Name" />
<Column field="UnitPrice" title="Unit Price" />
