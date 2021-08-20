import { useContext, useEffect, useRef } from 'react';
import { NotificationContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faExclamation } from '@fortawesome/free-solid-svg-icons';

function Notification({ isShown, status, msgTitle, msg }) {
  const setNotification = useContext(NotificationContext);
  const timerId = useRef(null);

  useEffect(() => {
    if (isShown) {
      const id = setTimeout(() => {
        setNotification(prevState => ({ ...prevState, isShown: false }));
      }, 8000);
      timerId.current = id;
      
      return () => {
        clearTimeout(timerId.current);
      }
    }
  }, [isShown, setNotification])

  const closeNotification = () => {
    setNotification(prevState => ({ ...prevState, isShown: false }));
    clearTimeout(timerId.current);
  }

  return (
    <div className={'notification-container' + (isShown ? ' show-notification' : '')}>
      <div className="status-container">
        <div className={'status-icon-container' + (
          status === 'success' ? ' success' : 
          status === 'error' ? ' error' : 
          status === 'warning' ? ' warning' : ''
        )}>
          {status === 'success' && <FontAwesomeIcon icon={faCheck}/>}
          {status === 'error' && <FontAwesomeIcon icon={faTimes}/>}
          {status === 'warning' && <FontAwesomeIcon icon={faExclamation}/>}
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