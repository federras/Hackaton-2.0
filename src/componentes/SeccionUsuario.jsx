import './SeccionUsuario.css'

const UserInexistente = () => {
    return(
        <section className='seccion-usuario'>
            <span>Usuario Inexistente</span>
        </section>
    )
}

const UserInquilino = ({user}) => {
    const pagarExpensa = () => {
        console.log("pagar expensa")
    }

    return (
        <section className="seccion-usuario">
            <span className='user'>Welcome {user._name}</span>
            <span className='user'>
                Monto: {user._amount}
            </span>
            <button onClick={pagarExpensa}>
                Pay Expenses
            </button> 
        </section>
    )
}


const UserAdmin = ({user}) => {
    const cobrarSueldo = () => {
        console.log("Cobrar Sueldo")
    }

    return (
        <section className="seccion-usuario">
            <span className='user'>Welcome Admin {user._name}</span>
            <span className='user'>
                Balance: {user._amount}
            </span>
            <button onClick={cobrarSueldo}>
                Add Tenant
            </button> 
            <button onClick={cobrarSueldo}>
                Add Employeed
            </button> 
            <button onClick={cobrarSueldo}>
                Pay Salary
            </button> 
        </section>
    )
}


const SeccionUsuario = ({address}) => {
   
    const users = require('../users/users.json')
    let user = users.find((user) => {
        return user._userAddress === address;
    })

    if (user) {
        // TODO: ver que rol tiene este user
        user.rol = "inquilino";
    }
   
    return (
        <section>
            {!user && <UserInexistente />}
            {(user && user.rol === "inquilino") && <UserInquilino user={user}/>}
            {(user && user.rol === "admin") && <UserAdmin user={user}/>}

         </section>
   )
     
}

export { SeccionUsuario }