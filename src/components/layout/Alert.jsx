import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"

function Alert() {

  const {alert} = useContext(AlertContext)

  return (
    <div className="container text-center text-danger">
      {alert !== null && (
        <p>
          <h4><strong>{alert.msg}</strong></h4>
        </p>
      )}
    </div>
  )
}

export default Alert