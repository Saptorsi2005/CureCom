import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

    const {speciality} = useParams()
    const {doctors} = useContext(AppContext)
    const [filterDoc , setFilterDoc] = useState([])
    const [showFilter, setShowFilter] = useState(false)
    const navigate = useNavigate()

    const applyFilter = () => {
        if(speciality){
            setFilterDoc(doctors.filter(doc=> doc.speciality === speciality))
        }
        else{
            setFilterDoc(doctors)
        }
    }

    useEffect(()=>{
        applyFilter()
    },[doctors,speciality])

    return (
        <div>
            <p className='text-gray-600 text-lg'>Browse Through the doctors specialist</p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                {/* Filter Button */}
                <button 
                    className={`py-2 px-4 border rounded text-sm sm:hidden transition-all ${showFilter ? 'bg-primary text-white' : 'bg-white'}`} 
                    onClick={() => setShowFilter(prev => !prev)}>
                    Filters
                </button>
                
                {/* Filter Options */}
                <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
                    {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((specialityOption) => (
                        <p 
                            key={specialityOption}
                            onClick={() => speciality === specialityOption ? navigate('/doctors') : navigate(`/doctors/${specialityOption}`)} 
                            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
                                ${speciality === specialityOption ? "bg-indigo-100 text-black" : ""}`}>
                            {specialityOption}
                        </p>
                    ))}
                </div>

                {/* Doctors List */}
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6'>
                    {
                        filterDoc.map((item, index) => (
                            <div 
                                key={index}
                                onClick={() => navigate(`/appointment/${item._id}`)} 
                                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 bg-blue-50">
                                <img className="w-full h-56 object-cover" src={item.image} alt={item.name} />
                                <div className="p-4">
                                    <div className="flex items-center gap-2 text-sm text-green-500">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <p>Available</p>
                                    </div>
                                    <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                                    <p className="text-gray-600 text-sm">{item.speciality}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Doctors
