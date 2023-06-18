import './filter.css'
import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ascendByPrice, descendByPrice, setRating, setCategory, clearFilters } from '../../redux/slices/filterslice'
export default function Filter() {
    const refElem1 = useRef()
    const refElem2 = useRef()
    const refElem3 = useRef()
    const refElem4 = useRef()

    const dispatch = useDispatch()
    const filterInfo = useSelector(state => state.filterInfo)

    function setRatingIndex() {
        if (refElem3.current) {
            switch (filterInfo.filtersObj.rating) {
                case 4:
                    refElem3.current.selectedIndex = 1
                    break
                case 4.25:
                    refElem3.current.selectedIndex = 2
                    break
                case 4.50:
                    refElem3.current.selectedIndex = 3
                    break
                case 4.75:
                    refElem3.current.selectedIndex = 4
                    break
                default:
                    refElem3.current.selectedIndex = 0
                    break;

            }
        }

    }

    function setCategoryIndex() {
        if (refElem4.current) {
            switch (filterInfo.filtersObj.category) {
                case "smartphones":
                    refElem4.current.selectedIndex = 1
                    break
                case "laptops":
                    refElem4.current.selectedIndex = 2
                    break
                case "fragrances":
                    refElem4.current.selectedIndex = 3
                    break
                case "skincare":
                    refElem4.current.selectedIndex = 4
                    break
                case "groceries":
                    refElem4.current.selectedIndex = 5
                    break
                case "home-decoration":
                    refElem4.current.selectedIndex = 6
                    break
                default:
                    refElem4.current.selectedIndex = 0
                    break
            }

        }

    }


    useEffect(() => {
        if (filterInfo.filtersObj.sortType == 'asc') {
            refElem1.current.checked = true
        }
        else if (filterInfo.filtersObj.sortType == 'desc') {
            refElem2.current.checked = true
        }
        else {
            refElem1.current.checked = false
            refElem2.current.checked = false
        }
        setRatingIndex()
        setCategoryIndex()
    }, [])


    function reset() {
        refElem1.current.checked = false
        refElem2.current.checked = false
        refElem3.current.selectedIndex = 0
        refElem4.current.selectedIndex = 0
    }

    function nullRatingUpdate() {

        if (refElem3.current) {
            refElem3.current.selectedIndex = 0
        }
    }

    function nullCategoryUpdate() {

        if (refElem4.current) {
            refElem4.current.selectedIndex = 0
        }
    }

    return (
        <>
            {filterInfo.filtersObj.category === null && nullCategoryUpdate()}
            {filterInfo.filtersObj.rating === null && nullRatingUpdate()}
            {filterInfo.filtersObj.category !== null && setCategoryIndex()}
            {filterInfo.filtersObj.rating !== null && setRatingIndex()}

            <div className="filterContainer">


                <div className="filterDetails"><div style={{ fontSize: '1.4rem', color: 'darkblue' }}>Filter Products</div></div>



                <div className="filterDetails"><input ref={refElem1} type="radio" name='sortType' onClick={() => {

                    dispatch(ascendByPrice())
                }} />Lower to Higher Price</div>

                <div className="filterDetails"><input ref={refElem2} type="radio" name='sortType' onClick={() => {

                    dispatch(descendByPrice())
                }} />Higher to Lower Price</div>


                <div className="filterDetails"><select ref={refElem3} id="ratings1" onChange={e => e.target.value != "" ? dispatch(setRating(Number(e.target.value))) : dispatch(setRating(null))}>
                    <option value="">Choose Rating</option>
                    <option value="4">4 to 4.24</option>
                    <option value="4.25">4.25 to 4.49</option>
                    <option value="4.50">4.50 to 4.74</option>
                    <option value="4.75">4.75 to 5</option>

                </select></div>

                <div className="filterDetails"><select ref={refElem4} id="category1" onChange={e => String(e.target.value) != "" ? dispatch(setCategory(String(e.target.value))) : dispatch(setCategory(null))}>
                    <option value="">Choose Category</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skincare</option>
                    <option value="groceries">Groceries</option>
                    <option value="home-decoration">Home-decoration</option>

                </select></div>

                <div className="filterDetails"><button onClick={() => {
                    dispatch(clearFilters())
                    reset()
                }}>Clear Filters</button></div>

            </div>
        </>

    )
}