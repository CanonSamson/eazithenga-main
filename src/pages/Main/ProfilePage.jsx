import { useUserAuth } from "../../Auth";

const ProfilePage = () => {

    const { auth } = useUserAuth();

    console.log(auth)
    return ( 
        <div>

        </div>
     );
}
 
export default ProfilePage;