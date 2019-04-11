var faceBookPosts = [
    { day: 'Saturday', likes:20 },
    { day: 'Sunday', likes:75 },
    { day: 'Monday', likes:124 },
    { day: 'Tuesday', likes:211 },
    { day: 'Wednesday', likes:520 },
    { day: 'Thrusday', likes:712 },
    { day: 'Friday', likes:1011 }
  ];
  // What we need
  //popularPosts=[{ day: 'Wednesday', likes:520 }, { day: 'Thrusday', likes:712 }]
  
  var popularPosts = [];
  
  for (var i = 0, max = faceBookPosts.length; i < max; i++) {
    if(faceBookPosts[i].likes>=500)
        popularPosts.push(faceBookPosts[i]);
  }
  console.log('Result Using For:');
  console.log(popularPosts);
  
  
  faceBookPosts.forEach(faceBookPost=>{
    if(faceBookPost.likes>=500)
        popularPosts.push(faceBookPost);
  }); 
  console.log('Result Using ForEach:');
  console.log(popularPosts);


  //with filter

 var popularFilterPosts = faceBookPosts.filter( (post) => post.likes>=500 ); 
 console.log('Result Using For:');
 console.log(popularFilterPosts);


//Implementation
var filter = function (array, callback) {
 
    var filtered_array = [];
 
    array.forEach(function (element, index, array) {
        if (callback(element, index, array)) {
            filtered_array.push(element);    
        }
    });
 
    return filtered_array;
 
};
var popularTestPosts = filter(faceBookPosts, function (post) {
    return post.likes>=500;
  }); 
console.log('How the Filter works:');
console.log(popularTestPosts);
 