import React , {createContext, useState , ReactNode , useContext, useEffect} from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    user: {username: string ; email : string; uuid: string} | null;
    accessToken: string | null;
    refreshToken: string | null;
    login:(user : {username: string ; email : string; uuid:string} , accessToken: string, refreshToken:string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<{username: string ; email : string; uuid: string} | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
        const storedRefreshToken = localStorage.getItem("refreshToken");
        const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    
        if (storedIsLoggedIn && storedUser && storedToken && storedRefreshToken) {
          setIsLoggedIn(true);
          setUser(JSON.parse(storedUser));
          setAccessToken(storedToken);
          setRefreshToken(storedRefreshToken);
        }
      }, []);

    const login = (user: {username: string ; email : string; uuid:string}, accessToken: string, refreshToken:string) => {
        setIsLoggedIn(true);
        setUser(user);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("refreshToken", refreshToken);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("refreshToken");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn,user, accessToken, refreshToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}