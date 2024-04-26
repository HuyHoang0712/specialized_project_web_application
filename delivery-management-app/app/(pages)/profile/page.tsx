"use client";
import { Profile } from "@/app/components/Containers/ProfileContainer";
import { Request } from "@/app/components/Containers/RequestContainer";
import { useGetEmployeeIdQuery } from "@/app/redux/features/profile/profileApiSlice";

function ProfilePage() {
  const { data, error, isLoading } = useGetEmployeeIdQuery("");
  return (
    <div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="content-container flex-row">
          <Profile id={data} />
          <Request />
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
