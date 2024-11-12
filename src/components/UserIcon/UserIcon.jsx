import './UserIcon.css'
import { FaCircle } from 'react-icons/fa6'
import PropTypes from 'prop-types';

const UserIcon = ({ intials, available, bgColor }) => {
    console.log(bgColor);
    return (
        <div className='user'>
            <div className='user_icon' style={{ backgroundColor: bgColor }}>{intials}</div>
            <div className='dot' style={available ? { color: "#50B053" } : {}}>
                <FaCircle />
            </div>
        </div>
    )
}

UserIcon.propTypes = {
    intials: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
    bgColor: PropTypes.string.isRequired,
};

export default UserIcon