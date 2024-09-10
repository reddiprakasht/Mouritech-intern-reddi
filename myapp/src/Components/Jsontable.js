import Data from "../Data.json"

import { useState } from "react"

import "../style.css"

const Jsontable = () => {

    const [state, setState] = useState(Data)
    return (
        <>
            <div>
                <h1>React</h1>

                <table className=" table table-bordered border border-1 text-center tddd">

                    {state.map((x) => {
                        return <tr>
                            <td>{x.name}</td>
                            <td>{x.place}</td>
                            <td>{x.email}</td>
                        </tr>
                    })}


                </table>
            </div>

        </>


    )
}

export default Jsontable
