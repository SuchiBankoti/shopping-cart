import { useContext, useMemo} from "react"
import "../CSS/Home.css"
import Product from "./Product"
import Navbar from "./Navbar"
import { MyContext } from "../Store/store"
import Filter from "./Filter"

export default function Home() {
    const { products, searchValue, searchResults,filterResults,triggerFilter} = useContext(MyContext)
    
    const renderProduct = (arr) => {
        return arr.map((product) => <Product key={product.id} product={product} />)
    }
    const renderContent = useMemo(() => {
       let comp=null
        if (searchValue) {
            comp=searchResults.length>0?renderProduct(searchResults):<div>No Items match</div>
        }else if(triggerFilter) {
            comp=filterResults.length>0?renderProduct(filterResults):<div>No items match</div>
        }
        else {
            comp=renderProduct(products)
        }
         return <div className="home-page-main-content">{comp}</div>
    }, [products,searchResults,searchValue,triggerFilter,filterResults])
     
    return (
        <div className="home-page">
        <div className="home-page-navbar">
            <Navbar/>
        </div>
        <div className="home-page-main">
                <div className="home-page-main-filter">
                    <Filter/>
                </div>
                {renderContent}
        </div>
    </div>
        )
}