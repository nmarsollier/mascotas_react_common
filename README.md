# Librería de ejemplo mascotas_react_common

Para mostrar como modularizar y usar librerías propias.
Notar los exports en index.tsx

## Esta librería se incluye en package.json como

```bash
    "mascotas_react_common": "git+https://github.com/nmarsollier/mascotas_react_common.git#master",
```

## Cuando queramos usar la version local

en modo desarrollador, ejecutamos en mascotas_react :

```bash
    npm link ../mascotas_react_common
```

Desarrollamos normalmente en la libreria, cuando tenemos los cambios listos para probar ejecutamos en la carpeta de la libreria

```bash
    npm run build
```

## Cuando dejemos de usarlo

```bash
    npm unlink ../mascotas_react_common
```
