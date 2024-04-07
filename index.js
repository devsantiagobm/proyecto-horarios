import express from "express";
import cors from "cors"

const app = express();

app.use(cors())

const cosmetologos = [
    {
        id: 1,
        nombre: "Camila Rodríguez",
        avatar: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        horarios: [
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "09:00",
                horaFin: "11:00",
                paciente: "Juan Pérez",
                servicio: "Maquillaje"
            },
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "13:00",
                horaFin: "15:00",
                paciente: "María García",
                servicio: "Tratamiento facial"
            }
        ]
    },
    {
        id: 2,
        nombre: "Sofía Gómez",
        avatar: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        horarios: [
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "10:00",
                horaFin: "12:00",
                paciente: "Luisa Martínez",
                servicio: "Depilación"
            },
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "14:00",
                horaFin: "16:00",
                paciente: "Andrés Pérez",
                servicio: "Masaje"
            }
        ]
    },
    {
        id: 3,
        nombre: "Valentina Martínez",
        avatar: "https://images.pexels.com/photos/1085517/pexels-photo-1085517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        horarios: [
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "11:00",
                horaFin: "13:00",
                paciente: "Ana Ramírez",
                servicio: "Manicura"
            },
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "15:00",
                horaFin: "17:00",
                paciente: "Carlos Gómez",
                servicio: "Pedicura"
            }
        ]
    },
    {
        id: 4,
        nombre: "Mateo López",
        avatar: "https://images.pexels.com/photos/1085517/pexels-photo-1085517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        horarios: [
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "12:00",
                horaFin: "14:00",
                paciente: "Laura Ramírez",
                servicio: "Corte de pelo"
            },
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "16:00",
                horaFin: "18:00",
                paciente: "Manuel Gutiérrez",
                servicio: "Peinado"
            }
        ]
    },
    {
        id: 5,
        nombre: "Juan Pablo Ramírez",
        avatar: "https://images.pexels.com/photos/2531093/pexels-photo-2531093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        horarios: [
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "13:00",
                horaFin: "15:00",
                paciente: "Daniela López",
                servicio: "Depilación"
            },
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "17:00",
                horaFin: "19:00",
                paciente: "María Martínez",
                servicio: "Tratamiento facial"
            }
        ]
    },
    {
        id: 6,
        nombre: "Daniela Sánchez",
        avatar: "https://images.pexels.com/photos/1334945/pexels-photo-1334945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        horarios: [
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "14:00",
                horaFin: "16:00",
                paciente: "Andrea Gómez",
                servicio: "Maquillaje"
            },
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "18:00",
                horaFin: "20:00",
                paciente: "Javier Pérez",
                servicio: "Depilación"
            }
        ]
    },
    {
        id: 7,
        nombre: "Esteban Ríos",
        avatar: "https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        horarios: [
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "15:00",
                horaFin: "17:00",
                paciente: "Sandra Ramírez",
                servicio: "Pedicura"
            },
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "19:00",
                horaFin: "21:00",
                paciente: "Luis Gómez",
                servicio: "Tratamiento facial"
            }
        ]
    },
    {
        id: 8,
        nombre: "Valentina Mosquera Ríos",
        avatar: "https://images.pexels.com/photos/6953586/pexels-photo-6953586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=19",
        horarios: [
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "16:00",
                horaFin: "18:00",
                paciente: "Pedro Gutiérrez",
                servicio: "Masaje"
            },
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "20:00",
                horaFin: "22:00",
                paciente: "Ana López",
                servicio: "Manicura"
            }
        ]
    },
    {
        id: 9,
        nombre: "Andrés Felipe Morales",
        avatar: "https://images.pexels.com/photos/8487441/pexels-photo-8487441.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        horarios: [
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "17:00",
                horaFin: "19:00",
                paciente: "María Rodríguez",
                servicio: "Corte de pelo"
            },
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "21:00",
                horaFin: "23:00",
                paciente: "Carlos Martínez",
                servicio: "Peinado"
            }
        ]
    },
    {
        id: 10,
        nombre: "Laura Herrera",
        avatar: "https://images.pexels.com/photos/6953586/pexels-photo-6953586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=19",
        horarios: [
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "18:00",
                horaFin: "20:00",
                paciente: "Jorge Ramírez",
                servicio: "Pedicura"
            },
            {
                fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
                horaInicio: "22:00",
                horaFin: "24:00",
                paciente: "María Pérez",
                servicio: "Tratamiento facial"
            }
        ]
    }
];


app.use("/cosmetologos/horario/:id", function (req, res) {
    const { id } = req.params;
    const cosmetologo = cosmetologos.find((cosmetologo) => cosmetologo.id == id);

    if (!cosmetologo) return res.status(400).json({ mensaje: "Este cosmetologo no existe" })

    return res.json({ cosmetologo })
})

app.use("/cosmetologos", function (req, res) {
    const cosmetologosSinHorario = cosmetologos.map(({ horarios, ...cosmetologo }) => ({ ...cosmetologo }))
    return res.json({ cosmetologos: cosmetologosSinHorario });
})



app.listen(process.env.PORT ?? 8000, function () {
    console.log("Servidor corriendo")
});