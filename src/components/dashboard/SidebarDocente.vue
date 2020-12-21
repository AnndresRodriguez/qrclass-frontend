<template>
  <div>
    <div class="sidebar sidebar-style-2">
      <div class="sidebar-wrapper">
        <div class="sidebar-content" id="collapse">
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
                  <span class="user-level">Docente</span>
                </span>
              </a>
              <div class="clearfix"></div>
            </div>
          </div>
          <ul class="nav nav-danger">
            <item
              title="Horario"
              :items="itemsHorario"
              href="dashboard-horario"
            >
            </item>

            <item
              title="Materias"
              :items="itemsMateria"
              href="dashboard-materia"
            >
            </item>
            <!-- <item
              title="Estudiantes"
              :items="itemsEstudiantes"
              href="dashboard-estudiante"
            >
            </item> -->
            <item
              title="Configuraciones"
              :items="itemsconfiguraciones"
              href="dashboard-configuraciones"
            >
            </item>
            <item
              title="Reportes"
              :items="itemsReportes"
              href="dashboard-reportes"
            >
            </item>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import item from "./sidebar/item";
import userMixin from "../../mixins/userMixin";
// import opcionesAdmin from "../modulo-admin/options/admin";
// import opcionesDocente from "../modulo-admin/options/docente";
// import optionsEstudiante from "../modulo-admin/options/estudiante";
// import optionsProgramaAcademico from "../modulo-admin/options/programaacademico";
// import optionsDirprograma from "../modulo-admin/options/dirprograma";
import opcionesHorario from "../modulo-docente/options/horario";
import opcionesMateria from "../modulo-docente/options/materia";
//import optionsEstudiante from "../modulo-docente/options/estudiante";
import optionsConfiguraciones from "../modulo-docente/options/configuraciones";
import optionsReportes from "../modulo-docente/options/reportes";

export default {
  components: { item },
  mixins: [userMixin],
  data() {
    return {
      itemsHorario: opcionesHorario,
      itemsMateria: opcionesMateria,
      //itemsEstudiantes: optionsEstudiante,
      itemsconfiguraciones: optionsConfiguraciones,
      itemsReportes: optionsReportes
    };
  }
};
</script>
