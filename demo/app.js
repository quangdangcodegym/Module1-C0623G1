class Product{
    constructor(id, name, description, price,quantity, created){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.created = created;
        this.quantity = quantity;
    }
}
let KEY_PRODUCT = "products";
let products = [];


getProductFromStorage();

function getProductFromStorage(){
    if(localStorage.getItem(KEY_PRODUCT) == null){
        products = [
            new Product(1, "Iphone 11","a", 1000,10, new Date()),
            new Product(2, "Iphone 12","a", 2000,10, new Date()),
            new Product(3, "Iphone 13","a", 3000,10, new Date()),
        
        ];
        localStorage.setItem(KEY_PRODUCT, JSON.stringify(products));
    }else{
        let jsonProduct = localStorage.getItem(KEY_PRODUCT);
        products = JSON.parse(jsonProduct);
    }
}

function saveProductToStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

function renderData(products){
    let str = "";
    for(let i=0; i<products.length; i++){
        str += `
            <tr id=${products[i].id}>
                <td>${products[i].id}</td>
                <td>${products[i].name}</td>
                <td>${products[i].description}</td>
                <td>${products[i].price}</td>
                <td class="last-col">
                    <button class="btn btn-danger" onclick="handleDelete(${products[i].id})">Delete</button>
                    <button class="btn btn-success" onclick="handleShowFrmEdit(${products[i].id})">Edit</button>
                </td>
            </tr>
        `
    }
    document.getElementById("tb-body").innerHTML = str;
}

renderData(products);

function handleShowFrmEdit(id){
    let productEdit = null;
    productEdit = findProductById(id);

    document.getElementById("txtName").value = productEdit.name;
    document.getElementById("txtPrice").value = productEdit.price;
    document.getElementById("txtDescription").value = productEdit.description;
    document.getElementById("txtQuantity").value = productEdit.quantity;
    document.getElementById("txtId").value = productEdit.id;
    showBtnFromUpdateProduct();
}


function getProductFromForm(product){
    let name = document.getElementById("txtName").value;
    let description = document.getElementById("txtDescription").value;
    let price = document.getElementById("txtPrice").value;
    let quantity = document.getElementById("txtQuantity").value;
    product.price = price;
    product.name = name;
    product.description = description;
    product.quantity = quantity;
}

function resetFrmProduct(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtPrice").value = "";
    document.getElementById("txtDescription").value = "";
    document.getElementById("txtQuantity").value = "";
}
function showBtnFormAddProduct(){
    document.getElementById("btnAdd").classList.remove("hide");
    document.getElementById("btnUpdate").classList.add("hide");
    document.getElementById("btnCancel").classList.add("hide");
}
function showBtnFromUpdateProduct(){
    document.getElementById("btnAdd").classList.add("hide");
    document.getElementById("btnUpdate").classList.remove("hide");
    document.getElementById("btnCancel").classList.remove("hide");
}

function getMaxProductId(products){
    if(products.length == 0){
        return -1;
    }else{
        let maxProductId = products[0].id;
        for(let i = 0 ; i< products.length ;i++){
            if(products[i].id > maxProductId){
                maxProductId = products[i].id;
            }
        }
        return maxProductId;
    }
    
}

function findProductById(productId){
    let productEdit = null;
    for(var i=0; i<products.length; i++){
        if(products[i].id == productId){
            productEdit = products[i];
        }
    }
    return productEdit;
}


let btnUpdate = document.getElementById("btnUpdate");
btnUpdate.addEventListener("click", function(e){
    let name = document.getElementById("txtName").value;
    let description = document.getElementById("txtDescription").value;
    let price = document.getElementById("txtPrice").value;
    let quantity = document.getElementById("txtQuantity").value;
    let id = document.getElementById("txtId").value;

    for(let i=0;i<products.length;i++){
        if(products[i].id == id){
            products[i].name = name;
            products[i].description = description;
            products[i].price = price;
            products[i].quantity = quantity;
        }
    }
    saveProductToStorage(KEY_PRODUCT, products);
    renderData(products);
    showBtnFormAddProduct();
    resetFrmProduct();

});

let btnCancel = document.getElementById("btnCancel");
btnCancel.addEventListener("click", function(e){
    resetFrmProduct();
    showBtnFormAddProduct();
    
})

let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", function(e){
    let product = new Product();
    getProductFromForm(product)

    let max = getMaxProductId(products);
    product.id = max + 1;
    products.push(product);

    saveProductToStorage(KEY_PRODUCT, products);
    renderData(products);
    resetFrmProduct();
})

function handleDelete(id){
    let productDelete = findProductById(id);
    let check = confirm(`Bạn có muốn xóa sản phẩm ${productDelete.name}`);
    if(check){
        deleteProduct(id);  // products 3-> xoa 1 con 2
        saveProductToStorage(KEY_PRODUCT, products);
        renderData(products);
    }
}
function deleteProduct(id){
    for(let i=0; i<products.length; i++){
        if(products[i].id == id){
            products.splice(i, 1);
        }
    }
}
