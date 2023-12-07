import axios from '../apis/axios';
const TOKEN_KEY = 'accessToken';

class AuthService {
  async checkAuthentication() {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    if (storedToken) {
      return { isAuthenticated: true };
    } else {
      try {
        const response = await axios.get('/auth/check', { withCredentials: true });
        const { user, accessToken } = response.data;
        const data = {"id": user.id, "name": user.name, "email": user.email, "accessToken": accessToken};
        localStorage.setItem("user", JSON.stringify(data));
        return { isAuthenticated: true, user: data };
      } catch (error) {
        return { isAuthenticated: false };
      }
    }
  }
}
export default new AuthService();
