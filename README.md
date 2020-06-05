# mascotas_react_common

Son componentes básicos de la aplicación.

## Esta librería se incluye en package.json como

```bash
    "mascotas_react_common": "git+https://github.com/nmarsollier/mascotas_react_common.git#master",
```

## Cuando queramos usar la version local

en modo desarrollador, ejecutamos en mascotas_react_app :

```bash
    npm link ../mascotas_react_common
```

Desarrollamos normalmente en la librería, cuando tenemos los cambios listos para probar ejecutamos en la carpeta de la librería

```bash
    npm run build
```

## Cuando dejemos de usarlo

```bash
    npm unlink ../mascotas_react_common
```
