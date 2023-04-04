interface IGenderItem {
    value: string,
    name: string,
}

const genderList: IGenderItem[] = [
    {
        value: 'female',
        name: 'Female'
    },
    {
        value: 'male',
        name: 'Male'
    },
    {
        value: 'other',
        name: 'Other'
    }
]

export default genderList;