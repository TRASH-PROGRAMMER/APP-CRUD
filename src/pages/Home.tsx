/* src/pages/Home.tsx */
import type { Component } from "solid-js";
import HomeLayout from "../components/templates/HomeLayout";
import NavigationButton from "../components/molecules/NavigationButton";

const Home: Component = () => {
  return (
    <HomeLayout>
      <>
        <h1
          style={{
            color: "#333",
            "margin-bottom": "10px",
            "font-size": "2rem",
          }}
        >
          Sistema de Gestión
        </h1>
        <p
          style={{
            color: "#666",
            "margin-bottom": "30px",
          }}
        >
          Administra usuarios y procesos de forma eficiente
        </p>
        <div
          style={{
            display: "flex",
            "flex-direction": "column",
            gap: "15px",
          }}
        >
          <NavigationButton
            href="/usuarios"
            icon="👥"
            title="Gestión de Usuarios"
            variant="primary"
          />
          <NavigationButton
            href="/procesos"
            icon="⚙️"
            title="Gestión de Procesos"
            variant="secondary"
          />
        </div>
      </>
    </HomeLayout>
  );
};

export default Home;

