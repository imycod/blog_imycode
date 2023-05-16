const backendListData = [
    {
        aliasName: 'xxx1',
        approvalStatus: '0',
        approvalStatusName: '未填写',
        // ...
    },
    {
        aliasName: 'xxx2',
        approvalStatus: '0',
        approvalStatusName: '未填写',
        // ...
    },
    {
        aliasName: 'xxx3',
        approvalStatus: '0',
        approvalStatusName: '未填写',
        // ...
    },
    {
        aliasName: 'xxx4',
        approvalStatus: '0',
        approvalStatusName: '未填写',
        // ...
    },
    [
        {
            aliasName: 'xxx1',
            approvalStatus: '0',
            approvalStatusName: '未填写2222',
            // ...
        },
    ],
]

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


function handleObject(entry, model) {
    const newObject = {};
    // Loop through the keys of the object
    Object.keys(entry).forEach(oldKey => {
        // If the old key is found in the model, map it to the new key and create a new key in the object
        if (model.hasOwnProperty(oldKey)) {
            newObject[model[oldKey]] = entry[oldKey];
        }
        // Otherwise just keep the original key/value pair as is
        else {
            newObject[oldKey] = entry[oldKey];
        }
    });
    return newObject
}

function handleArrays() {

}

function handleNormal() {

}

function transferModel(list, opt = {}) {
    let newList = []
    function main(list, opt) {
        // Access the key-mapping object/model
        const { isDeep, deepKey, model } = opt
        // Loop through the array of objects (backendListData)
        const mappedData = list.map(entry => {
            // For each object, create a new object with remapped/renamed keys
            if (checkType(entry) == 'Object') {
                let newObject = handleObject(entry, model)
                newList.push(newObject)
            }
            if (checkType(entry) == 'Array') {
                main(entry, { model })
            }

        });
        // Return the new object with remapped keys
        newList.push(mappedData)
    }

    main(list, opt)
    return newList
}


const model = {
    aliasName: 'name',
    approvalStatus: 'tag',
}

const list = transferModel(backendListData, { model: model })

console.log(list);