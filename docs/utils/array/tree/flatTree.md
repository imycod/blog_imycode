## 深度打平并去掉children

```js

// Function to check the type of input parameter
function checkType(input) {
    if (input.constructor === Array) {
        return "Array";
    } else if (typeof input === "object") {
        return "Object";
    } else if (typeof input === "string") {
        return "String";
    } else if (typeof input === "number") {
        return "Number";
    } else if (typeof input === "boolean") {
        return "Boolean";
    } else {
        return "Other";
    }
}


treeData = treeData.flat(Infinity)
function flatDeepTree(treeData, is_del_child = true) {
    let result = []

    function run(treeData) {
        for (let index = 0; index < treeData.length; index++) {
            const tree = treeData[index];
            if (tree.children) {
                result.push(tree)
                if (checkType(tree.children) == "Array") {
                    if (is_del_child) {
                        let copy = [...tree.children]
                        delete tree.children
                        run(copy)
                    } else {
                        run(tree.children)
                    }
                }
            } else {
                result.push(tree)
            }
        }
    }
    run(treeData)

    return result.filter(val => {
        if (checkType(val) == "Object") {
            return Object.keys(val).length !== 0
        }else{
            return val
        }
    })
}
```



