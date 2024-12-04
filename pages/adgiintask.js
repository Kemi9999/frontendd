import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { words } from 'pages/data.js'

const Searchbar = () => {
    const [activeSearch, setActiveSearch] = useState([])

    const handleSearch = (e) => {
        if (e.target.value === '') {
            setActiveSearch([])
            return false
        }
        setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0, 8))
    }

    return (
        <form className='w-[500px] relative'>
            <div className="relative">
                <input 
                    type="search" 
                    placeholder='Type Here' 
                    className='w-full p-4 rounded-full bg-slate-800' 
                    onChange={(e) => handleSearch(e)} 
                />
                <button className='absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-600 rounded-full'>
                    <AiOutlineSearch size={24} color="white" />
                </button>
            </div>

            {
                activeSearch.length > 0 && (
                    <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                        {
                            activeSearch.map(s => (
                                <span key={s}>{s}</span>
                            ))
                        }
                    </div>
                )
            }
        </form>
    )
}

export default Searchbar
