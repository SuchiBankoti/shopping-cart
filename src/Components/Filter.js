import { useContext, useState } from "react"
import "./Filter.css"
import { MyContext } from "../Store/store"
import {FaFilter} from "react-icons/fa"

export default function Filter() {
    const{filterAction,setTriggerFilter}=useContext(MyContext)
    const [filterValues, setFilterValues] = useState({
        min: 0,
        max:100000
    })
    const handleChange = (e) => {
        setFilterValues(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const startFilter = () => {
        setTriggerFilter(true)
        filterAction(filterValues.min, filterValues.max)
    }
   

    return (
        <div className="filter">
            <div><FaFilter className="icon"/></div>
            <div className="filter-all" onClick={()=>setTriggerFilter(false)}>All</div>
            <label className="filter-label">
                Min
            <input name="min" type="number" value={filterValues.min} onChange={handleChange} className="filter-input"/>
            </label>
            <label  className="filter-label">
               Max
            <input name="max" type="number" value={filterValues.max} onChange={handleChange}  className="filter-input"/>
            </label>
            <button onClick={startFilter} className="apply-filter-btn">Apply</button>
        </div>
    )
}