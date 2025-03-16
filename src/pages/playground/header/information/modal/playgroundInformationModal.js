import './playgroundInformationModal.css';
import React from 'react';

export default function InformationModal({setIsModalDisplayed, isIntro}) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }); // in a timeout as intro modal does not display animation in firefox+safari
    window.addEventListener('keydown', closeOnKeyPress);
    return () => {
      window.removeEventListener('keydown', closeOnKeyPress);
    };
  }, []);

  const closeOnKeyPress = (event) => {
    if (event.key === 'Escape' || event.key === 'Enter') {
      close();
    }
  };

  const close = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsModalDisplayed(false);
    }, 200);
  };

  return (
    <div>
      <div
        className={`playground-service-modal-background ${
          isVisible ? 'playground-modal-fade-in-background' : 'playground-modal-fade-out-background'
        }`}
        onClick={close}
      ></div>
      <div
        id="playground-information-modal"
        className={`playground-modal ${isVisible ? 'playground-modal-fade-in' : 'playground-modal-fade-out'} ${
          isIntro ? 'playground-intro-modal' : ''
        }`}
      >
        <div id="playground-information-modal-title" className="playground-modal-title playground-header-modal-title">
          {isIntro ? 'Welcome to the Playground' : 'Information'}
        </div>
        <div className="playground-header-modal-description">
          <div style={{marginBottom: 16}} className="playground-information-modal-item">
            <svg
              id="playground-information-modal-connect"
              className="playground-information-modal-icon"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 30c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
              <path d="M35 20c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
              <path d="M35 40c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
              <path d="M19.007 25.885l12.88 6.44-.895 1.788-12.88-6.44z" />
              <path d="M30.993 15.885l.894 1.79-12.88 6.438-.894-1.79z" />
            </svg>
            <div>Create, configure and experiment with Deep Chat components without writing any code.</div>
          </div>
          <div style={{marginBottom: 18}} className="playground-information-modal-item">
            <svg
              id="playground-information-modal-shield"
              className="playground-information-modal-icon"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M24,43.5c9.0432-3.1174,15.4885-10.3631,16.5-19.5889a79.36,79.36,0,0,0-.0714-12.0267,2.5414,2.5414,0,0,0-2.4677-2.3663c-4.0911-.126-8.8455-.8077-12.52-4.4273a2.0516,2.0516,0,0,0-2.881,0C18.885,8.71,14.1306,9.3921,10.04,9.5181a2.5414,2.5414,0,0,0-2.4677,2.3663A79.36,79.36,0,0,0,7.5,23.9111C8.5115,33.1369,14.9568,40.3826,24,43.5Z"
              />
            </svg>
            <div>The playground does not record any data. All information remains in the safety of your browser.</div>
          </div>
          <button id="playground-information-modal-close" className="playground-modal-close-button" onClick={close}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
