import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';


const Alert = ({ type, message, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for exit animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="alert-icon" />;
      case 'error':
        return <AlertCircle className="alert-icon" />;
      case 'warning':
        return <AlertTriangle className="alert-icon" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`alert-toast ${type} ${isVisible ? 'show' : 'hide'}`}
    >
      <div className="alert-content">
        {getIcon()}
        <p>{message}</p>
      </div>
      <button onClick={() => setIsVisible(false)} className="alert-close">
        <X size={18} />
      </button>
    </div>
  );
};

const AlertContainer = ({ children }) => {
  return <div className="alert-container">{children}</div>;
};

const useAlert = () => {
  const [alerts, setAlerts] = useState([]);

  const showAlert = (type, message, duration = 3000) => {
    const id = Math.random().toString(36).slice(2);
    setAlerts((prev) => [...prev, { id, type, message, duration }]);
  };

  const removeAlert = (id) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return {
    alerts,
    showAlert,
    removeAlert,
  };
};

const AlertDemo = () => {
  const { alerts, showAlert, removeAlert } = useAlert();

  return (
    <>
      <AlertContainer>
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            type={alert.type}
            message={alert.message}
            duration={alert.duration}
            onClose={() => removeAlert(alert.id)}
          />
        ))}
      </AlertContainer>

      <div className="demo-buttons">
        <button
          onClick={() => showAlert('success', 'Project posted successfully!')}
          className="text-white px-4 py-2 rounded-md transition-colors duration-300"
        >
          Show Success
        </button>
        <button
          onClick={() => showAlert('error', 'Failed to post project')}
          className="text-white px-4 py-2 rounded-md transition-colors duration-300"
        >
          Show Error
        </button>
        <button
          onClick={() => showAlert('warning', 'Please review your input')}
          className="text-white px-4 py-2 rounded-md transition-colors duration-300"
        >
          Show Warning
        </button>
      </div>
    </>
  );
};

export { Alert, AlertContainer, useAlert, AlertDemo };
