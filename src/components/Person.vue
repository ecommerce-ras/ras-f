<template lang="es">

<br/>
    <!-- As a heading -->
<div class="container">


  <nav class="navbar bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Registro Personas</span>
  </div>
</nav>


<!-- ----------------Form--------------- -->

<br/>

<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-6">
    <label for="validationCustom01" class="form-label">Nombres</label>
    <input type="text" class="form-control" id="validationCustom01" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom02" class="form-label">Apellidos</label>
    <input type="text" class="form-control" id="validationCustom02" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>




 <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Tipo documento</label>
        <select class="form-select" id="validationCustom04" required>

        
        <option selected disabled value="">Escoger...</option>
            <option value="1">CC</option>
            <option value="2">CE</option> 
            <option value="2">PS</option>  
        </select>
        <div class="invalid-feedback">
        Please select a valid tipe id document.
        </div>    
  </div>


  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Número de documento</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid document.
    </div>
  </div>

  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Estado</label>
    <select class="form-select" id="validationCustom04" required>

    
      <option selected disabled>...</option>
        <option value="1">Activo</option>
        <option value="2">Inactivo</option> 
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>

    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>

            

 
  <div class="col-md-8">
    <label for="validationCustom01" class="form-label">Dirección</label>
    <input type="text" class="form-control" id="validationCustom01" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Telefono</label>
    <input type="text" class="form-control" id="validationCustom02" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
   
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Acepto terminos y condiciones.
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Guardar</button>
  </div>
</form>

<br/>

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Registro de Usuarios
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        
        <!-- Traer nombre id persona -->       

        <form class="row g-3"> 

        <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Personas</label>
                <select class="form-select" id="inputGroupSelect01">                        
                        <option selected disabled>...</option>
                        <option value="1">One</option>
                 </select>
        </div>   

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">URL Avatar</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
            </div>  



    <form class="row gx-3 gy-2 align-items-center">
    
    <div class="col-sm-6">
        <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
        <div class="input-group">
        <div class="input-group-text">@</div>
        <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username">
        </div>

        
    </div>



    <div class="col-sm-6">
        <label class="visually-hidden" for="specificSizeSelect">Roles</label>
        <select class="form-select" id="specificSizeSelect">
        <option selected disabled>Seleccione el Rol</option>
        
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
    </div>
    
            

                    <div class="col-auto">
                        <label for="staticEmail2" class="visually-hidden">Email</label>
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
                    </div>
                    <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">Password</label>
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
                    </div> 

                    <div class="col-auto">
                        <label class="visually-hidden" for="specificSizeSelect">Estado</label>
                        <select class="form-select" id="specificSizeSelect">
                        <option selected disabled>Estado...</option>
                        
                        <option value="1">One</option>
                        <option value="2">Two</option>

                        </select>
                     </div>            

                    

                    </form>

                   
            </form>   

             <br/>

              <div class="row justify-content-end">
    <div class="col-2">
      <button type="submit" class="btn btn-primary mb-6">Crear</button>
    </div>
    <div class="col-3">
      <button type="submit" class="btn btn-light">Lista Usuarios</button>
    </div>
  </div>


        <!-- ---------------------------- -->

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Registro Roles
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      
       <!-- ------------form------------- -->

    <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
            <label for="validationCustom01" class="form-label">Nombre Rol</label>
            <input type="text" class="form-control" id="validationCustom01" required>
            <div class="valid-feedback">
            Looks good!
            </div>
        </div>
        
        <div class="col-md-4">
            <label for="validationCustom04" class="form-label">Estado</label>
            <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Cambiar...</option>
            <option>...</option>
            </select>
            <div class="invalid-feedback">
            Please select a valid state.
            </div>
        </div>
            
        <div>
        
            <button class="btn btn-primary col-md-4" type="submit">Guardar</button>
        
            <div class="valid-feedback">
            Looks good!
        
        </div>
        </div>
        
        </form>

       <!-- --------------- -->
      </div>
    </div>
  </div>
  
</div>


</div>




</template>
<script>
export default {
    name: 'Person'
    
}
</script>
<style lang="es">
    
</style>