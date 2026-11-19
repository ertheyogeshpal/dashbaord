import { IndianRupee, LayoutDashboard, School, SquareBookmark, UserRoundGroup } from 'lucide-react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminLayout = () => {

    return (
        <div className='h-screen flex'>
        <aside className='h-screen w-70'>
            <h1 className=' px-4 py-6 text-2xl text-center  outline-1 outline-gray-200'>Admin Panel</h1>
            <ul className='flex flex-col'>
                <h4 className='mx-4 px-2 text-gray-400 font-semibold mt-5'>STUDENTS</h4>
                <li className='w-full flex rounded-xl'>
                    <Link className='w-full flex gap-2 px-6 py-2 hover:bg-purple-100 rounded-lg mx-3 hover:text-purple-600' to='/admin'><LayoutDashboard />
                        Dashbaord
                    </Link>
                </li>
                <li className='w-full flex rounded-xl'>
                    <Link className='w-full flex gap-2 px-6 py-2 hover:bg-purple-100 rounded-lg mx-3 hover:text-purple-600'  to='/admin/class'><School />Class</Link>
                </li>
                <li className='w-full flex rounded-xl'>
                    <Link className='w-full flex gap-2 px-6 py-2 hover:bg-purple-100 rounded-lg mx-3 hover:text-purple-600' to='/admin/fee'><IndianRupee />Fee</Link>
                </li>
                <li className='w-full flex rounded-xl'>
                    <Link className='w-full flex gap-2 px-6 py-2 hover:bg-purple-100 rounded-lg mx-3 hover:text-purple-600' to='/admin/students'><UserRoundGroup />Students</Link>
                </li>
                
                <li className='w-full flex rounded-xl'>
                    <Link className='w-full flex gap-2 px-6 py-2 hover:bg-purple-100 rounded-lg mx-3 hover:text-purple-600' to='/admin/subjects'><SquareBookmark />Subjects</Link>
                </li>
            </ul>
            
        </aside>
        <div className='h-screen  flex-1 outline-1 outline-gray-200'>
            <header className='h-20 flex items-center justify-center text-2xl outline-1 outline-gray-200'>
                Header
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
        </div>
    )
}

export default AdminLayout
