export const login = async (user, pass) => {
  const url = "http://localhost:8000/user/login/";

  const loginData = {
    email: user,
    password: pass,
  };

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  };

  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error in login: ${response.statusText} - ${errorText}`);
      throw new Error(`${errorText}`);
    }

    const data = await response.json();
    console.log("Respuesta del servidor:", data);
    return data;
  } catch (error) {
    console.error("Error in login fetch:", error);
    throw JSON.parse(error.message);
  }
};

export const register = async (data) => {
  const url = "http://localhost:8000/organization/";

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Error in register: ${response.statusText} - ${errorText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in register fetch:", error);
    throw error;
  }
};
