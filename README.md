# Typescript 

## ¿Que es?
Es un superconjunto de JavaScript, que añade tipos estáticos y objetos basados en clases.

### ¿Como usarlo?

```bash
npm install typescript
```

El siguiente comando sirve para **compilar a javascript**, deberiamos ejecutarlo cuando este el archivo/proyecto este finalizado.

```bash
npx tsc filename.ts
node filename.js

// o en una sola linea

npx tsc filename.ts && node filename.js
```
Para evitar todo lo anterior podemos instalar el modulo **ts-node**, el cual solo nos muestra el resultado del programa sin compilar a Javascript.

```bash
npm install -g ts-node

// una vez instalado ejecutamos el archivo
ts-node filename.ts
```
Instalaciones recomendadas para usar ts-node
 - De manera local  

```bash
  npm install -D typescript
  npm install -D ts-node
```  

 - O global
```bash
  npm install -g typescript
  npm install -g ts-node
```

### ¿Anotacion de tipos vs Inferencia de tipos?

**Anotacion de tipos**: Nosotros le indicamos a typescript que tipo de dato usar en una variable.

**Inferencia de tipos**: TypeScript se encarga de asignar el tipo de dato dependiendo del valor inicial de una variable.

### ¿Tipos primitivos vs tipos no primitivos?

**Tipos primitivos**: ```string```, ```number```, ```boolean```, ```null``` y ```undefined```.

**Tipos no primitivos**: todos los diferentes a los primitivos.

### Configuracion

#### Modo watch: 

Observa si hay cambios y compila a js. Evitando hacer de forma manual `tsc filename.ts`

```bash
  //Afecta solo a filename.ts
  tsc filename.ts -w
```

#### Archivo configuración: 

Crea un archivo de configuración llamado `tsconfig.json`

```bash
  tsc --init
```

Esto nos permite compilar todos los archivos, ejecutando el siguiente comando

```bash
  tsc
```

En modo watch, ahora si afecta a todos los archivos

```bash
  tsc -w
```
#### Opciones de tsconfig.json: 

- target: Indica a que version de javascript transpilar
- module: 
- lib: son las librerias que incluye ts, al estar comentado toma las que tiene por defecto. Pero si lo desomentamos hay que incluirlas de manera manual

- outDir: carpeta de salida, es decir a donde van a ir los archivos `.js` transpilados. No es necesario que existe, ya que se creara automaticamente al ejecutar tsc. Por ejemplo: "./dist"
- rootDir: directorio raiz. toma la ruta mas larga si pongo  un "."
- removeComments: elimina los comentarios, en el archivo js transpilado
- noEmitOnError: detiene la compilacion y generacion del los archivosjs, cuando se encuentre algun error en algun archivo .ts. Hay que agregarla y ponerla en `true`.

Estos van fuera de compilerOptions
- include: un arreglo que indica que archivos compilar. Se debe indicar la ruta relativa.
- exclude: un arreglo que indica que archivos excluir de la compilacion. Se debe indicar la ruta relativa.
