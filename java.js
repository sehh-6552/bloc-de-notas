let texto = $("#ingresar-comentario");

$(document).ready(function () {
  $("#ingresar-comentario").keypress(function (e) {
   
    /*primera practica que funciono que enseño luis
     for (let i = 0; i < largoNota; i++) {
             if (
                 $(listadoNotas[i]).text().trim().toLowerCase() === texto.val().trim().toLowerCase()) {
                 alert('"Tu nota esta repetida!!!"');
                 return;
             }
         }*/
    if (e.which === 13 && texto.val()) {
      let listadoNotas = $(".comentario").get();
      let contadorNotas = listadoNotas.length + 1;
      for (let i of listadoNotas) {
        if (
          $(i).text().trim().toLowerCase() === texto.val().trim().toLowerCase()
        ) {
          alert('"Tu nota esta repetida!!!"');
          return;
        }
      }
      $("#contador").html("tienes " + contadorNotas + " notas guardadas");
      $("#mostrar-comentario").append(
    `<div class='nota'>  
        <ul class='lista'>
          <li class='listado-notas'>        
                <label>
                <input class='tachado' type='checkbox'>
                <span class='comentario'>
                ${texto.val()}
                </span><img src='https://images.vexels.com/media/users/3/155481/isolated/preview/622b56964a549b765dcaa8652b08ea87-x-marca-icono-de-garabato-by-vexels.png' alt='eliminar' class='boton-eliminar'>
                </label>
          </li>
        </ul>    
      </div>`);
      /*contador de notas */
      texto.val("");  
      if (contadorNotas === 0) {
        $("#contador").html(" No tinenes ninguana nota guardada");
      } else if (contadorNotas === 1) {
        $("#contador").html("Tienes " + contadorNotas + " nota guardada");
      } else {
        $("#contador").html("Tienes " + contadorNotas + " notas guardadas");
      }
    }
    $(".boton-eliminar").on("click", function (e) {
      e.target.parentElement.remove();
      /*contador de notas */
      let contador = $(".comentario").get();
      let contadorNotas = contador.length;      
      if (contadorNotas === 0) {
        $("#contador").html(" No tinenes ninguana nota guardada");
      } else if (contadorNotas === 1) {
        $("#contador").html("Tienes " + contadorNotas + " nota guardada");
      } else {
        $("#contador").html("Tienes " + contadorNotas + " notas guardadas");
      }
    });
  });
  /*ocultar y mostrar realizadas y no realizadas */
  $("#realizadas").on("click", function () {
    $("input[type=checkbox]:checked").each(function () {
      $(this).parent().css('display', 'none');
    });
    $("input[type=checkbox]:not(:checked)").each(function () {
      $(this).parent().css('display', 'block');
    });
    /* contador no realizadas */
    let revisar = $("input[type=checkbox]:not(:checked)");
    for (let no = 0; no < revisar.length + 1; no++) {
      if (no === 0) {
        $("#contador").html("Ya completaste todas tus notas");
      } else if (no === 1) {
        $("#contador").html("Tienes " + no + " nota sin realizar");
      } else if (no > 1) {
        $("#contador").html("Tienes " + no + " notas sin realizar");
      }
    }
  });
  $("#noRealizadas").on("click", function () {
    $("input[type=checkbox]:not(:checked)").each(function () {
      $(this).parent().css('display', 'none');
    });
    $("input[type=checkbox]:checked").each(function () {
      $(this).parent().css('display', 'block');
    });
    /*contador realizadas*/
    let revisar = $("input[type=checkbox]:checked");
    for (let no = 0; no < revisar.length + 1; no++) {
      if (no === 0) {
        $("#contador").html("No haz completado ninguna nota");
      } else if (no === 1) {
        $("#contador").html("Tienes " + no + " nota realizada");
      } else if (no > 1) {
        $("#contador").html("Tienes " + no + " notas realizadas");
      }
    }
  });
  $('#todas').on('click', function () {
    $('.tachado').parent().css('display', 'block');
    let contador = $(".comentario").get();
    let contadorNotas = contador.length;
    if (contadorNotas === 0) {
      $("#contador").html(" No tinenes ninguana nota guardada");
    } else if (contadorNotas === 1) {
      $("#contador").html("Tienes " + contadorNotas + " nota guardada");
    } else {
      $("#contador").html("Tienes " + contadorNotas + " notas guardadas");
    }
  });
  $('#Eliminar_Realizadas').on('click', function () {
    $('input[type=checkbox]:checked').each(function () {
      $(this).parent().remove();    
    });
    let contador = $(".comentario").get();
    let contadorNotas = contador.length;
    if (contadorNotas === 0) {
      $("#contador").html(" No tinenes ninguana nota guardada");
    } else if (contadorNotas === 1) {
      $("#contador").html("Tienes " + contadorNotas + " nota guardada");
    } else {
      $("#contador").html("Tienes " + contadorNotas + " notas guardadas");
    }
  });
});

