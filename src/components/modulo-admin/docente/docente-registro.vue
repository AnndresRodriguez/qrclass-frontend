<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Docente</h2>
      <hr />
      <form @submit.prevent="registrarDocente">
        <div class="form-group">
          <label class="control-label">Nombre Completo</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-user"></i>
            </div>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="Escriba el nombre completo del docente a registrar"
              v-model="nombre"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Codigo:</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-id-card"></i>
            </div>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="Escriba el numero de codigo del docente"
              required
              v-model="codigo"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Selecciona el departamento</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-check-square"></i>
            </div>
            <select
              @change="listarDepartamentos(departamento)"
              v-model="departamento"
              name="departamento"
              class="form-control"
            >
              <template v-for="(departamento, index) in departamentos">
                <option :key="index" :value="departamento">
                  {{ departamento.idDepartamento }} -
                  {{ departamento.nombre }}
                </option>
              </template>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label">Correo Electronico</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-at"></i>
            </div>
            <input
              type="email"
              class="form-control"
              placeholder="Escriba el corre institucional (example@ufps.edu.co)"
              required
              v-model="correo"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Numero de Telefono</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-phone"></i>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Escriba el numero de celular."
              required
              v-model="telefono"
            />
          </div>
        </div>
        <div class="boton form-group">
          <button type="submit" class="btn btn-info">Registrarse</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      docentes: [],
      nombre: "",
      codigo: "",
      correo: "",
      telefono: "",
      departamento: {},
      departamentos: [],
      iddepartamento: 0,
    };
  },
  created() {
    this.getAllDepartamentos();
  },
  methods: {
    getAllDepartamentos() {
      axios
        .get(`${process.env.VUE_APP_API}/departamentos`)
        .then((res) => {
          console.log(res.data.operation);
          this.departamentos = res.data.data;
          console.log("departamentos -->", this.departamentos);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    listarDepartamentos(departamento) {
      this.iddepartamento = departamento.idDepartamento;
    },

    registrarDocente(){

      const docente = { idDocenteCodigo: this.codigo, nombre: this.nombre, correo: this.correo, telefono: this.telefono, idDepartamento: this.iddepartamento }

      // console.log('docenteCreado', docente)

      axios.post(`${process.env.VUE_APP_API}/docentes`, docente)
      .then( res => {
         console.log(res.data);
      })
      .catch(error => {
        console.log('registrarDocente', error)
      })

    }

  },
};
</script>

<style scoped>
.cssRegistro .form-group {
  margin-bottom: 0rem;
}
</style>
