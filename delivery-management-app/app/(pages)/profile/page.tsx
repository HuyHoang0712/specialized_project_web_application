import { Profile } from "@/app/components/Containers/ProfileContainer";
import { Request } from "@/app/components/Containers/RequestContainer";
import { cookies } from "next/headers";

function ProfilePage() {
  const cookieStore = cookies();
  const id = cookieStore.get("user_id");
  return (
    <div>
      <div className="content-container flex-row">
        <Profile id={id?.value} />
        <Request />
      </div>
    </div>
  );
}

export default ProfilePage;
