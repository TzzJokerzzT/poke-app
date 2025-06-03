import NavbarComponent from "../UI/Navbar/Navbar";
import LoginComponent from "../Login/LoginNavbar";
import { useNavigate, useLocation } from "react-router-dom";
import usePokemonStore from "@store/pokemonStore";
import { useCallback } from "react";
import ButtonComponent from "../UI/Button/Button";
import { Badge } from "@heroui/react";
import useAuthStore from "@store/authStore";

export const HeaderComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pokemonFavorites } = usePokemonStore();
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/register");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const navigateToFavorites = useCallback(
    () => navigate("/favorites"),
    [navigate]
  );
  const navigateToHome = useCallback(() => navigate("/"), [navigate]);

  const homePage = location.pathname === "/";
  const favoritesPage = location.pathname === "/favorites";
  return (
    <NavbarComponent imageURL="/logo2.png" alt="Logo" width={100} height={100}>
      <LoginComponent />
      <section>
        {homePage && (
          <Badge
            content={pokemonFavorites.length}
            variant="shadow"
            size="lg"
            className={`${
              pokemonFavorites.length > 0 ? "bg-lime-300" : "bg-cyan-500"
            }`}
            aria-label={`${pokemonFavorites.length} favorite Pokemon`}
            placement="top-right"
            shape="circle"
            isInvisible={pokemonFavorites.length === 0}
          >
            <ButtonComponent
              className="w-24 bg-red-500 text-white font-bold hover:text-black"
              onPress={navigateToFavorites}
              aria-label="Go to favorites page"
            >
              Favorites
            </ButtonComponent>
          </Badge>
        )}
        {favoritesPage && (
          <ButtonComponent
            className="w-24 bg-red-500 text-white font-bold hover:text-black"
            onPress={navigateToHome}
            aria-label="Go to home page"
          >
            Home
          </ButtonComponent>
        )}
      </section>
      <nav className="flex" aria-label="User actions">
        <ButtonComponent
          className="mx-1"
          onPress={handleLogout}
          aria-label="Logout from application"
        >
          Logout
        </ButtonComponent>
      </nav>
      <nav className="flex" aria-label="User actions">
        <ButtonComponent
          className="mx-1"
          onPress={() => navigate("/register")}
          aria-label="Register to application"
        >
          Register
        </ButtonComponent>
      </nav>
    </NavbarComponent>
  );
};
