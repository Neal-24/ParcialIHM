<?php
    $usuario=$_POST['usuario'];
        $contraseña=$_POST['contraseña'];
            session_start();
                $_SESSION['usuario']=$usuario;

                $conexion=mysqli_connect("localhost","root","","rol");

                $consulta="SELECT*FROM usuarios where usuario='$usuario' and contraseña='$contraseña'";
                $resultado=mysqli_query($conexion,$consulta);

                $filas=mysqli_fetch_array($resultado);

                if($filas['id_cargo']==1){ //Docente
                    header("location:resumen.php");

                }else
                if($filas['id_cargo']==2){ //Estudiante
                header("location:encuesta.php");
                }
                else{
                ?>
                <?php
                    include("index.html");
                ?>
            <h1 class="bad">ERROR EN LA AUTENTIFICACION</h1>
        <?php
}
     mysqli_free_result($resultado);
    mysqli_close($conexion);
