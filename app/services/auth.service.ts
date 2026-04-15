interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
   role: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface VerifyOtpData {
  email: string;
  otp: string;
}

interface RegisterResponse {
  message: string;
  email: string;
}

interface LoginResponse {
  token: string;
  user?: any;
}

interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}

class AuthService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  }

  async register(data: RegisterData): Promise<ApiResponse<RegisterResponse>> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        return {
          success: true,
          data: responseData as RegisterResponse,
        };
      } else {
        return {
          success: false,
          message: responseData.message || 'Registration failed. Please try again.',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.',
      };
    }
  }

  async login(data: LoginData): Promise<ApiResponse<LoginResponse>> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        return {
          success: true,
          data: responseData as LoginResponse,
        };
      } else {
        return {
          success: false,
          message: responseData.message || 'Login failed. Please check your credentials.',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.',
      };
    }
  }

  async verifyOtp(data: VerifyOtpData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        return {
          success: true,
          data: responseData,
        };
      } else {
        return {
          success: false,
          message: responseData.message || 'OTP verification failed. Please try again.',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.',
      };
    }
  }
}

export const authService = new AuthService();
export type { RegisterData, LoginData, VerifyOtpData, ApiResponse };