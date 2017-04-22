# Ejemplo-TypeScript
Ejemplo de utilización de TypeScript usando Visual Studio Code

Dia 1...

Github Guides: https://guides.github.com/

TypeScript Tutorials – Setup VS Code to Write, Run & Debug Typescript: http://www.mithunvp.com/typescript-tutorials-setting-visual-studio-code/

  Hay que tener cuidado a la hora de actulizar el PATH con el node.js y con el TypeScript. En el video además activa la opción de "GUARDAR AL COMPILAR" modificando el archivo Tsconfig.json.
  


Visual Studio code y Typescript: Cómo usarlos juntos?: https://channel9.msdn.com/Blogs/MVP-VisualStudio-Dev/Visual-Studio-code-y-Typescript-Cmo-usarlos-juntos

Editing TypeScript: https://code.visualstudio.com/docs/languages/typescript(editado)

Hacemos un ejemplo con un .HTML 

```html
<title>TypeScript HTML App</title>
<script src="index.js"></script>
 
 
<div id="content">
    <input id="nombreUsuario">
    <button onclick="saluda();">Saluda</button>
    <br>
    <label id="lblSaludo"></label>
</div>
```

y con un .TS

```ts
function saluda()
{
    var usuario = (document.getElementById("nombreUsuario")).value;
    (document.getElementById("lblSaludo")).textContent = "Hola " + usuario;
};
```
