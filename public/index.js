const template = Handlebars.compile(`
<ul>
    <li><span style='color: red'>{{nombre}}</span></li>
    <li><span class='verde'>{{apellido}}</span></li>
    <li>{{edad}}</li>
    <li>{{email}}</li>
    <li>{{telefono}}</li>
</ul>
`)

const html = template({
    nombre: "Leo",
    apellido: "Messi",
    edad: 34,
    email: "leo@coderhouse.com",
    telefono: "123456789"
})

document.getElementById('data').innerHTML = html