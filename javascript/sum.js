/**

 @version: 0.0.1

 @Time: 2019/1/14 上午11:19

 @Author: wangxiaoye

 @Desc: ==============================================

 Life is Short I Use js!!!===

 If this runs wrong,don't ask me,I don't know why; ===

 If this runs right,thank god,and I don't know why. ===

 Maybe the answer,my friend,is blowing in the wind. ===

 ======================================================

 @Project: algorithm

 @FileName: sum

 @Software: WebStorm

 @Blog：
 */

'use strict'

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let x1 = 0;
    let j1= 1;
    for (let i =0; i< nums.length; i++) {
        for (let j = 1; j< nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                x1 = i;
                j1 = j
            }
        }
    }
    return [x1, j1]
};
