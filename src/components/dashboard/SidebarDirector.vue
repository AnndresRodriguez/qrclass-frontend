<template>
  <div>
    <div class="sidebar sidebar-style-2">
      <div class="sidebar-wrapper scrollbar scrollbar-inner">
        <div class="sidebar-content">
          <div class="user">
            <div class="avatar-sm float-left mr-2">
              <img
                src="/img/profile.jpg"
                alt="..."
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
                  Ing. Encargado
                  <span class="user-level">Director</span>
                  <span class="caret"></span>
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
            <item title="Reportes" :items="itemsAdmin" href="dashboard-admin">
            </item>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import item from "./sidebar/item";
import opcionesAdmin from "../modulo-admin/options/admin";
import opcionesDocente from "../modulo-admin/options/docente";
import optionsEstudiante from "../modulo-admin/options/estudiante";
import optionsProgramaAcademico from "../modulo-admin/options/programaacademico";
import optionsDirprograma from "../modulo-admin/options/dirprograma";

export default {
  components: { item },
  data() {
    return {
      itemsAdmin: opcionesAdmin,
      itemsDocente: opcionesDocente,
      itemsEstudiantes: optionsEstudiante,
      itemsDirPrograma: optionsDirprograma,
      itemsProgramaAcademico: optionsProgramaAcademico
    };
  }
};
</script>
