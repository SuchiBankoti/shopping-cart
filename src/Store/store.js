import {createContext, useCallback, useEffect,useState } from "react"
import { checkForSearch } from "../tools"

const MyContext = createContext()


function MyProvider({children}) {
    const [products, setProducts] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [searchResults, setSearchResults] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [filterResults, setFilterResults] = useState([])
  const[triggerFilter,setTriggerFilter]=useState(false)
  const[userProfile,setUserProfile]=useState({})

    useEffect(() => {
        (async ()=> {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            const p = data.products
            setProducts(p)
            setSearchResults(p)
        })()
    }, [])
    
    const startSearch = useCallback((str) => {
        setSearchResults(products.filter(product => checkForSearch(product.title, str)))
    }, [products])
  
    const addTocart = (id) => {
        const selectedProduct = products.find((product) => product.id === id);
       if (selectedProduct) {
      setCartItems((prevCartItems) => [...prevCartItems, selectedProduct]);
      }
    }
   
    const removeFromcart = (id) => {
        setCartItems((prev) => {
          let removed = false;
          const updatedCart = prev.filter((item) => {
            if (!removed && item.id === id) {
              removed = true;
              return false;
            }
            return true;
          });
          return updatedCart;
        });
      };
    
  const filterAction = (minVal, maxVal) => {
    const result = products.filter(product => {
      if (product.price >= Number(minVal) && product.price<=Number(maxVal)) {
        return product
      }
    })
    setFilterResults(result)
   }
    
    return (
        <MyContext.Provider
            value={
               {products,
                startSearch,
                searchValue,
                setSearchValue,
                searchResults,
                addTocart,cartItems,removeFromcart,userProfile,setUserProfile,filterAction,filterResults,triggerFilter,setTriggerFilter}
            }
        >
            {children}
        </MyContext.Provider>
    )
}
export { MyProvider, MyContext}