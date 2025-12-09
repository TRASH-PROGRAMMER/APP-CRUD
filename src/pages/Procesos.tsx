/* src/pages/Procesos.tsx */
import type { Component } from "solid-js";
import { createSignal, onMount } from "solid-js";
import PageLayout from "../components/templates/PageLayout";
import PageHeader from "../components/organisms/PageHeader";
import FormInput from "../components/molecules/FormInput";
import ItemList from "../components/organisms/ItemList";
import { DatabaseService } from "../services/database.service";

interface Proceso {
  _id?: string;
  descripcion: string;
}

const db = new DatabaseService<Proceso>("procesos");

const Procesos: Component = () => {
  const [procesos, setProcesos] = createSignal<Proceso[]>([]);
  const [descripcion, setDescripcion] = createSignal("");

  const cargarProcesos = async () => {
    const data = await db.getAll();
    setProcesos(data);
  };

  const agregarProceso = async () => {
    if (descripcion().trim()) {
      await db.add({ descripcion: descripcion() });
      setDescripcion("");
      cargarProcesos();
    }
  };

  const eliminarProceso = async (id: string) => {
    await db.remove(id);
    cargarProcesos();
  };

  onMount(() => {
    cargarProcesos();
  });

  return (
    <PageLayout gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
      <>
        <PageHeader icon="⚙️" title="Gestión de Procesos" />
        <FormInput
          value={descripcion()}
          onInput={setDescripcion}
          onSubmit={agregarProceso}
          placeholder="Descripción del proceso"
          buttonText="+ Agregar"
          variant="secondary"
        />
        <ItemList
          items={procesos().map((p) => ({ _id: p._id, text: p.descripcion }))}
          onDelete={eliminarProceso}
          emptyMessage="No hay procesos registrados. ¡Agrega el primero!"
        />
      </>
    </PageLayout>
  );
};

export default Procesos;
