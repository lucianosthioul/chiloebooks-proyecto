"# chiloebooks" 

- **Instala Tailwind CSS.**
Usa este comando en el terminal:
npm install tailwindcss @tailwindcss/cli

- **Crea un archivo input.css.**

- **Importa Tailwind CSS en tu input.css.**
@import "tailwindcss";

- **Crea un package.json.**

- **Modifica los scripts de package.json con esto. (Dependiendo donde ubiques los archivos input y output)**
"scripts": {
    "dev": "tailwindcss -i ./input/input.css -o ./salida/output.css --watch",
    "build": "tailwindcss -i ./input/input.css -o ./salida/output.css --minify"
  },
- **Empieza a usar Tailwind en tu HTML, añade este comando al head, dependiendo donde tengas ubicado el output.css.**
  `<link href="/salida/output.css" rel="stylesheet">`

- **Estructura de proyecto sugerida.**
tu-proyecto/
├── input/
│   └── input.css
├── salida/
│   └── output.css
├── public/
│   └── assets/
│       └── css/
│       └── img/
│       └── js/
│   └── index.html
└── package.json