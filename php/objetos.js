"use strict";
// --- CONTENIDO GUÍA PHP --- //
const data = [
  {
    titulo: "Arrays en PHP",
    contenido: [
      ["array()", '$colores = ["Rojo","Verde","Azul"];', "Crea un array simple (indexado)."],
      ["Array asociativo", '$reserva = ["nombre"=>"Luis", "personas"=>4];', "Usa claves personalizadas."],
      ["Array multidimensional", '$reservas = [ ["nombre"=>"Luis"], ["nombre"=>"Ana"] ];', "Arrays dentro de arrays."],
      ["foreach", 'foreach ($reservas as $r) { echo $r["nombre"]; }', "Recorre un array completo."],
      ["print_r()", 'print_r($reservas);', "Muestra la estructura de un array."],
      ["count()", 'count($reservas);', "Cuenta elementos del array."],
      ["array_sum()", 'array_sum([1,2,3]);', "Suma valores numéricos."],
      ["implode()", 'implode(", ", $preferencias);', "Convierte un array en texto."],
      ["in_array()", 'in_array("musica", $preferencias);', "Busca un valor dentro del array."],
      ["isset()", 'isset($reserva["nombre"]);', "Comprueba si existe una clave."],
      ["empty()", 'empty($reservas);', "Comprueba si un array está vacío."],
      ["ucfirst()", 'ucfirst("musica");', "Primera letra en mayúscula."],
      ["explode()", 'explode(",", $texto);', "Convierte un string en array usando un separador."],
      ["array_map()", 'array_map("trim", $array);', "Aplica una función a cada elemento del array."],
      ["sort()", 'sort($array);', "Ordena un array en orden alfabético o numérico."],
      ["SORT_STRING", "", "Constante para ordenar alfabéticamente."],
      ["SORT_FLAG_CASE", "", "Ignora mayúsculas/minúsculas al ordenar (combinar con SORT_STRING)."],

    ]
  },
  {
    titulo: "Ficheros en PHP",
    contenido: [
      // --- APERTURA DE FICHEROS (fopen) ---
      ["fopen() - r", '$f = fopen("archivo.txt", "r");', "Solo lectura (error si no existe)."],
      ["fopen() - r+", '$f = fopen("archivo.txt", "r+");', "Leer y escribir (no crea archivo)."],
      ["fopen() - w", '$f = fopen("archivo.txt", "w");', "Escritura (sobrescribe o crea nuevo)."],
      ["fopen() - w+", '$f = fopen("archivo.txt", "w+");', "Leer y escribir (sobrescribe)."],
      ["fopen() - a", '$f = fopen("archivo.txt", "a");', "Añadir al final (no borra)."],
      ["fopen() - a+", '$f = fopen("archivo.txt", "a+");', "Leer y añadir al final."],
      ["fopen() - x", '$f = fopen("archivo.txt", "x");', "Crear nuevo (error si ya existe)."],

      // --- LECTURA / ESCRITURA ---
      ["fgets()", '$linea = fgets($f);', "Lee una línea."],
      ["fgetc()", 'fgetc($manejador) ;', "Lee un carácter."],
      ["fread()", 'fread($f, filesize("archivo.txt"));', "Lee todo o X bytes."],
      ["fwrite()", 'fwrite($f, "Texto");', "Escribe texto."],
      ["feof()", 'while(!feof($f)) { ... }', "Fin de archivo."],
      ["fclose()", 'fclose($f);', "Cierra archivo."],
      ["fputs()", 'fputs($manejador, $texto);', "Igual que fwrite()."],
      ["fputc()", 'fputc($manejador, $caracter);', "Escribe un carácter."],

      // --- MÉTODOS DIRECTOS ---
      ["file_get_contents()", 'file_get_contents("archivo.txt");', "Lee todo el archivo."],
      ["file_put_contents()", 'file_put_contents("archivo.txt", "Texto");', "Escribe (sobrescribe)."],
      ["file_put_contents + FILE_APPEND", 'file_put_contents("archivo.txt", "Texto", FILE_APPEND);', "Añade sin borrar."],
      ["file()", '$lineas = file("archivo.txt");', "Devuelve array por líneas."],
      ["readfile()", 'readfile("archivo.txt");', "Lee y muestra directamente."],

      // --- CSV UTILES ---
      ["fgetcsv()", '$datos = fgetcsv($f);', "Lee línea CSV como array."],
      ["fputcsv()", 'fputcsv($f, $array);', "Escribe array en CSV."],

      // --- ARCHIVOS Y DIRECTORIOS ---
      ["unlink()", 'unlink("archivo.txt");', "Elimina archivo."],
      ["rename()", 'rename("viejo.txt", "nuevo.txt");', "Renombra o mueve archivo."],
      ["copy()", 'copy("origen.txt", "copia.txt");', "Copia archivo."],
      ["scandir()", '$archivos = scandir("carpeta/");', "Lista archivos de un directorio."],
      ["filesize()", 'filesize("archivo.txt");', "Tamaño en bytes."],
      ["chmod()", 'chmod("archivo.txt", 0644);', "Permisos de archivo."],
      ["touch()", 'touch("nuevo.txt");', "Crea archivo o modifica fecha."],
      ["pathinfo()", 'pathinfo("archivo.txt");', "Devuelve ruta, nombre y extensión."],
      ["basename()", 'basename("ruta/archivo.txt");', "Solo el nombre del archivo."],
      ["file_exists()", 'file_exists("archivo.txt");', "Comprueba si existe."],
      ["strlen()", 'strlen($nombre);', "Devuelve el número de caracteres de una cadena."],
      ["preg_replace()", 'preg_replace("/[^a-zA-Z0-9_-]/", "", $nombre);', "Reemplaza caracteres usando una expresión regular."],
      ["strtolower()", 'strtolower($texto);', "Convierte a minúsculas."],


      // ✅ SUBIDA DE ARCHIVOS Y TEMPORALES
    ]
  },
  {
    titulo: "Subida de archivos ($_FILES)",
    contenido: [
      ["enctype=\"multipart/form-data\"", 'enctype="multipart/form-data"', "Obligatorio en formularios que envían archivos."],
      ["$_FILES", '$_FILES["fichero"];', "Array que almacena toda la información del archivo subido."],
      ["name", '$_FILES["fichero"]["name"];', "Nombre original del archivo."],
      ["type", '$_FILES["fichero"]["type"];', "Tipo MIME (image/jpeg, application/pdf...)."],
      ["tmp_name", '$_FILES["fichero"]["tmp_name"];', "Ruta temporal donde PHP lo guarda."],
      ["size", '$_FILES["fichero"]["size"];', "Tamaño del archivo en bytes."],
      ["error", '$_FILES["fichero"]["error"];', "Código de error (0 si fue correcto)."],
      ["UPLOAD_ERR_OK", 'if ($_FILES["f"]["error"] == UPLOAD_ERR_OK)', "Subida correcta."],
      ["is_uploaded_file()", 'is_uploaded_file($_FILES["f"]["tmp_name"]);', "Comprueba si viene de un formulario válido."],
      ["move_uploaded_file()", 'move_uploaded_file($_FILES["f"]["tmp_name"], "uploads/".$nuevoNombre);', "Mueve archivo del temporal a destino."],
      ["Validar extensión", 'pathinfo($nombre, PATHINFO_EXTENSION);', "Obtiene la extensión del archivo."],
      ["Validar tamaño", 'if ($_FILES["f"]["size"] > 2000000) {...}', "Comprueba límite de peso."],
      ["$_FILES completo", 'print_r($_FILES);', "Muestra todo el contenido del array de archivos."]
    ]
  },
  {
    titulo: "Serialización y JSON",
    contenido: [
      // --- JSON ---
      ["json_encode()", 'json_encode($array);', "Convierte un array o variable en texto JSON."],
      ["json_decode()", 'json_decode($json, true);', "Convierte JSON a array asociativo (true) o a objeto (false)."],
      ["json_last_error()", 'json_last_error();', "Devuelve el último error de json_encode/decode."],

      // --- SERIALIZACIÓN ---
      ["serialize()", 'serialize($array);', "Convierte una variable/array en un string especial para almacenarlo o enviarlo."],
      ["unserialize()", 'unserialize($string);', "Reconstruye la variable/array original a partir de un string serializado."]
    ]
  },
  {
    titulo: "Formularios en PHP",
    contenido: [
      ["$_POST", '$_POST["nombre"];', "Recoge datos enviados por POST."],
      ["$_SERVER['REQUEST_METHOD']", 'if ($_SERVER["REQUEST_METHOD"] == "POST") {...}', "Comprueba si se envió el formulario."],
      ["htmlspecialchars()", 'htmlspecialchars($_POST["nombre"]);', "Evita XSS escapando caracteres."],
      ["trim()", 'trim($_POST["nombre"]);', "Elimina espacios."],
      ["filter_var()", 'filter_var($email, FILTER_VALIDATE_EMAIL);', "Valida email."],
      ["isset()", 'isset($_POST["campo"]);', "Comprueba si existe una clave."],
      ["empty()", 'empty($_POST["nombre"]);', "Comprueba si está vacío."],
      ["header()", 'header("Location: pagina.php");', "Redirige."],
      ["stripslashes()", 'stripslashes($texto)', "Elimina barras invertidas"],
      ["exit()", 'exit();', "Detiene la ejecución."]
    ]
  },
  {
    titulo: "Constantes útiles en PHP",
    contenido: [
      ["PHP_EOL", 'echo "Hola" . PHP_EOL . "Mundo";', "Salto de línea según el sistema operativo (Útil en ficheros)."],
      ["uniqid()", 'pones el uniqid() al nombre del archivo ";', "Genera un nombre único (útil para evitar sobrescribir archivos)."],
    ]
  }
];
