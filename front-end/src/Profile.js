import './Profile.css'
import ProfileCard from './components/ProfileCard.js'
import ProfileImage from './assets/ProfilePlaceholder.jpg';

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Profile = props => {
  return (
    <>
      <body className='profilebody'>
        <ProfileCard user = {{"Name": "Rachel", "Age" : 13, "BloodTypes": "Blood Type A"}} image = {ProfileImage}></ProfileCard>
      </body>
    </>
  )
}


// make this component available to be imported into any other file
export default Profile