import React, { useContext } from 'react';
import FormContext from '../../common/formContext'
import i18n from '../../common/i18n.js'
import { array } from 'prop-types';
import style from './List.module.scss';

const List = ({submissions}) => {
    return (
        submissions.length > 0
            ? <Table elements={submissions} />
            : <Emtpy />
    )
}
const Emtpy = () => <h1>{i18n.EMPTY}</h1>

const Table = ({elements}) => elements.map( (element, ix) => (
    <table className={style.table} key={ix}>
        <thead>
            <tr>
                <th className={style.th} colSpan="2">Submission {ix+1}</th>
            </tr>
        </thead>
        <tbody>
            <Row {...element} />
        </tbody>
    </table>
))

const Row = element => Object.keys(element).map( (key, ix) => (
    <tr key={ix}>
        <td className={style.td}>{key}</td>
        <td className={style.td}>{element[key]}</td>
    </tr>
))

List.propTypes = {
    submissions: array
}

List.defaultProps = {
    submissions: []
}

export default () => {
    const { state: { submissions } } = useContext(FormContext)

    return (
        <List submissions={submissions}/>
    )
}
