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
                  <span class="user-level">Docente</span>
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
            </item>
            <item
              title="Configuraciones"
              :items="itemsProgramaAcademico"
              href="dashboard-programaacademico"
            >
            </item>
            <item
              title="Notificaciones"
              :items="itemsDirPrograma"
              href="dashboard-dirprograma"
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
import opcionesHorario from "../modulo-docente/options/horario";
import opcionesMateria from "../modulo-docente/options/materia";

export default {
  components: { item },
  data() {
    return {
      itemsHorario: opcionesHorario,
      itemsMateria: opcionesMateria
    };
  }
};
</script>
