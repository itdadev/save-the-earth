import axios from "axios";

const Interceptor = axios.create({
  timeout: 10000,
  params: {},
});

// Interceptor.interceptors.request.use(useRefreshToken, useRefreshErrorHandle);

export default Interceptor;
