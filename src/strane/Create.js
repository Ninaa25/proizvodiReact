import NavBar from "../komponente/NavBar";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Create = () => {

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const idHandle = (e) => {
        setId(e.target.value);
    }

    const titleHandle = (e) => {
        setTitle(e.target.value);
    }

    const bodyHandle = (e) => {
        setBody(e.target.value);
    }

    return (
        <div className='create'>
            <NavBar />

            <div className="frm-novi-proizvod">

                <div className='element'>
                    <label>ID</label>
                    <input type="text" value={id} onChange={idHandle} />
                </div>

                <div className='element'>
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleHandle} />
                </div>

                <div className='element'>
                    <label>Body</label>
                    <input type="text" value={body} onChange={bodyHandle} />
                </div>

                <Link to="/message"><button type="button" id="btn">Dodaj proizvod</button></Link>
            </div>

        </div>
    )
}

export default Create;