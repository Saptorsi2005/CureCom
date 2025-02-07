import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
    const [userData, setUserData] = useState({
        name: "Edward Vincent",
        image: assets.profile_pic,
        email: 'richardjameswap@gmail.com',
        phone: '+1 123-456-7890',
        address: {
            line1: "57th cross, richmond",
            line2: "circle, church road, london"
        },
        gender: 'Male',
        dob: '2000-01-20'
    })

    const [isEdit, setIsEdit] = useState(true)

    return (
        <div className='max-w-lg mx-auto flex flex-col gap-4 text-sm'>
            <img className='w-36 h-36 object-cover rounded-full mx-auto' src={userData.image} alt="Profile" />
            {
                isEdit
                    ? <input className='bg-gray-100 text-3xl font-medium max-w-60 mt-4 text-center' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
                    : <p className='font-medium text-3xl text-neutral-800 mt-4 text-center'>{userData.name}</p>
            }
            <hr className='bg-zinc-400 h-[1px] border-none' />
            
            <div>
                <p className='text-neutral-500 underline mt-3'>Contact Information</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                    <p className='font-medium'>Email:</p>
                    <p className='text-blue-500'>{userData.email}</p>
                    <p className='font-medium'>Phone:</p>
                    {
                        isEdit
                            ? <input className='bg-gray-100 rounded max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                            : <p className='text-blue-400'>{userData.phone}</p>
                    }
                    <p className='font-medium'>Address:</p>
                    {
                        isEdit
                            ? <div>
                                <input className='bg-gray-100 rounded w-full p-2 mt-1' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                                <input className='bg-gray-100 rounded w-full p-2 mt-1' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
                            </div>
                            : <p className='text-gray-500'>
                                {userData.address.line1}
                                <br />
                                {userData.address.line2}
                            </p>
                    }
                </div>
            </div>

            <div>
                <p className='text-neutral-500 underline mt-3'>Basic Info</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                    <p className='font-medium'>Gender:</p>
                    {
                        isEdit
                            ? <select className='bg-gray-100 rounded max-w-20' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            : <p className='text-gray-400'>{userData.gender}</p>
                    }
                    <p className='font-medium'>Birthdate:</p>
                    {
                        isEdit
                            ? <input className='bg-gray-100 rounded max-w-28' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                            : <p className='text-gray-400'>{userData.dob}</p>
                    }
                </div>
            </div>

            <div className='mt-10'>
                {
                    isEdit
                        ? <button className='border border-green-500 px-8 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all' onClick={() => setIsEdit(false)}>Save Information</button>
                        : <button className='border border-green-500 px-8 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
                }
            </div>
        </div>
    )
}

export default MyProfile
