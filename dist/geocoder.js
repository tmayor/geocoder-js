if(function(){"use strict";var a={};a.version="0.0.0",a.createGeocoder=function(b){var c=new a.ProviderFactory;return c.createProvider(b)};var b="object"==typeof window?window:"object"==typeof exports?exports:{};b.GeocoderJS=a}(),"function"==typeof define&&define.amd&&define(GeocoderJS),"undefined"==typeof GeocoderJS&&"function"==typeof require)var GeocoderJS=require("../GeocoderJS.js");if(function(a){"use strict";a.ProviderBase=function(){},a.ProviderBase.prototype={geocode:function(){},geodecode:function(){},mapToGeocoded:function(){},executeRequest:function(){}}}(GeocoderJS),"undefined"==typeof GeocoderJS&&"function"==typeof require)var GeocoderJS=require("./GeocoderJS.js");if(function(a){"use strict";a.Geocoded=function(){},a.Geocoded.prototype={getCoordinates:function(){return[this.latitude,this.longitude]},getLatitude:function(){return this.latitude},getLongitude:function(){return this.longitude},getBounds:function(){},getStreetNumber:function(){return this.streetNumber},getStreetName:function(){return this.streetName},getCity:function(){return this.city},getZipcode:function(){return this.postal_code},getCityDistrict:function(){},getCounty:function(){},getCountyCode:function(){},getRegion:function(){return this.region}}}(GeocoderJS),"undefined"==typeof GeocoderJS&&"function"==typeof require)var GeocoderJS=require("./GeocoderJS.js");if(function(a){"use strict";var b={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[]}};a.GeoJSONDumper=function(){return{dump:function(a){var c=b;return c.geometry.coordinates=[a.getLongitude(),a.getLatitude()],c}}}}(GeocoderJS),"undefined"==typeof GeocoderJS&&"function"==typeof require){var GeocoderJS=require("../GeocoderJS.js");require("../ExternalURILoader.js")}if(function(a){"use strict";a.ProviderFactory=function(){},a.ProviderFactory.prototype.createProvider=function(b){"string"==typeof b&&(b={provider:b});var c,d=new a.ExternalURILoader;switch(b.provider){case"google":c=new a.GoogleAPIProvider(b);break;case"mapquest":c=new a.MapquestProvider(b);break;case"openstreetmap":c=new a.OpenStreetMapProvider(d,b)}return c}}(GeocoderJS),"undefined"==typeof GeocoderJS&&"function"==typeof require)var GeocoderJS=require("../GeocoderJS.js");if(function(a){"use strict";var b=!1;a.ExternalURILoader=function(a){this.options={},void 0===a&&(a={}),this.setOptions(a)},a.ExternalURILoader.prototype.setOptions=function(a){var b={protocol:null,host:null,pathname:null};for(var c in b)this.options[c]=void 0!==a[c]?a[c]:b[c]},a.ExternalURILoader.prototype.executeRequest=function(c,d){function e(c,d){var e,f=require("url"),h=require(b?"https":"http"),i={protocol:b?"https":"http",host:g.options.host,pathname:g.options.pathname,query:c};i.query.sensor="false",e=f.format(i),h.get(e,function(b){if(200!=b.statusCode)throw"Received HTTP status code "+b.statusCode+" when attempting geocoding request.";b.data="",b.setEncoding("utf8"),b.on("data",function(a){b.data+=a}),b.on("end",function(){if(!b.data||!b.data.length)throw"Received empty data when attempting geocoding request.";var c=!1,e=0,f=[];try{c=JSON.parse(b.data)}catch(g){throw"Received invalid JSON data when attempting geocoding request."}if(c&&c.status){if("OVER_QUERY_LIMIT"===c.status)throw"Exceeded daily quota when attempting geocoding request.";if("OK"===c.status&&c.results){for(;e<c.results.length;e++)f.push(a.GoogleAPIProvider.prototype.mapToGeocoded(c.results[e]));return d(f)}}throw"Received unexpected JSON data when attempting geocoding request."})}).on("error",function(a){throw a})}function f(a,b){var c=new XMLHttpRequest,d="//"+g.options.host+"/"+g.options.pathname+"?";for(var e in a)a.hasOwnProperty(e)&&(d+=encodeURIComponent(e)+"="+encodeURIComponent(a[e])+"&");c.onload=function(){if(200!=this.status)return console.log("Received HTTP status code "+this.status+" when attempting geocoding request."),b(null);if(!this.responseText||!this.responseText.length)return console.log("Received empty data when attempting geocoding request."),b(null);var a=!1;try{a=JSON.parse(this.responseText)}catch(c){return console.log("Received invalid JSON data when attempting geocoding request."),b(null)}return a?b(a):(console.log("Received unexpected JSON data when attempting geocoding request."),b(null))},c.open("GET",d),c.send()}var g=this;if("undefined"!=typeof XMLHttpRequest)return f(c,d);try{{require("url"),require(b?"https":"http")}return e(c,d)}catch(h){}return d(null)}}(GeocoderJS),"undefined"==typeof GeocoderJS&&"function"==typeof require){var GeocoderJS=require("../GeocoderJS.js");require("../Geocoded.js"),require("../providers/ProviderBase.js")}if(function(a){"use strict";function b(b,c){var e,f=require("url"),g=require(d?"https":"http"),h={protocol:d?"https":"http",host:"maps.googleapis.com",pathname:"maps/api/geocode/json",query:b};h.query.sensor="false",e=f.format(h),g.get(e,function(b){if(200!=b.statusCode)throw"Received HTTP status code "+b.statusCode+" when attempting geocoding request.";b.data="",b.setEncoding("utf8"),b.on("data",function(a){b.data+=a}),b.on("end",function(){if(!b.data||!b.data.length)throw"Received empty data when attempting geocoding request.";var d=!1,e=0,f=[];try{d=JSON.parse(b.data)}catch(g){throw"Received invalid JSON data when attempting geocoding request."}if(d&&d.status){if("OVER_QUERY_LIMIT"===d.status)throw"Exceeded daily quota when attempting geocoding request.";if("OK"===d.status&&d.results){for(;e<d.results.length;e++)f.push(a.GoogleAPIProvider.prototype.mapToGeocoded(d.results[e]));return c(f)}}throw"Received unexpected JSON data when attempting geocoding request."})}).on("error",function(a){throw a})}function c(b,c){var e=new XMLHttpRequest,f=(d?"https":"http")+"://maps.googleapis.com/maps/api/geocode/json?sensor=false&";for(var g in b)b.hasOwnProperty(g)&&(f+=encodeURIComponent(g)+"="+encodeURIComponent(b[g]));e.onload=function(){if(200!=this.status)return console.log("Received HTTP status code "+this.status+" when attempting geocoding request."),c(null);if(!this.responseText||!this.responseText.length)return console.log("Received empty data when attempting geocoding request."),c(null);var b=!1,d=0,e=[];try{b=JSON.parse(this.responseText)}catch(f){return console.log("Received invalid JSON data when attempting geocoding request."),c(null)}if(b&&b.status){if("OVER_QUERY_LIMIT"===b.status)return console.log("Exceeded daily quota when attempting geocoding request."),c(null);if("OK"===b.status&&b.results){for(;d<b.results.length;d++)e.push(a.GoogleAPIProvider.prototype.mapToGeocoded(b.results[d]));return c(e)}}return console.log("Received unexpected JSON data when attempting geocoding request."),c(null)},e.open("GET",f),e.send()}var d,e;a.GoogleAPIProvider=function(a){a=a?a:{},d=a.useSSL?a.useSSL:!1,e=a.apiKey?a.apiKey:null},a.GoogleAPIProvider.prototype=new a.ProviderBase,a.GoogleAPIProvider.prototype.constructor=a.GoogleAPIProvider,a.GoogleAPIProvider.prototype.geocode=function(a,b){var c={address:a};e&&(c.key=e),this.executeRequest(c,b)},a.GoogleAPIProvider.prototype.geodecode=function(a,b,c){var d={latlng:a+","+b};e&&(d.key=e),this.executeRequest(d,c)},a.GoogleAPIProvider.prototype.executeRequest=function(a,e){if("undefined"!=typeof XMLHttpRequest)return c(a,e);try{{require("url"),require(d?"https":"http")}return b(a,e)}catch(f){}return e(null)},a.GoogleAPIProvider.prototype.mapToGeocoded=function(b){var c=new a.Geocoded;c.latitude=b.geometry.location.lat,c.longitude=b.geometry.location.lng;for(var d in b.address_components)for(var e in b.address_components[d].types)switch(b.address_components[d].types[e]){case"street_number":c.streetNumber=b.address_components[d].long_name;break;case"route":c.streetName=b.address_components[d].long_name;break;case"locality":c.city=b.address_components[d].long_name;break;case"administrative_area_level_1":c.region=b.address_components[d].long_name;break;case"postal_code":c.postal_code=b.address_components[d].long_name}return c}}(GeocoderJS),"undefined"==typeof GeocoderJS&&"function"==typeof require)var GeocoderJS=require("../GeocoderJS.js");if(function(a){"use strict";a.MapquestProvider=function(a){"object"!=typeof a&&(a={});var b={apiKey:""};for(var c in b)void 0===a[c]&&(a[c]=b[c]);this.apiKey=a.apiKey},a.MapquestProvider.prototype=new a.ProviderBase,a.MapquestProvider.prototype.constructor=a.MapquestProvider,a.MapquestProvider.prototype.geocode=function(a,b){this.executeRequest({location:a},b)},a.MapquestProvider.prototype.mapToGeocoded=function(b){var c=new a.Geocoded;return c.latitude=b[0].latLng.lat,c.longitude=b[0].latLng.lng,c.city=b[0].adminArea5,c.region=b[0].adminArea4,c},a.MapquestProvider.prototype.executeRequest=function(b,c){var d=new XMLHttpRequest,e="http://open.mapquestapi.com/geocoding/v1/address?outFormat=json&location="+encodeURIComponent(b.location);this.apiKey&&(e+="&key="+this.apiKey),d.onload=function(){if(200!=this.status)return console.log("Received HTTP status code "+this.status+" when attempting geocoding request."),c(null);if(!this.responseText||!this.responseText.length)return console.log("Received empty data when attempting geocoding request."),c(null);var b=!1,d=0,e=[];try{b=JSON.parse(this.responseText)}catch(f){return console.log("Received invalid JSON data when attempting geocoding request."),c(null)}if(b&&b.info){if("OVER_QUERY_LIMIT"===b.status)return console.log("Exceeded daily quota when attempting geocoding request."),c(null);if(0===b.info.statuscode&&b.results){for(;d<b.results.length;d++)e.push(a.MapquestProvider.prototype.mapToGeocoded(b.results[d].locations));return c(e)}}return console.log("Received unexpected JSON data when attempting geocoding request."),c(null)},d.open("GET",e),d.send()}}(GeocoderJS),"undefined"==typeof GeocoderJS&&"function"==typeof require){var GeocoderJS=require("../GeocoderJS.js");require("../Geocoded.js"),require("../ExternalURILoader.js"),require("../providers/ProviderBase.js")}!function(a){"use strict";a.OpenStreetMapProvider=function(a){if(void 0===a)throw"No external loader defined.";this.externalLoader=a},a.OpenStreetMapProvider.prototype=new a.ProviderBase,a.OpenStreetMapProvider.prototype.constructor=a.OpenStreetMapProvider,a.OpenStreetMapProvider.prototype.geocode=function(a,b){this.externalLoader.setOptions({protocol:"http",host:"nominatim.openstreetmap.org",pathname:"search"});var c={format:"json",q:a,addressdetails:1};this.executeRequest(c,b)},a.OpenStreetMapProvider.prototype.geodecode=function(a,b,c){this.externalLoader.setOptions({protocol:"http",host:"nominatim.openstreetmap.org",pathname:"reverse"});var d={format:"json",lat:a,lon:b,addressdetails:1,zoom:18},e=this;this.externalLoader.executeRequest(d,function(a){var b=[];b.push(e.mapToGeocoded(a)),c(b)})},a.OpenStreetMapProvider.prototype.executeRequest=function(a,b){var c=this;this.externalLoader.executeRequest(a,function(a){var d=[];for(var e in a)d.push(c.mapToGeocoded(a[e]));b(d)})},a.OpenStreetMapProvider.prototype.mapToGeocoded=function(b){var c=new a.Geocoded;return c.latitude=1*b.lat,c.longitude=1*b.lon,c.streetNumber=void 0!==b.address.house_number?b.address.house_number:void 0,c.streetName=b.address.road,c.city=b.address.city,c.region=b.address.state,c.postal_code=b.address.postcode,c}}(GeocoderJS);