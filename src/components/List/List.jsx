import React, { useContext } from 'react';
import FormContext from '../../common/formContext'
import i18n from '../../common/i18n.js'

const List = ({submissions}) => {
    return (
        submissions.length > 0
            ? <Table elements={submissions} />
            : <Emtpy />
    )
}
const Emtpy = () => <h1>{i18n.EMPTY}</h1>

const Table = ({elements}) => elements.map( (el, ix) => (
    <table key={ix}>
        <thead>
            <tr>
                <th colSpan="2">Submission {ix+1}</th>
            </tr>
        </thead>
        <tbody>
            <Row {...el} />
        </tbody>
    </table>
))

const Row = element => Object.keys(element).map( (key, ix) => (
    <tr key={ix}>
        <td>{key}</td>
        <td>{element[key]}</td>
    </tr>
))


export default () => {
    const { state: { submissions } } = useContext(FormContext)

    return (
        <List submissions={submissions}/>
    )
}
