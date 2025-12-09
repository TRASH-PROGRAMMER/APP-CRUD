/* src/pages/Usuarios.tsx */
import type { Component } from "solid-js";
import { createSignal, onMount } from "solid-js";
import PageLayout from "../components/templates/PageLayout";
import PageHeader from "../components/organisms/PageHeader";
import FormInput from "../components/molecules/FormInput";
import ItemList from "../components/organisms/ItemList";
import { DatabaseService } from "../services/database.service";

interface Usuario {
  _id?: string;
  nombre: string;
}

const db = new DatabaseService<Usuario>("usuarios");

const Usuarios: Component = () => {
  const [usuarios, setUsuarios] = createSignal<Usuario[]>([]);
  const [nombre, setNombre] = createSignal("");

  const cargarUsuarios = async () => {
    const data = await db.getAll();
    setUsuarios(data);
  };

  const agregarUsuario = async () => {
    if (nombre().trim()) {
      await db.add({ nombre: nombre() });
      setNombre("");
      cargarUsuarios();
    }
  };

  const eliminarUsuario = async (id: string) => {
    await db.remove(id);
    cargarUsuarios();
  };

  onMount(() => {
    cargarUsuarios();
  });

  return (
    <PageLayout gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
      <>
        <PageHeader icon="👥" title="Gestión de Usuarios" />
        <FormInput
          value={nombre()}
          onInput={setNombre}
          onSubmit={agregarUsuario}
          placeholder="Nombre del usuario"
          buttonText="+ Agregar"
          variant="primary"
        />
        <ItemList
          items={usuarios().map((u) => ({ _id: u._id, text: u.nombre }))}
          onDelete={eliminarUsuario}
          emptyMessage="No hay usuarios registrados. ¡Agrega el primero!"
        />
      </>
    </PageLayout>
  );
};

export default Usuarios;
