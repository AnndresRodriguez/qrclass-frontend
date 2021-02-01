<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Limpiar Informacion de la Base de Datos</h2>
      <hr />
      <br />
      <div>
        <p>
          Esta opción le permite al director de programa limpiar ciertos datos
          del Aplicativo QRClass, cuando este así lo considere prudente.
        </p>
        <p>La información que está autorizado a eliminar corresponde a:</p>
        <ul>
          <li><p>Horarios, el horario que se le asignó a la materia.</p></li>
          <li>
            <p>
              Matricula de Estudiantes, este registro lo realizo el docente,
              corresponde a los estudiantes que están inscritos en una materia
              en particular.
            </p>
          </li>
          <li>
            <p>
              Asistencias, corresponde al registro de asistencias de cada
              estudiante.
            </p>
          </li>
          <li>
            <p>
              Materias, este registro fue realizado por el docente, corresponde
              a las materias a su cargo.
            </p>
          </li>
          <li>
            <p>
              Estudiantes, corresponde a la lista de estudiantes que tiene
              acceso en el Aplicativo QRClass.
            </p>
          </li>
          <li>
            <p>
              Docente, corresponde a la lista de docentes que tiene acceso al
              aplicativo QRClass.
            </p>
          </li>
        </ul>
        <p>
          Se recomienda realizar esta acción una vez sea finalizado el periodo
          académico, de tal forma que se pueda llevar un nuevo control de
          asistencias para el próximo semestre.
        </p>
      </div>
      <div class="boton form-group">
        <button type="button" class="btn btn-info" @click="limpiarDatos">
          Limpiar Datos
        </button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { fireToast } from "../../../util/toast";

export default {
  methods: {
    limpiarDatos() {
      axios
        .post(`${process.env.VUE_APP_API}/directores/finalizar-semestre`)
        .then((res) => {
          if (res.data.operation) {
            console.log(res.data);
            fireToast(
              "success",
              "Limpieza Exitosa",
              "Los datos ha sido limpiados correctamente de la Base de Datos"
            );
          } else {
            console.log(res.data);

            fireToast(
              "error",
              "Error el Limpiar los datos",
              "Ha ocurrido un error al limpiar los datos, intente nuevamente"
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.detalle {
  display: block;
  float: left;
  margin-right: 7%;
}
</style>