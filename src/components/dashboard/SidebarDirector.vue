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
                  <span class="user-level">Director</span>
                </span>
              </a>
              <div class="clearfix"></div>

              <div class="collapse in" id="collapseExample">
                <ul class="nav">
                  <li>
                    <a href="#profile">
                      <span class="link-collapse">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#edit">
                      <span class="link-collapse">Edit Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#settings">
                      <span class="link-collapse">Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul class="nav nav-danger">
            <item
              title="Gestor de Estudiantes"
              :items="itemsEstudiantes"
              href="dashboard-estudiantes"
            >
            </item>
            <item
              title="Gestor de Docentes"
              :items="itemsDocente"
              href="dashboard-docentes"
            >
            </item>
            <!-- <item
              title="Gestor de Materias"
              :items="itemsMaterias"
              href="dashboard-materias"
            >
            </item> -->
            <!-- <item
              title="Reportes"
              :items="itemsReportes"
              href="dashboard-reportes"
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
import optionsReportes from "../modulo-director/options/reportes";
import optionsEstudiantes from "../modulo-director/options/estudiantes";
import optionsDocentes from "../modulo-director/options/docentes";
import optionsMaterias from "../modulo-director/options/materias";

export default {
  components: { item },
  mixins: [userMixin],
  data() {
    return {
      itemsReportes: optionsReportes,
      itemsEstudiantes: optionsEstudiantes,
      itemsDocente: optionsDocentes,
      itemsMaterias: optionsMaterias
    };
  }
};
</script>
