import { Dispatch, SetStateAction } from "react";
import { User } from "../utils/interface";

function StoryHeader({
  users,
  setUserId,
}: {
  users: User[];
  setUserId: Dispatch<SetStateAction<number | null>>;
}) {
  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    const target = e.target as HTMLElement;
    const userItem = target.closest(".userItem") as HTMLElement | null;

    if (userItem) {
      const userId = userItem.id;
      setUserId(parseInt(userId));
    }
  }
  return (
    <div className="header-band" onClick={(e) => handleClick(e)}>
      {users?.map((item) => (
        <div key={item.id} id={item.id.toString()} className="userItem">
          <img src={item.icon} alt={"user icon"} height={56} width={56} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default StoryHeader;
