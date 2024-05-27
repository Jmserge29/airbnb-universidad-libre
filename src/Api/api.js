import axios from "axios"
import config from "../../config";
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie';
const cookies = new Cookies( { path: '/' });

// CHECK ✅
export async function saveUser(name, email, password, identification) {
    try {
        console.log('h')
        await axios.post(`${config.BACKEND_API_URL}/user/create-user`, {
            "nombre": name,
            "email": email,
            "contraseña": password,
            "cedula": identification,
        }).then((res) => {
            console.log("api: ", res.data)
            if(res.status ==201) {
                Swal.fire({
                    title: "Se ha registrado exitosamente!",
                    html: `Esperamos que tengas una buena experiencia en nuestro Software <b>${name}</b>!`,
                    icon: "success"
                });
            }
            
            cookies.set(`${config.SECRET_COOKIE}`, JSON.stringify(res.data));
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);

        }).catch((err) => {
            // console.log("A Error has been in the request ",err.response.data.error)
            Swal.fire({
                icon: "error",
                title: "Ha ocurrido un error...",
                html: `Esperamos darte más detalles al respecto! <br><b>${err.response.data.error}</b>`,
            });
            
        })
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export async function getAllUsers() {
    try {
        const users = await axios.get(`${config.BACKEND_API_URL}/user/get-users`).then((res) => {
            console.log(res.data)
            return res.data
        }).catch((err) => {
            console.log("A Error has been in the request ",err)
        })
        return users
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export async function signIn(email, password) {
    try {
        await axios.post(`${config.BACKEND_API_URL}/user/sign-in`, {
            email: email,
            password: password
        }).then((res) => {
            console.log("sign-in: ", res.data)
            if(res.status ==200) {
                Swal.fire({
                    title: "Autenticación Exitosa!",
                    html: `Bienvenido <b>${email}</b>!`,
                    icon: "success"
                });
            }
            cookies.set(`${config.SECRET_COOKIE}`, JSON.stringify(res.data.data));
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);

        }).catch((err) => {
            Swal.fire({
                icon: "error",
                title: "Ha ocurrido un error...",
                html: `El Sistema ha detectado un Error :<br><b>${err.response.data.error}</b>`,
            });
        })
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export async function createProperty({imageSrc,nombre,ubicacion,categoria,capacidad,valor,comodidades}) {
    try {
        // Obtener el cc_usuario de las cookies universales
        const usuario = cookies.get(`${config.SECRET_COOKIE}`);
        console.log(usuario.cedula)

        // Agregar el cc_usuario a los datos de la propiedad
        const cc_usuario = usuario.cedula;

        // Hacer la solicitud POST para crear la propiedad
        await axios.post(`${config.BACKEND_API_URL}/property/properties`, {
            picture: imageSrc,
            nombre: nombre,
            ubicacion: ubicacion,
            categoria: categoria,
            capacidad: capacidad,
            valor: valor,
            comodidades: comodidades,
            cc_usuario: cc_usuario
        }).then((res) => {
            console.log(res)
            Swal.fire({
                title: "Se ha creado la propiedad exitosamente!",
                html: `Esperamos sea una buena inversión y sea visible por muchos usuarios <b>${nombre}</b>!`,
                icon: "success"
            });
        }).catch((err) => {
            console.log(err)
        });
    } catch (error) {
        // Manejar errores
        console.error('Error al crear la propiedad:', error);
        throw error;
    }
}


export async function getProperties () {
    try {
        const properties = await axios.get(`${config.BACKEND_API_URL}/property/properties`).then((res) => {
            console.log(res.data)
            return res.data
        }).catch((err) => {
            console.log("A Error has been in the request ",err)
        })
        return properties;
    } catch (error) {
        console.log(error)
    }
}

export async function getProp (id) {
    try {
        const properties = await axios.get(`${config.BACKEND_API_URL}/property/properties/${id}`).then((res) => {
            console.log(res.data)
            return res.data
        }).catch((err) => {
            console.log("A Error has been in the request ",err)
        })
        return properties;
    } catch (error) {
        console.log(error)
    }
}

export async function getReservations () {
    try {
        const reservations = await axios.get(`${config.BACKEND_API_URL}/reserve/`).then((res) => {
            console.log(res.data)
            return res.data
        }).catch((err) => {
            console.log("A Error has been in the request ",err)
        })
        return reservations;
    } catch (error) {
        console.log(error)
    }
}