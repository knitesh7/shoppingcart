import {useState,createContext,useContext} from 'react'

const postContext = createContext(null)

export const usePostContext = ()=>{
    return useContext(postContext)
}

export const PostContextProvider = (props)=>{
    const [postsArr, setPostsArr] = useState([])
    return(
        <postContext.Provider value={{postsArr,setPostsArr}}>
            {props.children}
        </postContext.Provider>
    )

}