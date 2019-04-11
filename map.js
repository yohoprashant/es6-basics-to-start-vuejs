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
//likesArray=[25, 124, 211, 420, 712]

var likesArray = [];
/* 
for (var i = 0, max = faceBookPosts.length; i < max; i++) {
  likesArray.push(faceBookPosts[i].likes);
}
 */

/* 
faceBookPosts.forEach(function (faceBookPost) {
  likesArray.push(faceBookPost.likes);
}); 
*/

/* 
faceBookPosts.forEach( (faceBookPost)=>likesArray.push(faceBookPost.likes)); 
*/


/* 
//using map function

likesArray = faceBookPosts.map(function (post) {
  console.log(post);
  return post.likes;
}); 
*/


/* 
//Implementation

var map = function (array, callback) {
 
  var new_array = [];
  array.forEach(function (element, index, array) {
     new_array.push(callback(element)); 
  });

  return new_array;

};
var likesArray = map(faceBookPosts, function (faceBookPost) {
  return faceBookPost.likes;
}); 
*/


/* 
likesArray = faceBookPosts.map(post=>post.likes);
*/
console.table(likesArray); 


/* likesArray = faceBookPosts.map((post, index, array)=>
{
  //console.log(index)
  //console.log(array);
  return post.likes
}
); */
