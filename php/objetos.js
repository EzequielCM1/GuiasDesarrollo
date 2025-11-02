"use strict";
// --- CONTENIDO GUÍA PHP --- //
const data = [
  {
    titulo: "Arrays en PHP",
    contenido: [
      ["array()", '$colores = array("Rojo", "Verde", "Azul"); o $colores = ["Rojo","Verde","Azul"];', "Crea un array simple (indexado)."],
      ["Array asociativo", '$reserva = ["nombre"=>"Luis", "personas"=>4];', "Usa claves personalizadas."],
      ["Array multidimensional", '$reservas = [ ["nombre"=>"Luis"], ["nombre"=>"Ana"] ];', "Arrays dentro de arrays."],
      ["foreach", 'foreach ($reservas as $r) { echo $r["nombre"]; }', "Recorre un array completo."],
      ["print_r()", 'print_r($reservas);', "Muestra la estructura de un array."],
      ["count()", 'count($reservas);', "Cuenta elementos del array."],
      ["array_sum()", 'array_sum([1,2,3]);', "Suma valores numéricos."],
      ["implode()", 'implode(", ", $preferencias);', "Convierte un array en texto (p. ej. checkboxes)."],
      ["in_array()", 'in_array("musica", $preferencias);', "Comprueba si un valor existe en el array."],
      ["isset()", 'isset($reserva["nombre"]);', "Comprueba si existe una clave."],
      ["empty()", 'empty($reservas);', "Comprueba si un array está vacío."],
      ["ucfirst()", 'ucfirst("musica"); // Música', "Convierte la primera letra en mayúscula."]
    ]
  },
  {
    titulo: "Ficheros en PHP",
    contenido: [
      ["file_exists()", 'file_exists("usuarios.csv");', "Verifica si el archivo existe."],
      ["fopen()", '$f = fopen("usuarios.csv", "a+");', "Abre un archivo en modo lectura/escritura."],
      ["fclose()", 'fclose($f);', "Cierra el archivo."],
      ["fgetcsv()", 'fgetcsv($fichero);', "Lee una línea CSV y la convierte en array."],
      ["fputcsv()", 'fputcsv($fichero, $datos);', "Escribe un array en formato CSV."],
      ["file_get_contents()", 'file_get_contents("archivo.txt");', "Lee todo el contenido del archivo."],
      ["file_put_contents()", 'file_put_contents("archivo.txt", "Texto");', "Escribe directamente (crea o sobrescribe)."],
      ["unlink()", 'unlink("archivo.txt");', "Elimina un archivo."],
      ["rename()", 'rename("viejo.csv", "nuevo.csv");', "Cambia nombre o ubicación."],
      ["copy()", 'copy("origen.csv", "copia.csv");', "Crea una copia del archivo."],
      ["filesize()", 'filesize("usuarios.csv");', "Devuelve el tamaño del archivo."],
      ["basename()", 'basename("ruta/usuarios.csv");', "Devuelve solo el nombre del archivo."],
      ["pathinfo()", 'pathinfo("usuarios.csv");', "Devuelve datos: nombre, extensión, ruta."],
      ["feof()", 'while(!feof($f)) {...}', "Comprueba si se alcanzó el final del archivo."]
    ]
  },
  {
    titulo: "Formularios en PHP",
    contenido: [
      ["$_POST", '$_POST["nombre"];', "Recoge los datos enviados por formulario."],
      ["$_SERVER[\"REQUEST_METHOD\"]", 'if ($_SERVER["REQUEST_METHOD"] == "POST") {...}', "Comprueba si se envió el formulario."],
      ["htmlspecialchars()", 'htmlspecialchars($_POST["nombre"]);', "Escapa caracteres especiales (seguridad XSS)."],
      ["Operador Null (??)", '$nombre = $_POST["nombre"] ?? "";', "Evita errores si no se envió el campo."],
      ["filter_var()", 'filter_var($email, FILTER_VALIDATE_EMAIL);', "Valida formato de correo electrónico."],
      ["isset()", 'isset($_POST["enviar"]);', "Comprueba si un campo o botón fue pulsado."],
      ["empty()", 'if (empty($_POST["nombre"])) {...}', "Verifica si un campo está vacío."],
      ["header()", 'header("Location: formulario.php");', "Redirige a otra página (limpiar formulario)."],
      ["exit()", 'exit();', "Detiene el script inmediatamente."],
      ["date_create()", '$fecha = date_create("2000-01-01");', "Crea un objeto de tipo fecha."],
      ["date_diff()", 'date_diff($fecha, $actual)->y;', "Calcula años de diferencia (edad)."],
      ["trim()", 'trim($_POST["nombre"]);', "Elimina espacios en blanco."],
      ["strlen()", 'strlen($password) < 8', "Mide la longitud de una cadena."],
      ["preg_match()", 'preg_match(\'/[A-Z]/\', $password);', "Comprueba si la cadena contiene un patrón (regex)."],
      ["foreach", 'foreach ($opciones as $opcion)', "Recorre arrays (por ejemplo, checkboxes)."],
      ["implode()", 'implode(", ", $preferencias);', "Guarda varias selecciones como texto."],
      ["in_array()", 'in_array("viajes", $preferencias);', "Mantiene marcada una casilla seleccionada."],
      ["header(\"Location:\") + exit()", "Redirige y limpia el formulario.", ""],
      ["if / else / elseif", "Estructuras condicionales usadas para validar campos.", ""],
      ["switch (opcional, reservas)", "Puede usarse para validar varias opciones (p. ej., tipo de mesa).", ""]
    ]
  },
  {
    titulo: "Validaciones adicionales (Reservas)",
    contenido: [
      ["Validar hora (strtotime)", 'if (strtotime($hora) < strtotime("20:00")) {...}', "Convierte la hora a formato UNIX y permite compararla."],
      ["Validar boolean (true/false)", 'if ($exterior == true)', "Comprueba si el cliente pidió mesa exterior."],
      ["Validar número (is_numeric)", 'if (!is_numeric($personas)) {...}', "Comprueba si el valor es numérico."],
      ["Validar rango (>, <)", 'if ($personas > 10)', "Controla límites en los valores (p. ej., máximo 10 personas)."],
      ["break y continue", "Usados en bucles foreach", "Controlan el flujo del bucle."]
    ]
  }
];