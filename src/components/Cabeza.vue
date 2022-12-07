<template lang="es">
    <div class='container'>

    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL9JREFUSEvtlMENwjAMRb8nYAQYgRWYgGsUOLAJdBMOOfgGI7BKN2CCgoJwVaWqvlIU1ENyi2z/Fzu2BYWPFNbH/wFH514xq6D6gbO7934rXXcTYAPgEVR3w6qMMmCCqf3g3F2AvYnaw+z+M8CAFUA/fXklYgOYtnFOBk8AKwJog2rs+35OcgAXAGcCaIJq9MsHfINi8AnAOgG1AK4mPhswFE0ndyqzKT+67CqglqhvqtldxFYGs9M/YALMXhzwBhSkzxmXEauaAAAAAElFTkSuQmCC"/> - RAS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">

        
          <a class="nav-link active" aria-current="page" href="#">Productos</a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Carrito</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Administración
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Agregar servicios</a></li>
            <li><a class="dropdown-item" href="#">Cotabilidad</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Admin Users</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link"></a>
        </li>
      </ul>

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar servicio" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>

      <!-- -------------login----------------- -->
  <form class="mb-12">
              <div class="dropdown">
                <button type="button" class="btn btn-secundary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  Login
                </button>
                <form class="dropdown-menu p-4">
                  <div class="mb-4">
                    <label for="exampleDropdownFormEmail2" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
                  </div>
                  <div class="mb-4">
                    <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
                  </div>
                  <div class="mb-4">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                      <label class="form-check-label" for="dropdownCheck2">
                        Recordarme
                      </label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
              </div>

              </form>

      <!-- ------------------------------------ -->

    </div>

  </div>

</nav>   
    
    </div>
</template>
<script>
export default {
    name: 'Cabeza'
}
</script>
<style lang="es">
    
</style>