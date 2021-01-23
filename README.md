# Uso de CKEditor5 en Angular

### Instalar CKEditor5 con posibilidades de agregar o quitar funcionalidades fácilmente

## Instalación de CKEditor5 para Angular 🔧  


_Lo más simple y fácil es seguir la propia documentación de CKEditor5 [aquí](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/angular.html)_


## Contruir un CKEditor personalizado con ckedito custom build

_Para crear nuestro template y ajustar lo que necesitemos, la mejor opción es ir a la [web oficial](https://ckeditor.com/ckeditor-5/online-builder/) para generar los documentos_


## Archivos generados en CKEditor Custom Build

_Una vez generados los archivos del custom build, lo siguiente será entender que este tiene un package.json, por lo tanto es importante aplicar el siguiente comando en el directorio raíz:_

```
  npm install
```

## Generar build de los archivos generados

_Una vez instaladas las dependencias que necesita el template, debemos generar el build que será agregado al proyecto angular con el siguiente comando_

```
  npm run-script build
```

## Importar build de archivos generados y toolbar para usar los complementos que queremos

_Para facilitar esto recomiendo usar de guia el propio proyecto angular generado. Usar como guía el app component y mirar bien el import del build de archivos generados, más la config del toolbar y como estos se comunican con el ckeditor del html de app.component.html_

## Mostrar con innerHtml el contenido

_Importante el uso de un pipe sanitizador para que los estilos en linea que genera el CKEditor puedan ser vistos cuando usemos el html con innerHtml !!!_
