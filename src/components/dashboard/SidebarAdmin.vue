<template>
  <div>
    <div class="sidebar sidebar-style-2">
      <div class="sidebar-wrapper scrollbar scrollbar-inner">
        <div class="sidebar-content">
          <div class="user">
            <div class="avatar-sm float-left mr-2">
              <img
                :src="photo"
                alt="img-perfil"
                class="avatar-img rounded-circle"
              />
            </div>
            <div class="info">
              <a
                data-toggle="collapse"
                href="#collapseExample"
                aria-expanded="true"
              >
                <span>
                  Bienvenido {{ name }}
                  <span class="user-level">Administrador</span>
                </span>
              </a>
              <div class="clearfix"></div>
            </div>
          </div>
          <ul class="nav nav-danger">
            <item
              title="Gestor de Administrador"
              :items="itemsAdmin"
              href="dashboard-admin"
            >
            </item>

            <!-- <item
              title="Gestor de Docentes"
              :items="itemsDocente"
              href="dashboard-docentes"
            >
            </item> -->
            <!-- <item
              title="Gestor de Estudiantes"
              :items="itemsEstudiantes"
              href="dashboard-estudiante"
            >
            </item> -->
            <item
              title="Gestor de Director de Programa"
              :items="itemsDirPrograma"
              href="dashboard-dirprograma"
            >
            </item>
            <item
              title="Gestor de Programas Academicos"
              :items="itemsProgramaAcademico"
              href="dashboard-programaacademico"
            >
            </item>
            <!-- <item
              title="Gestor de Materia"
              :items="itemsMateria"
              href="dashboard-materia"
            >
            </item> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import item from "./sidebar/item";
import userMixin from "../../mixins/userMixin";
import opcionesAdmin from "../modulo-admin/options/admin";
import opcionesDocente from "../modulo-admin/options/docente";
import optionsEstudiante from "../modulo-admin/options/estudiante";
import optionsProgramaAcademico from "../modulo-admin/options/programaacademico";
import optionsDirprograma from "../modulo-admin/options/dirprograma";
import optionsMateria from "../modulo-admin/options/materia";

export default {
  components: { item },
  mixins: [userMixin],
  data() {
    return {
      itemsAdmin: opcionesAdmin,
      itemsDocente: opcionesDocente,
      itemsEstudiantes: optionsEstudiante,
      itemsDirPrograma: optionsDirprograma,
      itemsProgramaAcademico: optionsProgramaAcademico,
      itemsMateria: optionsMateria
    };
  }
};
</script>
