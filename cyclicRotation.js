///**
// * Created by yoneta on 3/23/16.
// */

//A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
//
//    For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
//
//    Write a function:
//
//function cyclicRotation(A, K);
//
//that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
//
//    For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].\

//Input: 2 inputs - array & rotation, an array and a number.

//Output: an array (with the numbers rearranged)

//Tools: loop- the loop will run for the number of rotations that we want the array to run through.

//Shift, Unshift, Push, and Pop methods to with with , we want to use them to get the last element in the array and move it to the beginning each time the loops runs 

//Output the array once the loop has finished.

function cyclicRotation(arr, rotation) {

    for(let i = 0; i < rotation; i++){
        let a =arr.pop();
        arr.unshift(a);
    } 
    return arr;
    }

    console.log(cyclicRotation([1,2,3], 2));
    