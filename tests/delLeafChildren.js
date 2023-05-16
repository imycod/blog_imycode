const nativePlace = [
    // 省
    {
        label: "河南省",
        children: [
            // 市
            {
                label: '孟州市',
                children: [
                    // 区
                    {
                        label: '海头村'
                    }
                ]
            },
            {
                label: '孟州222市',
                children: [
                    // 区
                    {
                        label: '海头村'
                    }
                ]
            }
        ]
    }
]



// function removeDistrict(nativePlace) {
//   nativePlace.forEach(province => {
//     province.children.forEach(city => {
//       city.children = city.children.map(district => {
//         return { label: district.label.replace(/区/g, '') }
//       })
//     })
//   })
//   return nativePlace
// }

function removeDistrictChildren(nativePlace) {
    nativePlace.forEach(province => {
        province.children.forEach(city => {
            delete city.children
        })
    })
}

removeDistrictChildren(nativePlace)

console.log(JSON.stringify(nativePlace));