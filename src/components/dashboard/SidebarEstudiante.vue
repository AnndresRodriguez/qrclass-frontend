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
                  <span class="user-level">Estudiante</span>
                </span>
              </a>
              <div class="clearfix"></div>
            </div>
          </div>
          <ul class="nav nav-danger">
            <item title="Mis Datos" :items="itemsDatos" href="dashboard-Datos">
            </item>

            <item
              title="Asistencias"
              :items="itemsAsistencias"
              href="dashboard-materia"
            >
            </item>
            <item
              title="Scan QR"
              :items="itemsSCan"
              href="dashboard-estudiante"
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
import opcionesDatos from "../modulo-estudiante/options/datos";
import opcionesAsistencias from "../modulo-estudiante/options/asistencias";
import optionsSCan from "../modulo-docente/options/estudiante";

export default {
  components: { item },
  mixins: [userMixin],
  data() {
    return {
      itemsDatos: opcionesDatos,
      itemsAsistencias: opcionesAsistencias,
      itemsSCan: optionsSCan
    };
  }
};
</script>
