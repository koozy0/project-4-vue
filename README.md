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

How Customers would use this:
1. When a customer loads the landing page, they can search for particular dishes or restaurants
2. A list of various dishes or restaurants appears allowing customers to click on the links to see reviews for particular dishes or the various dishes in a restaurant
3. By clicking on the link for the top100 dishes, customers can upvote the dishes they prefer
4. Users must register and login to vote and write reviews

How Restaurant Owners would use this:
1. Owners can see their restaurant details and their dishes’ ratings, customers’ reviews
2. Owners can add/edit/delete dishes, discounts and prices


* User
1. Users use the website to find popular dishes rated by public and then rate the dishes if they feel the food was good. They can also leave reviews for each dish.

* Owners
1. Owners can see set discounts and prices based on ratings of dishes

## <center> Wireframes

* Home page
![](/app/assets/images/readme/wireframe1.jpg)
___
## Ask During Consultation
* Check with prima how to show those dishes without votes. Not sure about how to run the loop to compare against those that are already there(show all dishes page) - Jo

## Assumptions
* Each owner only has one restaurant
* One dish has many reviews/ratings

## <center> To Do List
Description    | Importance | Type
-------- | --- | ---  
Add OCR API to allow users to split the bill| Medium | Framework
**COMPLETED** | ---- | ----
~~Allow searching of individual dishes/restaurants~~ | **HIGH** | Framework
~~Make search function async~~ | Medium | Framework
~~Add images to user profile~~ | Low | Framework
~~Update README with latest wireframe images~~ | Low | Framework
~~Add working routes for default pages~~ | **HIGH** | Framework
~~Implement CSS Framework and working form routes~~ | **HIGH** | Framework
~~Come up with search page logic~~ | **HIGH** | Framework
~~Add new dishes and delete dishes~~ | **HIGH** | Framework
~~Owner console~~ | **HIGH** | Framework
~~Scrape restaurant data~~ | Medium | Framework
~~Add google maps to allow show restaurant location~~| Low | Framework

## Potential Improvements
* ~~Add reviews for each dish~~
* Facebook login and share
* Additional promotions
* OCR scanning of bill to split payment
