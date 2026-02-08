const data = [
    { id: 1, name: "Parent 1", parentId: null },
    { id: 2, name: "Child 1.1", parentId: 1 },
    { id: 3, name: "Child 1.2", parentId: 1 },
    { id: 4, name: "Parent 2", parentId: null },
    { id: 5, name: "Child 2.1", parentId: 4 }
];
result = [
    {
        id: 1, name: "Parent 1", parentId: null, children: [
            { id: 2, name: "Child 1.1", parentId: 1 },
            { id: 3, name: "Child 1.2", parentId: 1 },
        ]
    },
    {
        id: 4, name: "Parent 2", parentId: null, children: [
            { id: 5, name: "Child 2.1", parentId: 4 }
        ]
    },
]
function buildTree(data) {
    const map = {}
    const result = []
    data?.forEach(item => {
        map[item.id] = { ...item, children: [] };
    });
    data.forEach((item) => {
        if (item.parentId === null) {
            result.push(map[item.id])
        } else {
            console.log("map:",map[item.id]);
            
            map[item.parentId].children.push(map[item.id])
        }
    })
    
    return result;
}

const tree = buildTree(data);
console.log(tree);