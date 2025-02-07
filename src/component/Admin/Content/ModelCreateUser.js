import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img1 from '../../../assets/bg2.jpg';
import { FcPlus } from 'react-icons/fc';
import axios from 'axios';
const ModelCreateUser = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false)
        setEmail(''); setPassword(''); setUsername(''); setRole('USER'); setPreviewImage(''); setImg('');       
    };
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState("USER");
    const [img, setImg] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    const handleUploadFile = (e) => {
        if (e.target && e.target.files && e.target.files[0]) {
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
            setImg(e.target.files[0]);
        } //else setPreviewImage('');



        console.log(e.target.files[0]);
    }

    const handleSubmitCreateUser = async() => {
        //validate

        //call api
        // let data = {
        //     email: email,
        //     password: password,
        //     username: username,
        //     role: role,
        //     img: img
        // }
        // console.log("alert me")
        // console.log(data);

        const data = new FormData();
        data.append('password', password);
        data.append('email', email);
        data.append('username', username);
        data.append('role', role);
        data.append('img', img);
        
        let res = await axios.post('http://localhost:8081/api/v1/participant', data)
        console.log(">> check res: ",res);
        if(res.status === 200){
            handleClose();
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size='lg'
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload'><FcPlus /> Upload File Image</label>
                            <input
                                type="file"
                                id='labelUpload' hidden
                                onChange={(e) => handleUploadFile(e)} />
                        </div>

                        <div className='col-md-12 img-preview'>
                            {/* <span>Preview Image</span> */}

                            {previewImage ? <img src={previewImage} /> : <span>Preview Image</span>}
                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitCreateUser}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModelCreateUser;