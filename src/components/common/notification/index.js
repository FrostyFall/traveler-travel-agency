import { useContext, useEffect, useState } from 'react';
import { NotificationContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Notification = ({ isShown, status, msgTitle, msg }) => {
  const setNotification = useContext(NotificationContext);
  const [timerId, setTimerId] = useState(null);

  const timeOut = () => {
    setNotification(prevState => (
      { ...prevState, isShown: false }
    ))
  }

  const closeNotification = () => {
    setNotification(prevState => ({ ...prevState, isShown: false }));
    clearTimeout(timerId);
  }

  useEffect(() => {
    if (isShown === true) {
      const id = setTimeout(timeOut, 4000);
      setTimerId(id);
      return () => {
        clearTimeout(timerId);
      }
    }
  }, [isShown])

  return (
    <div className={'notification-container' + (isShown ? ' show-notification' : '')}>
      <div className="status-container">
        <div className={'status-icon-container' + (
          status === 'success' ? ' success' : 
          status === 'error' ? ' error' : ''
        )}>
          {status === 'success' && <FontAwesomeIcon icon={faCheck}/>}
          {status === 'error' && <FontAwesomeIcon icon={faTimes}/>}
        </div>
        <div className="status-msg-container">
          <h5 className="msg-title">{msgTitle}</h5>
          <p className="msg">{msg}</p>
        </div>
      </div>
      <div className="close-icon-container" onClick={closeNotification}>
        <div className="slash forward"></div>
        <div className="slash reverse"></div>
      </div>
    </div>
  )
}

export default Notification;