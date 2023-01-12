import { BiTrash } from 'react-icons/bi';
import './AppointmentInfo.css';


const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
    return (
        <div className='appointment-info'>
            <button
                className='appointment-delete-button'
                onClick={() => onDeleteAppointment(appointment.id)}
                type="button"
            >
                <BiTrash />
            </button>
            <div className="flex-grow">
                <div className="flex items-center">
                    <span className="flex-none font-medium text-2xl text-blue-500">{appointment.petName}</span>
                    <span className="flex-grow text-right">{appointment.aptDate}</span>
                </div>
                <div><b className="font-bold text-blue-500">Owner:</b> {appointment.ownerName}</div>
                <div className="leading-tight">{appointment.aptNotes}</div>
            </div>
        </div>
    );
};


export default AppointmentInfo;
