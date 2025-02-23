const UserProfile = (props) => {
    return (
        <div style={{ border: '2px solid gray', borderRadius: '10px', padding: '15px', margin: '15px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
            <p style={{ fontStyle: 'italic' }}>{props.bio}</p>
        </div>
    );
};

export default UserProfile;
