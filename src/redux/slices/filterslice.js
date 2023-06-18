import { createSlice } from '@reduxjs/toolkit'


function filtersRemover(state) {
    state.filteredItems = []
    state.filtersObj = {
        ...{
            sortType: '',
            rating: null,
            category: null
        }
    }
}

function fetch_Current_Rating_Items(stateCopy) {
    return [...stateCopy.unfilteredItems].filter(item => Number(item.rating) >= Number(stateCopy.filtersObj.rating) && Number(item.rating) < Number(stateCopy.filtersObj.rating) + 0.25)
}
function fetch_Current_Category_Items(stateCopy) {
    return [...stateCopy.unfilteredItems].filter(item => String(item.category) == String(stateCopy.filtersObj.category))
}

function alert_FilteredItem_NonAvailable(stateCopy) {
    alert(`Currently there is no product under ${stateCopy.filtersObj.category} category having Rating: ${stateCopy.filtersObj.rating}-${stateCopy.filtersObj.rating + 0.24}`)
}

function sortLowerToHigherPrice(arr, stateCopy) {
    arr.sort((a, b) => +a.price - +b.price)
    stateCopy.filteredItems = arr
}
function sortHigherToLowerPrice(arr, stateCopy) {
    arr.sort((a, b) => +b.price - +a.price)
    stateCopy.filteredItems = arr
}

function applyFilter(stateCopy, filterType, previousVal) {

    let switchArr = [stateCopy.filtersObj.sortType != '', stateCopy.filtersObj.rating !== null, stateCopy.filtersObj.category !== null]

    if (switchArr[0] == false && switchArr[1] == false && switchArr[2] == true) {

        stateCopy.filteredItems = fetch_Current_Category_Items(stateCopy)
    }
    else if (switchArr[0] == false && switchArr[1] == true && switchArr[2] == false) {
        stateCopy.filteredItems = fetch_Current_Rating_Items(stateCopy)
    }
    else if (switchArr[0] == false && switchArr[1] == true && switchArr[2] == true) {

        if (filterType == 'rating') {
            let temp = fetch_Current_Category_Items(stateCopy)

            let temp1 = temp.filter(item => Number(item.rating) >= Number(stateCopy.filtersObj.rating) && Number(item.rating) < Number(stateCopy.filtersObj.rating) + 0.25)
            if (temp1.length > 0) {
                stateCopy.filteredItems = temp1
            } else {
                alert_FilteredItem_NonAvailable(stateCopy)

                if (previousVal !== null) {
                    stateCopy.filtersObj.rating = previousVal
                } else {
                    stateCopy.filteredItems = temp
                    stateCopy.filtersObj.rating = null
                }
            }


        } else if (filterType == 'category') {
            let temp = fetch_Current_Rating_Items(stateCopy)

            let temp1 = temp.filter(item => String(item.category) == String(stateCopy.filtersObj.category))
            if (temp1.length > 0) {
                stateCopy.filteredItems = temp1
            } else {
                alert_FilteredItem_NonAvailable(stateCopy)
                if (previousVal !== null) {
                    stateCopy.filtersObj.category = previousVal
                } else {
                    stateCopy.filteredItems = temp
                    stateCopy.filtersObj.category = null
                }
            }

        } else {
            let temp = fetch_Current_Rating_Items(stateCopy)

            let temp1 = temp.filter(item => String(item.category) == String(stateCopy.filtersObj.category))

            if (temp1.length > 0) {
                stateCopy.filteredItems = temp1
            } else {
                stateCopy.filteredItems = temp
                alert_FilteredItem_NonAvailable(stateCopy)
                stateCopy.filtersObj.category = null
            }
        }


    }
    else if (switchArr[0] == true && switchArr[1] == false && switchArr[2] == false) {
        stateCopy.filtersObj.sortType == 'asc' ? sortLowerToHigherPrice([...stateCopy.unfilteredItems], stateCopy) : sortHigherToLowerPrice([...stateCopy.unfilteredItems], stateCopy)
    }
    else if (switchArr[0] == true && switchArr[1] == false && switchArr[2] == true) {
        let temp = fetch_Current_Category_Items(stateCopy)
        stateCopy.filtersObj.sortType == 'asc' ? sortLowerToHigherPrice(temp, stateCopy) : sortHigherToLowerPrice(temp, stateCopy)
    }
    else if (switchArr[0] == true && switchArr[1] == true && switchArr[2] == false) {
        let temp = fetch_Current_Rating_Items(stateCopy)
        stateCopy.filtersObj.sortType == 'asc' ? sortLowerToHigherPrice(temp, stateCopy) : sortHigherToLowerPrice(temp, stateCopy)
    }
    else if (switchArr[0] == true && switchArr[1] == true && switchArr[2] == true) {
        if (stateCopy.filtersObj.sortType == 'asc') {
            if (filterType == 'rating') {
                let temp1 = fetch_Current_Category_Items(stateCopy)

                let temp2 = temp1.filter(item => Number(item.rating) >= Number(stateCopy.filtersObj.rating) && Number(item.rating) < Number(stateCopy.filtersObj.rating) + 0.25)

                if (temp2.length > 0) {
                    sortLowerToHigherPrice(temp2, stateCopy)
                } else {
                    alert_FilteredItem_NonAvailable(stateCopy)
                    if (previousVal !== null) {
                        stateCopy.filtersObj.rating = previousVal
                    } else {
                        sortLowerToHigherPrice(temp1, stateCopy)
                        stateCopy.filtersObj.rating = null
                    }
                }


            } else if (filterType == 'category') {
                let temp1 = fetch_Current_Rating_Items(stateCopy)

                let temp2 = temp1.filter(item => String(item.category) == String(stateCopy.filtersObj.category))

                if (temp2.length > 0) {
                    sortLowerToHigherPrice(temp2, stateCopy)
                } else {
                    alert_FilteredItem_NonAvailable(stateCopy)
                    if (previousVal !== null) {
                        stateCopy.filtersObj.category = previousVal
                    } else {
                        sortLowerToHigherPrice(temp1, stateCopy)
                        stateCopy.filtersObj.category = null
                    }
                }



            } else {
                let temp1 = fetch_Current_Rating_Items(stateCopy)

                let temp2 = temp1.filter(item => String(item.category) == String(stateCopy.filtersObj.category))

                if (temp2.length > 0) {
                    sortLowerToHigherPrice(temp2, stateCopy)
                } else {
                    sortLowerToHigherPrice(temp1, stateCopy)
                    alert_FilteredItem_NonAvailable(stateCopy)
                    stateCopy.filtersObj.category = null
                }
            }


        } else {
            if (filterType == 'rating') {
                let temp1 = fetch_Current_Category_Items(stateCopy)

                let temp2 = temp1.filter(item => Number(item.rating) >= Number(stateCopy.filtersObj.rating) && Number(item.rating) < Number(stateCopy.filtersObj.rating) + 0.25)

                if (temp2.length > 0) {
                    sortHigherToLowerPrice(temp2, stateCopy)
                } else {
                    alert_FilteredItem_NonAvailable(stateCopy)
                    if (previousVal !== null) {
                        stateCopy.filtersObj.rating = previousVal
                    } else {
                        sortHigherToLowerPrice(temp1, stateCopy)
                        stateCopy.filtersObj.rating = null
                    }

                }
            } else if (filterType == 'category') {
                let temp1 = fetch_Current_Rating_Items(stateCopy)

                let temp2 = temp1.filter(item => String(item.category) == String(stateCopy.filtersObj.category))

                if (temp2.length > 0) {
                    sortHigherToLowerPrice(temp2, stateCopy)
                } else {
                    alert_FilteredItem_NonAvailable(stateCopy)
                    if (previousVal !== null) {
                        stateCopy.filtersObj.category = previousVal
                    } else {
                        sortHigherToLowerPrice(temp1, stateCopy)
                        stateCopy.filtersObj.category = null
                    }
                }
            } else {
                let temp1 = fetch_Current_Rating_Items(stateCopy)

                let temp2 = temp1.filter(item => String(item.category) == String(stateCopy.filtersObj.category))

                if (temp2.length > 0) {
                    sortHigherToLowerPrice(temp2, stateCopy)
                } else {
                    sortHigherToLowerPrice(temp1, stateCopy)
                    alert_FilteredItem_NonAvailable(stateCopy)
                    stateCopy.filtersObj.category = null
                }
            }
        }
    } else {
        stateCopy.filteredItems = []
    }
}

const makeFilterSlice = createSlice({
    name: 'filterSlice',
    initialState: {
        unfilteredItems: [],
        searchItems: [],
        filteredItems: [],
        filtersObj: {
            sortType: '',
            rating: null,
            category: null
        },
        searchQuery: '',
        searchFound: null
    },
    reducers: {
        setItems: (state, action) => {
            if (state.unfilteredItems == 0) {
                for (let dataItem of action.payload) {
                    state.unfilteredItems.push(dataItem)
                }
            }
        },
        ascendByPrice: (state, action) => {
            state.filtersObj.sortType = 'asc'
            applyFilter(state)
        },
        descendByPrice: (state, action) => {
            state.filtersObj.sortType = 'desc'
            applyFilter(state)
        },
        setRating: (state, action) => {
            const previousRating = state.filtersObj.rating
            state.filtersObj.rating = action.payload ? Number(action.payload) : null

            applyFilter(state, 'rating', previousRating)
        },
        setCategory: (state, action) => {
            const previousCategory = state.filtersObj.category
            state.filtersObj.category = action.payload ? String(action.payload) : null

            applyFilter(state, 'category', previousCategory)
        },
        clearFilters: (state, action) => {

            filtersRemover(state)
            applyFilter(state)

        },
        searchOutItems: (state, action) => {
            if (action.payload != '') {
                let searchString = String(action.payload).replace(/\s/g, '').toLowerCase()
                state.searchQuery = action.payload
                let temp = [...state.unfilteredItems].filter(item => item.title.replace(/\s/g, '').toLowerCase().includes(searchString))
                if (temp.length == 0) {
                    state.searchFound = false
                    state.searchQuery = action.payload
                    state.searchItems = []
                } else {
                    state.searchFound = true
                    state.searchItems = temp
                }
            } else {
                state.searchQuery = ''
                state.searchItems = []
                state.searchFound = null
            }
        },
        clearSearch: (state, action) => {
            state.searchQuery = ''
            state.searchItems = []
            state.searchFound = null
        }
    }
})

export const { setItems, ascendByPrice, descendByPrice, setRating, clearFilters, setCategory, searchOutItems, clearSearch } = makeFilterSlice.actions
export default makeFilterSlice.reducer