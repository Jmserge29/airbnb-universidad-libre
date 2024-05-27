import { Bars3Icon, UserPlusIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function ItemSign({sign}) {
  const navigate = useNavigate();
  return (
    <>
    {
      !sign && <div className=" inline-flex space-x-2">
      <button
        className=" flex rounded-3xl transition hover:shadow-lg p-4 items-center content-center justify-center"
        onClick={() => navigate("/sign-in")}
      >
        Log-In <Bars3Icon className=" text-slate-700 pl-2 size-8" />
      </button>
      <button
        className=" flex rounded-3xl transition hover:shadow-lg p-4 items-center content-center justify-center"
        onClick={() => navigate("/sign-up")}
      >
        Sign-Up <UserPlusIcon className=" text-slate-700 pl-2 size-8" />
      </button>
    </div>
    }

    </>
  );
}

export default ItemSign;
