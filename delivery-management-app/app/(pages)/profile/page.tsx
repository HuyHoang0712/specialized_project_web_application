import { Profile } from "@/app/components/Containers/ProfileContainer";
import { Request } from "@/app/components/Containers/RequestContainer";

function ProfilePage() {
  return (
    <div className="content-container flex-row">
      <Profile />
      <Request />
    </div>
  );
}

export default ProfilePage;
