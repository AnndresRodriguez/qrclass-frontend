![alt text](https://res.cloudinary.com/sigtam/image/upload/v1605849640/logo_ykvwyl.png)

# APLICACIÓN WEB PARA LA GESTIÓN Y CONTROL DE ASISTENCIAS DE LOS ESTUDIANTES A TRAVÉS DE CÓDIGOS QR

## Índice

1. [Caracteristicas](#caracteristicas)
2. [Contenido del proyecto](#contenido)
3. [Tecnologías](#tecnologias)
4. [Instalación](#instalacion)
5. [Demo](#demo)
6. [Autor(es)](#autores)
7. [Institución Académica](#institucion)


<a name="caracteristicas"></a>
## Caraterísticas

Este proyecto se enmarca en resolver la toma de asistencias, con el fin de pasar de un proceso manual a un proceso automático,
que le permite a los docentes reducir el tiempo que este gasta actualmente para verificar los estudiantes que asisten a sus clases;
ya que como corresponde, los docentes deben identificar qué estudiantes están participando de sus clases para realizar el seguimiento respectivo
y en base al porcentaje de asistencia evaluar el desempeño de estos, para ello se definieron los siguientes roles y sus funciones: 

* **Rol Administrador**: Se encarga de gestionar todo lo referente al sistema (Registro, actualización y deshabilitación/habilitación) Administradores, Docentes, Estudiantes, Directores de programa, Programas académicos y Materias. 
* **Rol Docente**: Acceso a la funcionalidad principal de la aplicación, ya que a través de este se puede gestionar lo correspondiente a Materias, Asistencias, generador de códigos QR y reportes 
* **Rol Estudiante**: Tiene acceso al sistema a través de una funcionalidad que le permite registrar su asistencia por medio de scan QR
* **Rol Director de Programa**: Es de caracter informativo, ya que este tiene acceso solo al módulo de reportes de asistencia (Materia o Estudiante)

<a name="contenido"></a>
## Contenido del proyecto

La estructura del proyecto en su ruta raíz tiene un directorio src dentro de el se encuentran cada uno de los subdirectorios que componen nuestro código fuente de la aplicación  

- [src/assets](https://github.com/AnndresRodriguez/qrclass-frontend/tree/develop/src/assets) : Aquí se encuentran los archivos de la aplicación (Imágenes, pdfs, archivos office)
- [src/components](https://github.com/AnndresRodriguez/qrclass-frontend/tree/develop/src/components) : Aquí se encuentran cada de los componentes organizados por roles de la aplicación
- [src/mixins](https://github.com/AnndresRodriguez/qrclass-frontend/tree/develop/src/mixins) : En esta carpeta se encuentra el archivo los métodos que los componentes tienen en común.
- [src/router](https://github.com/AnndresRodriguez/qrclass-frontend/tree/develop/src/router) : En esta carpeta se encuentra los archivos de configuración para las direcciones URL de mi aplicación.
- [src/store](https://github.com/AnndresRodriguez/qrclass-frontend/tree/develop/src/store) : En esta carpeta se encuentra el archivo para la gestión del estado central de mi aplicación.
- [src/util](https://github.com/AnndresRodriguez/qrclass-frontend/tree/develop/src/util) : En esta carpeta se encuentra el archivo para el almacenamiento de métodos externos.
- [src/views](https://github.com/AnndresRodriguez/qrclass-frontend/tree/develop/src/views) : En esta carpeta se encuentran las vistas principales de la aplicación.

<a name="tecnologias"></a>
## Tecnologías

* [Vue.js](https://vuejs.org/)
* [Vue Router](https://router.vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Axios](https://github.com/axios/axios)
* [Bootstrap 4](https://getbootstrap.com/)


<a name="instalacion"></a>
## Instalación
### Requerimientos previos
Para ejecutar este proyecto necesitas tener instalado previamente [Node.js] en tu máquina.

### Pasos para realizar la instalación 
* Instalamos todas las dependencias con el siguiente comando 
```bash
npm install
```
* Una vez realizado la instalación de dependencias, procedermos a la ejecución del proyecto con el comando: 
```bash
npm run serve
```
* Esto nos creará la salida en el puerto 8080 y veremos nuestra aplicación.


[Node.js]:<https://nodejs.org/es/>

<a name="demo"></a>
## Demo

<a name="autores"></a>
## Autor(es)
Proyecto desarrollado por:
* Angelica Maria Bermudez Sanchez (<angelicamariabs@ufps.edu.co>).
* Andres Joel Rodriguez Carrillo (<andresjoelcr@ufps.edu.co>)

<a name="institucion"></a>
## Institución Académica
Proyecto desarrollado en Curso de Profundización de  Sofrware del  [Programa de Ingeniería de Sistemas] de la [Universidad Francisco de Paula Santander]

[Programa de Ingeniería de Sistemas]:<https://ingsistemas.cloud.ufps.edu.co/>
[Universidad Francisco de Paula Santander]:<https://ww2.ufps.edu.co/>
