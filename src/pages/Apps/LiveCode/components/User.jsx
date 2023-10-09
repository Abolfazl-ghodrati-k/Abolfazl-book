import React, { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { AiOutlineUser } from "react-icons/ai";
import IconContainer from "../../../../Components/Icon/IconContainer";

const User = ({ role, email, status, id }) => {
  const [showOptions, setShowOptions] = useState(false);
  

  const toggleOptions = useCallback(() => {
    setShowOptions(!showOptions);
  }, [showOptions])

  const handleDelete = () => {
    // Implement delete functionality here
  };

  const handlePromote = () => {
    // Implement promote functionality here
  };

  const handleDemote = () => {
    // Implement demote functionality here
  };

  const handleRemove = () => {
    // Implement remove functionality here
  };

  const avatarColor = useMemo(() => {
    switch (role) {
      case "owner":
        return "red";
      case "editor":
        return "green";
      default:
        return "yellow";
    }
  }, [role]);

  const userOptionsRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      userOptionsRef.current &&
      !userOptionsRef.current.contains(event.target)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={userOptionsRef}>
      <IconContainer
        icon={AiOutlineUser}
        tooltip={email}
        size={24}
        onClick={toggleOptions}
        state={showOptions}
        color={avatarColor}
        isDesktop
      />
      {showOptions && (
        <div
          className="absolute top-7 right-0 bg-[black] min-w-[200px] border border-gray-100 rounded p-2 [&>*]:transition-all fade-in"
        >
          <div
            className="user-option hover:bg-gray-300 p-1 rounded cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </div>
          {role === "visitor" && (
            <div
              className="user-option hover:bg-gray-300 p-1 rounded cursor-pointer"
              onClick={handlePromote}
            >
              Promote
            </div>
          )}
          {role === "editor" && (
            <div
              className="user-option hover:bg-gray-300 p-1 rounded cursor-pointer"
              onClick={handleDemote}
            >
              Demote
            </div>
          )}
          <div
            className="remve hover:bg-gray-300 p-1 rounded cursor-pointer"
            onClick={handleRemove}
          >
            Remove
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
