import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useAppDispatch, useAppSelector } from "../app/hook"
import { increment, selectCount } from "../slice/todo"

export default function Title() {
    const number = useAppSelector(selectCount)
    const dispatch = useAppDispatch()

    const addNumber = () => {
        dispatch(increment())
    }

    useEffect(() => {
        console.log(number)
        dispatch(increment)
    }, [number])

    return (
        <>
            {number}
            <button onClick={() => addNumber()}>Add</button>
        </>
    )
}