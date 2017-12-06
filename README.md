# Splitzz
##### PROJECT 4

 [Live Link (Heroku)](https://splitz.herokuapp.com/)

## Group Members
* [Zheng Yu (GitHub)](https://github.com/koozy0)
* [Li Yuan (GitHub)](https://github.com/liyuan23)

## Description
Scan any receipt to split bills with friends easily!
_____
## <center>Installation instructions

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## ERD
![](app/assets/images/readme/ERD.png)

## Scan Receipts
![](app/assets/images/readme/wireframe1.jpg)

## Register/Login
![](app/assets/images/readme/wireframe2.jpg)

## Edit Profile
![](app/assets/images/readme/wireframe3.jpg)

## <center>User Stories

### FoodSpace

## <center> User Stories

1. As a user, I can scan multiple receipts for different restaurants
2. As a user, I can view a list of past receipts for different restaurants I have scanned previously
3. As a user, I can calculate how much is my portion of the bill
___

## Assumptions
* GST and service charge is not included in prices of menu items

## <center> To Do List
Description    | Importance | Type
-------- | --- | ---  
Split the results from OCR API to accurately display the menu items/restaurant name/datetime in the bill | **HIGH** | Framework
Come up with function to accurately sum total from checked menu items to accurately display the amount payable | **HIGH** | Framework
Add components for pages | **HIGH** | Framework
Add routes for pages | **HIGH** | Framework
**COMPLETED** | ---- | ----
~~Add OCR API to allow users to split the bill~~ | **HIGH** | Framework
~~Add Camera API to take photo of receipt~~ | **HIGH** | Framework
~~Update README with latest erd, wireframe images and user stories~~ | Low | Framework
~~Add materialize for vue~~ | **HIGH** | Framework


## Potential Improvements
* Login Authentication
* Groups to share bills
