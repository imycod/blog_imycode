// 级联选择器

const selectIds = [
    [
        "9c76a2c3a8fcb7e606d7349fd045fa97",
        "ae8d267fde329f9d8e141b791cb5b39e",
        "873"
    ],
    [
        "9c76a2c3a8fcb7e606d7349fd045fa97",
        "ae8d267fde329f9d8e141b791cb5b39e",
        "777"
    ],
    [
        "9c76a2c3a8fcb7e606d7349fd045fa97",
        "ae8d267fde329f9d8e141b791cb5b39e",
        "664"
    ],
    [
        "9c76a2c3a8fcb7e606d7349fd045fa97",
        "309"
    ],
    [
        "bf4a9a34ce72913db48298ba4f42b531"
    ]
]


function filterById(selectIds, currentId) {
    // 创建一个空数组来存储过滤后的结果
    let filtered = [];
    // 遍历selectIds数组中的每个对象
    for (let arr of selectIds) {
        // 检查对象中是否有id4属性，并且它的值是否等于currentId
        if (arr.includes(currentId)) {
            // 如果是，跳过这个对象，不添加到过滤后的结果中
            continue;
        } else {
            // 如果不是，添加这个对象到过滤后的结果中
            filtered.push(arr);
        }
    }
    // 返回过滤后的结果
    return filtered;
}

console.log(filterById(selectIds, '309'));