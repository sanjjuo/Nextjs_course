import React from "react";

export const useIsUserAuth = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userJSON = JSON.parse(user);
      const accessToken = userJSON.access_token;
      const refreshToken = userJSON.refresh_token;

      setIsUserAuthenticated(Boolean(accessToken && refreshToken));
      // initailly this state is false but after check teh localstorage of the existence of both tokens then the state become true
      // like "If both tokens exist, set isUserAuthenticated to true; otherwise, set it to false."
    } else {
      setIsUserAuthenticated(false);
    }
  }, []);
  return isUserAuthenticated;
};
