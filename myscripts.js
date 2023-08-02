
branch.setIdentity('123456');

function SendCommereceEvent(){
    var event_and_custom_data = {
        "transaction_id": "tras_Id_1232343434",
        "currency": "USD",
        "revenue": 180.2,
        "shipping": 10.5,
        "tax": 13.5,
        "coupon": "promo-1234",
        "affiliation": "high_fi",
        "description": "Preferred purchase",
        "purchase_loc": "Palo Alto",
        "store_pickup": "unavailable"
     };
     
     var content_items = [
     {
        "$content_schema": "COMMERCE_PRODUCT",
        "$og_title": "Nike Shoe",
        "$og_description": "Start loving your steps",
        "$og_image_url": "http://example.com/img1.jpg",
        "$canonical_identifier": "nike/1234",
        "$publicly_indexable": false,
        "$price": 101.2,
        "$locally_indexable": true,
        "$quantity": 1,
        "$sku": "1101123445",
        "$product_name": "Runner",
        "$product_brand": "Nike",
        "$product_category": "Sporting Goods",
        "$product_variant": "XL",
        "$rating_average": 4.2,
        "$rating_count": 5,
        "$rating_max": 2.2,
        "$creation_timestamp": 1499892854966,
        "$exp_date": 1499892854966,
        "$keywords": [ "sneakers", "shoes" ],
        "$address_street": "230 South LaSalle Street",
        "$address_city": "Chicago",
        "$address_region": "IL",
        "$address_country": "US",
        "$address_postal_code": "60604",
        "$latitude": 12.07,
        "$longitude": -97.5,
        "$image_captions": [ "my_img_caption1", "my_img_caption_2" ],
        "$condition": "NEW",
        "$custom_fields": {"foo1":"bar1","foo2":"bar2"}
     },
     {
        "$og_title": "Nike Woolen Sox",
        "$canonical_identifier": "nike/5324",
        "$og_description": "Fine combed woolen sox for those who love your foot",
        "$publicly_indexable": false,
        "$price": 80.2,
        "$locally_indexable": true,
        "$quantity": 5,
        "$sku": "110112467",
        "$product_name": "Woolen Sox",
        "$product_brand": "Nike",
        "$product_category": "Apparel & Accessories",
        "$product_variant": "Xl",
        "$rating_average": 3.3,
        "$rating_count": 5,
        "$rating_max": 2.8,
        "$creation_timestamp": 1499892854966
     }];
     
     var customer_event_alias = "my custom alias";
     
     branch.logEvent(
        "PURCHASE",
        event_and_custom_data,
        content_items,
        customer_event_alias,
        function(err) { console.log(err);   document.getElementById("Output_Button").innerText = "PURCHASE EVENT HAS BEEN SENT" }
        
     );
}


// ADD_TO_CART


function SendATC(){
    var event_and_custom_data = {
        "transaction_id": "tras_Id_1232343434",
        "currency": "USD",
        "revenue": 180.2,
        "shipping": 10.5,
        "tax": 13.5,
        "coupon": "promo-1234",
        "affiliation": "high_fi",
        "description": "Preferred purchase",
        "purchase_loc": "Palo Alto",
        "store_pickup": "unavailable"
     };
     
     var content_items = [
     {
        "$content_schema": "COMMERCE_PRODUCT",
        "$og_title": "Nike Shoe",
        "$og_description": "Start loving your steps",
        "$og_image_url": "http://example.com/img1.jpg",
        "$canonical_identifier": "nike/1234",
        "$publicly_indexable": false,
        "$price": 101.2,
        "$locally_indexable": true,
        "$quantity": 1,
        "$sku": "1101123445",
        "$product_name": "Runner",
        "$product_brand": "Nike",
        "$product_category": "Sporting Goods",
        "$product_variant": "XL",
        "$rating_average": 4.2,
        "$rating_count": 5,
        "$rating_max": 2.2,
        "$creation_timestamp": 1499892854966,
        "$exp_date": 1499892854966,
        "$keywords": [ "sneakers", "shoes" ],
        "$address_street": "230 South LaSalle Street",
        "$address_city": "Chicago",
        "$address_region": "IL",
        "$address_country": "US",
        "$address_postal_code": "60604",
        "$latitude": 12.07,
        "$longitude": -97.5,
        "$image_captions": [ "my_img_caption1", "my_img_caption_2" ],
        "$condition": "NEW",
        "$custom_fields": {"foo1":"bar1","foo2":"bar2"}
     },
     {
        "$og_title": "Nike Woolen Sox",
        "$canonical_identifier": "nike/5324",
        "$og_description": "Fine combed woolen sox for those who love your foot",
        "$publicly_indexable": false,
        "$price": 80.2,
        "$locally_indexable": true,
        "$quantity": 5,
        "$sku": "110112467",
        "$product_name": "Woolen Sox",
        "$product_brand": "Nike",
        "$product_category": "Apparel & Accessories",
        "$product_variant": "Xl",
        "$rating_average": 3.3,
        "$rating_count": 5,
        "$rating_max": 2.8,
        "$creation_timestamp": 1499892854966
     }];
     
     var customer_event_alias = "my custom alias";
     
     branch.logEvent(
        "ADD_TO_CART",
        event_and_custom_data,
        content_items,
        customer_event_alias,
        function(err) { console.log(err);   document.getElementById("Output_Button").innerText = "ADD_TO_CART EVENT HAS BEEN SENT" }
        
     );
}

//INITIATE_PURCHASE


function SENDINP(){
    var event_and_custom_data = {
        "transaction_id": "tras_Id_1232343434",
        "currency": "USD",
        "revenue": 180.2,
        "shipping": 10.5,
        "tax": 13.5,
        "coupon": "promo-1234",
        "affiliation": "high_fi",
        "description": "Preferred purchase",
        "purchase_loc": "Palo Alto",
        "store_pickup": "unavailable"
     };
     
     var content_items = [
     {
        "$content_schema": "COMMERCE_PRODUCT",
        "$og_title": "Nike Shoe",
        "$og_description": "Start loving your steps",
        "$og_image_url": "http://example.com/img1.jpg",
        "$canonical_identifier": "nike/1234",
        "$publicly_indexable": false,
        "$price": 101.2,
        "$locally_indexable": true,
        "$quantity": 1,
        "$sku": "1101123445",
        "$product_name": "Runner",
        "$product_brand": "Nike",
        "$product_category": "Sporting Goods",
        "$product_variant": "XL",
        "$rating_average": 4.2,
        "$rating_count": 5,
        "$rating_max": 2.2,
        "$creation_timestamp": 1499892854966,
        "$exp_date": 1499892854966,
        "$keywords": [ "sneakers", "shoes" ],
        "$address_street": "230 South LaSalle Street",
        "$address_city": "Chicago",
        "$address_region": "IL",
        "$address_country": "US",
        "$address_postal_code": "60604",
        "$latitude": 12.07,
        "$longitude": -97.5,
        "$image_captions": [ "my_img_caption1", "my_img_caption_2" ],
        "$condition": "NEW",
        "$custom_fields": {"foo1":"bar1","foo2":"bar2"}
     },
     {
        "$og_title": "Nike Woolen Sox",
        "$canonical_identifier": "nike/5324",
        "$og_description": "Fine combed woolen sox for those who love your foot",
        "$publicly_indexable": false,
        "$price": 80.2,
        "$locally_indexable": true,
        "$quantity": 5,
        "$sku": "110112467",
        "$product_name": "Woolen Sox",
        "$product_brand": "Nike",
        "$product_category": "Apparel & Accessories",
        "$product_variant": "Xl",
        "$rating_average": 3.3,
        "$rating_count": 5,
        "$rating_max": 2.8,
        "$creation_timestamp": 1499892854966
     }];
     
     var customer_event_alias = "my custom alias";
     
     branch.logEvent(
        "INITIATE_PURCHASE",
        event_and_custom_data,
        content_items,
        customer_event_alias,
        function(err) { console.log(err);   document.getElementById("Output_Button").innerText = "INITIATE_PURCHASE EVENT HAS BEEN SENT" }
        
     );
}


// VIEW CART


function SendViewCart(){
    var event_and_custom_data = {
        "transaction_id": "tras_Id_1232343434",
        "currency": "USD",
        "revenue": 180.2,
        "shipping": 10.5,
        "tax": 13.5,
        "coupon": "promo-1234",
        "affiliation": "high_fi",
        "description": "Preferred purchase",
        "purchase_loc": "Palo Alto",
        "store_pickup": "unavailable"
     };
     
     var content_items = [
     {
        "$content_schema": "COMMERCE_PRODUCT",
        "$og_title": "Nike Shoe",
        "$og_description": "Start loving your steps",
        "$og_image_url": "http://example.com/img1.jpg",
        "$canonical_identifier": "nike/1234",
        "$publicly_indexable": false,
        "$price": 101.2,
        "$locally_indexable": true,
        "$quantity": 1,
        "$sku": "1101123445",
        "$product_name": "Runner",
        "$product_brand": "Nike",
        "$product_category": "Sporting Goods",
        "$product_variant": "XL",
        "$rating_average": 4.2,
        "$rating_count": 5,
        "$rating_max": 2.2,
        "$creation_timestamp": 1499892854966,
        "$exp_date": 1499892854966,
        "$keywords": [ "sneakers", "shoes" ],
        "$address_street": "230 South LaSalle Street",
        "$address_city": "Chicago",
        "$address_region": "IL",
        "$address_country": "US",
        "$address_postal_code": "60604",
        "$latitude": 12.07,
        "$longitude": -97.5,
        "$image_captions": [ "my_img_caption1", "my_img_caption_2" ],
        "$condition": "NEW",
        "$custom_fields": {"foo1":"bar1","foo2":"bar2"}
     },
     {
        "$og_title": "Nike Woolen Sox",
        "$canonical_identifier": "nike/5324",
        "$og_description": "Fine combed woolen sox for those who love your foot",
        "$publicly_indexable": false,
        "$price": 80.2,
        "$locally_indexable": true,
        "$quantity": 5,
        "$sku": "110112467",
        "$product_name": "Woolen Sox",
        "$product_brand": "Nike",
        "$product_category": "Apparel & Accessories",
        "$product_variant": "Xl",
        "$rating_average": 3.3,
        "$rating_count": 5,
        "$rating_max": 2.8,
        "$creation_timestamp": 1499892854966
     }];
     
     var customer_event_alias = "my custom alias";
     
     branch.logEvent(
        "VIEW_CART",
        event_and_custom_data,
        content_items,
        customer_event_alias,
        function(err) { console.log(err);   document.getElementById("Output_Button").innerText = "VIEW_CART EVENT HAS BEEN SENT" }
        
     );
}

function SendCUstomEvent(){
    var custom_data = {
        "Custom_Event_Property_Key1": "ROHIT1",
        "Custom_Event_Property_Key2": "TEST2"
     };
    

     branch.logEvent(
         "ROHIT1",
         custom_data,
         function(err) { console.log(err);document.getElementById("Output_Button").innerHTML = "Custom EVENT HAS BEEN SENT" }
         )
     
}
function SendContentEvent(){
    var event_and_custom_data = {
        "transaction_id": "tras_Id_1232343434",
        "currency": "USD",
        "revenue": 180.2,
        "shipping": 10.5,
        "tax": 13.5,
        "coupon": "promo-1234",
        "affiliation": "high_fi",
        "description": "Preferred purchase",
        "purchase_loc": "Palo Alto",
        "store_pickup": "unavailable"
     };
     
     var content_items = [
     {
        "$content_schema": "COMMERCE_PRODUCT",
        "$og_title": "Nike Shoe",
        "$og_description": "Start loving your steps",
        "$og_image_url": "http://example.com/img1.jpg",
        "$canonical_identifier": "nike/1234",
        "$publicly_indexable": false,
        "$price": 101.2,
        "$locally_indexable": true,
        "$quantity": 1,
        "$sku": "1101123445",
        "$product_name": "Runner",
        "$product_brand": "Nike",
        "$product_category": "Sporting Goods",
        "$product_variant": "XL",
        "$rating_average": 4.2,
        "$rating_count": 5,
        "$rating_max": 2.2,
        "$creation_timestamp": 1499892854966,
        "$exp_date": 1499892854966,
        "$keywords": [ "sneakers", "shoes" ],
        "$address_street": "230 South LaSalle Street",
        "$address_city": "Chicago",
        "$address_region": "IL",
        "$address_country": "US",
        "$address_postal_code": "60604",
        "$latitude": 12.07,
        "$longitude": -97.5,
        "$image_captions": [ "my_img_caption1", "my_img_caption_2" ],
        "$condition": "NEW",
        "$custom_fields": {"foo1":"bar1","foo2":"bar2"}
     },
     {
        "$og_title": "Nike Woolen Sox",
        "$canonical_identifier": "nike/5324",
        "$og_description": "Fine combed woolen sox for those who love your foot",
        "$publicly_indexable": false,
        "$price": 80.2,
        "$locally_indexable": true,
        "$quantity": 5,
        "$sku": "110112467",
        "$product_name": "Woolen Sox",
        "$product_brand": "Nike",
        "$product_category": "Apparel & Accessories",
        "$product_variant": "Xl",
        "$rating_average": 3.3,
        "$rating_count": 5,
        "$rating_max": 2.8,
        "$creation_timestamp": 1499892854966
     }];
     
     var customer_event_alias = "my custom alias";
     
     branch.logEvent(
        "VIEW_ITEMS",
        event_and_custom_data,
        content_items,
        customer_event_alias,
        function(err) { console.log(err);   document.getElementById("Output_Button").innerHTML = "Content EVENT HAS BEEN SENT" }
     );

}

// Search

function SendSearchEvent(){
    var event_and_custom_data = {
        "transaction_id": "tras_Id_1232343434",
        "currency": "USD",
        "revenue": 180.2,
        "shipping": 10.5,
        "tax": 13.5,
        "coupon": "promo-1234",
        "affiliation": "high_fi",
        "description": "Preferred purchase",
        "purchase_loc": "Palo Alto",
        "store_pickup": "unavailable"
     };
     
     var content_items = [
     {
        "$content_schema": "COMMERCE_PRODUCT",
        "$og_title": "Nike Shoe",
        "$og_description": "Start loving your steps",
        "$og_image_url": "http://example.com/img1.jpg",
        "$canonical_identifier": "nike/1234",
        "$publicly_indexable": false,
        "$price": 101.2,
        "$locally_indexable": true,
        "$quantity": 1,
        "$sku": "1101123445",
        "$product_name": "Runner",
        "$product_brand": "Nike",
        "$product_category": "Sporting Goods",
        "$product_variant": "XL",
        "$rating_average": 4.2,
        "$rating_count": 5,
        "$rating_max": 2.2,
        "$creation_timestamp": 1499892854966,
        "$exp_date": 1499892854966,
        "$keywords": [ "sneakers", "shoes" ],
        "$address_street": "230 South LaSalle Street",
        "$address_city": "Chicago",
        "$address_region": "IL",
        "$address_country": "US",
        "$address_postal_code": "60604",
        "$latitude": 12.07,
        "$longitude": -97.5,
        "$image_captions": [ "my_img_caption1", "my_img_caption_2" ],
        "$condition": "NEW",
        "$custom_fields": {"foo1":"bar1","foo2":"bar2"}
     },
     {
        "$og_title": "Nike Woolen Sox",
        "$canonical_identifier": "nike/5324",
        "$og_description": "Fine combed woolen sox for those who love your foot",
        "$publicly_indexable": false,
        "$price": 80.2,
        "$locally_indexable": true,
        "$quantity": 5,
        "$sku": "110112467",
        "$product_name": "Woolen Sox",
        "$product_brand": "Nike",
        "$product_category": "Apparel & Accessories",
        "$product_variant": "Xl",
        "$rating_average": 3.3,
        "$rating_count": 5,
        "$rating_max": 2.8,
        "$creation_timestamp": 1499892854966
     }];
     
     var customer_event_alias = "my custom alias";
     
     branch.logEvent(
        "SEARCH",
        event_and_custom_data,
        content_items,
        customer_event_alias,
        function(err) { console.log(err);   document.getElementById("Output_Button").innerHTML = "Search EVENT HAS BEEN SENT" }
     );

}


// RATE

function SendRateEvent(){
    var event_and_custom_data = {
        "transaction_id": "tras_Id_1232343434",
        "currency": "USD",
        "revenue": 180.2,
        "shipping": 10.5,
        "tax": 13.5,
        "coupon": "promo-1234",
        "affiliation": "high_fi",
        "description": "Preferred purchase",
        "purchase_loc": "Palo Alto",
        "store_pickup": "unavailable"
     };
     
     var content_items = [
     {
        "$content_schema": "COMMERCE_PRODUCT",
        "$og_title": "Nike Shoe",
        "$og_description": "Start loving your steps",
        "$og_image_url": "http://example.com/img1.jpg",
        "$canonical_identifier": "nike/1234",
        "$publicly_indexable": false,
        "$price": 101.2,
        "$locally_indexable": true,
        "$quantity": 1,
        "$sku": "1101123445",
        "$product_name": "Runner",
        "$product_brand": "Nike",
        "$product_category": "Sporting Goods",
        "$product_variant": "XL",
        "$rating_average": 4.2,
        "$rating_count": 5,
        "$rating_max": 2.2,
        "$creation_timestamp": 1499892854966,
        "$exp_date": 1499892854966,
        "$keywords": [ "sneakers", "shoes" ],
        "$address_street": "230 South LaSalle Street",
        "$address_city": "Chicago",
        "$address_region": "IL",
        "$address_country": "US",
        "$address_postal_code": "60604",
        "$latitude": 12.07,
        "$longitude": -97.5,
        "$image_captions": [ "my_img_caption1", "my_img_caption_2" ],
        "$condition": "NEW",
        "$custom_fields": {"foo1":"bar1","foo2":"bar2"}
     },
     {
        "$og_title": "Nike Woolen Sox",
        "$canonical_identifier": "nike/5324",
        "$og_description": "Fine combed woolen sox for those who love your foot",
        "$publicly_indexable": false,
        "$price": 80.2,
        "$locally_indexable": true,
        "$quantity": 5,
        "$sku": "110112467",
        "$product_name": "Woolen Sox",
        "$product_brand": "Nike",
        "$product_category": "Apparel & Accessories",
        "$product_variant": "Xl",
        "$rating_average": 3.3,
        "$rating_count": 5,
        "$rating_max": 2.8,
        "$creation_timestamp": 1499892854966
     }];
     
     var customer_event_alias = "my custom alias";
     
     branch.logEvent(
        "VIEW_ITEMS",
        event_and_custom_data,
        content_items,
        customer_event_alias,
        function(err) { console.log(err);   document.getElementById("Output_Button").innerHTML = "RATE EVENT HAS BEEN SENT" }
     );

}


function SendLifCEvent(){
    var event_and_custom_data = {
        "transaction_id": "tras_Id_1234",
        "description": "Preferred purchase",
        "registration_id": "12345"
     };
     
     var customer_event_alias = "my custom alias";

     var content_items = [
        {
           "$content_schema": "COMMERCE_PRODUCT",
           "$og_title": "Nike Shoe",
           "$og_description": "Start loving your steps",
           "$og_image_url": "http://example.com/img1.jpg",
           "$canonical_identifier": "nike/1234",
           "$publicly_indexable": false,
           "$price": 101.2,
           "$locally_indexable": true,
           "$quantity": 1,
           "$sku": "1101123445",
           "$product_name": "Runner",
           "$product_brand": "Nike",
           "$product_category": "Sporting Goods",
           "$product_variant": "XL",
           "$rating_average": 4.2,
           "$rating_count": 5,
           "$rating_max": 2.2,
           "$creation_timestamp": 1499892854966,
           "$exp_date": 1499892854966,
           "$keywords": [ "sneakers", "shoes" ],
           "$address_street": "230 South LaSalle Street",
           "$address_city": "Chicago",
           "$address_region": "IL",
           "$address_country": "US",
           "$address_postal_code": "60604",
           "$latitude": 12.07,
           "$longitude": -97.5,
           "$image_captions": [ "my_img_caption1", "my_img_caption_2" ],
           "$condition": "NEW",
           "$custom_fields": {"foo1":"bar1","foo2":"bar2"}
        }];
     
     branch.logEvent(
        "COMPLETE_REGISTRATION",
        event_and_custom_data,
        content_items,
        customer_event_alias,
        function(err) { console.log(err);  document.getElementById("Output_Button").innerHTML = "Lifecycle EVENT HAS BEEN SENT"  }
     );
}


// Login

function SendLoginEvent(){
    var event_and_custom_data = {
        "transaction_id": "tras_Id_1232343434",
        "currency": "USD",
        "revenue": 180.2,
        "shipping": 10.5,
        "tax": 13.5,
        "coupon": "promo-1234",
        "affiliation": "high_fi",
        "description": "Preferred purchase",
        "purchase_loc": "Palo Alto",
        "store_pickup": "unavailable"
     };
     
     var content_items = [
     {
        "$content_schema": "COMMERCE_PRODUCT",
        "$og_title": "Nike Shoe",
        "$og_description": "Start loving your steps",
        "$og_image_url": "http://example.com/img1.jpg",
        "$canonical_identifier": "nike/1234",
        "$publicly_indexable": false,
        "$price": 101.2,
        "$locally_indexable": true,
        "$quantity": 1,
        "$sku": "1101123445",
        "$product_name": "Runner",
        "$product_brand": "Nike",
        "$product_category": "Sporting Goods",
        "$product_variant": "XL",
        "$rating_average": 4.2,
        "$rating_count": 5,
        "$rating_max": 2.2,
        "$creation_timestamp": 1499892854966,
        "$exp_date": 1499892854966,
        "$keywords": [ "sneakers", "shoes" ],
        "$address_street": "230 South LaSalle Street",
        "$address_city": "Chicago",
        "$address_region": "IL",
        "$address_country": "US",
        "$address_postal_code": "60604",
        "$latitude": 12.07,
        "$longitude": -97.5,
        "$image_captions": [ "my_img_caption1", "my_img_caption_2" ],
        "$condition": "NEW",
        "$custom_fields": {"foo1":"bar1","foo2":"bar2"}
     },
     {
        "$og_title": "Nike Woolen Sox",
        "$canonical_identifier": "nike/5324",
        "$og_description": "Fine combed woolen sox for those who love your foot",
        "$publicly_indexable": false,
        "$price": 80.2,
        "$locally_indexable": true,
        "$quantity": 5,
        "$sku": "110112467",
        "$product_name": "Woolen Sox",
        "$product_brand": "Nike",
        "$product_category": "Apparel & Accessories",
        "$product_variant": "Xl",
        "$rating_average": 3.3,
        "$rating_count": 5,
        "$rating_max": 2.8,
        "$creation_timestamp": 1499892854966
     }];
     
     var customer_event_alias = "my custom alias";
     
     branch.logEvent(
        "VIEW_ITEMS",
        event_and_custom_data,
        content_items,
        customer_event_alias,
        function(err) { console.log(err);   document.getElementById("Output_Button").innerHTML = "Login EVENT HAS BEEN SENT" }
     );

}


function SendLifCEvent(){
    var event_and_custom_data = {
        "transaction_id": "tras_Id_1234",
        "description": "Preferred purchase",
        "registration_id": "12345"
     };
     
     var customer_event_alias = "my custom alias";

     var content_items = [
        {
           "$content_schema": "COMMERCE_PRODUCT",
           "$og_title": "Nike Shoe",
           "$og_description": "Start loving your steps",
           "$og_image_url": "http://example.com/img1.jpg",
           "$canonical_identifier": "nike/1234",
           "$publicly_indexable": false,
           "$price": 101.2,
           "$locally_indexable": true,
           "$quantity": 1,
           "$sku": "1101123445",
           "$product_name": "Runner",
           "$product_brand": "Nike",
           "$product_category": "Sporting Goods",
           "$product_variant": "XL",
           "$rating_average": 4.2,
           "$rating_count": 5,
           "$rating_max": 2.2,
           "$creation_timestamp": 1499892854966,
           "$exp_date": 1499892854966,
           "$keywords": [ "sneakers", "shoes" ],
           "$address_street": "230 South LaSalle Street",
           "$address_city": "Chicago",
           "$address_region": "IL",
           "$address_country": "US",
           "$address_postal_code": "60604",
           "$latitude": 12.07,
           "$longitude": -97.5,
           "$image_captions": [ "my_img_caption1", "my_img_caption_2" ],
           "$condition": "NEW",
           "$custom_fields": {"foo1":"bar1","foo2":"bar2"}
        }];
     
     branch.logEvent(
        "COMPLETE_REGISTRATION",
        event_and_custom_data,
        content_items,
        customer_event_alias,
        function(err) { console.log(err);  document.getElementById("Output_Button").innerHTML = "Complete Registraton EVENT HAS BEEN SENT"  }
     );
}

function CreateDeepLink(){
var linkData = {
    campaign: 'content 123',
    channel: 'facebook',
    feature: 'dashboard',
    stage: 'new user',
    tags: [ 'tag1', 'tag2', 'tag3' ],
    alias: '',
    data: {
      'custom_bool': true,
      'custom_int': Date.now(),
      'custom_string': 'hello',
      '$og_title': 'Title',
      '$og_description': 'Description',
      '$marketing_title': 'Website_link',
      '$og_image_url':'http://lorempixel.com/400/400'
    }
  };
  
  branch.link(linkData, function(err, link) {
    console.log(link);
    document.getElementById("Output_Button2").innerHTML = link;
  });
}

//Read Deep link
function ReadDeepLink(){
branch.data(function(err, data) {
    console.log(err, data);
    document.getElementById("Output_Button2").innerHTML = data;
  });
}


var linkData = {
    campaign: 'content 123',
    channel: 'facebook',
    feature: 'dashboard',
    stage: 'new user',
    tags: [ 'tag1', 'tag2', 'tag3' ],
    alias: '',
    data: {
      'custom_bool': true,
      'custom_int': Date.now(),
      'custom_string': 'hello',
      '$og_title': 'Title',
      '$og_description': 'Description',
      '$og_image_url':'http://lorempixel.com/400/400'
    }
  };
  
  branch.link(linkData, function(err, link) {
    // bind elements
    document.getElementById('button').onclick = function() {
      window.open(link || err);
    };
    document.getElementById('Output_Button').href = link || err;
  });
