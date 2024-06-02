import PropType from 'prop-types';

function ProfileCard(props){
    const name = props.name
    const email = props.email
    return (
        <>
        <div className='profile-container'>
            <h1 className='profile-name'>
                {name}
            </h1>
            <b className='profile-email'>
                {email}
            </b>
        </div>
        </>
    )
}

ProfileCard.PropType = {
    name : PropType.string,
    email : PropType.string
}

ProfileCard.DefaultProps = {
    name : "unknown",
    email : "unknown@gmail.com"
}

export default ProfileCard;