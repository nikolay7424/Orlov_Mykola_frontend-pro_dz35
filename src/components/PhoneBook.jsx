import PropTypes from "prop-types"
import Dialog from "./Dialog"

import { useNavigate } from "react-router-dom"

PhoneBook.propTypes = {
    userArr: PropTypes.array.isRequired,
    setUserArr: PropTypes.func.isRequired,
    userIndex: PropTypes.number.isRequired,
    setUserIndex: PropTypes.func.isRequired,
}

function PhoneBook(props) {
    const navigate = useNavigate()

    function openModal(index) {
        const modal = document.querySelector("dialog")
        modal.show()
        props.userIndex = index
    }

    function deleteNumber(index) {
        const modal = document.querySelector("dialog")
        modal.close()
        props.setUserArr(
            props.userArr.filter((user) => user != props.userArr[index])
        )
    }

    function editContact(index) {
        props.setUserIndex(index)
        navigate(`/edit/${index}`)
    }

    return (
        <div>
            <Dialog deleteNumber={deleteNumber} userIndex={props.userIndex} />
            <table>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone number</th>
                    <th>Actions</th>
                </tr>
                {props.userArr.map((user, index) => (
                    <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.phone}</td>
                        <td className="button-wrapper">
                            <button
                                onClick={() => editContact(index)}
                                className="btn-yellow"
                            >
                                edit
                            </button>
                            <button
                                onClick={() => openModal(index)}
                                className="btn-red"
                            >
                                delete
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default PhoneBook
