let productList = [];

function addNewProduct() {
    let productName = document.getElementById('inputProduct').value;
    if (productName != '' && productName != ' ') {
        productList.push(productName);
        document.getElementById('inputProduct').value = '';
        displayProduct(productList);
        console.log(productList);
    }
}

function displayProduct(data) {
    let tbProduct = '';
    for (var i = 0; i < data.length; i++) {
        tbProduct +=
            `<tr>
                <td id='${data[i]}' class="tbName">${data[i]}</td>
                <td>
                    <button onclick="editProduct('${data[i]}')">Edit</button>
                </td>
                <td>
                    <button onclick="deleteProduct('${data[i]}')">Delete</button>
                </td>
            </tr>`
    }
    document.getElementById('tb_product').innerHTML = tbProduct;
}

function deleteProduct(product_name) {
    let newProductList = [];
    for (let x = 0; x < productList.length; x++) {
        if (productList[x] != product_name) {
            newProductList.push(productList[x]);
        }
    }
    productList = newProductList;
    displayProduct(productList);
}

function editProduct(product_name) {
    document.getElementById(product_name).innerHTML = `<input type='text' id='newName' onblur='rename("${product_name}")' placeholder='Nhập tên mới'></input>`;

    document.getElementById("newName").focus();
    // let newProductName = prompt('Nhap ten moi');
    // console.log(newProductName);
    // if (newProductName != null && newProductName != '')
    // productList.splice(productList.indexOf(product_name), 1, newProductName);
    // displayProduct(productList);
}
function rename(name) {
    let fixedName = document.getElementById('newName').value;
    if (fixedName != '') {
        document.getElementById(name).innerHTML = fixedName;
    }
    else
        document.getElementById(name).innerHTML = name;
}
