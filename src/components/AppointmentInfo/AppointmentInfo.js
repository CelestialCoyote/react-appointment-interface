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
            <div className='appointment-info-group'>
                <div className='appointment-petname-date'>
                    <span className='appointment-petname'>{appointment.petName}</span>
                    <span className='appointment-date'>{appointment.aptDate}</span>
                </div>
                <div><b className='appointment-ownername'>Owner:</b> {appointment.ownerName}</div>
                <div className='appointment-notes'>{appointment.aptNotes}</div>
            </div>
        </div>
    );
};


export default AppointmentInfo;
