
import Modal from 'react-modal';
import { useState } from "react"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#loginPopup');


const LoginPopup = ({ isOpen, onClose, onSave }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <button onClick={onClose}>close</button>
        <div>Login</div>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => onSave({
                email,
                password
            })}>Login</button>
    </Modal>
}

export default LoginPopup