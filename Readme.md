

##  We focused on building the BackEnd for our products taking application with following features:

### A user should be able to create a new product.
### A user should be able view  products.
### A user should be able update  products.
### A user should be able delete products.

### products  sction

#### Create: /products/create → POST

#### Read: /products → GET

#### Update: /products/update/:productID → PATCH

#### Delete: /products/delete/:productID DELETE

All these routes will be restricted,
Also a user should be able to Read,
Update and Delete products only....


### Deploy BE application ,create frontend
Application Deployment, also known as Software Deployment, is the process of installing, configuring, updating, and enabling one application or suite of applications that make a software system available for use, like facilitating a certain URL on a server.


### products
### GET all 
GET https://pl-uzk8.onrender.com/hwpro/

### *** POST:

POST 
1)https://pl-uzk8.onrender.com/hwpro/create

//body:
```
{
 "name": "Tub",
    "material": "Fique",
    "Length": "1-2 ",
    "Shape": "",
    "Price": "390/KG",
    "grade": 4
}
```
o/p:
```
{
    "msg": "A new product has been Created",
    "product": {
        "name": "Tub",
        "material": "Fique",
        "Length": "1-2 ",
        "Shape": "",
        "Price": "390/KG",
        "grade": 4,
        "_id": "66b1afd0b72dd080c9585b55"
    }
}
```

##GET

1)/

GET https://pl-uzk8.onrender.com/hwpro/
or 
GET  https://pl-uzk8.onrender.com/hwpro/:productID

u will get 
```
[
    {
        "_id": "66b1a389981f7f956e613361",
        "name": "Alley Stad",
        "material": "Pipes",
        "Length": "6-12 meter",
        "Shape": "Round....",
        "Price": "350/KG",
        "grade": 4
    },
    {
        "_id": "66b1a3c6981f7f956e613363",
        "name": "Alley Stad",
        "material": "Pipes",
        "Length": "6-12 meter",
        "Shape": "Round....",
        "Price": "350/KG",
        "grade": 4
    },
    {
        "_id": "66b1a3e0981f7f956e613365",
        "name": "Alley Stad",
        "material": "steel",
        "Length": "6-8 meter",
        "Shape": "Round....",
        "Price": "350/KG",
        "grade": 3
    }
]

```

### *** UPDATE/PATCH:

### product
1)/update/:productID

PATCH https://pl-uzk8.onrender.com/hwpro/update/:productID

//pass productID in params :

//body:
```
{
    "name": "Tubing",
    "material": "Fique Firringss",
    "Length": "6-19 meter",
    "Shape": "Round....",
    "Price": "380/KG",
    "grade": 4
  }
```

u will get the product updated
```
{
    "msg": "product with Id:66b1a7f94c63b8b078a9476a has been updated"
}

```

### *** DELETE:
### product
1)/delete/:product ID

DELETE https://pl-uzk8.onrender.com/hwpro/delete/:productID
//pass productID in params ex: 66b1ae05b72dd080c9585b52
```
{
    "msg": "product  with Id:66b1ae05b72dd080c9585b52 has been deleted"
}

```
