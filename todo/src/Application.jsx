import { useState } from "react";

let nextId = 0;

function Application() {
    const [items, setItems] = useState([

    ]);

    const [value, setValue] = useState("")


    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        setItems([
            ...items,
            { id: nextId++, task: value }
        ]

        )
        setValue("")
    }


    return (
        <div className='flex flex-col gap-3'>
            <div className='w-full h-auto bg-red-800 p-2 flex justify-between items-center text-xl font-bold'>
                 <h2>Number of task : {items.length}</h2>
                 <h3>Completed task : 3</h3>
            </div>
            <div className='flex gap-4'>
                <input value={value} onChange={handleChange} placeholder="Enter task"  className='w-full h-12 border-2 border-red-50 text-red-50 font-bold text-base placeholder:text-white/30 pl-2' />
                <button onClick={handleClick}   className='bg-red-700 text-red-50 text-4xl w-12 h-12 flex items-center justify-center'>+</button>
            </div>
            <ul className='flex flex-col gap-5'>
                {items.map(item =>
                    <li key={item.id} className='text-2xl text-amber-50'>
                        <div className='flex justify-between gap-4' >
                            <div className='bg-red-50 p-2 w-full text-2xl font-bold text-black flex items-center justify-start px-4'>{item.task}</div>
                            <button onClick={() => { }} className='rounded-full h-12 w-12 bg-white text-xs text-black flex items-center justify-center'>done</button>
                        </div>
                    </li>
                )}
            </ul>

        </div>
    )
}

export default Application