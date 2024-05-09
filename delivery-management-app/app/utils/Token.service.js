import Cookie from "js-cookie";
import { jwtDecode } from "jwt-decode";

const getLocalAccessToken = () => {
  try {
    const accessToken = Cookie.get("access_token");
    return accessToken;
  } catch (error) {
    return null;
  }
};

const getUserName = () => {
  try {
    const user = Cookie.get("user_name");
    return user;
  } catch (error) {
    return "";
  }
};

const getUserId = () => {
  try {
    const userId = Cookie.get("user_id");
    return userId;
  } catch (error) {
    return "";
  }
};

const getToken = () => {
  try {
    const accessToken = Cookie.get("access_token");
    const refreshToken = Cookie.get("refresh_token");
    if (accessToken && refreshToken) {
      const token = {
        accessToken,
        refreshToken,
      };
      return token;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const updateLocalAccessToken = (token) => {
  try {
    const accessTokenDecoded = jwtDecode(token.access_token);
    const refreshTokenDecoded = jwtDecode(token.refresh_token);
    const accessTokenExpiry = new Date(accessTokenDecoded.exp * 1000);
    const refreshTokenExpiry = new Date(refreshTokenDecoded.exp * 1000);

    const accessTokenCokieOptions = {
      httpOnly: false,
      expires: accessTokenExpiry,
      path: "/",
      sameSite: "strict",
      secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
    };

    const refreshTokenCokieOptions = {
      httpOnly: false,
      expires: refreshTokenExpiry,
      path: "/",
      sameSite: "strict",
      secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
    };

    Cookie.set("user_name", token.user_name, accessTokenCokieOptions);
    Cookie.set("user_id", accessTokenDecoded.user_id, accessTokenCokieOptions);
    Cookie.set("access_token", token.access_token, accessTokenCokieOptions);
    Cookie.set("refresh_token", token.refresh_token, refreshTokenCokieOptions);
  } catch (error) {
    return false;
  }
};

const logOut = () => {
  try {
    const token = Cookie.get("access_token");
    if (token) {
      Cookie.remove("user_name", { path: "/" });
      Cookie.remove("user_id", { path: "/" });
      Cookie.remove("refresh_token", { path: "/" });
      Cookie.remove("access_token", { path: "/" });
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getExpiryDate = async (token) => {
  const decodedUser = jwtDecode(token?.refreshToken);
  return new Date(decodedUser.exp * 1000);
};

const isAccessExpired = () => {
  try {
    const accessToken = Cookie.get("access_token");
    if (accessToken) {
      const decodedUser = jwtDecode(accessToken);
      return new Date().getTime() > new Date(decodedUser.exp * 1000);
    }

    return true;
  } catch (error) {
    return true;
  }
};

const TokenService = {
  getLocalAccessToken,
  updateLocalAccessToken,
  logOut,
  getExpiryDate,
  isAccessExpired,
  getToken,
  getUserName,
  getUserId,
};

export default TokenService;
