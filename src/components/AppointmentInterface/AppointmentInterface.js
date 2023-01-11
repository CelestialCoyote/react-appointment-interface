import { useState, useEffect, useCallback } from 'react';
import { BiCalendar } from 'react-icons/bi';
import AddAppointment from "../AddAppointment/AddAppointment";
import AppointmentInfo from "../AppointmentInfo/AppointmentInfo";
import Search from '../Search/Search';
import './AppointmentInterface.css';


const AppointmentInterface = () => {

    let [appointmentList, setAppointmentList] = useState([]);
    let [query, setQuery] = useState("");
    let [sortBy, setSortBy] = useState("petName");
    let [orderBy, setOrderBy] = useState("asc");

    const filteredAppointments = appointmentList.filter(
        item => {
            return (
                item.petName.toLowerCase().includes(query.toLowerCase()) ||
                item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
                item.aptNotes.toLowerCase().includes(query.toLowerCase())
            )
        }
    ).sort((a, b) => {
        let order = (orderBy === 'asc') ? 1 : -1;
        return (
            a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
                ? -1 * order : 1 * order
        )
    })

    const fetchData = useCallback(() => {
        fetch('./data/data.json')
            .then(response => response.json())
            .then(data => {
                setAppointmentList(data)
            });
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    return (
        <div className='appointment-interface'>
            <h1 className=''>
                <BiCalendar className="" />Your Appointments</h1>
            <AddAppointment
                onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
                lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
            />
            <Search query={query}
                onQueryChange={myQuery => setQuery(myQuery)}
                orderBy={orderBy}
                onOrderByChange={mySort => setOrderBy(mySort)}
                sortBy={sortBy}
                onSortByChange={mySort => setSortBy(mySort)}
            />

            <ul className="">
                {filteredAppointments
                    .map(appointment => (
                        <AppointmentInfo key={appointment.id}
                            appointment={appointment}
                            onDeleteAppointment={
                                appointmentId =>
                                    setAppointmentList(appointmentList.filter(appointment =>
                                        appointment.id !== appointmentId))
                            }
                        />
                    ))
                }
            </ul>
        </div>
    );
};


export default AppointmentInterface;
