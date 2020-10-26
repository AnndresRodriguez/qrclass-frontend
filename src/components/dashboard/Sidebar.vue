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
                  <span class="user-level">Administrator</span>
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
            <li class="nav-item active">
              <a
                data-toggle="collapse"
                href="#dashboard-Administrador"
                class="collapsed"
                aria-expanded="false"
              >
                <p>Gestor de Adminsitradores</p>

                <span class="caret"></span>
              </a>
              <div class="collapse" id="dashboard-Administrador">
                <ul class="nav nav-collapse">
                  <li>
                    <router-link to="/registrar-admi">
                      <span class="sub-item">Registrar Administrador</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/consultar-admi">
                      <span class="sub-item">Consultar Administrador</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/listar-admi">
                      <span class="sub-item">Listar Administrador</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item active">
              <a
                data-toggle="collapse"
                href="#dashboard-docente"
                class="collapsed"
                aria-expanded="false"
              >
                <p>Gestor de Docentes</p>

                <span class="caret"></span>
              </a>
              <div class="collapse" id="dashboard-docente">
                <ul class="nav nav-collapse">
                  <li>
                    <router-link to="/registrar-docete">
                      <span class="sub-item">Registrar Docente</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/consultar-docete">
                      <span class="sub-item">Consultar Docente</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/listar-docete">
                      <span class="sub-item">Listar Docentes</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item active">
              <a
                data-toggle="collapse"
                href="#dashboard-estudiante"
                class="collapsed"
                aria-expanded="false"
              >
                <p>Gestor de Estudiantes</p>
                <span class="caret"></span>
              </a>
              <div class="collapse" id="dashboard-estudiante">
                <ul class="nav nav-collapse">
                  <li>
                    <router-link to="/registrar-">
                      <span class="sub-item">Registrar Estudiante</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/consultar-">
                      <span class="sub-item">Consultar Estudiate</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/listar-">
                      <span class="sub-item">Listar Estudiantes</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item active">
              <a
                data-toggle="collapse"
                href="#dashboard-materia"
                class="collapsed"
                aria-expanded="false"
              >
                <p>Gestor de Materias</p>
                <span class="caret"></span>
              </a>
              <div class="collapse" id="dashboard-materia">
                <ul class="nav nav-collapse">
                  <li>
                    <router-link to="RMateria">
                      <span class="sub-item">Registrar Materia</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="CMateria">
                      <span class="sub-item">Consultar Materia</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="LMateria">
                      <span class="sub-item">Listar Materias</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
