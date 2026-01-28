import axios from "axios";

const API_SERVER = "https://fesp-api.koyeb.app/market";

// 개발용 임시 토큰 (나중에 로그인 기능 구현 후 제거)
const TEMP_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsInR5cGUiOiJzZWxsZXIiLCJpYXQiOjE3Njk0ODk1NDIsImV4cCI6MTc2OTU3NTk0MiwiaXNzIjoiRkVCQyJ9.8NqXiibTcvwfuEJaRs1WHvwYe-XYqNLYgGsXa56hxNk";

export function getAxios() {
  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 1000 * 10,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Client-Id": "febc15-final04-ecad",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      console.log("요청 인터셉터 호출", config);

      // 개발용 임시 토큰 사용
      config.headers.Authorization = `Bearer ${TEMP_ACCESS_TOKEN}`;

      config.params = {
        ...config.params,
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      console.log("정상 응답 인터셉터 호출", response);
      if (response.data.ok !== undefined) {
        response.data.ok = !!response.data.ok;
      }
      return response;
    },
    (error) => {
      console.error("에러 응답 인터셉터 호출", error);
      return Promise.reject(new Error("잠시 후 다시 이용해 주시기 바랍니다."));
    }
  );

  return instance;
}
