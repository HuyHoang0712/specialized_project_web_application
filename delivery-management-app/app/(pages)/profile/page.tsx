import { Profile, Request } from "@/app/components/Containers/ProfileContainer";

function ProfilePage() {
  return (
    <div className="content-container flex-row">
      <Profile />
      <Request />
    </div>
  );
}

export default ProfilePage;
