import NavBar from "../komponente/NavBar";


const Message = () => {
    return (
        <div className="message">

            <NavBar />

            <h1 id="nsl" style={{
                color: 'white',
                backgroundColor: '#0f0458',
            }}>Proizvod je uspešno dodat!</h1>


        </div >
    )
}

export default Message;