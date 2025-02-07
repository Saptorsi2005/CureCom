import React from 'react'

const AllAppointments = () => {
    return (
        <div>
            <Card>
                <CardContent>
                    <h3 className="text-lg font-bold">All Appointments</h3>
                    <table className="w-full mt-3 border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2">#</th>
                                <th className="border p-2">Patient</th>
                                <th className="border p-2">Department</th>
                                <th className="border p-2">Age</th>
                                <th className="border p-2">Date & Time</th>
                                <th className="border p-2">Doctor</th>
                                <th className="border p-2">Fees</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2">1</td>
                                <td className="border p-2">Richard James</td>
                                <td className="border p-2">Cardiology</td>
                                <td className="border p-2">28</td>
                                <td className="border p-2">24th July, 2024, 10-AM</td>
                                <td className="border p-2">Dr. Richard James</td>
                                <td className="border p-2">$50</td>
                            </tr>
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    )
}

export default AllAppointments
