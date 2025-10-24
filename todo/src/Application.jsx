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
            <div className='w-full h-56 bg-red-800 p-2 flex justify-between items-center'>
                <h1>This is To do app</h1>
                <div className='flex flex-col '>
                    <h2>number of task : {items.length}</h2>
                    <h3>done task : 3</h3>
                </div>
            </div>
            <div className='flex gap-4'>
                <input value={value} onChange={handleChange} className='w-full h-16 border-2 border-red-50 text-red-50 font-bold text-base' />
                <button onClick={handleClick} className='bg-amber-400 w-16 h-16'>+</button>
            </div>
            <ul className='flex flex-col gap-5'>
                {items.map(item =>
                    <li key={item.id} className='text-2xl text-amber-50'>
                        <div className='flex justify-between gap-2' >
                            <div className='bg-green-500 p-2 w-full text-base text-amber-50 flex items-center justify-start px-4'>{item.task}</div>
                            <button onClick={() => { }} className='rounded-full h-16 w-16 bg-yellow-400 flex items-center justify-center'></button>
                        </div>
                    </li>
                )}
            </ul>

        </div>
    )
}

export default Application