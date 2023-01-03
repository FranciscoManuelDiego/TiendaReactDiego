
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function EjemploGreeting({Greeting}) {

  return (
    <>
      {/* <div className="mb-3">
        <label htmlFor="selectToastPlacement">Toast position</label>
        <Form.Select
          id="selectToastPlacement"
          className="mt-2"
          onChange={(e) => setPosition(e.currentTarget.value)}
        >
          {[
            'top-start',
            'top-center',
            'top-end',
            'middle-start',
            'middle-center',
            'middle-end',
            'bottom-start',
            'bottom-center',
            'bottom-end',
          ].map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Form.Select>
      </div> */}

    <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
    >
        <ToastContainer className="p-3" position={'top-center'}>
        <Toast>
            <Toast.Header closeButton={false}>
            <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
            />
              <span style={{textAlign: "center"}} className="me-auto">🇦🇷⭐⭐⭐🇦🇷</span>
            </Toast.Header>
            <Toast.Body><span>{Greeting}</span></Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
}

export default EjemploGreeting;